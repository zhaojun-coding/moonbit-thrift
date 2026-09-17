import {fileURLToPath} from 'node:url';
import fs from 'node:fs';import {spawnSync} from 'node:child_process';import assert from 'node:assert/strict';import {isDeepStrictEqual} from 'node:util';import {createHash} from 'node:crypto';import {schema_json} from '../web/engine.mjs';
const cases=[];const add=(source,extra={})=>cases.push({id:'idl-'+cases.length,root:'main.thrift',sources:{'main.thrift':source},...extra});
add('');add('namespace py demo\nnamespace * common\ncpp_include "example.hpp"\nstruct Empty {}');
add('typedef i64 Id\nenum E{ZERO,ONE,TEN=10,NEG=-3,AFTER} struct X {1:required Id id;2:optional string label="sample";3:list<E> values;i32 automatic}');
add('exception Bad {1:string message} service Base {i32 add(1:i32 x,2:i32 y) throws(1:Bad error); oneway void log(1:string text)} service Child extends Base {void ping()}');
add('struct Node{1:optional Node next,2:optional list<Node> children}');
add('typedef Later Early\nstruct First {1:Early value}\nstruct Later {1:i32 id}');
add('include "base.thrift"\nstruct X{1:base.Item item;2:base.Id id=base.BIG;3:base.E e=base.E.B} service S extends base.Parent {void ping()}',{sources:{'main.thrift':'include "base.thrift"\nstruct X{1:base.Item item;2:base.Id id=base.BIG;3:base.E e=base.E.B} service S extends base.Parent {void ping()}','base.thrift':'typedef i64 Id\nconst Id BIG=9223372036854775807\nenum E{A,B}\nstruct Item{1:string name}\nservice Parent{bool check()}'}});
for(const type of ['bool','byte','i8','i16','i32','i64','double','string','binary','uuid','list<i32>','set<string>','map<string,list<i64>>'])add(`typedef ${type} T\nstruct X{1:required T a;2:optional ${type} b;3:${type} c}`);
for(const [type,values] of [
 ['bool',['true','false','0','1','2','-1']],['byte',['-128','127','128','-129']],['i16',['-32768','32767','32768']],['i32',['-2147483648','2147483647','2147483648']],['i64',['-9223372036854775808','9223372036854775807','9223372036854775808','0xff','077','+42']],['double',['1','-1.25','.5','1e3','-2e-2','1e400']],['string',['"abc"',"'one'",String.raw`"a\nb\tc\\d\"e"`,String.raw`"\x41\u0042\q"`,'"象棋🙂"']],['binary',['"abc"']],['uuid',['"00112233-4455-6677-8899-aabbccddeeff"','"bad"']],['list<i16>',['[]','[1,2;3]','["a"]']],['map<string,i32>',['{}','{"a":1,"b":2}','{"b":2,"a":1}','{1:2}']]
])for(const value of values)add(`const ${type} C=${value}\nstruct X {1:optional ${type} value=C}`);
for(const source of [
'const i32 A=1 const i64 B=A struct X {1:i64 x=B}',
'enum E{A=3,B} const E C=E.B struct X{1:E e=C}',
'enum E{A=3,B} const i32 C=E.B',
'enum E{A=3,B} struct X{1:E e=B}',
'struct P{1:i32 x;2:string y} const P A={"x":3,"y":"a"} struct X{1:P p=A}',
'struct P{1:required i32 x} const P A={}',
'union U{1:required string a,2:optional i32 b}',
'union U{1:string a="x",2:i32 b=2}',
'struct X{string a,i32 b,7:string c,string d}',
'struct X{-9:string a;0:i32 b;-2:string c;1:string d}',
'struct X{1:i32 a;1:string b}',
'struct X{1:i32 a;2:string a}',
'enum E{A,A}',
'enum E{A=1,B=1}',
'struct X{32768:i32 a}',
'struct X{-32769:i32 a}',
'struct X{1:void a}',
'typedef void X',
'struct X{1:Missing a}',
'service S{oneway i32 wrong()}',
'exception E{} service S{oneway void wrong() throws(1:E error)}',
'service S{i32 a() throws(1:i32 bad)}',
'service S{void a();void a()}',
'service Base{void a()} service Child extends Base{void a()}',
'struct Base{} service Child extends Base{}',
'struct X{} struct X{}',
'const i32 A="x"',
'const string A=1',
'const i32 A=unknown',
'struct X{1:map<void,i32> a}',
'struct X{1:list<void> a}',
'struct class{}',
'struct X{1:i32 class}',
'struct struct{}',
'struct X{1:i32 string}',
'struct X{} namespace py after',
'/* block */ # line\n// next\nstruct X{1:string x="ok"} // trailing',
'struct X{1:string x="unterminated}',
'/* unterminated',
'struct X{1:i32 x} (a="b")',
'typedef list<i32> Numbers (a="b")\nstruct X{1:Numbers n (field="yes")}',
'service S {void ping() (flag="ok")} (owner="test")',
'struct X{1:list cpp_type "Vec" <i32> v;2:map cpp_type "Map" <string,i32> m}',
'struct X{1:i32 a=0x10,2:i32 b=077}',
])add(source);
add('include "missing.thrift"\nstruct X{}');
const golden=process.argv.includes('--golden');let reference;
if(golden){const saved=JSON.parse(fs.readFileSync(new URL('../evidence/idl-reference-vectors.json',import.meta.url),'utf8'));assert.deepEqual(saved.cases,cases);reference=saved.reference;}
else {const r=spawnSync(process.env.PYTHON||'python',[fileURLToPath(new URL('./idl_oracle.py',import.meta.url))],{input:JSON.stringify(cases),encoding:'utf8',windowsHide:true,timeout:180000,maxBuffer:32*1024*1024});if(r.error||r.status!==0)throw Error(String(r.error||r.stderr));reference=JSON.parse(r.stdout);fs.writeFileSync(new URL('../evidence/idl-reference-vectors.json',import.meta.url),JSON.stringify({cases,reference},null,2)+'\n');}
const failures=[],unavailable=[];
for(let i=0;i<cases.length;i++){
 const actual=JSON.parse(schema_json(JSON.stringify({action:'compile',...cases[i]})));const expected=reference.results[i];
 if(actual.ok)JSON.parse(schema_json(JSON.stringify({action:'close',schema:actual.schema})));
 if(expected.unavailable){unavailable.push({test:cases[i],actual,reference:expected});continue;}
 if(actual.ok!==expected.ok||actual.ok&&expected.descriptionAvailable!==false&&!isDeepStrictEqual(actual.description,expected.description))failures.push({test:cases[i],actual,expected});
}
const report={utc:new Date().toISOString(),mode:golden?'saved vectors':'live Apache compiler',version:reference.version,binarySha256:reference.binarySha256,engineSha256:createHash('sha256').update(fs.readFileSync(new URL('../web/engine.mjs',import.meta.url))).digest('hex'),acceptanceOnly:reference.results.filter(x=>x.descriptionAvailable===false&&!x.unavailable).length,total:cases.length,comparable:cases.length-unavailable.length,passed:cases.length-unavailable.length-failures.length,failed:failures.length,failures,unavailable};
fs.writeFileSync(new URL(`../evidence/idl-reference-${golden?'replay':'validation'}.json`,import.meta.url),JSON.stringify(report,null,2)+'\n');console.log(`${report.passed}/${report.comparable} Apache IDL compiler cases agree; ${unavailable.length} reference result unavailable`);for(const f of failures)console.log(JSON.stringify(f));if(failures.length)process.exitCode=1;
