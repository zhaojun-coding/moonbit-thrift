import fs from 'node:fs';import {spawnSync} from 'node:child_process';import {fileURLToPath} from 'node:url';import assert from 'node:assert/strict';import {isDeepStrictEqual} from 'node:util';import {Schema} from './thrift.mjs';
const sources={'common.thrift':fs.readFileSync(new URL('../examples/common.thrift',import.meta.url),'utf8'),'demo.thrift':fs.readFileSync(new URL('../examples/demo.thrift',import.meta.url),'utf8')};
const schema=new Schema({root:'demo.thrift',sources});
const values=[
 {id:'0'},
 {id:'9223372036854775807',name:'象棋🙂',data:{$binary:'0001ff80'},groups:[['a',[1,-2,2147483647]],['b',[]]],tag:'00112233-4455-6677-8899-aabbccddeeff',labels:['z','a'],state:2},
 {id:'-9223372036854775808',name:null,groups:[],labels:[],state:9876},
 {id:'7',child:{id:'8',child:{id:'9',name:'nested'}}},
 {id:7,labels:['a','a','b']},
 {id:'1',groups:[['a',[1]],['a',[2]]]},
 {},{id:null},{id:'9223372036854775808'},{id:'1',data:{$binary:'xyz'}},{id:'1',tag:'invalid'},{id:'1',groups:[['x',[2147483648]]]},{id:'1',unknown:'x'},
];
const cases=[];for(const protocol of ['binary','compact'])for(const value of values)cases.push({type:'common.Record',value,protocol});
const actual=cases.map(test=>{try{const bytes=schema.encode(test.type,test.value,test.protocol);return {ok:true,hex:bytes.toString('hex'),value:schema.decode(test.type,bytes,test.protocol)};}catch(error){return {ok:false,error:error.message};}});
const golden=process.argv.includes('--golden');let reference;
if(golden){const saved=JSON.parse(fs.readFileSync(new URL('../evidence/schema-reference-vectors.json',import.meta.url),'utf8'));assert.deepEqual(saved.sources,sources);assert.deepEqual(saved.cases,cases);reference=saved.reference;}
else{
 const request={root:'demo.thrift',sources,cases:cases.map((test,i)=>({...test,moonHex:actual[i].ok?actual[i].hex:null}))};
 const run=spawnSync(process.env.PYTHON||'python',[fileURLToPath(new URL('./schema_oracle.py',import.meta.url))],{input:JSON.stringify(request),encoding:'utf8',windowsHide:true,timeout:30000,maxBuffer:8*1024*1024,env:{...process.env,PYTHONHASHSEED:'0',PYTHONPATH:process.env.THRIFT_REFERENCE_PYTHONPATH??process.env.PYTHONPATH}});
 if(run.error||run.status!==0)throw Error(String(run.error||run.stderr));reference=JSON.parse(run.stdout);
 fs.writeFileSync(new URL('../evidence/schema-reference-vectors.json',import.meta.url),JSON.stringify({sources,cases,reference},null,2)+'\n');
}
function canonical(value){if(value&&typeof value==='object'&&!Array.isArray(value)){const out={...value};if(out.labels)out.labels=[...new Set(out.labels)].sort();if(out.groups)out.groups=[...new Map(out.groups)].sort((a,b)=>a[0].localeCompare(b[0]));if(out.child)out.child=canonical(out.child);return out;}return value;}
const failures=[];
for(let i=0;i<cases.length;i++){
 const a=actual[i],r=reference.results[i],test=cases[i];let agree=a.ok===r.ok;
 if(agree&&a.ok){const incoming=schema.decode(test.type,Buffer.from(r.hex,'hex'),test.protocol);agree=isDeepStrictEqual(canonical(a.value),r.value)&&isDeepStrictEqual(canonical(incoming),r.value)&&(!r.moonValue||isDeepStrictEqual(r.moonValue,r.value));if(!test.value.labels&&!test.value.groups)agree&&=a.hex===r.hex;}
 if(!agree)failures.push({test,actual:a,reference:r});
}
schema.close();const report={utc:new Date().toISOString(),mode:golden?'saved vectors':'live Apache generated Python bindings',runtime:reference.runtime,compiler:reference.compiler,compilerSha256:reference.compilerSha256,total:cases.length,passed:cases.length-failures.length,failed:failures.length,failures};
fs.writeFileSync(new URL(`../evidence/schema-reference-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');console.log(`${report.passed}/${report.total} generated Apache schema codec cases agree`);for(const failure of failures)console.log(JSON.stringify(failure));if(failures.length)process.exitCode=1;
