///|
/// Transport-independent framed RPC client state. The host supplies socket I/O.
/// Protocol errors poison this instance; create a new client after reconnecting.
pub struct Client {
  protocol : Protocol
  strict_read : Bool
  strict_write : Bool
  decoder : FrameDecoder
  pending : Map[Int, String]
  mut next_sequence : UInt
  mut failed : Bool
}

///|
pub fn Client::new(
  protocol : Protocol,
  strict_read? : Bool = true,
  strict_write? : Bool = true,
) -> Client raise CodecError {
  {
    protocol,
    strict_read,
    strict_write,
    decoder: FrameDecoder::new(),
    pending: Map([]),
    next_sequence: 0U,
    failed: false,
  }
}

///|
pub fn Client::pending_count(self : Client) -> Int {
  self.pending.length()
}

///|
/// Encode a request and register its signed sequence id. Oneway calls do not
/// create a pending response. Returns one complete TFramedTransport frame.
pub fn Client::call(
  self : Client,
  name : String,
  body : Value,
  oneway? : Bool = false,
) -> Bytes raise CodecError {
  if self.failed {
    raise Invalid("RPC client requires reconnect")
  }
  if self.pending.length() >= 1024 {
    raise Invalid("too many pending RPC calls")
  }
  let mut seq = self.next_sequence.reinterpret_as_int()
  while self.pending.contains(seq) {
    self.next_sequence += 1U
    seq = self.next_sequence.reinterpret_as_int()
  }
  let wire = encode_framed_message(
    { name, body, message_type: if oneway { 4 } else { 1 }, sequence_id: seq, },
    self.protocol,
    strict_write=self.strict_write,
  )
  self.next_sequence += 1U
  if !oneway {
    self.pending[seq] = name
  }
  wire
}

///|
/// Accept arbitrary socket chunks. Responses may arrive in any order.
/// Application exceptions (type 3) are delivered as Message values.
pub fn Client::feed(
  self : Client,
  chunk : Bytes,
) -> Array[Message] raise CodecError {
  if self.failed {
    raise Invalid("RPC client requires reconnect")
  }
  errdefer {
    self.failed = true
  }
  let out = []
  for payload in self.decoder.feed(chunk) {
    let response = decode_message(
      payload,
      self.protocol,
      strict_read=self.strict_read,
    )
    if response.message_type != 2 && response.message_type != 3 {
      raise Invalid("expected reply or application exception")
    }
    match self.pending.get(response.sequence_id) {
      Some(name) =>
        if name != response.name {
          raise Invalid("RPC method mismatch")
        }
      None => raise Invalid("unknown or repeated RPC sequence id")
    }
    self.pending.remove(response.sequence_id)
    out.push(response)
  }
  out
}

///|
/// Validate clean EOF, including outstanding calls.
pub fn Client::finish(self : Client) -> Unit raise CodecError {
  if self.failed {
    raise Invalid("RPC client requires reconnect")
  }
  errdefer {
    self.failed = true
  }
  self.decoder.finish()
  if !self.pending.is_empty() {
    raise Invalid("connection closed with outstanding RPC calls")
  }
}
