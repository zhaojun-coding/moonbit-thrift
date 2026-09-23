import fs from 'node:fs';
import assert from 'node:assert/strict';
import {generate} from '../web/moonthrift-codegen.mjs';
const input=fs.readFileSync(new URL('../examples/moonthrift.thrift',import.meta.url),'utf8');
const result=JSON.parse(generate(input));
assert.equal(result.ok,true,result.error);
fs.writeFileSync(new URL('../examples/moonthrift_model/model.mbt',import.meta.url),result.content);
console.log('Generated model with unmodified Xpeng/moonthrift 0.2.0; run moon fmt before comparing committed output');
