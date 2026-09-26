///|
test "upstream framing supports fragmented reverse replies and bounded stream lifetime" {
  for protocol in [@runtime.BinaryProtocol, @runtime.CompactProtocol] {
    let codec = @moonthrift.message_codec(protocol)
    let stream = @moonthrift.frame_stream()
    let c = @runtime.Client::new(
      protocol,
      codec=Some(codec),
      frame_stream=Some(stream),
    )
    let (a, _) = c.call_with_id("first", @runtime.Struct([]))
    let (b, _) = c.call_with_id("second", @runtime.Struct([]))
    ignore(c.call("notification", @runtime.Struct([]), oneway=true))
    assert_eq(c.pending_count(), 2)
    let responses = [b, a].map(id => @runtime.Message::{
      name: if id == a {
        "first"
      } else {
        "second"
      },
      sequence_id: id,
      message_type: 2,
      body: @runtime.Struct([(0, @runtime.I64(9007199254740994L))]),
    })
    let writer = @moonthrift.frame_stream()
    let wire = writer.encode(codec.encode(responses[0])) +
      writer.encode(codec.encode(responses[1]))
    let received = []
    for byte in wire {
      received.append(c.feed(Bytes::from_array([byte])))
    }
    assert_eq(received, responses)
    assert_eq(c.pending_calls().length(), 0)
    c.finish()
  }
  let broken = @moonthrift.frame_stream()
  ignore(broken.feed(b"\x00\x00"))
  assert_true(
    try {
      broken.finish()
      false
    } catch {
      _ => true
    },
  )
  assert_true(
    try {
      ignore(broken.feed(b"\x00\x01a"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "upstream framed session does not partially deliver a mixed valid invalid chunk" {
  let codec = @moonthrift.message_codec(@runtime.CompactProtocol)
  let c = @runtime.Client::new(
    @runtime.CompactProtocol,
    codec=Some(codec),
    frame_stream=Some(@moonthrift.frame_stream()),
  )
  ignore(c.call("first", @runtime.Struct([])))
  ignore(c.call("second", @runtime.Struct([])))
  let writer = @moonthrift.frame_stream()
  let first : @runtime.Message = {
    name: "first",
    sequence_id: 0,
    message_type: 2,
    body: @runtime.Struct([]),
  }
  let unknown : @runtime.Message = {
    name: "second",
    sequence_id: 999,
    message_type: 2,
    body: @runtime.Struct([]),
  }
  assert_true(
    try {
      ignore(
        c.feed(
          writer.encode(codec.encode(first)) +
          writer.encode(codec.encode(unknown)),
        ),
      )
      false
    } catch {
      _ => true
    },
  )
  assert_eq(c.abort().map(p => p.sequence_id), [0, 1])
}
