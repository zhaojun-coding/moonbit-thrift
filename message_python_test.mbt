// Independent RPC vectors generated with Apache Thrift Python 0.22.0.

///|
test "Apache RPC BinaryProtocol type 1" {
  let m : @thrift.Message = {
    name: "ping",
    message_type: 1,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x01\x00\x00\x00\x04\x70\x69\x6e\x67\x00\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(@thrift.encode_message(m, @thrift.BinaryProtocol), wire)
  assert_eq(@thrift.decode_message(wire, @thrift.BinaryProtocol), m)
}

///|
test "Apache RPC CompactProtocol type 1" {
  let m : @thrift.Message = {
    name: "ping",
    message_type: 1,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x21\x00\x04\x70\x69\x6e\x67\x15\x54\x00"
  assert_eq(@thrift.encode_message(m, @thrift.CompactProtocol), wire)
  assert_eq(@thrift.decode_message(wire, @thrift.CompactProtocol), m)
}

///|
test "Apache RPC BinaryProtocol type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x02\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\xff\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(@thrift.encode_message(m, @thrift.BinaryProtocol), wire)
  assert_eq(@thrift.decode_message(wire, @thrift.BinaryProtocol), m)
}

///|
test "Apache RPC CompactProtocol type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x41\xff\xff\xff\xff\x0f\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(@thrift.encode_message(m, @thrift.CompactProtocol), wire)
  assert_eq(@thrift.decode_message(wire, @thrift.CompactProtocol), m)
}

///|
test "Apache RPC BinaryProtocol type 3" {
  let m : @thrift.Message = {
    name: "ping",
    message_type: 3,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x03\x00\x00\x00\x04\x70\x69\x6e\x67\x80\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(@thrift.encode_message(m, @thrift.BinaryProtocol), wire)
  assert_eq(@thrift.decode_message(wire, @thrift.BinaryProtocol), m)
}

///|
test "Apache RPC CompactProtocol type 3" {
  let m : @thrift.Message = {
    name: "ping",
    message_type: 3,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x61\x80\x80\x80\x80\x08\x04\x70\x69\x6e\x67\x15\x54\x00"
  assert_eq(@thrift.encode_message(m, @thrift.CompactProtocol), wire)
  assert_eq(@thrift.decode_message(wire, @thrift.CompactProtocol), m)
}

///|
test "Apache RPC BinaryProtocol type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x04\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x7f\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(@thrift.encode_message(m, @thrift.BinaryProtocol), wire)
  assert_eq(@thrift.decode_message(wire, @thrift.BinaryProtocol), m)
}

///|
test "Apache RPC CompactProtocol type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x81\xff\xff\xff\xff\x07\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(@thrift.encode_message(m, @thrift.CompactProtocol), wire)
  assert_eq(@thrift.decode_message(wire, @thrift.CompactProtocol), m)
}
