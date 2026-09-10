///|
test "strict Binary and Compact RPC golden envelopes" {
  let message : @thrift.Message = {
    name: "ping",
    message_type: 1,
    sequence_id: 7,
    body: @thrift.Struct([]),
  }
  let binary = b"\x80\x01\x00\x01\x00\x00\x00\x04ping\x00\x00\x00\x07\x00"
  let compact = b"\x82\x21\x07\x04ping\x00"
  assert_eq(@thrift.encode_message(message, @thrift.BinaryProtocol), binary)
  assert_eq(@thrift.encode_message(message, @thrift.CompactProtocol), compact)
  assert_eq(@thrift.decode_message(binary, @thrift.BinaryProtocol), message)
  assert_eq(@thrift.decode_message(compact, @thrift.CompactProtocol), message)
}

///|
test "all RPC types signed sequence ids and Unicode method name" {
  for protocol in [@thrift.BinaryProtocol, @thrift.CompactProtocol] {
    for message_type in 1..<=4 {
      for sequence_id in [0, -1, -2147483648, 2147483647] {
        let m : @thrift.Message = {
          name: "查询",
          message_type,
          sequence_id,
          body: @thrift.Struct([(1, @thrift.I32(42))]),
        }
        assert_eq(
          @thrift.decode_message(@thrift.encode_message(m, protocol), protocol),
          m,
        )
      }
    }
  }
}

///|
test "RPC truncation version and type failures" {
  let m : @thrift.Message = {
    name: "x",
    message_type: 2,
    sequence_id: -1,
    body: @thrift.Struct([]),
  }
  for protocol in [@thrift.BinaryProtocol, @thrift.CompactProtocol] {
    let wire = @thrift.encode_message(m, protocol)
    for n in 0..<wire.length() {
      assert_true(
        try {
          ignore(@thrift.decode_message(wire[:n].to_owned(), protocol))
          false
        } catch {
          _ => true
        },
      )
    }
    assert_true(
      try {
        ignore(@thrift.decode_message(wire + b"x", protocol))
        false
      } catch {
        _ => true
      },
    )
  }
  for
    bad in [
      b"\x81\x21\x00\x00\x00", b"\x82\x22\x00\x00\x00", b"\x82\x01\x00\x00\x00",
      b"\x82\x21\xff\xff\xff\xff\x10\x00\x00",
    ] {
    assert_true(
      try {
        ignore(@thrift.decode_message(bad, @thrift.CompactProtocol))
        false
      } catch {
        _ => true
      },
    )
  }
}
