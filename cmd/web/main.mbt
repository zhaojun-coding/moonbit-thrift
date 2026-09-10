///|
pub fn run(input : String) -> String {
  try {
    let rpc = input.has_prefix("rpc-")
    let payload = if rpc { input[4:].to_owned() } else { input }
    let compact = payload.has_prefix("compact:")
    let binary = payload.has_prefix("binary:")
    if !compact && !binary {
      raise Failure("use compact:, binary:, rpc-compact: or rpc-binary:")
    }
    let protocol = if compact {
      @lib.CompactProtocol
    } else {
      @lib.BinaryProtocol
    }
    let data = unhex(payload[if compact { 8 } else { 7 }:].to_owned())
    if rpc {
      let message = @lib.decode_message(data, protocol)
      return Repr(message).to_string() +
        "\n\nRe-encoded: " +
        hex(@lib.encode_message(message, protocol))
    }
    let value = @lib.decode(data, @lib.StructKind, protocol)
    Repr(value).to_string() +
    "\n\nRe-encoded: " +
    hex(@lib.encode(value, protocol))
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
