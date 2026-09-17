///|
let schemas : Map[Int, @lib.Schema] = Map([])

///|
let schema_next : Ref[Int] = Ref(0)

///|
fn request_text(input : Json, key : String, default? : String = "") -> String {
  match input {
    Object(fields) =>
      match fields.get(key) {
        Some(String(s)) => s
        _ => default
      }
    _ => default
  }
}

///|
fn request_value(input : Json, key : String) -> Json {
  match input {
    Object(fields) => fields.get(key).unwrap_or(Json::null())
    _ => Json::null()
  }
}

///|
fn request_int(input : Json, key : String, default? : Int = 0) -> Int {
  match request_value(input, key) {
    Number(n, ..) => n.to_int()
    _ => default
  }
}

///|
fn request_map(input : Json, key : String) -> Map[String, String] {
  let out = Map([])
  if request_value(input, key) is Object(values) {
    for name, value in values {
      if value is String(s) {
        out[name] = s
      }
    }
  }
  out
}

///|
fn request_protocol(input : Json) -> @lib.Protocol {
  if request_text(input, "protocol", default="binary") == "compact" {
    @lib.CompactProtocol
  } else {
    @lib.BinaryProtocol
  }
}

///|
fn outcome_json(outcome : @lib.RpcOutcome) -> Json {
  match outcome {
    @lib.Success(value) => Json::object({ "kind": "success", "value": value })
    @lib.DeclaredException(name, value) =>
      Json::object({
        "kind": "declared",
        "name": name.to_json(),
        "value": value,
      })
    @lib.ApplicationFailure(code, message) =>
      Json::object({
        "kind": "application",
        "code": code.to_json(),
        "message": message.to_json(),
      })
  }
}

///|
fn request_outcome(input : Json) -> @lib.RpcOutcome {
  let result = request_value(input, "outcome")
  match request_text(result, "kind") {
    "declared" =>
      @lib.DeclaredException(
        request_text(result, "name"),
        request_value(result, "value"),
      )
    "application" =>
      @lib.ApplicationFailure(
        request_int(result, "code"),
        request_text(result, "message"),
      )
    _ => @lib.Success(request_value(result, "value"))
  }
}

///|
pub fn schema_json(input : String) -> String {
  try {
    if input.length() > 10000000 {
      raise Failure("request length limit")
    }
    let request = @json.parse(input)
    let action = request_text(request, "action")
    if action == "dependencies" {
      let parsed = @lib.parse_idl(
        request_text(request, "source"),
        source=request_text(request, "name", default="main.thrift"),
      )
      return Json::object({ "ok": true, "includes": parsed.includes.to_json() }).stringify()
    }
    if action == "compile" {
      if schemas.length() >= 64 {
        raise Failure("schema session limit")
      }
      let include_paths = match request_value(request, "includePaths") {
        Array(xs) =>
          xs.map(x => {
            match x {
              String(s) => s
              _ => ""
            }
          })
        _ => []
      }
      let schema = @lib.compile_schema(
        request_text(request, "root", default="main.thrift"),
        request_map(request, "sources"),
        include_paths~,
      )
      let description = schema.describe()
      schema_next.val += 1
      let id = schema_next.val
      schemas[id] = schema
      return Json::object({
        "ok": true,
        "schema": id.to_json(),
        "description": description,
        "warnings": schema.warnings().to_json(),
      }).stringify()
    }
    let id = request_int(request, "schema")
    if action == "close" {
      schemas.remove(id)
      return "{\"ok\":true}"
    }
    let schema = match schemas.get(id) {
      Some(schema) => schema
      None => raise Failure("unknown schema session")
    }
    let protocol = request_protocol(request)
    let name = request_text(request, "type")
    let result = match action {
      "describe" => schema.describe()
      "encode" =>
        hex(schema.encode_json(name, request_value(request, "value"), protocol)).to_json()
      "decode" =>
        schema.decode_json(
          name,
          wire_unhex(request_text(request, "hex")),
          protocol,
        )
      "call" => {
        let message = schema.make_call(
          request_text(request, "service"),
          request_text(request, "name"),
          request_value(request, "arguments"),
          request_int(request, "sequence"),
        )
        hex(
          @lib.encode_message(
            message,
            protocol,
            strict_write=request_text(request, "protocol") != "legacy",
          ),
        ).to_json()
      }
      "readCall" => {
        let message = @lib.decode_message(
          wire_unhex(request_text(request, "hex")),
          protocol,
          strict_read=request_text(request, "protocol") != "legacy",
        )
        Json::object({
          "name": message.name.to_json(),
          "sequence": message.sequence_id.to_json(),
          "messageType": message.message_type.to_json(),
          "arguments": schema.read_call(
            request_text(request, "service"),
            message,
          ),
        })
      }
      "reply" =>
        hex(
          @lib.encode_message(
            schema.make_reply(
              request_text(request, "service"),
              request_text(request, "name"),
              request_int(request, "sequence"),
              request_outcome(request),
            ),
            protocol,
            strict_write=request_text(request, "protocol") != "legacy",
          ),
        ).to_json()
      "readReply" =>
        outcome_json(
          schema.read_reply(
            request_text(request, "service"),
            request_text(request, "name"),
            @lib.decode_message(
              wire_unhex(request_text(request, "hex")),
              protocol,
              strict_read=request_text(request, "protocol") != "legacy",
            ),
          ),
        )
      _ => raise Failure("unknown schema action")
    }
    Json::object({ "ok": true, "result": result }).stringify()
  } catch {
    e =>
      Json::object({ "ok": false, "error": Repr(e).to_string().to_json() }).stringify()
  }
}
