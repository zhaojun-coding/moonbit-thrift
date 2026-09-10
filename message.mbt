///|
/// RPC message envelope. message_type: 1=call, 2=reply, 3=exception, 4=oneway.
pub(all) struct Message {
  name : String
  message_type : Int
  sequence_id : Int
  body : Value
} derive(Debug, Eq)

///|
/// Strict/versioned Binary and Compact v1 envelopes, containing a struct body.
/// Legacy unversioned Binary headers are deliberately rejected.
pub fn encode_message(
  message : Message,
  protocol : Protocol,
) -> Bytes raise CodecError {
  if message.message_type < 1 || message.message_type > 4 {
    raise Invalid("invalid RPC message type")
  }
  if message.body.kind() != StructKind {
    raise Invalid("RPC body must be a struct")
  }
  let name = @utf8.encode(message.name)
  if name.length() > 1024 {
    raise Invalid("RPC method name exceeds 1024 bytes")
  }
  let compact = protocol == CompactProtocol
  let out : Array[Byte] = []
  if compact {
    out.push(130)
    out.push(((message.message_type << 5) | 1).to_byte())
    varint(out, message.sequence_id.reinterpret_as_uint().to_uint64())
    write_value(out, Binary(name), true, 0)
  } else {
    fixed(out, 2147549184UL | message.message_type.to_uint64(), 4, false)
    write_value(out, Binary(name), false, 0)
    fixed(out, message.sequence_id.reinterpret_as_uint().to_uint64(), 4, false)
  }
  write_value(out, message.body, compact, 0)
  if out.length() > 1048576 {
    raise Invalid("RPC message exceeds one MiB")
  }
  Bytes::from_array(out)
}

///|
pub fn decode_message(
  data : Bytes,
  protocol : Protocol,
) -> Message raise CodecError {
  if data.length() > 1048576 {
    raise Invalid("RPC message exceeds one MiB")
  }
  let compact = protocol == CompactProtocol
  let reader : Reader = { data, pos: 0, nodes: 0, compact, }
  let (message_type, sequence_id, name_data) = if compact {
    if reader.byte() != 130 {
      raise Invalid("invalid Compact protocol id")
    }
    let version_type = reader.byte()
    if (version_type & 31) != 1 {
      raise Invalid("unsupported Compact version")
    }
    let message_type = version_type >> 5
    let seq = reader.varint()
    if seq > 4294967295UL {
      raise Invalid("sequence id overflow")
    }
    let sequence_id = seq.to_uint().reinterpret_as_int()
    let name_data = match reader.value(BinaryKind, 0) {
      Binary(bytes) => bytes
      _ => raise Invalid("invalid method name")
    }
    (message_type, sequence_id, name_data)
  } else {
    let version_type = reader.fixed(4, false)
    if (version_type & 4294967040UL) != 2147549184UL {
      raise Invalid("expected strict Binary v1 header")
    }
    let message_type = (version_type & 255UL).to_int()
    let name_data = match reader.value(BinaryKind, 0) {
      Binary(bytes) => bytes
      _ => raise Invalid("invalid method name")
    }
    let sequence_id = reader.fixed(4, false).to_uint().reinterpret_as_int()
    (message_type, sequence_id, name_data)
  }
  if message_type < 1 || message_type > 4 {
    raise Invalid("invalid RPC message type")
  }
  if name_data.length() > 1024 {
    raise Invalid("RPC method name exceeds 1024 bytes")
  }
  let name = @utf8.decode(name_data) catch {
    _ => raise Invalid("invalid UTF-8 method name")
  }
  let body = reader.value(StructKind, 0)
  if reader.pos != data.length() {
    raise Invalid("trailing RPC bytes")
  }
  { name, message_type, sequence_id, body, }
}
