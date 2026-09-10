///|
test "client correlation reverse response order exceptions and oneway" {
  for protocol in [@thrift.BinaryProtocol, @thrift.CompactProtocol] {
    let client = @thrift.Client::new(protocol)
    let framing = @thrift.FrameDecoder::new()
    let a = @thrift.decode_message(
      framing.feed(client.call("first", @thrift.Struct([])))[0],
      protocol,
    )
    let b = @thrift.decode_message(
      framing.feed(client.call("second", @thrift.Struct([])))[0],
      protocol,
    )
    let c = @thrift.decode_message(
      framing.feed(client.call("notify", @thrift.Struct([]), oneway=true))[0],
      protocol,
    )
    assert_eq(c.message_type, 4)
    assert_eq(client.pending_count(), 2)
    let rb : @thrift.Message = {
      name: b.name,
      sequence_id: b.sequence_id,
      message_type: 3,
      body: @thrift.Struct([
        (1, @thrift.Binary(b"failure")),
        (2, @thrift.I32(6)),
      ]),
    }
    let ra : @thrift.Message = {
      name: a.name,
      sequence_id: a.sequence_id,
      message_type: 2,
      body: @thrift.Struct([(0, @thrift.I32(42))]),
    }
    let wire = @thrift.encode_framed_message(rb, protocol) +
      @thrift.encode_framed_message(ra, protocol)
    let received = []
    for byte in wire {
      for message in client.feed(Bytes::from_array([byte])) {
        received.push(message)
      }
    }
    assert_eq(received, [rb, ra])
    assert_eq(client.pending_count(), 0)
    client.finish()
  }
}

///|
test "client rejects wrong name sequence type duplicate response and incomplete EOF" {
  for
    bad in [
      @thrift.Message::{
        name: "wrong",
        sequence_id: 0,
        message_type: 2,
        body: @thrift.Struct([]),
      },
      @thrift.Message::{
        name: "method",
        sequence_id: 1,
        message_type: 2,
        body: @thrift.Struct([]),
      },
      @thrift.Message::{
        name: "method",
        sequence_id: 0,
        message_type: 1,
        body: @thrift.Struct([]),
      },
    ] {
    let c = @thrift.Client::new(@thrift.BinaryProtocol)
    ignore(c.call("method", @thrift.Struct([])))
    assert_true(
      try {
        ignore(
          c.feed(@thrift.encode_framed_message(bad, @thrift.BinaryProtocol)),
        )
        false
      } catch {
        _ => true
      },
    )
    assert_true(
      try {
        ignore(c.call("method", @thrift.Struct([])))
        false
      } catch {
        _ => true
      },
    )
  }
  let c = @thrift.Client::new(@thrift.CompactProtocol)
  ignore(c.call("method", @thrift.Struct([])))
  let reply : @thrift.Message = {
    name: "method",
    sequence_id: 0,
    message_type: 2,
    body: @thrift.Struct([]),
  }
  let wire = @thrift.encode_framed_message(reply, @thrift.CompactProtocol)
  assert_eq(c.feed(wire), [reply])
  assert_true(
    try {
      ignore(c.feed(wire))
      false
    } catch {
      _ => true
    },
  )
  let pending = @thrift.Client::new(@thrift.BinaryProtocol)
  ignore(pending.call("method", @thrift.Struct([])))
  assert_true(
    try {
      pending.finish()
      false
    } catch {
      _ => true
    },
  )
}
