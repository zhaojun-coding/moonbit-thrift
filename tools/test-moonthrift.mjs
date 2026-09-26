import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {loadSchema,connect,serve,DeclaredException,ApplicationException} from './thrift.mjs';

const schema=await loadSchema(fileURLToPath(new URL('../examples/moonthrift.thrift',import.meta.url)));
const results=[];
const temp=await fs.mkdtemp(path.join(os.tmpdir(),'moonthrift-adapter-'));
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
try {
  execFileSync(process.env.PYTHON||'python',[fileURLToPath(new URL('./network_oracle.py',import.meta.url)),'certificates','--certdir',temp],{env:{...process.env,PYTHONPATH:process.env.THRIFT_REFERENCE_PYTHONPATH??process.env.PYTHONPATH},windowsHide:true,stdio:'pipe'});
  const [ca,cert,key]=await Promise.all(['ca.pem','server.pem','server.key'].map(n=>fs.readFile(path.join(temp,n))));
  for(const protocol of ['binary','compact'])for(const [clientCodec,serverCodec] of [['moonthrift','moonthrift'],['moonthrift','builtin'],['builtin','moonthrift']])for(const secure of [false,true]){
    const notifications=[];
    const handlers={
      add:({a,b})=>BigInt(a)+BigInt(b),echo:({record})=>record,blob:({data})=>data,
      fail:()=>{throw new DeclaredException('problem',{message:'declared'});},
      notify:({text})=>{notifications.push(text);},
      slow:async({delayMs})=>{if(delayMs<0)throw new ApplicationException(9,'application');await pause(delayMs);return String(delayMs);},
    };
    const server=await serve({schema,protocol,codec:serverCodec,services:{shared:'Shared'},handlers:{shared:handlers},tls:secure?{ca,cert,key}:undefined});
    let client;
    try {
      client=await connect({schema,service:'Shared',protocol,codec:clientCodec,multiplex:'shared',port:server.address.port,tls:secure?{ca,servername:'localhost'}:undefined});
      assert.equal(await client.call('add',{a:'9007199254740993',b:'1'}),'9007199254740994');
      const record={id:'-9223372036854775808',label:'中文🙂',series:[['series',['9007199254740993','9223372036854775807']]]};
      assert.deepEqual(await client.call('echo',{record}),record);
      const data={$binary:Buffer.from(Array.from({length:256},(_,i)=>i)).toString('hex')};
      assert.deepEqual(await client.call('blob',{data}),data);
      await assert.rejects(client.call('fail'),e=>e instanceof DeclaredException&&e.details.message==='declared');
      await assert.rejects(client.call('slow',{delayMs:-1}),e=>e instanceof ApplicationException&&e.type===9);
      await client.call('notify',{text:'oneway'});
      const order=[];
      await Promise.all([30,1].map(delayMs=>client.call('slow',{delayMs}).then(v=>order.push(v))));
      assert.deepEqual(order,['1','30']);assert.deepEqual(notifications,['oneway']);
      assert.equal(await client.call('add',{a:'1',b:'2'}),'3');
      assert.equal(client.pendingCount,0);
      await client.close();assert.equal(client.error,undefined);
      results.push({protocol,clientCodec,serverCodec,transport:secure?'TLS':'TCP',multiplex:true,passed:true});
    } finally {await client?.close({force:true});await server.close();}
  }
  await assert.rejects(connect({schema,service:'Shared',protocol:'legacy',codec:'moonthrift',port:1}),/not legacy/);
  await assert.rejects(serve({schema,service:'Shared',protocol:'legacy',codec:'moonthrift',handlers:{}}),/not legacy/);
  for(const mode of ['cancel','timeout']){
    const server=await serve({schema,service:'Shared',protocol:'compact',codec:'moonthrift',handlers:{slow:async()=>{await pause(60);return 'late';}}});
    let client;
    try {
      client=await connect({schema,service:'Shared',protocol:'compact',codec:'moonthrift',port:server.address.port});
      const controller=new AbortController();
      const pending=client.call('slow',{delayMs:60},{timeoutMs:mode==='timeout'?5:500,signal:controller.signal});
      const rejected=assert.rejects(pending,e=>e.code===(mode==='timeout'?'RPC_TIMEOUT':'ABORT_ERR'));
      if(mode==='cancel')setTimeout(()=>controller.abort(),5);
      await rejected;assert.equal(client.pendingCount,0);assert.equal(client.closed,true);
      results.push({boundary:mode,passed:true});
    }finally{await client?.close({force:true});await server.close();}
  }
  const report={upstream:'Xpeng/moonthrift@0.3.0',runtime:process.version,groups:results.length,legacyRejected:true,results};
  const flag=process.argv.indexOf('--output');if(flag>=0)await fs.writeFile(process.argv[flag+1],JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify(report,null,2));
} finally {
  schema.close();
  assert.equal(path.dirname(path.resolve(temp)),path.resolve(os.tmpdir()));
  assert.ok(path.basename(temp).startsWith('moonthrift-adapter-'));
  await fs.rm(temp,{recursive:true,force:true});
}
