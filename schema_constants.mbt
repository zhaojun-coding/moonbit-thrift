///|
/// Compiler-level constants retain values outside their wire integer width.
/// The wire conversion validates widths separately when values are serialized.
fn Schema::const_json(
  self : Schema,
  owner : String,
  t : IdlType,
  value : IdlConst,
  trail : Array[String],
  depth : Int,
  budget? : Ref[Int] = Ref(0),
) -> Json raise SchemaError {
  schema_tick(budget, depth)
  if value is NameConstant(name) {
    if name == "true" || name == "false" {
      return self.const_json(
        owner,
        t,
        IntegerConstant(if name == "true" { 1L } else { 0L }),
        trail,
        depth + 1,
        budget~,
      )
    }
    if t is Named(target) {
      match self.definitions.get(target) {
        Some(Record(_, _, _, _)) =>
          raise InvalidSchema("struct default requires a map literal")
        Some(Enumeration(_, _, _)) =>
          if !name.contains(".") {
            raise InvalidSchema("enum constant identifier must be qualified")
          }
        _ => ()
      }
    }
    if self.enum_number(owner, t, name) is Some(n) {
      return self.const_json(
        owner,
        t,
        IntegerConstant(n.to_int64()),
        trail,
        depth + 1,
        budget~,
      )
    }
    let (name, definition) = self.find(owner, name)
    if trail.contains(name) {
      raise InvalidSchema("circular constant " + name)
    }
    if definition is Constant(_, declared, constant) {
      let context = definition_owner(name)
      let declared = self.resolve(context, declared, 0)
      // Apache 0.24 resolves an integer-initialized double through its double slot.
      let constant = if declared == Base("double") &&
        constant is IntegerConstant(_) {
        FloatConstant(0.0)
      } else {
        constant
      }
      trail.push(name)
      defer ignore(trail.pop())
      return self.const_json(context, t, constant, trail, depth + 1, budget~)
    }
    raise InvalidSchema("not a constant " + name)
  }
  match (t, value) {
    (Base("bool"), IntegerConstant(n)) => (n != 0L).to_json()
    (Base("byte" | "i16" | "i32" | "double"), IntegerConstant(n)) =>
      Json::number(n.to_double(), repr=n.to_string())
    (Base("i64"), IntegerConstant(n)) => n.to_string().to_json()
    (Named(name), IntegerConstant(n)) if self.definitions.get(name)
      is Some(Enumeration(_, _, _)) =>
      Json::number(n.to_double(), repr=n.to_string())
    (Base("double"), FloatConstant(n)) =>
      if n.is_nan() {
        "NaN".to_json()
      } else if n.is_inf() {
        (if n < 0.0 { "-Infinity" } else { "Infinity" }).to_json()
      } else {
        n.to_json()
      }
    (Base("string"), StringConstant(s)) => s.to_json()
    (Base("binary"), StringConstant(s)) =>
      Json::object({ "$binary": schema_hex(@utf8.encode(s)).to_json() })
    (Base("uuid"), StringConstant(s)) => {
      ignore(schema_uuid(s))
      s.to_lower().to_json()
    }
    (ListOf(elem) | SetOf(elem), ListConstant(values)) =>
      Json::array(
        values.map(v => {
          self.const_json(owner, elem, v, trail, depth + 1, budget~)
        }),
      )
    (MapOf(key, tvalue), MapConstant(values)) =>
      Json::array(
        values.map(pair => {
          Json::array([
            self.const_json(owner, key, pair.0, trail, depth + 1, budget~),
            self.const_json(owner, tvalue, pair.1, trail, depth + 1, budget~),
          ])
        }),
      )
    (Named(name), MapConstant(values)) => {
      let fields = match self.definitions.get(name) {
        Some(Record(_, _, fields, _)) => fields
        _ => raise InvalidSchema("map constant requires struct type")
      }
      let object = Map([])
      for pair in values {
        let label = match pair.0 {
          StringConstant(s) | NameConstant(s) => s
          _ => raise InvalidSchema("struct constant key must name a field")
        }
        let field = match fields.iter().find_first(f => f.name == label) {
          Some(field) => field
          None => raise InvalidSchema("unknown struct constant field " + label)
        }
        object[label] = self.const_json(
          owner,
          self.resolve(definition_owner(name), field.field_type, 0),
          pair.1,
          trail,
          depth + 1,
          budget~,
        )
      }
      Json::object(object)
    }
    _ => raise InvalidSchema("constant type mismatch")
  }
}
