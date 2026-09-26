import assert from 'node:assert/strict';
import net from 'node:net';
import {fileURLToPath} from 'node:url';
import {loadSchema,serve} from './thrift.mjs';
const schema=await loadSchema(fileURLToPath(new URL('../examples/moonthrift.thrift',import.meta.url)));
const checks=[];
try {
  for(const protocol of ['binary','compact'])for(const codec of ['builtin','moonthrift']) {
    const errors=[];
    const server=await serve({schema,service:'Shared',protocol,codec,onError:e=>errors.push(e.message),handlers:{slow:async({delayMs})=>{await new Promise(r=>setTimeout(r,delayMs));return 'after-input-EOF';}}});
    try {
      const payload=schema.makeCall('Shared','slow',{delayMs:25},17,protocol);
      const header=Buffer.alloc(4);header.writeUInt32BE(payload.length);
      const reply=await new Promise((resolve,reject)=>{
        const chunks=[],socket=net.connect({host:'127.0.0.1',port:server.address.port});
        socket.setTimeout(3000,()=>socket.destroy(Error('half-close timeout')));
        socket.on('error',reject);socket.on('data',b=>chunks.push(b));
        socket.on('end',()=>resolve(Buffer.concat(chunks)));
        socket.on('connect',()=>socket.end(Buffer.concat([header,payload])));
      });
      assert.ok(reply.length>4);assert.equal(reply.readUInt32BE(0),reply.length-4);
      const outcome=schema.readReply('Shared','slow',reply.subarray(4),protocol);
      assert.equal(outcome.kind,'success');assert.equal(outcome.value,'after-input-EOF');assert.deepEqual(errors,[]);
      checks.push({protocol,codec,delayedResponseAfterInputEOF:true});
    } finally {await server.close();}
  }
} finally {schema.close();}
console.log(JSON.stringify({groups:checks.length,checks},null,2));
