///|
/// Stateful framing adapter. Use one instance per connection. A framing error
/// seals this instance; EOF seals only input so a server may finish replies.
pub struct FrameStream {
  encoder : (Bytes) -> Bytes raise CodecError
  decoder : (Bytes) -> Array[Bytes] raise CodecError
  eof : () -> Unit raise CodecError
  mut closed : Bool
  mut failed : Bool
}

///|
pub fn FrameStream::new(
  encode~ : (Bytes) -> Bytes raise CodecError,
  feed~ : (Bytes) -> Array[Bytes] raise CodecError,
  finish~ : () -> Unit raise CodecError,
) -> FrameStream {
  { encoder: encode, decoder: feed, eof: finish, closed: false, failed: false, }
}

///|
pub fn FrameStream::builtin() -> FrameStream raise CodecError {
  let d = FrameDecoder::new()
  FrameStream::new(
    encode=payload => frame(payload),
    feed=chunk => d.feed(chunk),
    finish=() => d.finish(),
  )
}

///|
pub fn FrameStream::encode(
  self : FrameStream,
  payload : Bytes,
) -> Bytes raise CodecError {
  if self.failed {
    raise Invalid("framed stream is closed")
  }
  (self.encoder)(payload)
}

///|
pub fn FrameStream::feed(
  self : FrameStream,
  chunk : Bytes,
) -> Array[Bytes] raise CodecError {
  if self.closed || self.failed {
    raise Invalid("framed stream is closed")
  }
  errdefer {
    self.failed = true
  }
  if chunk.length() > 16777220 {
    raise Invalid("feed exceeds 16 MiB plus header")
  }
  let frames = []
  // Slice before invoking the decoder so millions of tiny/empty frames cannot
  // all allocate results before the output bound is checked.
  let mut at = 0
  while at < chunk.length() {
    let end = (at + 4096).min(chunk.length())
    let decoded = (self.decoder)(chunk[at:end].to_owned())
    if decoded.length() > 4096 - frames.length() {
      raise Invalid("more than 4096 frames in one feed")
    }
    for payload in decoded {
      frames.push(payload)
    }
    at = end
  }
  frames
}

///|
pub fn FrameStream::finish(self : FrameStream) -> Unit raise CodecError {
  if self.closed || self.failed {
    raise Invalid("framed stream is closed")
  }
  self.closed = true
  errdefer {
    self.failed = true
  }
  (self.eof)()
}
