///|
priv struct BridgeClient {
  schema : @lib.Schema
  service : String
  multiplex : String
  client : @lib.Client
}

///|
priv struct BridgeServer {
  schema : @lib.Schema
  services : Map[String, String]
  default_service : String
  protocol : @lib.Protocol
  legacy : Bool
  decoder : @lib.FrameDecoder
}

///|
let rpc_clients : Map[Int, BridgeClient] = Map([])

///|
let rpc_servers : Map[Int, BridgeServer] = Map([])

///|
let transport_next : Ref[Int] = Ref(0)

///|
fn wire_unhex(text : String) -> Bytes raise {
  if text.length() > 4194312 || text.length() % 2 != 0 {
    raise Failure("wire hex length limit")
  }
  let cs = text.to_array()
  let bytes = []
  let mut high = 0
  for i, c in cs {
    if !c.is_ascii_hexdigit() {
      raise Failure("invalid wire hex")
    }
    let n = if c <= '9' {
      c.to_int() - 48
    } else {
      c.to_ascii_lowercase().to_int() - 87
    }
    if i % 2 == 0 {
      high = n << 4
    } else {
      bytes.push((high + n).to_byte())
    }
  }
  Bytes::from_array(bytes)
}

///|
fn BridgeServer::exception(
  self : BridgeServer,
  name : String,
  sequence : Int,
  code : Int,
  message : String,
) -> String raise {
  hex(
    @lib.encode_framed_message(
      @lib.application_exception(name, sequence, code, message),
      self.protocol,
      strict_write=!self.legacy,
    ),
  )
}

///|
pub fn transport_json(input : String) -> String {
  let mut failed_client = -1
  let mut failed_server = -1
  try {
    if input.length() > 5000000 {
      raise Failure("transport bridge request limit")
    }
    let request = @json.parse(input)
    let action = request_text(request, "action")
    let id = request_int(request, "transport")
    if action == "clientClose" {
      rpc_clients.remove(id)
      return "{\"ok\":true}"
    }
    if action == "serverClose" {
      rpc_servers.remove(id)
      return "{\"ok\":true}"
    }
    if action == "clientOpen" || action == "serverOpen" {
      if rpc_clients.length() + rpc_servers.length() >= 256 {
        raise Failure("transport session limit")
      }
      let schema = match schemas.get(request_int(request, "schema")) {
        Some(s) => s
        None => raise Failure("unknown schema")
      }
      let protocol = request_protocol(request)
      let legacy = request_text(request, "protocol") == "legacy"
      let service = request_text(request, "service")
      transport_next.val += 1
      let id = transport_next.val
      if action == "clientOpen" {
        ignore(schema.service_functions(service))
        let multiplex = request_text(request, "multiplex")
        if multiplex.contains(":") {
          raise Failure("multiplex name cannot contain colon")
        }
        rpc_clients[id] = {
          schema,
          service,
          multiplex,
          client: @lib.Client::new(
            protocol,
            strict_read=!legacy,
            strict_write=!legacy,
          ),
        }
      } else {
        let services = request_map(request, "services")
        if !service.is_empty() {
          ignore(schema.service_functions(service))
        }
        for name, value in services {
          if name.is_empty() || name.contains(":") {
            raise Failure("invalid multiplex service name")
          }
          ignore(schema.service_functions(value))
        }
        if service.is_empty() && services.is_empty() {
          raise Failure("server requires a service")
        }
        rpc_servers[id] = {
          schema,
          services,
          default_service: service,
          protocol,
          legacy,
          decoder: @lib.FrameDecoder::new(),
        }
      }
      return Json::object({ "ok": true, "transport": id.to_json() }).stringify()
    }
    if action.has_prefix("client") {
      let entry = match rpc_clients.get(id) {
        Some(e) => e
        None => raise Failure("unknown client transport")
      }
      let result = match action {
        "clientCall" => {
          let name = request_text(request, "name")
          let message = entry.schema.make_call(
            entry.service,
            name,
            request_value(request, "arguments"),
            0,
          )
          let wire_name = (if entry.multiplex.is_empty() {
              ""
            } else {
              entry.multiplex + ":"
            }) +
            name
          let oneway = message.message_type == 4
          let (sequence, wire) = entry.client.call_with_id(
            wire_name,
            message.body,
            oneway~,
            response_name=Some(name),
          )
          Json::object({
            "sequence": sequence.to_json(),
            "hex": hex(wire).to_json(),
            "oneway": oneway.to_json(),
          })
        }
        "clientFeed" => {
          failed_client = id
          Json::array(
            entry.client
            .feed(wire_unhex(request_text(request, "hex")))
            .map(message => {
              Json::object({
                "sequence": message.sequence_id.to_json(),
                "name": message.name.to_json(),
                "outcome": outcome_json(
                  entry.schema.read_reply(entry.service, message.name, message),
                ),
              })
            }),
          )
        }
        "clientFinish" => {
          failed_client = id
          entry.client.finish()
          Json::null()
        }
        _ => raise Failure("unknown client action")
      }
      return Json::object({ "ok": true, "result": result }).stringify()
    }
    let entry = match rpc_servers.get(id) {
      Some(e) => e
      None => raise Failure("unknown server transport")
    }
    let result = match action {
      "serverFeed" => {
        failed_server = id
        let calls = []
        for
          payload in entry.decoder.feed(
            wire_unhex(request_text(request, "hex")),
          ) {
          let message = @lib.decode_message(
            payload,
            entry.protocol,
            strict_read=!entry.legacy,
          )
          let parts = message.name.split(":").map(s => s.to_owned()).collect()
          let route = if parts.length() > 1 { parts[0] } else { "" }
          let name = if parts.length() > 1 {
            parts[1:].to_owned().join(":")
          } else {
            message.name
          }
          let service = if route.is_empty() {
            entry.default_service
          } else {
            entry.services.get(route).unwrap_or("")
          }
          let oneway = message.message_type == 4
          let call : Map[String, Json] = {
            "name": name.to_json(),
            "sequence": message.sequence_id.to_json(),
            "route": route.to_json(),
            "service": service.to_json(),
            "oneway": oneway.to_json(),
          }
          let mut error : (Int, String)? = None
          if message.message_type != 1 && message.message_type != 4 {
            error = Some((2, "invalid request message type"))
          } else if service.is_empty() {
            error = Some((1, "unknown service"))
          } else {
            let known = try entry.schema.get_method(service, name) catch {
              _ => {
                error = Some((1, "unknown method " + name))
                None
              }
            } noraise {
              m => Some(m)
            }
            if known is Some(_) {
              try {
                call["arguments"] = entry.schema.read_call(service, {
                  name,
                  sequence_id: message.sequence_id,
                  message_type: message.message_type,
                  body: message.body,
                })
              } catch {
                e => error = Some((7, Repr(e).to_string()))
              }
            }
          }
          if error is Some((code, text)) {
            call["error"] = Json::object({
              "code": code.to_json(),
              "message": text.to_json(),
            })
            if !oneway {
              call["reply"] = entry
                .exception(name, message.sequence_id, code, text)
                .to_json()
            }
          }
          calls.push(Json::object(call))
        }
        Json::array(calls)
      }
      "serverReply" =>
        hex(
          @lib.encode_framed_message(
            entry.schema.make_reply(
              request_text(request, "service"),
              request_text(request, "name"),
              request_int(request, "sequence"),
              request_outcome(request),
            ),
            entry.protocol,
            strict_write=!entry.legacy,
          ),
        ).to_json()
      "serverException" =>
        entry
        .exception(
          request_text(request, "name"),
          request_int(request, "sequence"),
          request_int(request, "code", default=6),
          request_text(request, "message"),
        )
        .to_json()
      "serverFinish" => {
        failed_server = id
        entry.decoder.finish()
        Json::null()
      }
      _ => raise Failure("unknown server action")
    }
    Json::object({ "ok": true, "result": result }).stringify()
  } catch {
    e => {
      if failed_client >= 0 {
        rpc_clients.remove(failed_client)
      }
      if failed_server >= 0 {
        rpc_servers.remove(failed_server)
      }
      Json::object({ "ok": false, "error": Repr(e).to_string().to_json() }).stringify()
    }
  }
}
