///|
test "framed transport every possible split concatenation and empty frames" {
  let packets = [b"", b"abc", b"0123456789", b"", b"last"]
  let wire = packets.fold(init=b"", (acc, p) => acc + @thrift.frame(p))
  for split in 0..<=wire.length() {
    let d = @thrift.FrameDecoder::new()
    let first = d.feed(wire[:split].to_owned())
    let second = d.feed(wire[split:].to_owned())
    assert_eq(first + second, packets)
    d.finish()
  }
  let d = @thrift.FrameDecoder::new()
  let out = []
  for b in wire {
    for packet in d.feed(Bytes::from_array([b])) {
      out.push(packet)
    }
  }
  assert_eq(out, packets)
  d.finish()
}

///|
test "framed truncation invalid lengths poisoning and reset" {
  let wire = @thrift.frame(b"abc")
  for len in 1..<wire.length() {
    let d = @thrift.FrameDecoder::new()
    assert_eq(d.feed(wire[:len].to_owned()), [])
    assert_true(
      try {
        d.finish()
        false
      } catch {
        _ => true
      },
    )
    assert_true(
      try {
        ignore(d.feed(wire))
        false
      } catch {
        _ => true
      },
    )
    d.reset()
    assert_eq(d.feed(wire), [b"abc"])
    d.finish()
  }
  for bad in [b"\xff\xff\xff\xff", b"\x00\x00\x00\x04"] {
    let d = @thrift.FrameDecoder::new(max_frame=3)
    assert_true(
      try {
        ignore(d.feed(bad))
        false
      } catch {
        _ => true
      },
    )
    assert_true(
      try {
        d.finish()
        false
      } catch {
        _ => true
      },
    )
  }
  assert_true(
    try {
      ignore(@thrift.frame(b"abcd", max_frame=3))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "legacy Binary headers and strict mode" {
  let m : @thrift.Message = {
    name: "ping",
    message_type: 1,
    sequence_id: 7,
    body: @thrift.Struct([]),
  }
  let wire = b"\x00\x00\x00\x04ping\x01\x00\x00\x00\x07\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
  assert_true(
    try {
      ignore(@thrift.decode_message(wire, @thrift.BinaryProtocol))
      false
    } catch {
      _ => true
    },
  )
  for len in 0..<wire.length() {
    assert_true(
      try {
        ignore(
          @thrift.decode_message(
            wire[:len].to_owned(),
            @thrift.BinaryProtocol,
            strict_read=false,
          ),
        )
        false
      } catch {
        _ => true
      },
    )
  }
  // The Binary specification reserves, and Apache ignores, the third header byte.
  let reserved = b"\x80\x01\x7f\x01\x00\x00\x00\x04ping\x00\x00\x00\x07\x00"
  assert_eq(@thrift.decode_message(reserved, @thrift.BinaryProtocol), m)
}

///|
test "selection skips nested unknown fields and mismatched types" {
  let v = @thrift.Struct([
    (1, @thrift.Bool(false)),
    (
      22,
      @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ListKind), [
        (
          @thrift.I32(7),
          @thrift.List(@thrift.StructKind, [
            @thrift.Struct([(1, @thrift.Binary(b"skip"))]),
          ]),
        ),
      ]),
    ),
    (-3, @thrift.I64(-999L)),
    (
      4,
      @thrift.SetValue(@thrift.BoolKind, [
        @thrift.Bool(false),
        @thrift.Bool(true),
      ]),
    ),
    (5, @thrift.I32(42)),
  ])
  for protocol in [@thrift.BinaryProtocol, @thrift.CompactProtocol] {
    let wire = @thrift.encode(v, protocol)
    assert_eq(
      @thrift.decode_selected(
        wire,
        [(1, @thrift.BoolKind), (5, @thrift.I32Kind), (-3, @thrift.BinaryKind)],
        protocol,
      ),
      @thrift.Struct([(1, @thrift.Bool(false)), (5, @thrift.I32(42))]),
    )
    assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
    assert_eq(
      @thrift.skip_prefix(wire + b"tail", @thrift.StructKind, protocol),
      wire.length(),
    )
    assert_eq(
      @thrift.decode_prefix(wire + b"tail", @thrift.StructKind, protocol),
      (v, wire.length()),
    )
    for len in 0..<wire.length() {
      assert_true(
        try {
          ignore(
            @thrift.skip_prefix(
              wire[:len].to_owned(),
              @thrift.StructKind,
              protocol,
            ),
          )
          false
        } catch {
          _ => true
        },
      )
      assert_true(
        try {
          ignore(@thrift.decode_selected(wire[:len].to_owned(), [], protocol))
          false
        } catch {
          _ => true
        },
      )
    }
  }
}
