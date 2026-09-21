import {Schema} from './thrift.mjs';

// Emit ordinary MoonBit source. The generated package delegates schema validation
// and wire encoding to the same public library used by hand-written callers.
const quote=s=>'"'+[...s].map(c=>c==='"'?'\\"':c==='\\'?'\\\\':c==='\n'?'\\n':c==='\r'?'\\r':c==='\t'?'\\t':c.codePointAt(0)<32||[0x2028,0x2029].includes(c.codePointAt(0))?`\\u{${c.codePointAt(0).toString(16)}}`:c).join('')+'"';
const ident=s=>[...s].map(c=>/[A-Za-z0-9_]/.test(c)?c:`_${c.codePointAt(0).toString(16)}_`).join('');
const typeAt=(v,id='typeId',detail='type')=>v[detail]??{typeId:v[id]};
const fieldName=f=>`f_${f.key<0?'n'+(-f.key):f.key}_${ident(f.name).toLowerCase()}`;
const branch=f=>`Field_${f.key<0?'n'+(-f.key):f.key}`;

export function generateMoonBit(schema,{library='zhaojun-coding/thrift'}={}){
  if(!(schema instanceof Schema))throw new TypeError('schema must be a Schema');
  if(!/^[A-Za-z0-9_/-]+$/.test(library))throw new TypeError('invalid library package name');
  const modules=Object.keys(schema.sources).sort().map((source,i)=>{
    const local=new Schema({root:source,sources:schema.sources,includePaths:schema.includePaths});
    try{return {source,index:i,description:local.description};}finally{local.close();}
  });
  const named=new Map(),services=new Map(),symbols=[],typeNames=new Set(),functionNames=new Set();
  function unique(name,used){let candidate=name,index=0;while(used.has(candidate))candidate=`${name}_G${++index}`;used.add(candidate);return candidate;}
  const key=(module,name)=>module.source+'#'+name;
  for(const module of modules){
    for(const [kind,items] of [['enum',module.description.enums],['record',module.description.structs],['alias',module.description.typedefs]])
      for(const item of items){const entry={module,item,kind,name:unique(`M${module.index}_${ident(item.name)}`,typeNames)};named.set(key(module,item.name),entry);symbols.push({source:module.source,idl:item.name,moonbit:entry.name,kind});}
    for(const item of module.description.services)services.set(key(module,item.name),{module,item,name:`m${module.index}_${ident(item.name)}`});
  }
  function lookup(module,name,table=named){
    if(!name.includes('.')){const entry=table.get(key(module,name));if(entry)return entry;}
    else{
      const parts=name.split('.'),label=parts.pop(),prefix=parts.join('.');
      const matches=modules.filter(m=>m.description.name===prefix).map(m=>table.get(key(m,label))).filter(Boolean);
      if(matches.length===1)return matches[0];
    }
    throw new Error(`Cannot uniquely resolve generated type/service ${module.source}:${name}; colliding include stems require distinct names`);
  }
  function mbType(module,t){
    switch(t.typeId){
      case 'bool':return 'Bool';case 'i8':case 'i16':case 'i32':return 'Int';case 'i64':return 'Int64';case 'double':return 'Double';case 'string':case 'uuid':return 'String';case 'binary':return 'Bytes';case 'void':return 'Unit';
      case 'enum':case 'struct':case 'exception':return lookup(module,t.class).name;
      case 'list':case 'set':return `Array[${mbType(module,typeAt(t,'elemTypeId','elemType'))}]`;
      case 'map':return `Array[(${mbType(module,typeAt(t,'keyTypeId','keyType'))}, ${mbType(module,typeAt(t,'valueTypeId','valueType'))})]`;
      default:throw new Error('Unsupported generated type '+t.typeId);
    }
  }
  const helpers=new Map(),chunks=[];let next=0;
  function converter(module,t){
    if(['enum','struct','exception'].includes(t.typeId)){const entry=lookup(module,t.class);return {encode:`${entry.name}::to_json`,decode:`decode_${entry.name}`};}
    const signature=JSON.stringify([module.source,t]);if(helpers.has(signature))return helpers.get(signature);
    const c={encode:`encode_t${next}`,decode:`decode_t${next++}`};helpers.set(signature,c);
    let enc,dec;
    switch(t.typeId){
      case 'bool':enc='value.to_json()';dec='match value { True => true; False => false; _ => bad_value() }';break;
      case 'i8':case 'i16':case 'i32':enc='value.to_json()';dec='match value { Number(n, ..) => n.to_int(); _ => bad_value() }';break;
      case 'i64':enc='value.to_string().to_json()';dec='match value { String(s) => @strconv.parse_int64(s) catch { _ => bad_value() }; _ => bad_value() }';break;
      case 'double':enc='if value.is_nan() { "NaN".to_json() } else if value.is_inf() { (if value < 0.0 { "-Infinity" } else { "Infinity" }).to_json() } else { value.to_json() }';dec='match value { Number(n, ..) => n; String("NaN") => 0.0 / 0.0; String("Infinity") => 1.0 / 0.0; String("-Infinity") => -1.0 / 0.0; _ => bad_value() }';break;
      case 'string':case 'uuid':enc='value.to_json()';dec='match value { String(s) => s; _ => bad_value() }';break;
      case 'binary':enc='Json::object({ "$binary": hex(value).to_json() })';dec='match value { { "$binary": String(s), .. } => unhex(s); _ => bad_value() }';break;
      case 'void':enc='ignore(value); Json::null()';dec='match value { Null => (); _ => bad_value() }';break;
      case 'list':case 'set':{
        const child=converter(module,typeAt(t,'elemTypeId','elemType'));
        enc=`Json::array(value.map(x => ${child.encode}(x)))`;dec=`match value { Array(xs) => xs.map(x => ${child.decode}(x)); _ => bad_value() }`;break;
      }
      case 'map':{
        const k=converter(module,typeAt(t,'keyTypeId','keyType')),v=converter(module,typeAt(t,'valueTypeId','valueType'));
        enc=`Json::array(value.map(x => Json::array([${k.encode}(x.0), ${v.encode}(x.1)])))`;
        dec=`match value { Array(xs) => xs.map(x => match x { Array([k, v]) => (${k.decode}(k), ${v.decode}(v)); _ => bad_value() }); _ => bad_value() }`;break;
      }
    }
    chunks.push(`fn ${c.encode}(value : ${mbType(module,t)}) -> Json { ${enc} }`, `fn ${c.decode}(value : Json) -> ${mbType(module,t)} raise @thrift.SchemaError { ${dec} }`);
    return c;
  }
  function record(module,item,name){
    const fields=item.fields;
    if(item.isUnion){
      chunks.push(`pub(all) enum ${name} {\n  Unset\n${fields.map(f=>`  ${branch(f)}(${mbType(module,typeAt(f))})`).join('\n')}\n} derive(Debug, Eq)`);
      chunks.push(`pub fn ${name}::to_json(self : ${name}) -> Json { match self { Unset => Json::object({}); ${fields.map(f=>`${branch(f)}(x) => Json::object({ ${quote(f.name)}: ${converter(module,typeAt(f)).encode}(x) })`).join('; ')} } }`);
      chunks.push(`fn decode_${name}(value : Json) -> ${name} raise @thrift.SchemaError {\n let obj = object(value)\n ${fields.map(f=>`if obj.get(${quote(f.name)}) is Some(x) { return ${branch(f)}(${converter(module,typeAt(f)).decode}(x)) }`).join('\n ')}\n Unset\n}`);
      if(!fields.length)chunks[chunks.length-1]=chunks[chunks.length-1].replace('let obj = object(value)','ignore(object(value))');
    }else{
      chunks.push(`pub(all) struct ${name} {\n${fields.map(f=>`  ${fieldName(f)} : ${mbType(module,typeAt(f))}${f.required==='required'?'':'?'}`).join('\n')}\n} derive(Debug, Eq)`);
      chunks.push(`pub fn ${name}::to_json(self : ${name}) -> Json { Json::object({ ${fields.map(f=>`${quote(f.name)}: ${f.required==='required'?`${converter(module,typeAt(f)).encode}(self.${fieldName(f)})`:`match self.${fieldName(f)} { Some(x) => ${converter(module,typeAt(f)).encode}(x); None => Json::null() }`}`).join(', ')} }) }`);
      chunks.push(`fn decode_${name}(value : Json) -> ${name} raise @thrift.SchemaError {\n let obj = object(value)\n ${name}::{ ${fields.map(f=>`${fieldName(f)}: ${f.required==='required'?`${converter(module,typeAt(f)).decode}(obj.get(${quote(f.name)}).unwrap_or(Json::null()))`:`match obj.get(${quote(f.name)}) { Some(Null) | None => None; Some(x) => Some(${converter(module,typeAt(f)).decode}(x)) }`}`).join(', ')} }\n}`);
      // Empty records must still validate the JSON object without an unused local.
      if(!fields.length){chunks[chunks.length-1]=chunks[chunks.length-1].replace('let obj = object(value)','ignore(object(value))');chunks[chunks.length-2]=chunks[chunks.length-2].replace('-> Json { Json::object','-> Json { ignore(self); Json::object');}
    }
  }
  for(const entry of named.values()){
    const {module,item,kind,name}=entry;
    if(kind==='enum'){
      chunks.push(`pub(all) struct ${name} { value : Int } derive(Debug, Eq)`,`pub fn ${name}::to_json(self : ${name}) -> Json { self.value.to_json() }`,`fn decode_${name}(value : Json) -> ${name} raise @thrift.SchemaError { match value { Number(n, ..) => { value: n.to_int() }; _ => bad_value() } }`);
      for(const [i,member] of item.members.entries())chunks.push(`pub fn ${name}::member_${i}_${ident(member.name).toLowerCase()}() -> ${name} { { value: ${member.value} } }`);
    }else if(kind==='record')record(module,item,name);
    else{
      const type=typeAt(item),c=converter(module,type);
      chunks.push(`pub(all) struct ${name} { value : ${mbType(module,type)} } derive(Debug, Eq)`,`pub fn ${name}::to_json(self : ${name}) -> Json { ${c.encode}(self.value) }`,`fn decode_${name}(value : Json) -> ${name} raise @thrift.SchemaError { { value: ${c.decode}(value) } }`);
    }
    const id=quote(key(module,item.name));
    chunks.push(`pub fn ${name}::from_json(value : Json) -> ${name} raise @thrift.SchemaError { let schema = schema(); decode_${name}(schema.to_json(${id}, schema.from_json(${id}, value))) }`,
      `pub fn ${name}::to_value(self : ${name}) -> @thrift.Value raise @thrift.SchemaError { schema().from_json(${id}, self.to_json()) }`,
      `pub fn ${name}::from_value(value : @thrift.Value) -> ${name} raise @thrift.SchemaError { decode_${name}(schema().to_json(${id}, value)) }`,
      `pub fn ${name}::encode(self : ${name}, protocol : @thrift.Protocol) -> Bytes raise { schema().encode_json(${id}, self.to_json(), protocol) }`,
      `pub fn ${name}::decode(bytes : Bytes, protocol : @thrift.Protocol) -> ${name} raise { decode_${name}(schema().decode_json(${id}, bytes, protocol)) }`);
  }
  function methods(service,trail=[]){
    if(trail.includes(service))throw new Error('Service inheritance cycle');
    return [...(service.item.extends?methods(lookup(service.module,service.item.extends,services),[...trail,service]):[]),...service.item.functions.map(item=>({module:service.module,item}))];
  }
  for(const service of services.values())for(const {module,item} of methods(service)){
    let prefix=`${service.name}_${ident(item.name)}`,suffix=0;
    const methodNames=['call','read_call','reply','read_reply'];
    while(methodNames.some(n=>functionNames.has(`${prefix}_${n}`)))prefix=`${service.name}_${ident(item.name)}_G${++suffix}`;
    for(const name of methodNames)functionNames.add(`${prefix}_${name}`);
    const name=unique(`Rpc_M${service.module.index}_${ident(service.item.name)}_${ident(item.name)}_Args`,typeNames),result=unique(`Rpc_M${service.module.index}_${ident(service.item.name)}_${ident(item.name)}_Result`,typeNames);
    record(module,{fields:item.arguments},name);
    symbols.push({source:service.module.source,idl:`${service.item.name}.${item.name}`,moonbit:name,call:`${prefix}_call`,reply:item.oneway?null:`${prefix}_reply`,kind:'method'});
    chunks.push(`pub fn ${prefix}_call(args : ${name}, sequence : Int) -> @thrift.Message raise @thrift.SchemaError { schema().make_call(${quote(key(service.module,service.item.name))}, ${quote(item.name)}, args.to_json(), sequence) }`,
      `pub fn ${prefix}_read_call(message : @thrift.Message) -> ${name} raise @thrift.SchemaError { decode_${name}(schema().read_call(${quote(key(service.module,service.item.name))}, message)) }`);
    if(item.oneway)continue;
    const rt=typeAt(item,'returnTypeId','returnType'),c=converter(module,rt);
    chunks.push(`pub(all) enum ${result} { Success(${mbType(module,rt)})\n${item.exceptions.map(f=>`${branch(f)}(${mbType(module,typeAt(f))})`).join('\n')}\n ApplicationFailure(Int, String) } derive(Debug, Eq)`);
    chunks.push(`pub fn ${prefix}_reply(result : ${result}, sequence : Int) -> @thrift.Message raise @thrift.SchemaError {\n let outcome = match result { Success(x) => @thrift.Success(${c.encode}(x)); ${item.exceptions.map(f=>`${branch(f)}(x) => @thrift.DeclaredException(${quote(f.name)}, ${converter(module,typeAt(f)).encode}(x));`).join(' ')} ApplicationFailure(code, message) => @thrift.ApplicationFailure(code, message) }\n schema().make_reply(${quote(key(service.module,service.item.name))}, ${quote(item.name)}, sequence, outcome)\n}`);
    chunks.push(`pub fn ${prefix}_read_reply(message : @thrift.Message) -> ${result} raise @thrift.SchemaError { match schema().read_reply(${quote(key(service.module,service.item.name))}, ${quote(item.name)}, message) {\n @thrift.Success(x) => Success(${c.decode}(x)); ${item.exceptions.map(f=>`@thrift.DeclaredException(${quote(f.name)}, x) => ${branch(f)}(${converter(module,typeAt(f)).decode}(x));`).join(' ')} @thrift.ApplicationFailure(code, message) => ApplicationFailure(code, message); _ => bad_value()\n} }`);
  }
  for(const module of modules)for(const item of module.description.constants){
    const name=unique(`m${module.index}_constant_${ident(item.name)}`,functionNames);
    chunks.push(`pub fn ${name}() -> Json raise { @json.parse(${quote(JSON.stringify(item.value))}) }`);
    symbols.push({source:module.source,idl:item.name,moonbit:name,kind:'constant-json'});
  }
  const supporting=[
    `pub suberror BindingError { InvalidBindingValue } derive(Debug)`,
    `fn[T] bad_value() -> T raise { raise InvalidBindingValue }`,
    `fn object(value : Json) -> Map[String, Json] raise @thrift.SchemaError { match value { Object(obj) => obj; _ => bad_value() } }`,
    `let cached_schema : Ref[@thrift.Schema?] = Ref(None)`,
    `pub fn schema() -> @thrift.Schema raise @thrift.SchemaError { match cached_schema.val { Some(s) => s; None => { let s = @thrift.compile_schema(${quote(schema.root)}, { ${Object.entries(schema.sources).sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>`${quote(k)}: ${quote(v)}`).join(', ')} }, include_paths=[${schema.includePaths.map(quote).join(', ')}]); cached_schema.val = Some(s); s } } }`,
  ];
  const all=chunks.join('\n');
  if(all.includes('hex(value)'))supporting.push(`fn hex(bytes : Bytes) -> String { let digits = "0123456789abcdef"; let out = StringBuilder(); for byte in bytes { let n = byte.to_int(); out.write_string(digits[n >> 4:(n >> 4) + 1].to_owned()); out.write_string(digits[n & 15:(n & 15) + 1].to_owned()) }; out.to_string() }`,
    `fn unhex(text : String) -> Bytes raise @thrift.SchemaError { let chars = text.to_array(); if chars.length() % 2 != 0 { return bad_value() }; let bytes = []; let mut value = 0; for i, c in chars { if !c.is_ascii_hexdigit() { return bad_value() }; let n = if c <= '9' { c.to_int() - 48 } else { c.to_ascii_lowercase().to_int() - 87 }; if i % 2 == 0 { value = n << 4 } else { bytes.push((value + n).to_byte()) } }; Bytes::from_array(bytes) }`);
  // Imports/helpers are demand-driven so generated minimal schemas pass deny-warn.
  if(!all.includes('object(value)'))supporting.splice(2,1);
  if(!all.includes('bad_value()')&&!all.includes('object(value)'))supporting.splice(0,2);
  const imports=[`${quote(library)} @thrift`,...(all.includes('@strconv.')?['"moonbitlang/core/string" @strconv']:[]),...(all.includes('@json.')?['"moonbitlang/core/json"']:[])];
  const code=`// Generated by moonbit-thrift; edit the IDL source instead.\n// Original field names and generated symbols are recorded in bindings.symbols.json.\n\n${[...supporting,...chunks].map(c=>'///|\n'+c).join('\n\n')}\n`.replaceAll('raise @thrift.SchemaError','raise');
  return {'bindings.mbt':code,'moon.pkg':`import {\n${imports.map(i=>'  '+i+',').join('\n')}\n}\n`,'bindings.symbols.json':JSON.stringify({generator:'moonbit-thrift',symbols},null,2)+'\n'};
}
