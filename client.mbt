///|
/// Transport-independent framed RPC client state. The host supplies socket I/O.
/// Protocol errors poison this instance; create a new client after reconnecting.
pub struct Client {
  codec : MessageCodec
  decoder : FrameStream
  pending : Map[Int, String]
  mut next_sequence : UInt
  mut failed : Bool
  mut exhausted : Bool
}

///|
/// When supplied, codec owns wire format selection; protocol and strict flags
/// apply only to the default builtin codec.
pub fn Client::new(
  protocol : Protocol,
  strict_read? : Bool = true,
  strict_write? : Bool = true,
  codec? : MessageCodec? = None,
  frame_stream? : FrameStream? = None,
) -> Client raise CodecError {
  {
    codec: codec.unwrap_or_else(() => {
      MessageCodec::builtin(protocol, strict_read~, strict_write~)
    }),
    decoder: frame_stream.unwrap_or_else(() => FrameStream::builtin()),
    pending: Map([]),
    next_sequence: 0U,
    failed: false,
    exhausted: false,
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
  self.call_with_id(name, body, oneway~).1
}

///|
/// Return the registered sequence id alongside the frame. Multiplexed requests
/// may specify the unprefixed response name used by TMultiplexedProtocol peers.
pub fn Client::call_with_id(
  self : Client,
  name : String,
  body : Value,
  oneway? : Bool = false,
  response_name? : String? = None,
) -> (Int, Bytes) raise CodecError {
  if self.failed {
    raise Invalid("RPC client requires reconnect")
  }
  if self.exhausted {
    raise Invalid("RPC sequence space exhausted; reconnect after draining")
  }
  if self.pending.length() >= 1024 {
    raise Invalid("too many pending RPC calls")
  }
  let mut seq = self.next_sequence.reinterpret_as_int()
  while self.pending.contains(seq) {
    self.next_sequence += 1U
    seq = self.next_sequence.reinterpret_as_int()
  }
  let wire = self.decoder.encode(
    self.codec.encode({
      name,
      body,
      message_type: if oneway {
        4
      } else {
        1
      },
      sequence_id: seq,
    }),
  )
  self.next_sequence += 1U
  if self.next_sequence == 0U {
    self.exhausted = true
  }
  if !oneway {
    self.pending[seq] = response_name.unwrap_or(name)
  }
  (seq, wire)
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
  let matched : Map[Int, Bool] = Map([])
  for payload in self.decoder.feed(chunk) {
    let response = self.codec.decode(payload)
    if response.message_type != 2 && response.message_type != 3 {
      raise Invalid("expected reply or application exception")
    }
    if matched.contains(response.sequence_id) {
      raise Invalid("repeated RPC sequence in one response chunk")
    }
    match self.pending.get(response.sequence_id) {
      Some(name) =>
        if name != response.name {
          raise Invalid("RPC method mismatch")
        }
      None => raise Invalid("unknown or repeated RPC sequence id")
    }
    matched[response.sequence_id] = true
    out.push(response)
  }
  // Commit only after every reply in this chunk has been validated.
  for id, _ in matched {
    self.pending.remove(id)
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
  self.failed = true
  self.decoder.finish()
  if !self.pending.is_empty() {
    raise Invalid("connection closed with outstanding RPC calls")
  }
}

///|
pub struct PendingCall {
  sequence_id : Int
  response_name : String
} derive(Eq, @debug.Debug)

///|
/// Snapshot of requests not delivered by feed. After failure their remote
/// execution outcome is unknown; this list is not permission to retry.
pub fn Client::pending_calls(self : Client) -> Array[PendingCall] {
  let ids = self.pending.keys().collect()
  ids.sort()
  ids.map(id => { sequence_id: id, response_name: self.pending[id], })
}

///|
/// Seal the session and transfer its unresolved call identities to the host.
/// This does not cancel work at the peer or make retry safe.
pub fn Client::abort(self : Client) -> Array[PendingCall] {
  self.failed = true
  let unresolved = self.pending_calls()
  self.pending.clear()
  unresolved
}
