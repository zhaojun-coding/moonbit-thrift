import fs from 'node:fs/promises';import os from 'node:os';import path from 'node:path';import {spawn} from 'node:child_process';import {fileURLToPath,pathToFileURL} from 'node:url';import assert from 'node:assert/strict';
const cli=fileURLToPath(new URL('./thrift-cli.mjs',import.meta.url)),temporary=await fs.mkdtemp(path.join(os.tmpdir(),'moonbit-thrift-cli-'));
function run(args,input='',expected=0){return new Promise((resolve,reject)=>{const child=spawn(process.execPath,[cli,...args],{windowsHide:true,stdio:['pipe','pipe','pipe']});const out=[],err=[];const timer=setTimeout(()=>child.kill(),8000);child.stdout.on('data',x=>out.push(x));child.stderr.on('data',x=>err.push(x));child.on('error',reject);child.on('close',code=>{clearTimeout(timer);const stdout=Buffer.concat(out),stderr=Buffer.concat(err).toString('utf8');if(code!==expected)reject(Error(`CLI exit ${code}: ${stderr}`));else resolve({stdout,stderr});});child.stdin.end(input);});}
let server;const checks=[];
try{
  const directory=path.join(temporary,'spaces 中文');await fs.mkdir(path.join(directory,'includes'),{recursive:true});
  const root=path.join(directory,'demo.thrift');await fs.copyFile(new URL('../examples/demo.thrift',import.meta.url),root);await fs.copyFile(new URL('../examples/common.thrift',import.meta.url),path.join(directory,'includes/common.thrift'));
  const include=['--include',path.join(directory,'includes')];
  const inspected=JSON.parse((await run(['inspect',root,...include])).stdout);assert.equal(inspected.description.services[0].name,'Records');checks.push('real includes, search path, Unicode and spaces in paths');
  const value={id:'-9223372036854775808',data:{$binary:'00ff80'},tag:'00112233-4455-6677-8899-aabbccddeeff'};const jsonFile=path.join(directory,'value.json');await fs.writeFile(jsonFile,JSON.stringify(value));
  for(const protocol of ['binary','compact']){
    const encoded=await run(['encode',root,...include,'--type','common.Record','--protocol',protocol,'--input',jsonFile]);
    const decoded=JSON.parse((await run(['decode',root,...include,'--type','common.Record','--protocol',protocol],encoded.stdout)).stdout);assert.equal(decoded.id,value.id);assert.deepEqual(decoded.data,value.data);assert.equal(decoded.tag,value.tag);
    const filename=path.join(directory,protocol+'.bin');await run(['encode',root,...include,'--type','common.Record','--protocol',protocol,'--json',JSON.stringify(value),'--out',filename]);assert.deepEqual(await fs.readFile(filename),encoded.stdout);
    checks.push(`${protocol} JSON file/inline -> binary stdout/file -> binary stdin decode`);
  }
  const out=path.join(directory,'generated');await run(['gen',root,...include,'--out',out]);const original=await fs.readFile(path.join(out,'bindings.mbt'));assert.match(original.toString(),/pub\(all\) struct M\d+_Record/);
  await run(['gen',root,...include,'--out',out],'',1);assert.deepEqual(await fs.readFile(path.join(out,'bindings.mbt')),original);await run(['gen',root,...include,'--out',out,'--force']);checks.push('generation and explicit overwrite protection');
  const invalid=JSON.parse((await run(['encode',root,...include,'--type','common.Record','--json','{}'],'',1)).stderr);assert.match(invalid.error,/required/);
  await run(['call',root,...include,'--service','Records','--method','ping','--port','invalid','--json','{}'],'',1);checks.push('schema and option failures return nonzero structured errors');
  const handler=path.join(directory,'handlers.mjs');await fs.writeFile(handler,`import handlers from ${JSON.stringify(new URL('../examples/handlers.mjs',import.meta.url).href)};export default {records:handlers};\n`);
  server=spawn(process.execPath,[cli,'serve',root,...include,'--route','records=Records','--protocol','compact','--handlers',handler],{windowsHide:true,stdio:['pipe','pipe','pipe']});
  let errors='';server.stderr.on('data',x=>{errors+=x.toString('utf8');});
  const ready=await new Promise((resolve,reject)=>{let text='';const timer=setTimeout(()=>reject(Error('CLI server readiness timeout: '+errors)),5000);server.once('error',error=>{clearTimeout(timer);reject(error);});server.stdout.on('data',x=>{text+=x.toString('utf8');if(text.includes('\n')){clearTimeout(timer);resolve(JSON.parse(text.split('\n')[0]));}});server.once('exit',code=>{clearTimeout(timer);reject(Error(`CLI server exited ${code}: ${errors}`));});});
  const call=['call',root,...include,'--service','Records','--port',String(ready.listening.port),'--protocol','compact','--multiplex','records'];
  assert.equal(JSON.parse((await run([...call,'--method','add','--json','{"a":"9223372036854775807","b":"-1"}'])).stdout),'9223372036854775806');
  const failure=JSON.parse((await run([...call,'--method','fail','--json','{"code":42}'],'',1)).stderr);assert.equal(failure.code,'DECLARED_EXCEPTION');assert.equal(failure.details.code,42);
  assert.equal(JSON.parse((await run([...call,'--method','ping'],'{"message":"文件🙂"}')).stdout),'文件🙂');checks.push('actual CLI server/client multiplex RPC, stdin, exact i64 and declared exception');
  await fs.writeFile(new URL('../evidence/schema-cli-validation.json',import.meta.url),JSON.stringify({utc:new Date().toISOString(),passed:checks.length,checks},null,2)+'\n');console.log(`${checks.length} schema CLI integration groups passed`);
}finally{
  if(server&&server.exitCode===null){const ended=new Promise(resolve=>server.once('exit',resolve));server.kill();await ended;}
  if(path.dirname(path.resolve(temporary))!==path.resolve(os.tmpdir())||!path.basename(temporary).startsWith('moonbit-thrift-cli-'))throw Error('Unsafe temporary cleanup');await fs.rm(temporary,{recursive:true,force:true});
}
