///|
test "UUID published protocol tags and network byte order" {
  // 00112233-4455-6677-8899-aabbccddeeff, fixed width without length prefix.
  let bytes = b"\x00\x11\x22\x33\x44\x55\x66\x77\x88\x99\xaa\xbb\xcc\xdd\xee\xff"
  let value = @thrift.Struct([(1, @thrift.Uuid(bytes))])
  let binary = b"\x10\x00\x01" + bytes + b"\x00"
  let compact = b"\x1d" + bytes + b"\x00"
  for
    (protocol, wire) in [
      (@thrift.BinaryProtocol, binary),
      (@thrift.CompactProtocol, compact),
    ] {
    assert_eq(@thrift.encode(value, protocol), wire)
    assert_eq(@thrift.decode(wire, @thrift.StructKind, protocol), value)
    assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
    assert_eq(
      @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
      wire.length(),
    )
    for n in 0..<16 {
      assert_true(
        try {
          ignore(
            @thrift.decode(bytes[:n].to_owned(), @thrift.UuidKind, protocol),
          )
          false
        } catch {
          _ => true
        },
      )
      assert_true(
        try {
          ignore(@thrift.encode(@thrift.Uuid(bytes[:n].to_owned()), protocol))
          false
        } catch {
          _ => true
        },
      )
    }
    assert_true(
      try {
        ignore(@thrift.encode(@thrift.Uuid(bytes + b"x"), protocol))
        false
      } catch {
        _ => true
      },
    )
    let container = @thrift.MapValue(
      Some(@thrift.UuidKind),
      Some(@thrift.SetKind),
      [
        (
          @thrift.Uuid(bytes),
          @thrift.SetValue(@thrift.UuidKind, [@thrift.Uuid(bytes)]),
        ),
      ],
    )
    let wire = @thrift.encode(container, protocol)
    assert_eq(@thrift.decode(wire, @thrift.MapKind, protocol), container)
    assert_eq(
      @thrift.skip_prefix(wire, @thrift.MapKind, protocol),
      wire.length(),
    )
  }
}
