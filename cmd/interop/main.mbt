///|
let clients : Map[String, @lib.Client] = Map([])

///|
pub fn open_client(mode : String) -> String {
  try {
    clients[mode] = @lib.Client::new(
      if mode == "compact" {
        @lib.CompactProtocol
      } else {
        @lib.BinaryProtocol
      },
      strict_read=mode != "legacy",
      strict_write=mode != "legacy",
    )
    "ok"
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
pub fn request(mode : String, value : Int, oneway : Bool) -> String {
  try {
    let client = match clients.get(mode) {
      Some(c) => c
      None => raise Failure("client missing")
    }
    hex(client.call("double", @lib.Struct([(1, @lib.I32(value))]), oneway~))
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
pub fn feed(mode : String, data : String) -> String {
  try {
    let client = match clients.get(mode) {
      Some(c) => c
      None => raise Failure("client missing")
    }
    let results = []
    for m in client.feed(unhex(data)) {
      if m.message_type == 3 {
        results.push("exception:" + m.sequence_id.to_string())
      } else {
        let value = match m.body {
          @lib.Struct(fields) => {
            let mut result : Int? = None
            for (id, v) in fields {
              if id == 0 {
                match v {
                  @lib.I32(n) => result = Some(n)
                  _ => raise Failure("wrong result type")
                }
              }
            }
            match result {
              Some(n) => n
              None => raise Failure("missing result")
            }
          }
          _ => raise Failure("wrong result body")
        }
        results.push(m.sequence_id.to_string() + ":" + value.to_string())
      }
    }
    results.join("\n")
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
pub fn finish(mode : String) -> String {
  try {
    match clients.get(mode) {
      Some(c) => c.finish()
      None => raise Failure("client missing")
    }
    "ok"
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
fn main {

}

///|
fn unhex(text : String) -> Bytes raise {
  let out : Array[Byte] = []
  let mut high = -1
  if text.length() > 200000 {
    raise Failure("input too long")
  }
  for c in text.iter() {
    if c == ' ' || c == '\n' || c == '\r' || c == '\t' {
      continue
    }
    let n = if c >= '0' && c <= '9' {
      c.to_int() - 48
    } else if c >= 'a' && c <= 'f' {
      c.to_int() - 87
    } else if c >= 'A' && c <= 'F' {
      c.to_int() - 55
    } else {
      raise Failure("invalid hex character")
    }
    if high < 0 {
      high = n
    } else {
      out.push((high * 16 + n).to_byte())
      high = -1
    }
  }
  if high >= 0 {
    raise Failure("odd hex length")
  }
  Bytes::from_array(out)
}

///|
fn hex(data : Bytes) -> String {
  let alphabet = "0123456789abcdef"
  let out = []
  for b in data {
    let n = b.to_int()
    out.push(
      alphabet[n / 16:n / 16 + 1].to_owned() +
      alphabet[n % 16:n % 16 + 1].to_owned(),
    )
  }
  out.join("")
}
