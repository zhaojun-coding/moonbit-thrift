///|
pub(all) enum RpcOutcome {
  Success(Json)
  DeclaredException(String, Json)
  ApplicationFailure(Int, String)
} derive(Debug, Eq)

///|
pub fn Schema::make_call(
  self : Schema,
  service : String,
  name : String,
  arguments : Json,
  sequence_id : Int,
) -> Message raise SchemaError {
  let (owner, function_) = self.method_owner(service, name)
  {
    name,
    sequence_id,
    message_type: if function_.oneway {
      4
    } else {
      1
    },
    body: self.fields_from_json(
      owner,
      function_.arguments,
      arguments,
      false,
      Ref(0),
      0,
    ),
  }
}

///|
pub fn Schema::read_call(
  self : Schema,
  service : String,
  request : Message,
) -> Json raise SchemaError {
  let (owner, function_) = self.method_owner(service, request.name)
  if request.message_type != (if function_.oneway { 4 } else { 1 }) {
    raise InvalidSchema("request message type does not match method")
  }
  let fields = match request.body {
    Struct(fields) => fields
    _ => raise InvalidSchema("RPC arguments must be a struct")
  }
  let values = match
    self.read_fields(owner, function_.arguments, fields, false, Ref(0), 0) {
    Struct(values) => values
    _ => []
  }
  self.fields_json(owner, function_.arguments, values, 0)
}

///|
/// Construct standard TApplicationException without an IDL dependency.
pub fn application_exception(
  name : String,
  sequence_id : Int,
  code : Int,
  message : String,
) -> Message {
  {
    name,
    sequence_id,
    message_type: 3,
    body: Struct([(1, Binary(@utf8.encode(message))), (2, I32(code))]),
  }
}

///|
pub fn Schema::make_reply(
  self : Schema,
  service : String,
  name : String,
  sequence_id : Int,
  outcome : RpcOutcome,
) -> Message raise SchemaError {
  let (owner, function_) = self.method_owner(service, name)
  if function_.oneway {
    raise InvalidSchema("oneway method has no reply")
  }
  let body = match outcome {
    ApplicationFailure(code, message) =>
      return application_exception(name, sequence_id, code, message)
    Success(value) => {
      let t = self.resolve(owner, function_.return_type, 0)
      Struct(
        if t == Base("void") {
          []
        } else {
          [(0, self.from_json_type(owner, t, value, Ref(0), 0))]
        },
      )
    }
    DeclaredException(label, value) => {
      let mut selected : IdlField? = None
      for field in function_.exceptions {
        if field.name == label {
          selected = Some(field)
          break
        }
      }
      let field = match selected {
        Some(f) => f
        None => raise InvalidSchema("unknown declared exception " + label)
      }
      Struct([
        (
          field.id,
          self.from_json_type(
            owner,
            self.resolve(owner, field.field_type, 0),
            value,
            Ref(0),
            0,
          ),
        ),
      ])
    }
  }
  { name, sequence_id, message_type: 2, body, }
}

///|
pub fn Schema::read_reply(
  self : Schema,
  service : String,
  name : String,
  response : Message,
) -> RpcOutcome raise SchemaError {
  let (owner, function_) = self.method_owner(service, name)
  if function_.oneway {
    raise InvalidSchema("oneway method has no reply")
  }
  if response.name != name {
    raise InvalidSchema("reply method mismatch")
  }
  let fields = match response.body {
    Struct(fields) => fields
    _ => raise InvalidSchema("reply must be a struct")
  }
  if response.message_type == 3 {
    let mut code = 0
    let mut message = ""
    for pair in fields {
      match pair {
        (1, Binary(bytes)) =>
          message = @utf8.decode(bytes) catch {
            _ => raise InvalidSchema("invalid exception UTF-8")
          }
        (2, I32(n)) => code = n
        _ => ()
      }
    }
    return ApplicationFailure(code, message)
  }
  if response.message_type != 2 {
    raise InvalidSchema("expected reply or application exception")
  }
  let return_type = self.resolve(owner, function_.return_type, 0)
  let work = Ref(0)
  let mut result : Value? = None
  let exceptions = Map([])
  for pair in fields {
    if pair.0 == 0 && return_type != Base("void") {
      if self.read_type(owner, return_type, pair.1, work, 0) is Some(v) {
        result = Some(v)
      }
    } else {
      for field in function_.exceptions {
        if pair.0 == field.id {
          let t = self.resolve(owner, field.field_type, 0)
          if self.read_type(owner, t, pair.1, work, 0) is Some(v) {
            exceptions[field.name] = (t, v)
          }
          break
        }
      }
    }
  }
  if result is Some(value) {
    return Success(self.json_type(owner, return_type, value, 0))
  }
  for field in function_.exceptions {
    if exceptions.get(field.name) is Some(pair) {
      return DeclaredException(
        field.name,
        self.json_type(owner, pair.0, pair.1, 0),
      )
    }
  }
  if return_type == Base("void") {
    Success(Json::null())
  } else {
    ApplicationFailure(5, "missing result for " + name)
  }
}
