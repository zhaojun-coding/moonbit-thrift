import fs from 'node:fs/promises';
import path from 'node:path';
import net from 'node:net';
import tls from 'node:tls';
import {schema_json,transport_json} from '../web/engine.mjs';

export class ThriftError extends Error {
  constructor(message,code='THRIFT_ERROR',details){super(message);this.name='ThriftError';this.code=code;if(details!==undefined)this.details=details;}
}
export class DeclaredException extends ThriftError {
  constructor(field,value){super(`Declared exception: ${field}`,'DECLARED_EXCEPTION',value);this.field=field;}
}
export class ApplicationException extends ThriftError {
  constructor(type,message){super(message,'APPLICATION_EXCEPTION');this.type=type;}
}
const json=value=>JSON.stringify(value,(_,v)=>typeof v==='bigint'?v.toString():v);
function bridge(fn,request){const result=JSON.parse(fn(json(request)));if(!result.ok)throw new ThriftError(result.error,'CORE_ERROR');return result;}
const schemaCall=request=>bridge(schema_json,request);
const transportCall=request=>bridge(transport_json,request);
const protocolOf=value=>{const result=value??'binary';if(!['binary','compact','legacy'].includes(result))throw new TypeError('protocol must be binary, compact or legacy');return result;};
function positive(value,fallback,name,max=2147483647){const n=value??fallback;if(!Number.isInteger(n)||n<1||n>max)throw new RangeError(`${name} must be an integer in 1..${max}`);return n;}
const aborted=()=>new ThriftError('Operation aborted','ABORT_ERR');
const slashes=name=>name.replaceAll('\\','/');

export class Schema {
  #id;
  constructor({root='main.thrift',sources,includePaths=[]}){
    if(!sources||typeof sources!=='object'||Array.isArray(sources))throw new TypeError('sources must map filenames to IDL text');
    for(const value of Object.values(sources))if(typeof value!=='string')throw new TypeError('IDL source must be text');
    this.root=root;this.sources=Object.freeze({...sources});this.includePaths=Object.freeze([...includePaths]);
    const result=schemaCall({action:'compile',root,sources,includePaths});this.#id=result.schema;this.description=result.description;this.warnings=Object.freeze(result.warnings);
  }
  get handle(){if(this.#id===undefined)throw new ThriftError('Schema is closed','CLOSED');return this.#id;}
  encode(type,value,protocol='binary'){return Buffer.from(schemaCall({action:'encode',schema:this.handle,type,value,protocol:protocolOf(protocol)}).result,'hex');}
  decode(type,bytes,protocol='binary'){return schemaCall({action:'decode',schema:this.handle,type,hex:Buffer.from(bytes).toString('hex'),protocol:protocolOf(protocol)}).result;}
  makeCall(service,name,args,sequence=0,protocol='binary'){return Buffer.from(schemaCall({action:'call',schema:this.handle,service,name,arguments:args,sequence,protocol:protocolOf(protocol)}).result,'hex');}
  readCall(service,bytes,protocol='binary'){return schemaCall({action:'readCall',schema:this.handle,service,hex:Buffer.from(bytes).toString('hex'),protocol:protocolOf(protocol)}).result;}
  makeReply(service,name,sequence,outcome,protocol='binary'){return Buffer.from(schemaCall({action:'reply',schema:this.handle,service,name,sequence,outcome,protocol:protocolOf(protocol)}).result,'hex');}
  readReply(service,name,bytes,protocol='binary'){return schemaCall({action:'readReply',schema:this.handle,service,name,hex:Buffer.from(bytes).toString('hex'),protocol:protocolOf(protocol)}).result;}
  close(){if(this.#id!==undefined){schemaCall({action:'close',schema:this.#id});this.#id=undefined;}}
}

export async function loadSchema(filename,{includePaths=[]}={}){
  const root=path.resolve(filename),directories=includePaths.map(p=>path.resolve(p)),sources=Object.create(null),active=new Set(),loaded=new Set();let total=0;
  async function visit(name,depth){
    if(Object.hasOwn(sources,slashes(name)))return;
    if(depth>32||loaded.size>=128)throw new ThriftError('IDL include depth/count limit','LIMIT');
    const real=await fs.realpath(name);if(active.has(real))throw new ThriftError('Circular IDL include','SCHEMA_ERROR');
    const stat=await fs.stat(real);if(!stat.isFile()||stat.size>4000000)throw new ThriftError('IDL source byte limit','LIMIT');
    const bytes=await fs.readFile(real);total+=bytes.length;if(total>16000000)throw new ThriftError('IDL aggregate byte limit','LIMIT');
    const text=new TextDecoder('utf-8',{fatal:true,ignoreBOM:true}).decode(bytes);
    const dependencies=schemaCall({action:'dependencies',name:slashes(name),source:text}).includes;
    active.add(real);loaded.add(real);
    try{
      for(const dependency of dependencies){
        const candidates=path.isAbsolute(dependency)?[path.resolve(dependency)]:[path.resolve(path.dirname(name),dependency),...directories.map(d=>path.resolve(d,dependency))];
        let found;
        for(const candidate of candidates){try{if((await fs.stat(candidate)).isFile()){found=candidate;break}}catch(error){if(error.code!=='ENOENT'&&error.code!=='ENOTDIR')throw error;}}
        if(found)await visit(found,depth+1);
      }
      sources[slashes(name)]=text;
    }finally{active.delete(real);}
  }
  await visit(root,0);return new Schema({root:slashes(root),sources,includePaths:directories.map(slashes)});
}

export class RpcClient {
  #socket;#id;#pending=new Map();#state='connecting';#ready;#readyResolve;#readyReject;#closed;#closedResolve;#timer;#closeTimer;#cleanupConnect=()=>{};
  constructor(options){
    if(!(options.schema instanceof Schema))throw new TypeError('schema must be a Schema');
    this.protocol=protocolOf(options.protocol);this.service=options.service;this.error=undefined;
    this.timeoutMs=positive(options.timeoutMs,5000,'timeoutMs');this.maxPending=positive(options.maxPending,128,'maxPending',1024);this.maxQueuedBytes=positive(options.maxQueuedBytes,4*1024*1024,'maxQueuedBytes',64*1024*1024);
    const port=positive(options.port,undefined,'port',65535),host=options.host??'127.0.0.1';
    if(options.signal?.aborted)throw aborted();
    this.#id=transportCall({action:'clientOpen',schema:options.schema.handle,service:this.service,protocol:this.protocol,multiplex:options.multiplex}).transport;
    this.#ready=new Promise((resolve,reject)=>{this.#readyResolve=resolve;this.#readyReject=reject;});
    this.#closed=new Promise(resolve=>{this.#closedResolve=resolve;});
    try{
      this.#socket=options.tls?tls.connect({...options.tls,host,port,rejectUnauthorized:options.tls.rejectUnauthorized??true,servername:options.tls.servername??(net.isIP(host)?undefined:host)}):net.connect({host,port});
      this.#socket.setNoDelay(true);
      this.#socket.on('error',error=>this.#fail(error));
      this.#socket.on('data',chunk=>this.#receive(chunk));
      this.#socket.on('end',()=>{try{transportCall({action:'clientFinish',transport:this.#id});this.#state='closing';this.#socket.end();}catch(error){this.#fail(error);}});
      this.#socket.on('close',()=>{if(this.#state!=='closed')this.#fail(this.#state==='closing'&&!this.#pending.size?undefined:new ThriftError('Connection closed','CONNECTION_CLOSED'));this.#closedResolve();});
      this.#socket.once(options.tls?'secureConnect':'connect',()=>{
        if(this.#state!=='connecting')return;clearTimeout(this.#timer);this.#cleanupConnect();this.#state='open';this.#readyResolve(this);
      });
      this.#timer=setTimeout(()=>this.#fail(new ThriftError('Connection timed out','CONNECT_TIMEOUT')),positive(options.connectTimeoutMs,5000,'connectTimeoutMs'));
      if(options.signal){const onAbort=()=>this.#fail(aborted());options.signal.addEventListener('abort',onAbort,{once:true});this.#cleanupConnect=()=>options.signal.removeEventListener('abort',onAbort);}
    }catch(error){this.#fail(error);this.#closedResolve();}
  }
  static async connect(options){const client=new RpcClient(options);return client.#ready;}
  get pendingCount(){return this.#pending.size;}
  get closed(){return this.#state==='closed';}
  async call(name,args={},options={}){
    await this.#ready;
    if(this.#state!=='open')throw this.error??new ThriftError('Client is closing','CLOSED');
    if(options.signal?.aborted)throw aborted();
    if(this.#pending.size>=this.maxPending)throw new ThriftError('Pending RPC limit','BACKPRESSURE');
    if(this.#socket.writableLength>=this.maxQueuedBytes)throw new ThriftError('Write queue limit','BACKPRESSURE');
    const timeout=positive(options.timeoutMs,this.timeoutMs,'timeoutMs');
    const request=transportCall({action:'clientCall',transport:this.#id,name,arguments:args}).result;
    const bytes=Buffer.from(request.hex,'hex');
    if(this.#socket.writableLength+bytes.length>this.maxQueuedBytes){const error=new ThriftError('Encoded request exceeds remaining write queue','BACKPRESSURE');this.#fail(error);throw error;}
    return new Promise((resolve,reject)=>{
      const entry={resolve,reject,cleanup:()=>{clearTimeout(entry.timer);if(entry.onAbort)options.signal.removeEventListener('abort',entry.onAbort);}};
      entry.timer=setTimeout(()=>this.#fail(new ThriftError(`RPC ${name} timed out`,'RPC_TIMEOUT')),timeout);
      if(options.signal){entry.onAbort=()=>this.#fail(aborted());options.signal.addEventListener('abort',entry.onAbort,{once:true});}
      this.#pending.set(request.sequence,entry);
      this.#socket.write(bytes,error=>{if(error)this.#fail(error);else if(request.oneway)this.#settle(request.sequence,undefined);});
    });
  }
  #settle(sequence,value,error){
    const entry=this.#pending.get(sequence);if(!entry)return;this.#pending.delete(sequence);entry.cleanup();if(error)entry.reject(error);else entry.resolve(value);
    if(this.#state==='closing'&&!this.#pending.size)this.#socket.end();
  }
  #receive(chunk){
    try{
      for(let offset=0;offset<chunk.length;offset+=65536){
        const responses=transportCall({action:'clientFeed',transport:this.#id,hex:chunk.subarray(offset,offset+65536).toString('hex')}).result;
        for(const response of responses){
          const outcome=response.outcome;
          if(outcome.kind==='declared')this.#settle(response.sequence,undefined,new DeclaredException(outcome.name,outcome.value));
          else if(outcome.kind==='application')this.#settle(response.sequence,undefined,new ApplicationException(outcome.code,outcome.message));
          else this.#settle(response.sequence,outcome.value);
        }
      }
    }catch(error){this.#fail(error);}
  }
  #fail(error){
    if(this.#state==='closed')return;const wasConnecting=this.#state==='connecting';this.#state='closed';this.error=error;
    clearTimeout(this.#timer);clearTimeout(this.#closeTimer);this.#cleanupConnect();
    if(wasConnecting)this.#readyReject(error??new ThriftError('Connection closed','CONNECTION_CLOSED'));
    for(const sequence of [...this.#pending.keys()])this.#settle(sequence,undefined,error);
    if(this.#id!==undefined){transportCall({action:'clientClose',transport:this.#id});this.#id=undefined;}
    this.#socket?.destroy();
  }
  async close({force=false,timeoutMs=5000}={}){
    if(this.#state==='closed')return this.#closed;
    if(force||this.#state==='connecting'){this.#fail(new ThriftError('Client closed','CLOSED'));return this.#closed;}
    this.#state='closing';this.#closeTimer=setTimeout(()=>this.#fail(new ThriftError('Client close timed out','CLOSE_TIMEOUT')),positive(timeoutMs,5000,'timeoutMs'));
    if(!this.#pending.size)this.#socket.end();return this.#closed;
  }
}

export async function connect(options){return RpcClient.connect(options);}

export async function serve(options){
  if(!(options.schema instanceof Schema))throw new TypeError('schema must be a Schema');
  const protocol=protocolOf(options.protocol),maxConcurrency=positive(options.maxConcurrency,64,'maxConcurrency',1024),maxQueuedBytes=positive(options.maxQueuedBytes,4*1024*1024,'maxQueuedBytes',64*1024*1024),idleTimeoutMs=positive(options.idleTimeoutMs,30000,'idleTimeoutMs');
  const service=options.service??'',services=options.services??{},connections=new Set(),rawSockets=new Set();let closing=false;
  // Validate the schema/service routes before opening a listening socket.
  const preflight=transportCall({action:'serverOpen',schema:options.schema.handle,protocol,service,services}).transport;
  transportCall({action:'serverClose',transport:preflight});
  const notify=error=>{if(options.onError){try{options.onError(error);}catch{}}};
  function accept(socket){
    if(closing){socket.destroy();return;}
    let id,active=0,ended=false,released=false;const controller=new AbortController();
    const connection={socket,beginClose:()=>{ended=true;if(!active)socket.end();}};connections.add(connection);socket.setNoDelay(true);
    const release=()=>{if(released)return;released=true;controller.abort();connections.delete(connection);if(id!==undefined)transportCall({action:'serverClose',transport:id});};
    const fail=error=>{notify(error);socket.destroy();release();};
    try{id=transportCall({action:'serverOpen',schema:options.schema.handle,protocol,service,services}).transport;}catch(error){fail(error);return;}
    socket.setTimeout(idleTimeoutMs,()=>fail(new ThriftError('Server connection idle timeout','IDLE_TIMEOUT')));
    const write=hex=>{
      if(released||socket.destroyed)return;
      const bytes=Buffer.from(hex,'hex');if(socket.writableLength+bytes.length>maxQueuedBytes){fail(new ThriftError('Server write queue limit','BACKPRESSURE'));return;}
      socket.write(bytes,error=>{if(error)fail(error);});
    };
    async function dispatch(call){
      if(call.error){if(call.reply)write(call.reply);return;}
      if(ended||active>=maxConcurrency){if(!call.oneway)write(transportCall({action:'serverException',transport:id,name:call.name,sequence:call.sequence,code:6,message:'Server concurrency limit or closing'}).result);return;}
      const handlers=call.route?options.handlers?.[call.route]:options.handlers;
      const handler=handlers&&Object.hasOwn(handlers,call.name)?handlers[call.name]:undefined;
      active++;
      try{
        if(typeof handler!=='function')throw new ApplicationException(1,`No handler for ${call.name}`);
        const value=await handler(call.arguments,{signal:controller.signal,peer:socket.remoteAddress,sequence:call.sequence,service:call.service,route:call.route});
        if(!call.oneway&&!released)write(transportCall({action:'serverReply',transport:id,service:call.service,name:call.name,sequence:call.sequence,outcome:{kind:'success',value:value??null}}).result);
      }catch(error){
        notify(error);
        if(!call.oneway&&!released){
          try{
            if(error instanceof DeclaredException)write(transportCall({action:'serverReply',transport:id,service:call.service,name:call.name,sequence:call.sequence,outcome:{kind:'declared',name:error.field,value:error.details}}).result);
            else write(transportCall({action:'serverException',transport:id,name:call.name,sequence:call.sequence,code:error instanceof ApplicationException?error.type:6,message:error.message??String(error)}).result);
          }catch(failure){fail(failure);}
        }
      }finally{active--;if(ended&&!active&&!released)socket.end();}
    }
    socket.on('data',chunk=>{
      try{for(let offset=0;offset<chunk.length&&!released;offset+=16384){const calls=transportCall({action:'serverFeed',transport:id,hex:chunk.subarray(offset,offset+16384).toString('hex')}).result;for(const call of calls)void dispatch(call).catch(fail);}}
      catch(error){fail(error);}
    });
    socket.on('end',()=>{try{transportCall({action:'serverFinish',transport:id});ended=true;if(!active)socket.end();}catch(error){fail(error);}});
    socket.on('error',fail);socket.on('close',release);
  }
  const server=options.tls?tls.createServer({...options.tls,allowHalfOpen:true,handshakeTimeout:options.tls.handshakeTimeout??5000},accept):net.createServer({allowHalfOpen:true},accept);
  // TLS sockets that fail before secureConnection never reach accept(). They
  // still count as listener connections and must participate in forced shutdown.
  server.on('connection',socket=>{rawSockets.add(socket);socket.once('close',()=>rawSockets.delete(socket));});
  server.maxConnections=positive(options.maxConnections,64,'maxConnections',128);server.on('tlsClientError',notify);
  const port=options.port??0;if(!Number.isInteger(port)||port<0||port>65535)throw new RangeError('port must be in 0..65535');
  await new Promise((resolve,reject)=>{const onError=error=>{server.off('listening',onListen);reject(error);};const onListen=()=>{server.off('error',onError);resolve();};server.once('error',onError);server.once('listening',onListen);server.listen({host:options.host??'127.0.0.1',port});});
  server.on('error',notify);
  let closePromise;
  return {
    address:server.address(),
    get connectionCount(){return connections.size;},
    close({timeoutMs=5000}={}){
      if(closePromise)return closePromise;const timeout=positive(timeoutMs,5000,'timeoutMs');closing=true;
      closePromise=new Promise(resolve=>{
        const timer=setTimeout(()=>{for(const connection of connections)connection.socket.destroy();for(const socket of rawSockets)socket.destroy();},timeout);
        server.close(()=>{clearTimeout(timer);resolve();});for(const connection of connections)connection.beginClose();
      });return closePromise;
    },
  };
}
