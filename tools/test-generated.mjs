import fs from 'node:fs/promises';import path from 'node:path';import {spawnSync} from 'node:child_process';import {fileURLToPath} from 'node:url';import assert from 'node:assert/strict';
import {Schema} from './thrift.mjs';import {generateMoonBit} from './generate.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const moon=process.env.MOON??(process.env.MOON_HOME?path.join(process.env.MOON_HOME,'bin',process.platform==='win32'?'moon.exe':'moon'):'moon');
const directory=await fs.mkdtemp(path.join(root,'generated_check_'));
const common=await fs.readFile(new URL('../examples/common.thrift',import.meta.url),'utf8'),demo=await fs.readFile(new URL('../examples/demo.thrift',import.meta.url),'utf8');
const sources={'common.thrift':common,'demo.thrift':demo,'z.thrift':`include "common.thrift"
include "demo.thrift"
union Choice {1:string text, 2:i64 number}
struct Empty {}
union EmptyUnion {}
typedef common.Record Copy
typedef map<list<i32>,set<double>> Nested
struct Scalars {1:required bool flag, 2:i8 small, 3:i16 medium, 4:i32 whole, 5:i64 large, 6:double fraction, 7:list<Choice> choices, 8:map<string,list<i64>> mapping}
const i64 LIMIT = 9223372036854775807
const i32 WIDE = 2147483648
service VoidService { void empty(), Empty get() }
`};
const test=`///|
test "generated recursive records preserve binary UUID unknown enum and exact i64" {
 let value = M0_Record::from_json(@json.parse("{\\\"id\\\":\\\"-9223372036854775808\\\",\\\"data\\\":{\\\"$binary\\\":\\\"00ff80\\\"},\\\"tag\\\":\\\"00112233-4455-6677-8899-aabbccddeeff\\\",\\\"state\\\":9876,\\\"child\\\":{\\\"id\\\":\\\"9223372036854775807\\\"}}"))
 assert_eq(value.f_1_id, -9223372036854775808L)
 assert_eq(value.f_3_data, Some(b"\\x00\\xff\\x80"))
 assert_eq(value.f_7_state, Some(M0_Status::{value: 9876}))
 for protocol in [@thrift.BinaryProtocol, @thrift.CompactProtocol] {
   assert_eq(M0_Record::decode(value.encode(protocol), protocol), value)
   assert_eq(M0_Record::from_value(value.to_value()), value)
 }
 let copied = M2_Copy::{value}; assert_eq(M2_Copy::decode(copied.encode(@thrift.CompactProtocol), @thrift.CompactProtocol), copied)
 assert_eq(m2_constant_LIMIT(), Json::string("9223372036854775807"))
 assert_eq(m2_constant_WIDE(), Json::number(2147483648.0))
}
///|
test "generated unions scalars nested containers empty records and validation" {
 let value = M2_Scalars::from_json(@json.parse("{\\\"flag\\\":true,\\\"small\\\":-128,\\\"medium\\\":32767,\\\"whole\\\":2147483647,\\\"large\\\":\\\"9223372036854775807\\\",\\\"fraction\\\":1.5,\\\"choices\\\":[{\\\"text\\\":\\\"yes\\\"},{\\\"number\\\":\\\"-1\\\"},{}],\\\"mapping\\\":[[\\\"x\\\",[\\\"1\\\",\\\"2\\\"]]]}"))
 for protocol in [@thrift.BinaryProtocol, @thrift.CompactProtocol] { assert_eq(M2_Scalars::decode(value.encode(protocol), protocol), value) }
 let empty = M2_Empty::from_json(Json::object({})); assert_eq(M2_Empty::from_value(empty.to_value()), empty)
 let union_ = M2_EmptyUnion::Unset; assert_eq(M2_EmptyUnion::from_value(union_.to_value()), union_)
 let nested = M2_Nested::{value: [([1, 2], [3.5, 4.5])]}; assert_eq(M2_Nested::decode(nested.encode(@thrift.CompactProtocol), @thrift.CompactProtocol), nested)
 let rejected = try { ignore(M2_Choice::from_json(@json.parse("{\\\"text\\\":\\\"x\\\",\\\"number\\\":\\\"1\\\"}"))); false } catch { _ => true }; assert_true(rejected)
 let missing = try { ignore(M0_Record::from_json(Json::object({}))); false } catch { _ => true }; assert_true(missing)
}
///|
test "generated inherited service requests replies oneway and typed exception results" {
 let args = Rpc_M1_Records_ping_Args::{f_1_message: Some("hello")}
 let request = m1_Records_ping_call(args, 41); assert_eq(request.sequence_id, 41); assert_eq(m1_Records_ping_read_call(request), args)
 let reply = m1_Records_ping_reply(Rpc_M1_Records_ping_Result::Success("hello"), 41); assert_eq(m1_Records_ping_read_reply(reply), Rpc_M1_Records_ping_Result::Success("hello"))
 let problem = M0_Problem::{f_1_code: Some(7), f_2_message: Some("bad")}
 let result = Rpc_M1_Records_fail_Result::Field_1(problem); assert_eq(m1_Records_fail_read_reply(m1_Records_fail_reply(result, 1)), result)
 let application = Rpc_M1_Records_fail_Result::ApplicationFailure(6, "server error"); assert_eq(m1_Records_fail_read_reply(m1_Records_fail_reply(application, 2)), application)
 assert_eq(m1_Records_notify_call(Rpc_M1_Records_notify_Args::{f_1_message: Some("oneway")}, 4).message_type, 4)
 let void_ = Rpc_M2_VoidService_empty_Result::Success(()); assert_eq(m2_VoidService_empty_read_reply(m2_VoidService_empty_reply(void_, 3)), void_)
}
`;
const results=[];
try{
  const schema=new Schema({root:'z.thrift',sources});const generated=generateMoonBit(schema);assert.deepEqual(generateMoonBit(schema),generated);schema.close();
  for(const [name,text] of Object.entries(generated))await fs.writeFile(path.join(directory,name),text);
  await fs.writeFile(path.join(directory,'bindings_wbtest.mbt'),test);
  for(const target of ['js','wasm-gc']){
    const run=spawnSync(moon,['test',path.basename(directory),'--target',target,'--deny-warn'],{cwd:root,env:process.env,encoding:'utf8',windowsHide:true,timeout:120000,maxBuffer:8*1024*1024});
    if(run.error||run.status!==0)throw Error(run.error?.message??run.stdout+run.stderr);
    assert.match(run.stdout+run.stderr,/Total tests: 3, passed: 3, failed: 0/);results.push({target,tests:3,passed:3});
  }
  // Minimal input catches unused generated helpers, and a container-only schema
  // catches non-record aliases without relying on the main service fixture.
  for(const source of ['','const bool ENABLED = true','enum Empty {}','service S {oneway void ping()}','service A {void B_c()} service A_B {void c()} const i32 X=7']){
    const minimal=new Schema({sources:{'main.thrift':source}});const generated=generateMoonBit(minimal);minimal.close();
    await fs.rm(path.join(directory,'bindings_wbtest.mbt'),{force:true});for(const [name,text] of Object.entries(generated))await fs.writeFile(path.join(directory,name),text);
    const run=spawnSync(moon,['check',path.basename(directory),'--target','js','--deny-warn'],{cwd:root,encoding:'utf8',windowsHide:true,timeout:30000});if(run.error||run.status!==0)throw Error(run.error?.message??run.stdout+run.stderr);
  }
  await fs.writeFile(new URL('../evidence/generated-validation.json',import.meta.url),JSON.stringify({utc:new Date().toISOString(),deterministic:true,backends:results,minimalSchemas:5,scope:'Generated public types and RPC bindings compiled and executed against MoonBit library, not Apache language-generator API equivalence'},null,2)+'\n');
  console.log('Generated bindings: 3 behavioral groups on JS and Wasm-GC, 5 minimal/colliding-name schemas, deterministic output passed');
}finally{if(path.dirname(path.resolve(directory))!==path.resolve(root)||!path.basename(directory).startsWith('generated_check_'))throw Error('Unsafe generated package cleanup');await fs.rm(directory,{recursive:true,force:true});}
