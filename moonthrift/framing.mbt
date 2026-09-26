///|
/// Use upstream 0.3.0 framing unchanged. The runtime adds stream lifetime and
/// bounded feed/output contracts, not another upstream frame implementation.
pub fn frame_stream() -> @runtime.FrameStream raise @runtime.CodecError {
  let decoder = @rpc.FrameDecoder::new(max_frame_size=1048576) catch {
    e =>
      raise @runtime.Invalid("upstream frame decoder: " + Repr(e).to_string())
  }
  @runtime.FrameStream::new(
    encode=payload => {
      @rpc.encode_frame(payload, max_frame_size=1048576) catch {
        e =>
          raise @runtime.Invalid(
            "upstream frame encode: " + Repr(e).to_string(),
          )
      }
    },
    feed=chunk => {
      decoder.push(chunk) catch {
        e =>
          raise @runtime.Invalid(
            "upstream frame decode: " + Repr(e).to_string(),
          )
      }
    },
    finish=() => {
      if decoder.has_pending() {
        raise @runtime.Invalid("truncated upstream transport frame")
      }
    },
  )
}
