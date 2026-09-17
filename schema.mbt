///|
/// Resolved IDL modules. No filesystem access is performed by this value.
pub struct Schema {
  priv root : String
  priv modules : Map[String, IdlModule]
  priv imports : Map[String, Map[String, String]]
  priv definitions : Map[String, IdlDefinition]
  priv diagnostics : Array[String]
}

///|
fn idl_path(path : String) -> String {
  let path = path.replace_all(old="\\", new="/")
  let absolute = path.has_prefix("/")
  let parts = []
  for part in path.split("/") {
    if part == "" || part == "." {
      continue
    }
    if part == ".." && !parts.is_empty() && parts[parts.length() - 1] != ".." {
      ignore(parts.pop())
    } else {
      parts.push(part.to_owned())
    }
  }
  (if absolute { "/" } else { "" }) + parts.join("/")
}

///|
fn idl_join(owner : String, path : String) -> String {
  let path = path.replace_all(old="\\", new="/")
  if path.has_prefix("/") || (path.length() >= 2 && path[1:2] == ":") {
    return idl_path(path)
  }
  let parts = owner.split("/").map(x => x.to_owned()).collect()
  ignore(parts.pop())
  parts.push(path)
  idl_path(parts.join("/"))
}

///|
fn idl_stem(path : String) -> String {
  let parts = path.replace_all(old="\\", new="/").split("/").collect()
  let name = parts[parts.length() - 1].to_owned()
  if name.has_suffix(".thrift") {
    name[:name.length() - 7].to_owned()
  } else {
    name
  }
}

///|
fn definition_name(definition : IdlDefinition) -> String {
  match definition {
    Alias(n, _, _)
    | Constant(n, _, _)
    | Enumeration(n, _, _)
    | Record(n, _, _, _)
    | Service(n, _, _, _) => n
  }
}

///|
fn definition_owner(name : String) -> String {
  name.split("#").next().unwrap_or("").to_owned()
}

///|
fn Schema::find(
  self : Schema,
  owner : String,
  name : String,
) -> (String, IdlDefinition) raise SchemaError {
  if name.contains("#") {
    return match self.definitions.get(name) {
      Some(d) => (name, d)
      None => raise InvalidSchema("unknown definition " + name)
    }
  }
  let local_name = owner + "#" + name
  if self.definitions.get(local_name) is Some(definition) {
    return (local_name, definition)
  }
  let parts = name.split(".").map(x => x.to_owned()).collect()
  if parts.length() > 1 &&
    self.imports.get(owner) is Some(imports) &&
    imports.get(parts[0]) is Some(imported) {
    let name = imported + "#" + parts[1:].to_owned().join(".")
    if self.definitions.get(name) is Some(definition) {
      return (name, definition)
    }
  }
  raise InvalidSchema("unknown definition " + owner + ":" + name)
}

///|
fn Schema::resolve(
  self : Schema,
  owner : String,
  t : IdlType,
  depth : Int,
) -> IdlType raise SchemaError {
  if depth > 64 {
    raise InvalidSchema("type alias or nesting cycle/limit")
  }
  match t {
    Base(_) => t
    Named(name) => {
      let (name, definition) = self.find(owner, name)
      match definition {
        Alias(_, target, _) =>
          self.resolve(definition_owner(name), target, depth + 1)
        Record(_, _, _, _) | Enumeration(_, _, _) => Named(name)
        _ => raise InvalidSchema("not a field type: " + name)
      }
    }
    ListOf(elem) => {
      let elem = self.resolve(owner, elem, depth + 1)
      if elem == Base("void") {
        raise InvalidSchema("void list element")
      }
      ListOf(elem)
    }
    SetOf(elem) => {
      let elem = self.resolve(owner, elem, depth + 1)
      if elem == Base("void") {
        raise InvalidSchema("void set element")
      }
      SetOf(elem)
    }
    MapOf(key, value) => {
      let key = self.resolve(owner, key, depth + 1)
      let value = self.resolve(owner, value, depth + 1)
      if key == Base("void") || value == Base("void") {
        raise InvalidSchema("void map type")
      }
      MapOf(key, value)
    }
  }
}

///|
fn Schema::wire_kind(self : Schema, t : IdlType) -> Kind raise SchemaError {
  match t {
    Base(name) =>
      match name {
        "bool" => BoolKind
        "byte" => ByteKind
        "i16" => I16Kind
        "i32" => I32Kind
        "i64" => I64Kind
        "double" => DoubleKind
        "string" | "binary" => BinaryKind
        "uuid" => UuidKind
        _ => raise InvalidSchema("void is not a wire value")
      }
    ListOf(_) => ListKind
    SetOf(_) => SetKind
    MapOf(_, _) => MapKind
    Named(name) =>
      match self.definitions.get(name) {
        Some(Enumeration(_, _, _)) => I32Kind
        Some(Record(_, _, _, _)) => StructKind
        _ => raise InvalidSchema("unresolved schema type")
      }
  }
}

///|
fn load_idl_modules(
  name : String,
  sources : Map[String, String],
  modules : Map[String, IdlModule],
  imports : Map[String, Map[String, String]],
  active : Array[String],
  diagnostics : Array[String],
  include_paths : Array[String],
) -> Unit raise SchemaError {
  if active.contains(name) {
    raise InvalidSchema("circular IDL include " + name)
  }
  if modules.contains(name) {
    return
  }
  if active.length() >= 32 || modules.length() >= 128 {
    raise InvalidSchema("IDL include limit")
  }
  let text = match sources.get(name) {
    Some(s) => s
    None => raise InvalidSchema("missing IDL source " + name)
  }
  let parsed = parse_idl(text, source=name)
  active.push(name)
  defer ignore(active.pop())
  let aliases = Map([])
  for include_path in parsed.includes {
    let mut target = idl_join(name, include_path)
    let import_name = idl_stem(include_path)
    if !sources.contains(target) {
      for directory in include_paths {
        let candidate = idl_path(directory + "/" + include_path)
        if sources.contains(candidate) {
          target = candidate
          break
        }
      }
    }
    if !sources.contains(target) {
      diagnostics.push(
        "missing include " + target + " (ignored unless referenced)",
      )
      continue
    }
    if aliases.contains(import_name) {
      raise InvalidSchema("duplicate include alias " + import_name)
    }
    aliases[import_name] = target
    load_idl_modules(
      target, sources, modules, imports, active, diagnostics, include_paths,
    )
  }
  modules[name] = parsed
  imports[name] = aliases
}

///|
/// Compile in-memory .thrift files, following includes relative to each source.
pub fn compile_schema(
  root : String,
  sources : Map[String, String],
  include_paths? : Array[String] = [],
) -> Schema raise SchemaError {
  if sources.length() > 128 {
    raise InvalidSchema("IDL source count limit")
  }
  let normalized = Map([])
  let mut size = 0
  for path, text in sources {
    let path = idl_path(path)
    if normalized.contains(path) {
      raise InvalidSchema("duplicate normalized IDL path")
    }
    size += text.length()
    if size > 4000000 {
      raise InvalidSchema("IDL aggregate source limit")
    }
    normalized[path] = text
  }
  let root = idl_path(root)
  let modules = Map([])
  let imports = Map([])
  let definitions = Map([])
  let diagnostics = []
  load_idl_modules(
    root,
    normalized,
    modules,
    imports,
    [],
    diagnostics,
    include_paths,
  )
  for owner, module_ in modules {
    for definition in module_.definitions {
      definitions[owner + "#" + definition_name(definition)] = definition
    }
  }
  if definitions.length() > 20000 {
    raise InvalidSchema("IDL aggregate definition limit")
  }
  let schema : Schema = { root, modules, imports, definitions, diagnostics, }
  for name, definition in definitions {
    let owner = definition_owner(name)
    match definition {
      Alias(_, target, _) => {
        let t = schema.resolve(owner, target, 0)
        if t == Base("void") {
          raise InvalidSchema("void typedef")
        }
      }
      Enumeration(_, _, _) => ()
      Constant(_, t, value) => {
        let t = schema.resolve(owner, t, 0)
        ignore(schema.const_json(owner, t, value, [], 0))
      }
      Record(_, flavor, fields, _) => {
        if flavor == "union" &&
          fields.filter(f => f.default_value != None).length() > 1 {
          raise InvalidSchema("union may have only one default field")
        }
        schema.check_fields(owner, fields, false)
      }
      Service(_, parent, methods, _) => {
        if parent is Some(parent) {
          let (_, base) = schema.find(owner, parent)
          if !(base is Service(_, _, _, _)) {
            raise InvalidSchema("service parent is not a service")
          }
        }
        for function_ in methods {
          ignore(schema.resolve(owner, function_.return_type, 0))
          schema.check_fields(owner, function_.arguments, false)
          schema.check_fields(owner, function_.exceptions, true)
        }
        ignore(schema.service_methods(owner, name, []))
      }
    }
  }
  schema
}

///|
fn Schema::check_fields(
  self : Schema,
  owner : String,
  fields : Array[IdlField],
  exceptions : Bool,
) -> Unit raise SchemaError {
  for field in fields {
    let t = self.resolve(owner, field.field_type, 0)
    if t == Base("void") {
      raise InvalidSchema("void field")
    }
    if exceptions {
      let valid = match t {
        Named(name) =>
          self.definitions.get(name) is Some(Record(_, "exception", _, _))
        _ => false
      }
      if !valid {
        raise InvalidSchema("throws field must name an exception")
      }
    }
    if field.default_value is Some(value) {
      ignore(self.const_json(owner, t, value, [], 0))
    }
  }
}

///|
fn Schema::service_methods(
  self : Schema,
  owner : String,
  name : String,
  trail : Array[String],
) -> Array[(String, IdlMethod)] raise SchemaError {
  let (name, definition) = self.find(owner, name)
  if trail.contains(name) || trail.length() >= 64 {
    raise InvalidSchema("service inheritance cycle/limit")
  }
  match definition {
    Service(_, parent, methods, _) => {
      let owner = definition_owner(name)
      trail.push(name)
      defer ignore(trail.pop())
      let result = match parent {
        None => []
        Some(parent) => self.service_methods(owner, parent, trail)
      }
      for function_ in methods {
        if result.any(x => x.1.name == function_.name) {
          raise InvalidSchema("duplicate inherited method " + function_.name)
        }
        result.push((owner, function_))
      }
      result
    }
    _ => raise InvalidSchema("not a service: " + name)
  }
}

///|
pub fn Schema::get_method(
  self : Schema,
  service : String,
  name : String,
) -> IdlMethod raise SchemaError {
  for pair in self.service_methods(self.root, service, []) {
    if pair.1.name == name {
      return pair.1
    }
  }
  raise InvalidSchema("unknown service method " + name)
}

///|
pub fn Schema::service_functions(
  self : Schema,
  service : String,
) -> Array[IdlMethod] raise SchemaError {
  self.service_methods(self.root, service, []).map(pair => pair.1)
}

///|
fn Schema::method_owner(
  self : Schema,
  service : String,
  name : String,
) -> (String, IdlMethod) raise SchemaError {
  for pair in self.service_methods(self.root, service, []) {
    if pair.1.name == name {
      return pair
    }
  }
  raise InvalidSchema("unknown service method " + name)
}

///|
pub fn Schema::services(self : Schema) -> Array[String] {
  let out = []
  for definition in self.modules[self.root].definitions {
    if definition is Service(name, _, _, _) {
      out.push(name)
    }
  }
  out
}

///|
pub fn Schema::get_module(self : Schema) -> IdlModule {
  self.modules[self.root]
}

///|
pub fn Schema::warnings(self : Schema) -> Array[String] {
  self.diagnostics.copy()
}
