///|
test "sequence IDs are never reused after the complete signed wire space" {
  let c = Client::new(BinaryProtocol)
  c.next_sequence = 4294967295U
  let (id, _) = c.call_with_id("last", Struct([]))
  assert_eq(id, -1)
  assert_true(
    try {
      ignore(c.call("wrapped", Struct([])))
      false
    } catch {
      _ => true
    },
  )
  let reply : Message = {
    name: "last",
    sequence_id: -1,
    message_type: 2,
    body: Struct([]),
  }
  assert_eq(c.feed(encode_framed_message(reply, BinaryProtocol)), [reply])
  c.finish()
}

///|
test "mixed response errors preserve every unresolved call for host failure reporting" {
  for protocol in [BinaryProtocol, CompactProtocol] {
    for kind in [0, 1, 2] {
      let c = Client::new(protocol)
      ignore(c.call("first", Struct([])))
      ignore(c.call("second", Struct([])))
      let good : Message = {
        name: "first",
        sequence_id: 0,
        message_type: 2,
        body: Struct([]),
      }
      let bad : Message = {
        name: if kind == 1 {
          "wrong"
        } else {
          "first"
        },
        sequence_id: if kind == 0 {
          9
        } else if kind == 1 {
          1
        } else {
          0
        },
        message_type: 2,
        body: Struct([]),
      }
      let wire = encode_framed_message(good, protocol) +
        encode_framed_message(bad, protocol)
      assert_true(
        try {
          ignore(c.feed(wire))
          false
        } catch {
          _ => true
        },
      )
      assert_eq(c.pending_count(), 2)
      assert_eq(c.pending_calls().map(p => p.sequence_id), [0, 1])
      assert_eq(c.abort().map(p => p.response_name), ["first", "second"])
      assert_eq(c.pending_count(), 0)
      assert_true(
        try {
          ignore(c.call("again", Struct([])))
          false
        } catch {
          _ => true
        },
      )
    }
  }
}

///|
test "stream EOF supports server half close but client EOF seals new calls" {
  let stream = FrameStream::builtin()
  stream.finish()
  assert_eq(stream.encode(b"reply"), frame(b"reply"))
  assert_true(
    try {
      ignore(stream.feed(b""))
      false
    } catch {
      _ => true
    },
  )
  let c = Client::new(BinaryProtocol)
  c.finish()
  assert_true(
    try {
      ignore(c.call("again", Struct([])))
      false
    } catch {
      _ => true
    },
  )
  let truncated = FrameStream::builtin()
  ignore(truncated.feed(b"\x00\x00"))
  assert_true(
    try {
      truncated.finish()
      false
    } catch {
      _ => true
    },
  )
  assert_true(
    try {
      ignore(truncated.encode(b"reply"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "stream bounds frame result count before allocating an unbounded array" {
  let wire = Bytes::from_array(
    Array::makei(4097 * 5, i => if i % 5 == 3 { 1 } else { 0 }),
  )
  let stream = FrameStream::builtin()
  assert_true(
    try {
      ignore(stream.feed(wire))
      false
    } catch {
      _ => true
    },
  )
  assert_true(
    try {
      ignore(stream.feed(frame(b"ok")))
      false
    } catch {
      _ => true
    },
  )
}
