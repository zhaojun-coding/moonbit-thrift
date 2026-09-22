#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {parseArgs} from 'node:util';
import {loadSchema,connect,serve} from './thrift.mjs';
import {generateMoonBit} from './generate.mjs';

const help=`Usage: node tools/thrift-cli.mjs COMMAND FILE.thrift [options]
  inspect                       Print the resolved root schema and warnings
  encode --type TYPE             JSON to a Binary/Compact value (binary stdout)
  decode --type TYPE             Binary/Compact value to canonical JSON
  gen --out DIRECTORY            Generate a MoonBit package and symbol map
  call --service S --method M --port N   Make one framed TCP/TLS RPC
  serve --service S --handlers FILE.mjs  Serve exported default/handlers object

  --include DIR (repeatable)     IDL include search path
  --protocol binary|compact|legacy (default binary; legacy affects RPC headers)
  --json TEXT / --input FILE     JSON input, otherwise stdin; decode reads bytes
  --out FILE                    Encode/decode output; gen output directory
  --host HOST --port N           Default 127.0.0.1; serve port defaults to 0
  --timeout MS                  RPC/connect timeout, default 5000
  --multiplex NAME               Client wire service name
  --route NAME=SERVICE           Server multiplex route (repeatable)
  --tls --ca FILE --cert FILE --key FILE --servername NAME
  --require-client-cert          Server TLS client certificate authentication
  --force                       Replace existing output/generated files
All i64 JSON values use decimal strings; binary uses {"$binary":"hex"}.
Server handlers receive (arguments, context); see examples/handlers.mjs.
`;
const options=Object.fromEntries(['type','protocol','json','input','out','service','method','host','port','timeout','multiplex','handlers','ca','cert','key','servername','library'].map(k=>[k,{type:'string'}]));
for(const k of ['help','tls','force','require-client-cert'])options[k]={type:'boolean'};
for(const k of ['include','route'])options[k]={type:'string',multiple:true};
async function input(file){
  if(file){const stat=await fs.stat(file);if(stat.size>16000000)throw Error('Input byte limit');return fs.readFile(file);}
  const chunks=[];let size=0;for await(const chunk of process.stdin){size+=chunk.length;if(size>16000000)throw Error('Input byte limit');chunks.push(chunk);}return Buffer.concat(chunks);
}
const utf8=bytes=>new TextDecoder('utf-8',{fatal:true}).decode(bytes);
const required=(value,name)=>{if(!value)throw Error(`--${name} is required`);return value;};
function integer(value,name,fallback,min=1){if(value===undefined)return fallback;const n=Number(value);if(!/^\d+$/.test(value)||!Number.isSafeInteger(n)||n<min)throw Error(`--${name} must be an integer >= ${min}`);return n;}
async function tlsOptions(values,server){
  const enabled=values.tls||values.ca||values.cert||values.key||values.servername||values['require-client-cert'];if(!enabled)return;
  const result={};for(const key of ['ca','cert','key'])if(values[key])result[key]=await fs.readFile(values[key]);
  if(server){required(result.cert,'cert');required(result.key,'key');if(values['require-client-cert']){required(result.ca,'ca');result.requestCert=true;result.rejectUnauthorized=true;}}
  else if(values.servername)result.servername=values.servername;
  return result;
}
async function main(){
  const {values:v,positionals}=parseArgs({options,allowPositionals:true,strict:true});
  if(v.help){process.stdout.write(help);return;}
  const [command,filename,...extra]=positionals;if(!filename||extra.length||!['inspect','encode','decode','gen','call','serve'].includes(command))throw Error(help);
  const schema=await loadSchema(filename,{includePaths:v.include??[]});
  try{
    const protocol=v.protocol??'binary';if(!['binary','compact','legacy'].includes(protocol))throw Error('Invalid protocol');
    const output=async data=>{if(v.out)await fs.writeFile(v.out,data,{flag:v.force?'w':'wx'});else process.stdout.write(data);};
    if(command==='inspect'){await output(JSON.stringify({description:schema.description,warnings:schema.warnings},null,2)+'\n');return;}
    if(command==='gen'){
      const directory=path.resolve(required(v.out,'out')),files=generateMoonBit(schema,{library:v.library});
      await fs.mkdir(directory,{recursive:true});
      if(!v.force)for(const name of Object.keys(files)){try{await fs.access(path.join(directory,name));throw Error(`Generated file exists: ${name}; use --force to replace`);}catch(error){if(error.code!=='ENOENT')throw error;}}
      for(const [name,text] of Object.entries(files))await fs.writeFile(path.join(directory,name),text,{flag:v.force?'w':'wx'});
      process.stdout.write(JSON.stringify({directory,files:Object.keys(files)})+'\n');return;
    }
    if(command==='decode'){await output(JSON.stringify(schema.decode(required(v.type,'type'),await input(v.input),protocol))+'\n');return;}
    if(command==='encode'||command==='call'){
      if(v.json!==undefined&&v.input)throw Error('--json and --input are mutually exclusive');
      const value=JSON.parse(v.json??utf8(await input(v.input)));
      if(command==='encode'){await output(schema.encode(required(v.type,'type'),value,protocol));return;}
      const timeout=integer(v.timeout,'timeout',5000),client=await connect({schema,service:required(v.service,'service'),protocol,host:v.host,port:integer(required(v.port,'port'),'port'),multiplex:v.multiplex,timeoutMs:timeout,connectTimeoutMs:timeout,tls:await tlsOptions(v,false)});
      try{await output(JSON.stringify((await client.call(required(v.method,'method'),value))??null)+'\n');}finally{await client.close();}return;
    }
    const module=await import(pathToFileURL(path.resolve(required(v.handlers,'handlers'))).href),handlers=module.default??module.handlers;
    if(!handlers||typeof handlers!=='object')throw Error('Handlers module must export a handler object');
    const services=Object.create(null);for(const route of v.route??[]){const at=route.indexOf('=');if(at<1||at===route.length-1)throw Error('--route requires NAME=SERVICE');if(Object.hasOwn(services,route.slice(0,at)))throw Error('Duplicate route');services[route.slice(0,at)]=route.slice(at+1);}
    if(!v.service&&!Object.keys(services).length)throw Error('--service or --route is required');
    const server=await serve({schema,service:v.service,services,handlers,protocol,host:v.host,port:integer(v.port,'port',0,0),tls:await tlsOptions(v,true),onError:error=>process.stderr.write(JSON.stringify({error:error.message,code:error.code})+'\n')});
    process.stdout.write(JSON.stringify({listening:server.address,protocol,tls:!!(v.tls||v.cert)})+'\n');
    await new Promise(resolve=>{const stop=()=>{process.off('SIGINT',stop);process.off('SIGTERM',stop);server.close().then(resolve);};process.once('SIGINT',stop);process.once('SIGTERM',stop);});
  }finally{schema.close();}
}
main().catch(error=>{process.stderr.write(JSON.stringify({error:error.message,code:error.code,details:error.details})+'\n');process.exitCode=1;});
