///|
fn schema_tick(work : Ref[Int], depth : Int) -> Unit raise SchemaError {
  work.val += 1
  if work.val > 100000 || depth > 64 {
    raise InvalidSchema("schema value node/depth limit")
  }
}

///|
fn schema_integer(n : Int64, t : IdlType) -> Value raise SchemaError {
  match t {
    Base("bool") => Bool(n != 0L)
    Base("byte") =>
      if n >= -128L && n <= 127L {
        Byte(n.to_int())
      } else {
        raise InvalidSchema("byte out of range")
      }
    Base("i16") =>
      if n >= -32768L && n <= 32767L {
        I16(n.to_int())
      } else {
        raise InvalidSchema("i16 out of range")
      }
    Base("i32") | Named(_) =>
      if n >= -2147483648L && n <= 2147483647L {
        I32(n.to_int())
      } else {
        raise InvalidSchema("i32/enum out of range")
      }
    Base("i64") => I64(n)
    Base("double") => Double(n.to_double())
    _ => raise InvalidSchema("integer constant has incompatible type")
  }
}

///|
fn schema_hex(data : Bytes) -> String {
  let digits = "0123456789abcdef"
  let out = StringBuilder()
  for byte in data {
    let n = byte.to_int()
    out.write_string(digits[n >> 4:(n >> 4) + 1].to_owned())
    out.write_string(digits[n & 15:(n & 15) + 1].to_owned())
  }
  out.to_string()
}

///|
fn schema_unhex(text : String) -> Bytes raise SchemaError {
  if text.length() > 2097152 {
    raise InvalidSchema("hex byte limit")
  }
  let chars = text.to_array()
  if chars.length() % 2 != 0 {
    raise InvalidSchema("odd hex length")
  }
  let bytes = []
  let mut value = 0
  for i, c in chars {
    if !c.is_ascii_hexdigit() {
      raise InvalidSchema("invalid hex")
    }
    let n = if c <= '9' {
      c.to_int() - 48
    } else {
      c.to_ascii_lowercase().to_int() - 87
    }
    if i % 2 == 0 {
      value = n << 4
    } else {
      bytes.push((value + n).to_byte())
    }
  }
  Bytes::from_array(bytes)
}

///|
fn schema_uuid(text : String) -> Bytes raise SchemaError {
  if text.length() != 36 ||
    text[8:9] != "-" ||
    text[13:14] != "-" ||
    text[18:19] != "-" ||
    text[23:24] != "-" {
    raise InvalidSchema("UUID requires canonical hyphenated spelling")
  }
  let data = schema_unhex(text.replace_all(old="-", new=""))
  if data.length() != 16 {
    raise InvalidSchema("UUID requires 16 bytes")
  }
  data
}

///|
fn Schema::enum_number(
  self : Schema,
  owner : String,
  t : IdlType,
  name : String,
) -> Int? {
  let mut target : IdlDefinition? = None
  let mut label = name
  let parts = name.split(".").map(s => s.to_owned()).collect()
  if parts.length() > 1 {
    label = parts[parts.length() - 1]
    let prefix = parts[:parts.length() - 1].to_owned().join(".")
    let resolved = self.find(owner, prefix) catch { _ => return None }
    target = Some(resolved.1)
  } else if t is Named(target_name) {
    target = self.definitions.get(target_name)
  }
  if target is Some(Enumeration(_, values, _)) {
    for pair in values {
      if pair.0 == label {
        return Some(pair.1)
      }
    }
  }
  None
}

///|
fn Schema::const_value(
  self : Schema,
  owner : String,
  t : IdlType,
  value : IdlConst,
  trail : Array[String],
  depth : Int,
  budget? : Ref[Int] = Ref(0),
) -> Value raise SchemaError {
  let json = self.const_json(owner, t, value, trail, depth, budget~)
  self.from_json_type(owner, t, json, budget, depth)
}

///|
fn json_integer(input : Json) -> Int64 raise SchemaError {
  match input {
    String(s) => {
      let cs = s.to_array()
      if cs.is_empty() {
        raise InvalidSchema("empty integer")
      }
      for i, c in cs {
        if !idl_digit(c) && !(i == 0 && (c == '-' || c == '+')) {
          raise InvalidSchema("invalid integer spelling")
        }
      }
      @strconv.parse_int64(s) catch {
        _ => raise InvalidSchema("integer outside signed 64-bit range")
      }
    }
    Number(n, ..) =>
      if !n.is_nan() &&
        !n.is_inf() &&
        n == n.trunc() &&
        n.abs() <= 9007199254740991.0 {
        n.to_int64()
      } else {
        raise InvalidSchema(
          "JSON integer must be safe and integral; use a decimal string for i64",
        )
      }
    _ => raise InvalidSchema("expected integer")
  }
}

///|
fn Schema::fields_from_json(
  self : Schema,
  owner : String,
  fields : Array[IdlField],
  input : Json,
  union : Bool,
  work : Ref[Int],
  depth : Int,
) -> Value raise SchemaError {
  let object = match input {
    Object(fields) => fields
    _ => raise InvalidSchema("expected JSON object for struct")
  }
  for key, _ in object {
    if !fields.any(f => f.name == key) {
      raise InvalidSchema("unknown field " + key)
    }
  }
  let result = []
  for field in fields {
    let t = self.resolve(owner, field.field_type, 0)
    match object.get(field.name) {
      Some(Null) =>
        if field.requiredness == "required" {
          raise InvalidSchema("required field " + field.name + " is null")
        }
      Some(v) =>
        result.push(
          (field.id, self.from_json_type(owner, t, v, work, depth + 1)),
        )
      None =>
        match field.default_value {
          Some(value) =>
            result.push(
              (
                field.id,
                self.const_value(owner, t, value, [], depth + 1, budget=work),
              ),
            )
          None =>
            if field.requiredness == "required" {
              raise InvalidSchema("missing required field " + field.name)
            }
        }
    }
  }
  if union && result.length() > 1 {
    raise InvalidSchema("union permits at most one field")
  }
  Struct(result)
}

///|
fn Schema::from_json_type(
  self : Schema,
  owner : String,
  t : IdlType,
  input : Json,
  work : Ref[Int],
  depth : Int,
) -> Value raise SchemaError {
  schema_tick(work, depth)
  match (t, input) {
    (Base("bool"), True) => Bool(true)
    (Base("bool"), False) => Bool(false)
    (Base("byte" | "i16" | "i32" | "i64"), _) =>
      schema_integer(json_integer(input), t)
    (Base("double"), Number(n, ..)) => Double(n)
    (Base("double"), String(s)) => {
      let n = if s == "NaN" {
        0.0 / 0.0
      } else if s == "Infinity" {
        1.0 / 0.0
      } else if s == "-Infinity" {
        -1.0 / 0.0
      } else {
        @strconv.parse_double(s) catch {
          _ => raise InvalidSchema("invalid double")
        }
      }
      Double(n)
    }
    (Base("string"), String(s)) => Binary(@utf8.encode(s))
    (Base("binary"), { "$binary": String(s), .. }) => Binary(schema_unhex(s))
    (Base("uuid"), String(s)) => Uuid(schema_uuid(s))
    (ListOf(elem) | SetOf(elem), Array(values)) => {
      let items = values.map(v => {
        self.from_json_type(owner, elem, v, work, depth + 1)
      })
      let kind = self.wire_kind(elem)
      if t is ListOf(_) {
        List(kind, items)
      } else {
        SetValue(kind, items)
      }
    }
    (MapOf(key, tvalue), Array(values)) => {
      let items = []
      for pair in values {
        if pair is Array([k, v]) {
          items.push(
            (
              self.from_json_type(owner, key, k, work, depth + 1),
              self.from_json_type(owner, tvalue, v, work, depth + 1),
            ),
          )
        } else {
          raise InvalidSchema("map uses an array of [key,value] entries")
        }
      }
      MapValue(Some(self.wire_kind(key)), Some(self.wire_kind(tvalue)), items)
    }
    (Named(name), _) =>
      match self.definitions.get(name) {
        Some(Enumeration(_, _, _)) => {
          if input is String(label) {
            if self.enum_number(definition_owner(name), t, label) is Some(n) {
              return I32(n)
            }
          }
          schema_integer(json_integer(input), t)
        }
        Some(Record(_, flavor, fields, _)) =>
          self.fields_from_json(
            definition_owner(name),
            fields,
            input,
            flavor == "union",
            work,
            depth,
          )
        _ => raise InvalidSchema("unresolved JSON value type")
      }
    _ => raise InvalidSchema("JSON value does not match schema type")
  }
}

///|
/// Convert named-field JSON to a wire tree, applying explicit IDL defaults.
/// i64 uses decimal strings, binary uses {"$binary":"hex"}, and maps use pair arrays.
pub fn Schema::from_json(
  self : Schema,
  name : String,
  input : Json,
) -> Value raise SchemaError {
  let t = self.resolve(self.root, Named(name), 0)
  self.from_json_type(self.root, t, input, Ref(0), 0)
}

///|
fn Schema::read_fields(
  self : Schema,
  owner : String,
  fields : Array[IdlField],
  wire : Array[(Int, Value)],
  union : Bool,
  work : Ref[Int],
  depth : Int,
) -> Value raise SchemaError {
  let known = Map([])
  for pair in wire {
    for field in fields {
      if field.id == pair.0 {
        let t = self.resolve(owner, field.field_type, 0)
        if self.read_type(owner, t, pair.1, work, depth + 1) is Some(value) {
          known[field.id] = value
        }
        break
      }
    }
  }
  if union && known.length() > 1 {
    raise InvalidSchema("wire union has multiple fields")
  }
  let result = []
  for field in fields {
    if known.get(field.id) is Some(value) {
      result.push((field.id, value))
    } else if field.requiredness == "required" {
      raise InvalidSchema("missing required wire field " + field.name)
    } else if field.default_value is Some(value) {
      result.push(
        (
          field.id,
          self.const_value(
            owner,
            self.resolve(owner, field.field_type, 0),
            value,
            [],
            depth + 1,
            budget=work,
          ),
        ),
      )
    }
  }
  if union && result.length() > 1 {
    raise InvalidSchema("union defaults select multiple fields")
  }
  Struct(result)
}

///|
fn Schema::read_type(
  self : Schema,
  owner : String,
  t : IdlType,
  wire : Value,
  work : Ref[Int],
  depth : Int,
) -> Value? raise SchemaError {
  schema_tick(work, depth)
  if wire.kind() != self.wire_kind(t) {
    return None
  }
  match (t, wire) {
    (Named(name), Struct(fields)) =>
      match self.definitions.get(name) {
        Some(Record(_, flavor, expected, _)) =>
          Some(
            self.read_fields(
              definition_owner(name),
              expected,
              fields,
              flavor == "union",
              work,
              depth,
            ),
          )
        _ => None
      }
    (ListOf(elem), List(kind, values))
    | (SetOf(elem), SetValue(kind, values)) => {
      if self.wire_kind(elem) != kind {
        return None
      }
      let items = []
      for value in values {
        match self.read_type(owner, elem, value, work, depth + 1) {
          Some(v) => items.push(v)
          None => return None
        }
      }
      Some(
        if t is ListOf(_) {
          List(kind, items)
        } else {
          SetValue(kind, items)
        },
      )
    }
    (MapOf(key, value), MapValue(k, v, values)) => {
      let kk = self.wire_kind(key)
      let vk = self.wire_kind(value)
      if !values.is_empty() && (k != Some(kk) || v != Some(vk)) {
        return None
      }
      let items = []
      for pair in values {
        let k = match self.read_type(owner, key, pair.0, work, depth + 1) {
          Some(v) => v
          None => return None
        }
        let v = match self.read_type(owner, value, pair.1, work, depth + 1) {
          Some(v) => v
          None => return None
        }
        items.push((k, v))
      }
      Some(MapValue(Some(kk), Some(vk), items))
    }
    _ => Some(wire)
  }
}

///|
fn Schema::json_type(
  self : Schema,
  owner : String,
  t : IdlType,
  value : Value,
  depth : Int,
) -> Json raise SchemaError {
  if depth > 64 {
    raise InvalidSchema("schema JSON depth limit")
  }
  match (t, value) {
    (_, Bool(n)) => n.to_json()
    (_, Byte(n) | I16(n) | I32(n)) => n.to_json()
    (_, I64(n)) => n.to_string().to_json()
    (_, Double(n)) =>
      if n.is_nan() {
        "NaN".to_json()
      } else if n.is_inf() {
        (if n < 0.0 { "-Infinity" } else { "Infinity" }).to_json()
      } else {
        n.to_json()
      }
    (Base("string"), Binary(data)) => {
      let text = @utf8.decode(data) catch {
        _ => raise InvalidSchema("invalid UTF-8 string")
      }
      text.to_json()
    }
    (_, Binary(data)) => Json::object({ "$binary": schema_hex(data).to_json() })
    (_, Uuid(data)) => {
      let hex = schema_hex(data)
      if hex.length() != 32 {
        raise InvalidSchema("invalid UUID size")
      }
      (hex[:8].to_owned() +
      "-" +
      hex[8:12].to_owned() +
      "-" +
      hex[12:16].to_owned() +
      "-" +
      hex[16:20].to_owned() +
      "-" +
      hex[20:].to_owned()).to_json()
    }
    (ListOf(elem), List(_, values)) | (SetOf(elem), SetValue(_, values)) =>
      Json::array(values.map(v => self.json_type(owner, elem, v, depth + 1)))
    (MapOf(key, tvalue), MapValue(_, _, values)) =>
      Json::array(
        values.map(pair => {
          Json::array([
            self.json_type(owner, key, pair.0, depth + 1),
            self.json_type(owner, tvalue, pair.1, depth + 1),
          ])
        }),
      )
    (Named(name), Struct(values)) =>
      match self.definitions.get(name) {
        Some(Record(_, _, fields, _)) =>
          self.fields_json(definition_owner(name), fields, values, depth)
        _ => raise InvalidSchema("unknown struct")
      }
    _ => raise InvalidSchema("wire value does not match schema")
  }
}

///|
fn Schema::fields_json(
  self : Schema,
  owner : String,
  fields : Array[IdlField],
  values : Array[(Int, Value)],
  depth : Int,
) -> Json raise SchemaError {
  let object = Map([])
  for pair in values {
    for field in fields {
      if field.id == pair.0 {
        object[field.name] = self.json_type(
          owner,
          self.resolve(owner, field.field_type, 0),
          pair.1,
          depth + 1,
        )
        break
      }
    }
  }
  Json::object(object)
}

///|
/// Read a wire tree with unknown/type-mismatched fields skipped and required fields checked.
pub fn Schema::to_json(
  self : Schema,
  name : String,
  value : Value,
) -> Json raise SchemaError {
  let t = self.resolve(self.root, Named(name), 0)
  let value = match self.read_type(self.root, t, value, Ref(0), 0) {
    Some(v) => v
    None => raise InvalidSchema("root wire type mismatch")
  }
  self.json_type(self.root, t, value, 0)
}

///|
pub fn Schema::encode_json(
  self : Schema,
  name : String,
  input : Json,
  protocol : Protocol,
) -> Bytes raise {
  encode(self.from_json(name, input), protocol)
}

///|
pub fn Schema::decode_json(
  self : Schema,
  name : String,
  data : Bytes,
  protocol : Protocol,
) -> Json raise {
  let t = self.resolve(self.root, Named(name), 0)
  self.to_json(name, decode(data, self.wire_kind(t), protocol))
}
