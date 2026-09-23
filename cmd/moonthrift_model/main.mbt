///|
/// Single-session example bridge, not a generated JavaScript client API.
let session : Ref[@runtime.Client?] = Ref(None)

///|
pub fn start(protocol : String) -> String {
  try {
    if session.val is Some(_) {
      raise Failure("example already started")
    }
    let protocol = match protocol {
      "binary" => @runtime.BinaryProtocol
      "compact" => @runtime.CompactProtocol
      _ => raise Failure("invalid protocol")
    }
    let client = @runtime.Client::new(
      protocol,
      codec=Some(@adapter.message_codec(protocol)),
    )
    let args : @model.SharedAddArgs = { a: 9007199254740993L, b: 1L, }
    let frame = client.call(
      "add",
      @adapter.from_upstream(args.to_thrift_value()),
    )
    session.val = Some(client)
    ({ "ok": true, "hex": hex(frame) } : Json).stringify()
  } catch {
    error =>
      ({ "ok": false, "error": Repr(error).to_string() } : Json).stringify()
  }
}

///|
pub fn feed(chunk : String) -> String {
  try {
    let client = match session.val {
      Some(c) => c
      None => raise Failure("example not started")
    }
    let replies = client.feed(unhex(chunk))
    let results : Array[Json] = []
    for reply in replies {
      if reply.message_type != 2 {
        raise Failure("unexpected application exception")
      }
      let result = @model.SharedAddResult::from_thrift_value(
        @adapter.to_upstream(reply.body),
      )
      match result {
        Success(value) => results.push(value.to_string().to_json())
      }
    }
    ({ "ok": true, "results": results } : Json).stringify()
  } catch {
    error =>
      ({ "ok": false, "error": Repr(error).to_string() } : Json).stringify()
  }
}

///|
pub fn finish() -> String {
  let previous = session.val
  session.val = None
  try {
    match previous {
      Some(c) => c.finish()
      None => ()
    }
    ({ "ok": true } : Json).stringify()
  } catch {
    error =>
      ({ "ok": false, "error": Repr(error).to_string() } : Json).stringify()
  }
}

///|
fn hex(data : Bytes) -> String {
  let out = StringBuilder()
  let digits = "0123456789abcdef"
  for byte in data {
    let n = byte.to_int()
    out.write_char(digits[n >> 4].to_char().unwrap())
    out.write_char(digits[n & 15].to_char().unwrap())
  }
  out.to_string()
}

///|
fn unhex(text : String) -> Bytes raise {
  if text.length() % 2 != 0 {
    raise Failure("odd hex length")
  }
  let data : Array[Byte] = []
  let digits = "0123456789abcdef"
  for i = 0; i < text.length(); i = i + 2 {
    let mut hi = -1
    let mut lo = -1
    for j in 0..<16 {
      if text[i] == digits[j] {
        hi = j
      }
      if text[i + 1] == digits[j] {
        lo = j
      }
    }
    if hi < 0 || lo < 0 {
      raise Failure("invalid hex")
    }
    data.push(((hi << 4) | lo).to_byte())
  }
  Bytes::from_array(data)
}

///|
fn main {
  ()
}
