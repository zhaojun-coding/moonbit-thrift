///|
test "upstream codec interoperates with builtin common wire without losing integers or bytes" {
  let body = @runtime.Struct([
    (-3, @runtime.I64(-9223372036854775808L)),
    (2, @runtime.Binary(b"\x00\xff\x07")),
    (
      3,
      @runtime.MapValue(Some(@runtime.BinaryKind), Some(@runtime.ListKind), [
        (
          @runtime.Binary(b"key"),
          @runtime.List(@runtime.I64Kind, [@runtime.I64(9007199254740993L)]),
        ),
      ]),
    ),
    (
      4,
      @runtime.SetValue(@runtime.BoolKind, [
        @runtime.Bool(true),
        @runtime.Bool(false),
      ]),
    ),
  ])
  for protocol in [@runtime.BinaryProtocol, @runtime.CompactProtocol] {
    let codec = @moonthrift.message_codec(protocol)
    let message : @runtime.Message = {
      name: "echo",
      message_type: 1,
      sequence_id: -31,
      body,
    }
    let wire = codec.encode(message)
    assert_eq(@runtime.decode_message(wire, protocol), message)
    assert_eq(codec.decode(@runtime.encode_message(message, protocol)), message)
    assert_eq(@moonthrift.from_upstream(@moonthrift.to_upstream(body)), body)
  }
}

///|
test "upstream codec retains framed client correlation fragmented reverse replies and oneway" {
  for protocol in [@runtime.BinaryProtocol, @runtime.CompactProtocol] {
    let codec = @moonthrift.message_codec(protocol)
    let client = @runtime.Client::new(protocol, codec=Some(codec))
    let (a, _) = client.call_with_id("first", @runtime.Struct([]))
    let (b, _) = client.call_with_id("second", @runtime.Struct([]))
    ignore(client.call("notify", @runtime.Struct([]), oneway=true))
    assert_eq(client.pending_count(), 2)
    let reply : @runtime.Message = {
      name: "first",
      sequence_id: a,
      message_type: 2,
      body: @runtime.Struct([(0, @runtime.I64(9007199254740994L))]),
    }
    let exception : @runtime.Message = {
      name: "second",
      sequence_id: b,
      message_type: 3,
      body: @runtime.Struct([(1, @runtime.Binary(b"error"))]),
    }
    let wire = @runtime.frame(codec.encode(exception)) +
      @runtime.frame(codec.encode(reply))
    let received = []
    for byte in wire {
      received.append(client.feed(Bytes::from_array([byte])))
    }
    assert_eq(received, [exception, reply])
    client.finish()
    assert_true(
      try {
        ignore(client.feed(@runtime.frame(codec.encode(reply))))
        false
      } catch {
        _ => true
      },
    )
    assert_true(
      try {
        ignore(client.call("again", @runtime.Struct([])))
        false
      } catch {
        _ => true
      },
    )
  }
}

///|
test "upstream codec rejects unsupported UUID range errors and preserves unsent state" {
  for protocol in [@runtime.BinaryProtocol, @runtime.CompactProtocol] {
    let client = @runtime.Client::new(
      protocol,
      codec=Some(@moonthrift.message_codec(protocol)),
    )
    for
      bad in [
        @runtime.Uuid(b"0123456789abcdef"),
        @runtime.Byte(128),
        @runtime.I16(-32769),
      ] {
      assert_true(
        try {
          ignore(client.call("bad", @runtime.Struct([(1, bad)])))
          false
        } catch {
          _ => true
        },
      )
      assert_eq(client.pending_count(), 0)
    }
    assert_true(
      try {
        ignore(client.call("bad", @runtime.Struct([(32768, @runtime.I32(1))])))
        false
      } catch {
        _ => true
      },
    )
    let (seq, _) = client.call_with_id("valid", @runtime.Struct([]))
    assert_eq(seq, 0)
    assert_eq(client.pending_count(), 1)
  }
}

///|
test "typeless empty Compact map cannot silently become Binary stop headers" {
  let message : @runtime.Message = {
    name: "empty",
    sequence_id: 1,
    message_type: 1,
    body: @runtime.Struct([(1, @runtime.MapValue(None, None, []))]),
  }
  let compact = @moonthrift.message_codec(@runtime.CompactProtocol)
  assert_eq(compact.decode(compact.encode(message)), message)
  assert_true(
    try {
      ignore(@moonthrift.message_codec(@runtime.BinaryProtocol).encode(message))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "conversion depth and binary caps and incoming unknown sequence fail closed" {
  let mut deep = @runtime.Struct([])
  for _ in 0..<66 {
    deep = @runtime.Struct([(1, deep)])
  }
  assert_true(
    try {
      ignore(@moonthrift.to_upstream(deep))
      false
    } catch {
      _ => true
    },
  )
  assert_true(
    try {
      ignore(@moonthrift.to_upstream(@runtime.Binary(Bytes::make(1048577, 0))))
      false
    } catch {
      _ => true
    },
  )
  let codec = @moonthrift.message_codec(@runtime.BinaryProtocol)
  let client = @runtime.Client::new(@runtime.BinaryProtocol, codec=Some(codec))
  ignore(client.call("echo", @runtime.Struct([])))
  let reply : @runtime.Message = {
    name: "echo",
    sequence_id: 9,
    message_type: 2,
    body: @runtime.Struct([]),
  }
  assert_true(
    try {
      ignore(client.feed(@runtime.frame(codec.encode(reply))))
      false
    } catch {
      _ => true
    },
  )
  assert_true(
    try {
      client.finish()
      false
    } catch {
      _ => true
    },
  )
}
