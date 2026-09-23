import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {loadSchema,connect,serve} from '../tools/thrift.mjs';

const schema=await loadSchema(fileURLToPath(new URL('./demo.thrift',import.meta.url)));
let server,client;
try{
  server=await serve({schema,service:'Records',protocol:'compact',handlers:{ping:({message})=>message,add:({a,b})=>BigInt(a)+BigInt(b)}});
  client=await connect({schema,service:'Records',protocol:'compact',port:server.address.port});
  const message=await client.call('ping',{message:'MoonBit RPC'});
  const sum=await client.call('add',{a:'9007199254740993',b:'1'});
  assert.equal(message,'MoonBit RPC');
  assert.equal(sum,'9007199254740994');
  process.stdout.write(JSON.stringify({transport:'loopback TCP',protocol:'compact',message,sum})+'\n');
}finally{
  await client?.close({force:true});
  await server?.close();
  schema.close();
}
