import assert from 'node:assert/strict';
import net from 'node:net';
import {fileURLToPath} from 'node:url';
import {start,feed,finish} from '../web/moonthrift-model.mjs';
import {loadSchema,serve} from '../tools/thrift.mjs';

const schema=await loadSchema(fileURLToPath(new URL('./moonthrift.thrift',import.meta.url)));
const result=text=>{const value=JSON.parse(text);if(!value.ok)throw Error(value.error);return value;};
try {
  for(const protocol of ['binary','compact']) {
    const server=await serve({schema,service:'Shared',protocol,codec:'moonthrift',handlers:{add:({a,b})=>BigInt(a)+BigInt(b)}});
    let socket;
    try {
      const request=result(start(protocol));
      const sum=await new Promise((resolve,reject)=>{
        let received=false;
        socket=net.connect({host:'127.0.0.1',port:server.address.port});
        socket.setTimeout(5000,()=>socket.destroy(Error('example timed out')));
        socket.once('error',reject);
        socket.once('connect',()=>socket.write(Buffer.from(request.hex,'hex')));
        socket.on('data',chunk=>{
          try {
            // Exercise the generated-model client on arbitrary socket fragments.
            for(const byte of chunk)for(const value of result(feed(Buffer.from([byte]).toString('hex'))).results){received=true;resolve(value);}
          } catch(error) {socket.destroy();reject(error);}
        });
        socket.once('end',()=>{if(!received)reject(Error('EOF before reply'));});
      });
      assert.equal(sum,'9007199254740994');
      result(finish());
      console.log(JSON.stringify({transport:'loopback TCP',protocol,codec:'Xpeng/moonthrift@0.2.0',requestModel:'SharedAddArgs',replyModel:'SharedAddResult',sum}));
    } finally { socket?.destroy();finish();await server.close(); }
  }
} finally {schema.close();}
