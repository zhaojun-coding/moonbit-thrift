///|
test "map type mismatch truncation and absent type are rejected" {
  for protocol in [@thrift.BinaryProtocol, @thrift.CompactProtocol] {
    let v = @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
      (@thrift.Binary(b"a"), @thrift.I32(4)),
    ])
    let wire = @thrift.encode(v, protocol)
    for n in 0..<wire.length() {
      assert_true(
        try {
          ignore(@thrift.decode(wire[:n].to_owned(), @thrift.MapKind, protocol))
          false
        } catch {
          _ => true
        },
      )
    }
    for
      bad in [
        @thrift.MapValue(None, None, [(@thrift.I32(1), @thrift.I32(2))]),
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b"x"), @thrift.I32(2)),
        ]),
      ] {
      assert_true(
        try {
          ignore(@thrift.encode(bad, protocol))
          false
        } catch {
          _ => true
        },
      )
    }
  }
  for wire in [b"\x01\x00", b"\xff\xff\xff\xff\x0f\x88"] {
    assert_true(
      try {
        ignore(@thrift.decode(wire, @thrift.MapKind, @thrift.CompactProtocol))
        false
      } catch {
        _ => true
      },
    )
  }
}
