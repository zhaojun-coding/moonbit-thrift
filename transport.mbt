///|
/// Apache TFramedTransport wire format: nonnegative signed big-endian i32 length.
pub fn frame(
  payload : Bytes,
  max_frame? : Int = 1048576,
) -> Bytes raise CodecError {
  if max_frame < 1 || max_frame > 16777216 || payload.length() > max_frame {
    raise Invalid("frame limit")
  }
  let out : Array[Byte] = []
  fixed(out, payload.length().to_uint64(), 4, false)
  for b in payload {
    out.push(b)
  }
  Bytes::from_array(out)
}

///|
/// A bounded incremental transport decoder. Invalid input poisons the decoder
/// until reset. feed is transactional: no partial frames are returned on error.
pub struct FrameDecoder {
  max_frame : Int
  mut header : UInt64
  mut header_bytes : Int
  mut expected : Int
  mut buffer : Array[Byte]
  mut failed : Bool
}

///|
pub fn FrameDecoder::new(
  max_frame? : Int = 1048576,
) -> FrameDecoder raise CodecError {
  if max_frame < 1 || max_frame > 16777216 {
    raise Invalid("frame limit")
  }
  {
    max_frame,
    header: 0UL,
    header_bytes: 0,
    expected: -1,
    buffer: [],
    failed: false,
  }
}

///|
pub fn FrameDecoder::reset(self : FrameDecoder) -> Unit {
  self.header = 0UL
  self.header_bytes = 0
  self.expected = -1
  self.buffer = []
  self.failed = false
}

///|
pub fn FrameDecoder::feed(
  self : FrameDecoder,
  chunk : Bytes,
) -> Array[Bytes] raise CodecError {
  if self.failed {
    raise Invalid("frame decoder requires reset")
  }
  // Bound one call as well as retained data; callers may feed larger streams in chunks.
  if chunk.length() > 16777220 {
    self.failed = true
    raise Invalid("feed exceeds 16 MiB plus header")
  }
  let frames : Array[Bytes] = []
  for b in chunk {
    if self.expected < 0 {
      self.header = (self.header << 8) | b.to_uint64()
      self.header_bytes += 1
      if self.header_bytes == 4 {
        if self.header > self.max_frame.to_uint64() {
          self.failed = true
          self.buffer = []
          raise Invalid("negative or oversized transport frame")
        }
        self.expected = self.header.to_int()
        self.header = 0UL
        self.header_bytes = 0
        if self.expected == 0 {
          frames.push(b"")
          self.expected = -1
        }
      }
    } else {
      self.buffer.push(b)
      if self.buffer.length() == self.expected {
        frames.push(Bytes::from_array(self.buffer))
        self.buffer = []
        self.expected = -1
      }
    }
  }
  frames
}

///|
pub fn FrameDecoder::finish(self : FrameDecoder) -> Unit raise CodecError {
  if self.failed {
    raise Invalid("frame decoder requires reset")
  }
  if self.header_bytes != 0 || self.expected >= 0 {
    self.failed = true
    self.buffer = []
    raise Invalid("truncated transport frame")
  }
}

///|
pub fn encode_framed_message(
  message : Message,
  protocol : Protocol,
  strict_write? : Bool = true,
) -> Bytes raise CodecError {
  frame(encode_message(message, protocol, strict_write~))
}
