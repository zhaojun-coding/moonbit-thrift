import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import net from 'node:net';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {loadSchema,connect,serve,DeclaredException,ApplicationException} from './thrift.mjs';

const oracle=fileURLToPath(new URL('./network_oracle.py',import.meta.url));
const environment={...process.env,PYTHONPATH:process.env.THRIFT_REFERENCE_PYTHONPATH??process.env.PYTHONPATH,PYTHONUTF8:'1'};
function python(args,{ready=false,expectedFailure=false}={}){
  const child=spawn(process.env.PYTHON||'python',[oracle,...args],{env:environment,windowsHide:true,stdio:['pipe','pipe','pipe']});
  let stdout='',stderr='',resolved=false;const timer=setTimeout(()=>child.kill(),20000);
  let resolveReady,rejectReady;const readiness=new Promise((resolve,reject)=>{resolveReady=resolve;rejectReady=reject;});
  const done=new Promise((resolve,reject)=>{
    child.on('error',error=>{clearTimeout(timer);reject(error);rejectReady(error);});
    child.stdout.on('data',chunk=>{stdout+=chunk.toString('utf8');if(ready&&!resolved&&stdout.includes('\n')){try{const record=JSON.parse(stdout.split('\n')[0]);if(record.ready){resolved=true;clearTimeout(timer);resolveReady(record);}}catch{}}});
    child.stderr.on('data',chunk=>{stderr+=chunk.toString('utf8');});
    child.on('close',code=>{clearTimeout(timer);if(ready&&!resolved)rejectReady(Error(stderr||stdout||`Peer exited ${code}`));if(code!==0&&!expectedFailure)reject(Error(stderr||stdout||`Peer exited ${code}`));else resolve({code,stdout,stderr});});
  });
  // A server may fail before its ready message. Keep both promises handled.
  if(ready)done.catch(()=>{});else readiness.catch(()=>{});
  return {ready:readiness,done,stop:()=>{child.stdin.end('stop\n');const deadline=setTimeout(()=>child.kill(),5000);return done.finally(()=>clearTimeout(deadline));}};
}
const temporary=await fs.mkdtemp(path.join(os.tmpdir(),'moonbit-thrift-network-'));
const schema=await loadSchema(fileURLToPath(new URL('../examples/demo.thrift',import.meta.url)));
const results=[];let reference;
const check=(name)=>results.push({name,passed:true});
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
function handlers(){const notifications=[];return {
  ping:({message})=>{if(message==='__notifications__')return notifications.join('|');if(message==='application')throw new ApplicationException(9,'application failure');return message;},
  echo:({value})=>value,add:({a,b})=>BigInt(a)+BigInt(b),
  fail:({code})=>{throw new DeclaredException('problem',{code,message:'declared problem'});},
  notify:({message})=>{notifications.push(message);},slow:async({delayMs})=>{await pause(Math.max(0,Math.min(delayMs,1000)));return 'finished';},
};}
async function nodeClientChecks(client){
  assert.equal(await client.call('ping',{message:'中文🙂'}),'中文🙂');
  const data=Buffer.from(Array.from({length:256},(_,i)=>i)).toString('hex');
  const value={id:'-9223372036854775808',name:'record',data:{$binary:data},groups:[['x',[1,-2,2147483647]]],tag:'00112233-4455-6677-8899-aabbccddeeff',labels:['a','b'],state:9876,child:{id:'9223372036854775807'}};
  const result=await client.call('echo',{value});assert.equal(result.id,value.id);assert.deepEqual(result.data,value.data);assert.equal(result.tag,value.tag);assert.equal(result.child.id,value.child.id);assert.deepEqual(new Set(result.labels),new Set(value.labels));assert.equal(result.state,9876);
  assert.equal(await client.call('add',{a:'9223372036854775807',b:'-1'}),'9223372036854775806');
  await assert.rejects(client.call('fail',{code:42}),error=>error instanceof DeclaredException&&error.field==='problem'&&error.details.code===42&&error.details.message==='declared problem');
  await assert.rejects(client.call('ping',{message:'application'}),error=>error instanceof ApplicationException&&error.type===9&&error.message==='application failure');
  await client.call('notify',{message:'first'});await client.call('notify',{message:'second'});assert.equal(await client.call('ping',{message:'__notifications__'}),'first|second');
  assert.equal(await client.call('slow',{delayMs:1}),'finished');assert.equal(await client.call('ping',{message:'after errors'}),'after errors');
  assert.equal(client.pendingCount,0);
}
async function rawClosed(port,bytes){
  await new Promise((resolve,reject)=>{const socket=net.connect({host:'127.0.0.1',port});const timer=setTimeout(()=>{socket.destroy();reject(Error('Expected peer to close'));},2000);socket.on('error',()=>{});socket.on('connect',()=>socket.end(bytes));socket.on('close',()=>{clearTimeout(timer);resolve();});socket.resume();});
}
try{
  await python(['certificates','--certdir',temporary]).done;
  const [ca,cert,key,clientCert,clientKey]=await Promise.all(['ca.pem','server.pem','server.key','client.pem','client.key'].map(name=>fs.readFile(path.join(temporary,name))));
  for(const protocol of ['binary','compact','legacy'])for(const secure of [false,true])for(const multiplex of [false,true]){
    const mtls=secure&&multiplex,mode=`${protocol}/${secure?(mtls?'mTLS':'TLS'):'TCP'}/${multiplex?'multiplex':'plain'}`;
    const flags=['--protocol',protocol,...(secure?['--tls','--certdir',temporary]:[]),...(mtls?['--mtls']:[]),...(multiplex?['--multiplex']:[])];
    const peer=python(['server',...flags],{ready:true});let client;
    try{
      const ready=await peer.ready;reference={runtime:ready.runtime,compiler:ready.compiler,compilerSha256:ready.compilerSha256};
      client=await connect({schema,service:'Records',protocol,port:ready.ready,multiplex:multiplex?'records':undefined,tls:secure?{ca,servername:'localhost',...(mtls?{cert:clientCert,key:clientKey}:{})}:undefined});
      await nodeClientChecks(client);await client.close();assert.equal(client.error,undefined);check(`MoonBit/Node client -> Apache generated Python server: ${mode} (8 checks)`);
    }finally{await client?.close({force:true});await peer.stop();}
    const h=handlers(),server=await serve({schema,service:multiplex?undefined:'Records',services:multiplex?{records:'Records'}:undefined,handlers:multiplex?{records:h}:h,protocol,tls:secure?{ca,cert,key,requestCert:mtls,rejectUnauthorized:true}:undefined});
    try{const run=await python(['client','--port',String(server.address.port),...flags]).done;const result=JSON.parse(run.stdout.trim());assert.equal(result.ok,true);assert.equal(result.checks.length,8);check(`Apache generated Python client -> MoonBit/Node server: ${mode} (8 checks)`);}finally{await server.close();}
    console.log(`Bidirectional ${mode} passed`);
  }
  const tlsServer=await serve({schema,service:'Records',handlers:handlers(),tls:{ca,cert,key}});
  try{
    for(const tls of [{ca,servername:'wrong.invalid'},{servername:'localhost'}])await assert.rejects(connect({schema,service:'Records',port:tlsServer.address.port,tls}));
    check('Node client rejects wrong hostname and untrusted CA');
    for(const flag of [['--server-name','wrong.invalid'],['--bad-trust']]){
      const run=await python(['client','--port',String(tlsServer.address.port),'--tls','--certdir',temporary,...flag],{expectedFailure:true}).done;
      assert.notEqual(run.code,0);assert.match(run.stderr,/CERTIFICATE_VERIFY_FAILED|certificate verify failed/);
    }
    check('Independent Python TLS client rejects wrong hostname and untrusted CA');
  }finally{await tlsServer.close();}
  const authServer=await serve({schema,service:'Records',handlers:handlers(),tls:{ca,cert,key,requestCert:true,rejectUnauthorized:true}});
  try{
    let client;await assert.rejects((async()=>{client=await connect({schema,service:'Records',port:authServer.address.port,tls:{ca,servername:'localhost'}});await client.call('ping',{message:'unauthenticated'});})());await client?.close({force:true});
    check('mTLS server rejects client without certificate');
  }finally{await authServer.close();}
  const server=await serve({schema,service:'Records',handlers:handlers()});const port=server.address.port;
  try{
    let client=await connect({schema,service:'Records',port});
    const completion=[];await Promise.all([60,1,20].map((delayMs,i)=>client.call('slow',{delayMs}).then(value=>{assert.equal(value,'finished');completion.push(i);})));assert.deepEqual(completion,[1,2,0]);check('Concurrent out-of-order replies correlate by sequence ID');
    await assert.rejects(client.call('echo',{value:{id:'bad'}}));assert.equal(await client.call('ping',{message:'still open'}),'still open');check('Argument validation leaves connection usable');await client.close();
    client=await connect({schema,service:'Records',port,maxPending:1});const first=client.call('slow',{delayMs:35});await pause(5);await assert.rejects(client.call('ping',{message:'full'}),{code:'BACKPRESSURE'});await first;assert.equal(client.pendingCount,0);await client.close();check('Pending limit rejects excess calls and releases completed entries');
    client=await connect({schema,service:'Records',port,timeoutMs:15});await assert.rejects(client.call('slow',{delayMs:50}),{code:'RPC_TIMEOUT'});assert.equal(client.pendingCount,0);await client.close();check('RPC timeout closes channel and clears pending state');
    client=await connect({schema,service:'Records',port});const controller=new AbortController();const cancelled=client.call('slow',{delayMs:50},{signal:controller.signal});setTimeout(()=>controller.abort(),5);await assert.rejects(cancelled,{code:'ABORT_ERR'});assert.equal(client.pendingCount,0);await client.close();check('Cancellation closes channel and clears pending state');
    client=await connect({schema,service:'Records',port,maxQueuedBytes:1});await assert.rejects(client.call('ping',{message:'oversized'}),{code:'BACKPRESSURE'});assert.equal(client.pendingCount,0);await client.close();check('Encoded request cannot exceed bounded write queue');
    await rawClosed(port,Buffer.from('7fffffff','hex'));await rawClosed(port,Buffer.from('00000010abcd','hex'));check('Oversized and truncated network frames close the connection');
    client=await connect({schema,service:'Records',port});const pending=client.call('slow',{delayMs:25});await pause(5);const closed=client.close();assert.equal(await pending,'finished');await closed;check('Graceful client shutdown drains an active call');
  }finally{await server.close();}
  for(const mismatch of ['sequence','method']){
    const peer=net.createServer(socket=>{socket.once('data',()=>{const bytes=schema.makeReply('Records',mismatch==='method'?'slow':'ping',mismatch==='sequence'?999:0,{kind:'success',value:'reply'});const header=Buffer.alloc(4);header.writeUInt32BE(bytes.length);socket.write(Buffer.concat([header,bytes]));});socket.on('error',()=>{});});
    await new Promise(resolve=>peer.listen(0,'127.0.0.1',resolve));const client=await connect({schema,service:'Records',port:peer.address().port});
    try{await assert.rejects(client.call('ping',{message:'x'}),{code:'CORE_ERROR'});assert.equal(client.pendingCount,0);check(`Wrong reply ${mismatch} fails the connection`);}finally{await client.close({force:true});await new Promise(resolve=>peer.close(resolve));}
  }
  const report={utc:new Date().toISOString(),reference,networkModes:12,directions:2,independentRpcChecks:192,hostChecks:results.length-24,passed:results.length,results,scope:'Loopback TCP/TLS/mTLS, generated Apache Python Client/Processor and real MoonBit/Node host; no external deployment or throughput claim'};
  await fs.writeFile(new URL('../evidence/network-reference-validation.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
  console.log(`${results.length} network groups passed; 192 independent RPC checks`);
}finally{
  schema.close();
  const resolved=path.resolve(temporary);if(path.dirname(resolved)!==path.resolve(os.tmpdir())||!path.basename(resolved).startsWith('moonbit-thrift-network-'))throw Error('Unsafe temporary cleanup path');
  await fs.rm(resolved,{recursive:true,force:true});
}
