import net from 'node:net';
import assert from 'node:assert/strict';
import {open_client,request,feed,finish} from '../_build/js/debug/build/cmd/interop/interop.js';
const [port,mode]=process.argv.slice(2);
assert.equal(open_client(mode),'ok');
const wire=Buffer.concat([[21,false],[-1,false],[8,true]].map(([n,oneway])=>{
 const hex=request(mode,n,oneway);assert.match(hex,/^[a-f0-9]+$/);return Buffer.from(hex,'hex');
}));
const responses=[];
await new Promise((resolve,reject)=>{
 const socket=net.connect({host:'127.0.0.1',port:Number(port)});
 socket.setTimeout(8000,()=>socket.destroy(Error('RPC timeout')));
 socket.on('error',reject);
 socket.on('connect',()=>{
  let offset=0,i=0;
  const next=()=>{
   if(offset>=wire.length)return;
   const n=[1,2,3,5,8][i++%5],end=Math.min(wire.length,offset+n);
   socket.write(wire.subarray(offset,end));offset=end;setImmediate(next);
  };next();
 });
 socket.on('data',chunk=>{
  // Split every response byte even when the OS coalesces TCP packets.
  for(const byte of chunk){const result=feed(mode,Buffer.from([byte]).toString('hex'));if(result.startsWith('ERROR:')){socket.destroy(Error(result));return}if(result)responses.push(...result.split('\n'))}
 });
 socket.on('end',()=>{try{assert.equal(finish(mode),'ok');resolve()}catch(e){reject(e)}});
});
assert.deepEqual(responses,['exception:1','0:42']);
console.log(JSON.stringify({mode,responses,oneway:true,fragmented:true,ok:true}));
