///|
test "binary compact field header golden bytes" {
  let value = @thrift.Struct([
    (1, @thrift.I32(150)),
    (2, @thrift.Bool(true)),
    (3, @thrift.Binary(b"hi")),
  ])
  let compact = b"\x15\xac\x02\x11\x18\x02hi\x00"
  let binary = b"\x08\x00\x01\x00\x00\x00\x96\x02\x00\x02\x01\x0b\x00\x03\x00\x00\x00\x02hi\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), compact)
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), binary)
  assert_eq(
    @thrift.decode(compact, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
  assert_eq(
    @thrift.decode(binary, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "all scalar boundary types nested lists and absolute field ids" {
  let values = [
    @thrift.Bool(false),
    @thrift.Byte(-128),
    @thrift.I16(-32768),
    @thrift.I32(-2147483648),
    @thrift.I64(-9223372036854775808L),
    @thrift.I64(9223372036854775807L),
    @thrift.Double(3.5),
    @thrift.Binary(b"\xff\x00"),
    @thrift.List(@thrift.BoolKind, [@thrift.Bool(true), @thrift.Bool(false)]),
    @thrift.Struct([(32, @thrift.I16(-7)), (-2, @thrift.Bool(false))]),
  ]
  for protocol in [@thrift.BinaryProtocol, @thrift.CompactProtocol] {
    for value in values {
      assert_eq(
        @thrift.decode(@thrift.encode(value, protocol), value.kind(), protocol),
        value,
      )
    }
  }
}

///|
test "long compact list and little endian double" {
  let value = @thrift.List(
    @thrift.I32Kind,
    Array::makei(20, i => @thrift.I32(i)),
  )
  let wire = @thrift.encode(value, @thrift.CompactProtocol)
  assert_eq(wire[:2].to_owned(), b"\xf5\x14")
  assert_eq(
    @thrift.decode(wire, @thrift.ListKind, @thrift.CompactProtocol),
    value,
  )
  assert_eq(
    @thrift.encode(@thrift.Double(1.0), @thrift.CompactProtocol),
    b"\x00\x00\x00\x00\x00\x00\xf0\x3f",
  )
}

///|
test "truncation overflow mismatched list and trailing bytes" {
  let value = @thrift.Struct([(1, @thrift.Binary(b"abcdef"))])
  for protocol in [@thrift.BinaryProtocol, @thrift.CompactProtocol] {
    let wire = @thrift.encode(value, protocol)
    for n in 0..<wire.length() {
      assert_true(
        try {
          ignore(
            @thrift.decode(wire[:n].to_owned(), @thrift.StructKind, protocol),
          )
          false
        } catch {
          _ => true
        },
      )
    }
    assert_true(
      try {
        ignore(@thrift.decode(wire + b"x", @thrift.StructKind, protocol))
        false
      } catch {
        _ => true
      },
    )
  }
  assert_true(
    try {
      ignore(
        @thrift.decode(
          b"\xff\xff\xff\xff\xff\xff\xff\xff\xff\x02",
          @thrift.I64Kind,
          @thrift.CompactProtocol,
        ),
      )
      false
    } catch {
      _ => true
    },
  )
  assert_true(
    try {
      ignore(
        @thrift.encode(
          @thrift.List(@thrift.I32Kind, [@thrift.Bool(true)]),
          @thrift.BinaryProtocol,
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}
