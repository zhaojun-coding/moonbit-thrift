///|
/// Message serialization boundary. Framing, sequence correlation and socket
/// lifetimes stay in the runtime, independently of the selected wire codec.
pub struct MessageCodec {
  encoder : (Message) -> Bytes raise CodecError
  decoder : (Bytes) -> Message raise CodecError
}

///|
pub fn MessageCodec::new(
  encode~ : (Message) -> Bytes raise CodecError,
  decode~ : (Bytes) -> Message raise CodecError,
) -> MessageCodec {
  { encoder: encode, decoder: decode, }
}

///|
pub fn MessageCodec::builtin(
  protocol : Protocol,
  strict_read? : Bool = true,
  strict_write? : Bool = true,
) -> MessageCodec {
  MessageCodec::new(
    encode=message => encode_message(message, protocol, strict_write~),
    decode=data => decode_message(data, protocol, strict_read~),
  )
}

///|
fn check_envelope(message : Message) -> Unit raise CodecError {
  if message.message_type < 1 ||
    message.message_type > 4 ||
    message.body.kind() != StructKind {
    raise Invalid("invalid RPC envelope")
  }
  if @utf8.encode(message.name).length() > 1024 {
    raise Invalid("RPC method name exceeds 1024 bytes")
  }
}

///|
pub fn MessageCodec::encode(
  self : MessageCodec,
  message : Message,
) -> Bytes raise CodecError {
  check_envelope(message)
  let data = (self.encoder)(message)
  if data.length() > 1048576 {
    raise Invalid("RPC message exceeds one MiB")
  }
  data
}

///|
pub fn MessageCodec::decode(
  self : MessageCodec,
  data : Bytes,
) -> Message raise CodecError {
  if data.length() > 1048576 {
    raise Invalid("RPC message exceeds one MiB")
  }
  let message = (self.decoder)(data)
  check_envelope(message)
  message
}
