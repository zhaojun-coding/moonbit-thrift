import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'thrift-output-'));
const out=path.join(dir,'value.bin');
const args=['tools/thrift-cli.mjs','encode','examples/demo.thrift','--type','common.Record','--protocol','compact','--input','examples/use-case/record.json','--out',out];
const run=(extra=[])=>spawnSync(process.execPath,[...args,...extra],{encoding:'utf8',timeout:10000,windowsHide:true});
try {
  let r=run();assert.equal(r.status,0,r.stderr);const first=fs.readFileSync(out);
  fs.writeFileSync(out,'keep');r=run();assert.equal(r.status,1);assert.match(r.stderr,/EEXIST/);assert.equal(fs.readFileSync(out,'utf8'),'keep');
  r=run(['--force']);assert.equal(r.status,0,r.stderr);assert.deepEqual(fs.readFileSync(out),first);
  r=spawnSync(process.execPath,['tools/thrift-cli.mjs','decode','examples/demo.thrift','--type','common.Record','--protocol','compact','--input',out],{encoding:'utf8',timeout:10000,windowsHide:true});
  assert.equal(r.status,0,r.stderr);assert.equal(JSON.parse(r.stdout).id,'9007199254740993');
  console.log('Thrift output: no overwrite by default, explicit force, exact i64 roundtrip passed');
}finally{
  if(path.dirname(dir)!==path.resolve(os.tmpdir())||!path.basename(dir).startsWith('thrift-output-'))throw Error('Unexpected temporary path');
  fs.rmSync(dir,{recursive:true,force:true});
}
