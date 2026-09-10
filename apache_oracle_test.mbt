// Original seeded fixtures; independent oracle: Apache Thrift Python 0.22.0.

///|
test "Apache seeded BinaryProtocol fixture 0" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 0" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 1" {
  let original = @thrift.Struct([
    (
      -1,
      @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.DoubleKind), [
        (@thrift.I16(-32768), @thrift.Double(1.5)),
        (@thrift.I16(-53), @thrift.Double(1.5)),
      ]),
    ),
    (0, @thrift.Binary(b"")),
  ])
  let wire = b"\x0d\xff\xff\x06\x04\x00\x00\x00\x02\x80\x00\x3f\xf8\x00\x00\x00\x00\x00\x00\xff\xcb\x3f\xf8\x00\x00\x00\x00\x00\x00\x0b\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        -1,
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.DoubleKind), [
          (@thrift.I16(-32768), @thrift.Double(1.5)),
          (@thrift.I16(-53), @thrift.Double(1.5)),
        ]),
      ),
      (0, @thrift.Binary(b"")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x25\x0d\xff\xff\x06\x04\x00\x00\x00\x02\x80\x00\x3f\xf8\x00\x00\x00\x00\x00\x00\xff\xcb\x3f\xf8\x00\x00\x00\x00\x00\x00\x0b\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 1" {
  let original = @thrift.Struct([
    (
      -1,
      @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.DoubleKind), [
        (@thrift.I16(-32768), @thrift.Double(1.5)),
        (@thrift.I16(-53), @thrift.Double(1.5)),
      ]),
    ),
    (0, @thrift.Binary(b"")),
  ])
  let wire = b"\x0b\x01\x02\x47\xff\xff\x03\x00\x00\x00\x00\x00\x00\xf8\x3f\x69\x00\x00\x00\x00\x00\x00\xf8\x3f\x18\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        -1,
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.DoubleKind), [
          (@thrift.I16(-32768), @thrift.Double(1.5)),
          (@thrift.I16(-53), @thrift.Double(1.5)),
        ]),
      ),
      (0, @thrift.Binary(b"")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1b\x0b\x01\x02\x47\xff\xff\x03\x00\x00\x00\x00\x00\x00\xf8\x3f\x69\x00\x00\x00\x00\x00\x00\xf8\x3f\x18\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 2" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 2" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 3" {
  let original = @thrift.Struct([
    (32767, @thrift.I32(-1)),
    (2, @thrift.Byte(0)),
    (15, @thrift.I32(-1)),
  ])
  let wire = b"\x08\x7f\xff\xff\xff\xff\xff\x03\x00\x02\x00\x08\x00\x0f\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.I32(-1)),
      (2, @thrift.Byte(0)),
      (15, @thrift.I32(-1)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x13\x08\x7f\xff\xff\xff\xff\xff\x03\x00\x02\x00\x08\x00\x0f\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 3" {
  let original = @thrift.Struct([
    (32767, @thrift.I32(-1)),
    (2, @thrift.Byte(0)),
    (15, @thrift.I32(-1)),
  ])
  let wire = b"\x05\xfe\xff\x03\x01\x03\x04\x00\xd5\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.I32(-1)),
      (2, @thrift.Byte(0)),
      (15, @thrift.I32(-1)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0b\x05\xfe\xff\x03\x01\x03\x04\x00\xd5\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 4" {
  let original = @thrift.Struct([
    (32767, @thrift.Bool(true)),
    (127, @thrift.Binary(b"\x00\xff\xfe")),
    (1, @thrift.I32(-2147483648)),
    (
      2,
      @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ListKind), [
        (@thrift.I32(0), @thrift.List(@thrift.DoubleKind, [])),
        (
          @thrift.I32(-2147483648),
          @thrift.List(@thrift.ListKind, [
            @thrift.List(@thrift.I64Kind, [
              @thrift.I64(1L),
              @thrift.I64(-9223372036854775808L),
            ]),
            @thrift.List(@thrift.DoubleKind, [@thrift.Double(-0.0)]),
          ]),
        ),
        (@thrift.I32(85), @thrift.List(@thrift.DoubleKind, [])),
      ]),
    ),
  ])
  let wire = b"\x02\x7f\xff\x01\x0b\x00\x7f\x00\x00\x00\x03\x00\xff\xfe\x08\x00\x01\x80\x00\x00\x00\x0d\x00\x02\x08\x0f\x00\x00\x00\x03\x00\x00\x00\x00\x04\x00\x00\x00\x00\x80\x00\x00\x00\x0f\x00\x00\x00\x02\x0a\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x04\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x55\x04\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.Bool(true)),
      (127, @thrift.Binary(b"\x00\xff\xfe")),
      (1, @thrift.I32(-2147483648)),
      (
        2,
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ListKind), [
          (@thrift.I32(0), @thrift.List(@thrift.DoubleKind, [])),
          (
            @thrift.I32(-2147483648),
            @thrift.List(@thrift.ListKind, [
              @thrift.List(@thrift.I64Kind, [
                @thrift.I64(1L),
                @thrift.I64(-9223372036854775808L),
              ]),
              @thrift.List(@thrift.DoubleKind, [@thrift.Double(-0.0)]),
            ]),
          ),
          (@thrift.I32(85), @thrift.List(@thrift.DoubleKind, [])),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x5c\x02\x7f\xff\x01\x0b\x00\x7f\x00\x00\x00\x03\x00\xff\xfe\x08\x00\x01\x80\x00\x00\x00\x0d\x00\x02\x08\x0f\x00\x00\x00\x03\x00\x00\x00\x00\x04\x00\x00\x00\x00\x80\x00\x00\x00\x0f\x00\x00\x00\x02\x0a\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x04\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x55\x04\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 4" {
  let original = @thrift.Struct([
    (32767, @thrift.Bool(true)),
    (127, @thrift.Binary(b"\x00\xff\xfe")),
    (1, @thrift.I32(-2147483648)),
    (
      2,
      @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ListKind), [
        (@thrift.I32(0), @thrift.List(@thrift.DoubleKind, [])),
        (
          @thrift.I32(-2147483648),
          @thrift.List(@thrift.ListKind, [
            @thrift.List(@thrift.I64Kind, [
              @thrift.I64(1L),
              @thrift.I64(-9223372036854775808L),
            ]),
            @thrift.List(@thrift.DoubleKind, [@thrift.Double(-0.0)]),
          ]),
        ),
        (@thrift.I32(85), @thrift.List(@thrift.DoubleKind, [])),
      ]),
    ),
  ])
  let wire = b"\x01\xfe\xff\x03\x08\xfe\x01\x03\x00\xff\xfe\x05\x02\xff\xff\xff\xff\x0f\x1b\x03\x59\x00\x07\xff\xff\xff\xff\x0f\x29\x26\x02\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x17\x00\x00\x00\x00\x00\x00\x00\x80\xaa\x01\x07\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.Bool(true)),
      (127, @thrift.Binary(b"\x00\xff\xfe")),
      (1, @thrift.I32(-2147483648)),
      (
        2,
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ListKind), [
          (@thrift.I32(0), @thrift.List(@thrift.DoubleKind, [])),
          (
            @thrift.I32(-2147483648),
            @thrift.List(@thrift.ListKind, [
              @thrift.List(@thrift.I64Kind, [
                @thrift.I64(1L),
                @thrift.I64(-9223372036854775808L),
              ]),
              @thrift.List(@thrift.DoubleKind, [@thrift.Double(-0.0)]),
            ]),
          ),
          (@thrift.I32(85), @thrift.List(@thrift.DoubleKind, [])),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x36\x01\xfe\xff\x03\x08\xfe\x01\x03\x00\xff\xfe\x05\x02\xff\xff\xff\xff\x0f\x1b\x03\x59\x00\x07\xff\xff\xff\xff\x0f\x29\x26\x02\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x17\x00\x00\x00\x00\x00\x00\x00\x80\xaa\x01\x07\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 5" {
  let original = @thrift.Struct([
    (
      14,
      @thrift.Struct([
        (-1, @thrift.Struct([(127, @thrift.SetValue(@thrift.I16Kind, []))])),
      ]),
    ),
  ])
  let wire = b"\x0c\x00\x0e\x0c\xff\xff\x0e\x00\x7f\x06\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        14,
        @thrift.Struct([
          (-1, @thrift.Struct([(127, @thrift.SetValue(@thrift.I16Kind, []))])),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x11\x0c\x00\x0e\x0c\xff\xff\x0e\x00\x7f\x06\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 5" {
  let original = @thrift.Struct([
    (
      14,
      @thrift.Struct([
        (-1, @thrift.Struct([(127, @thrift.SetValue(@thrift.I16Kind, []))])),
      ]),
    ),
  ])
  let wire = b"\xec\x0c\x01\x0a\xfe\x01\x04\x00\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        14,
        @thrift.Struct([
          (-1, @thrift.Struct([(127, @thrift.SetValue(@thrift.I16Kind, []))])),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0a\xec\x0c\x01\x0a\xfe\x01\x04\x00\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 6" {
  let original = @thrift.Struct([(0, @thrift.Double(1.0e+30))])
  let wire = b"\x04\x00\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(0, @thrift.Double(1.0e+30))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0c\x04\x00\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 6" {
  let original = @thrift.Struct([(0, @thrift.Double(1.0e+30))])
  let wire = b"\x07\x00\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(0, @thrift.Double(1.0e+30))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0b\x07\x00\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 7" {
  let original = @thrift.Struct([
    (127, @thrift.I16(1)),
    (
      15,
      @thrift.Binary(
        b"\x9d\x5e\x9b\x17\x05\xa1\xd9\x14\x2c\xf3\x99\x20\x53\xae\x72\xe6\x53",
      ),
    ),
  ])
  let wire = b"\x06\x00\x7f\x00\x01\x0b\x00\x0f\x00\x00\x00\x11\x9d\x5e\x9b\x17\x05\xa1\xd9\x14\x2c\xf3\x99\x20\x53\xae\x72\xe6\x53\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (127, @thrift.I16(1)),
      (
        15,
        @thrift.Binary(
          b"\x9d\x5e\x9b\x17\x05\xa1\xd9\x14\x2c\xf3\x99\x20\x53\xae\x72\xe6\x53",
        ),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1e\x06\x00\x7f\x00\x01\x0b\x00\x0f\x00\x00\x00\x11\x9d\x5e\x9b\x17\x05\xa1\xd9\x14\x2c\xf3\x99\x20\x53\xae\x72\xe6\x53\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 7" {
  let original = @thrift.Struct([
    (127, @thrift.I16(1)),
    (
      15,
      @thrift.Binary(
        b"\x9d\x5e\x9b\x17\x05\xa1\xd9\x14\x2c\xf3\x99\x20\x53\xae\x72\xe6\x53",
      ),
    ),
  ])
  let wire = b"\x04\xfe\x01\x02\x08\x1e\x11\x9d\x5e\x9b\x17\x05\xa1\xd9\x14\x2c\xf3\x99\x20\x53\xae\x72\xe6\x53\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (127, @thrift.I16(1)),
      (
        15,
        @thrift.Binary(
          b"\x9d\x5e\x9b\x17\x05\xa1\xd9\x14\x2c\xf3\x99\x20\x53\xae\x72\xe6\x53",
        ),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x19\x04\xfe\x01\x02\x08\x1e\x11\x9d\x5e\x9b\x17\x05\xa1\xd9\x14\x2c\xf3\x99\x20\x53\xae\x72\xe6\x53\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 8" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 8" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 9" {
  let original = @thrift.Struct([
    (2, @thrift.I64(0L)),
    (14, @thrift.List(@thrift.ByteKind, [@thrift.Byte(-128), @thrift.Byte(71)])),
  ])
  let wire = b"\x0a\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x0f\x00\x0e\x03\x00\x00\x00\x02\x80\x47\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.I64(0L)),
      (
        14,
        @thrift.List(@thrift.ByteKind, [@thrift.Byte(-128), @thrift.Byte(71)]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x16\x0a\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x0f\x00\x0e\x03\x00\x00\x00\x02\x80\x47\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 9" {
  let original = @thrift.Struct([
    (2, @thrift.I64(0L)),
    (14, @thrift.List(@thrift.ByteKind, [@thrift.Byte(-128), @thrift.Byte(71)])),
  ])
  let wire = b"\x26\x00\xc9\x23\x80\x47\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.I64(0L)),
      (
        14,
        @thrift.List(@thrift.ByteKind, [@thrift.Byte(-128), @thrift.Byte(71)]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x07\x26\x00\xc9\x23\x80\x47\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 10" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 10" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 11" {
  let original = @thrift.Struct([(14, @thrift.Bool(true))])
  let wire = b"\x02\x00\x0e\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.Bool(true))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x05\x02\x00\x0e\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 11" {
  let original = @thrift.Struct([(14, @thrift.Bool(true))])
  let wire = b"\xe1\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.Bool(true))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x02\xe1\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 12" {
  let original = @thrift.Struct([
    (0, @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)])),
  ])
  let wire = b"\x0f\x00\x00\x02\x00\x00\x00\x01\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(0, @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)]))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0a\x0f\x00\x00\x02\x00\x00\x00\x01\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 12" {
  let original = @thrift.Struct([
    (0, @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)])),
  ])
  let wire = b"\x09\x00\x11\x02\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(0, @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)]))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x05\x09\x00\x11\x02\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 13" {
  let original = @thrift.Struct([
    (
      16,
      @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.DoubleKind), [
        (@thrift.Bool(false), @thrift.Double(-12.125)),
      ]),
    ),
    (15, @thrift.I64(-9223372036854775808L)),
    (2, @thrift.Struct([])),
  ])
  let wire = b"\x0d\x00\x10\x02\x04\x00\x00\x00\x01\x00\xc0\x28\x40\x00\x00\x00\x00\x00\x0a\x00\x0f\x80\x00\x00\x00\x00\x00\x00\x00\x0c\x00\x02\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        16,
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.DoubleKind), [
          (@thrift.Bool(false), @thrift.Double(-12.125)),
        ]),
      ),
      (15, @thrift.I64(-9223372036854775808L)),
      (2, @thrift.Struct([])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x22\x0d\x00\x10\x02\x04\x00\x00\x00\x01\x00\xc0\x28\x40\x00\x00\x00\x00\x00\x0a\x00\x0f\x80\x00\x00\x00\x00\x00\x00\x00\x0c\x00\x02\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 13" {
  let original = @thrift.Struct([
    (
      16,
      @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.DoubleKind), [
        (@thrift.Bool(false), @thrift.Double(-12.125)),
      ]),
    ),
    (15, @thrift.I64(-9223372036854775808L)),
    (2, @thrift.Struct([])),
  ])
  let wire = b"\x0b\x20\x01\x17\x02\x00\x00\x00\x00\x00\x40\x28\xc0\x06\x1e\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x0c\x04\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        16,
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.DoubleKind), [
          (@thrift.Bool(false), @thrift.Double(-12.125)),
        ]),
      ),
      (15, @thrift.I64(-9223372036854775808L)),
      (2, @thrift.Struct([])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1d\x0b\x20\x01\x17\x02\x00\x00\x00\x00\x00\x40\x28\xc0\x06\x1e\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x0c\x04\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 14" {
  let original = @thrift.Struct([
    (
      15,
      @thrift.Struct([
        (
          2,
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.DoubleKind), []),
        ),
        (15, @thrift.I16(1)),
      ]),
    ),
    (31, @thrift.Double(1.0e-30)),
    (0, @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(1), @thrift.I32(49)])),
    (
      127,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
        (
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          @thrift.SetValue(@thrift.I64Kind, []),
        ),
        (
          @thrift.Binary(b""),
          @thrift.SetValue(@thrift.BoolKind, [
            @thrift.Bool(false),
            @thrift.Bool(true),
          ]),
        ),
        (
          @thrift.Binary(
            b"\x34\xc2\xd1\xcc\x71\xdf\x2c\x16\xab\x74\xb4\x16\x23\xdc\x79\x23\x83",
          ),
          @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(-1)]),
        ),
      ]),
    ),
  ])
  let wire = b"\x0c\x00\x0f\x0d\x00\x02\x0a\x04\x00\x00\x00\x00\x06\x00\x0f\x00\x01\x00\x04\x00\x1f\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x0e\x00\x00\x08\x00\x00\x00\x02\x00\x00\x00\x01\x00\x00\x00\x31\x0d\x00\x7f\x0b\x0e\x00\x00\x00\x03\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0a\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x02\x00\x01\x00\x00\x00\x11\x34\xc2\xd1\xcc\x71\xdf\x2c\x16\xab\x74\xb4\x16\x23\xdc\x79\x23\x83\x08\x00\x00\x00\x01\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        15,
        @thrift.Struct([
          (
            2,
            @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.DoubleKind), []),
          ),
          (15, @thrift.I16(1)),
        ]),
      ),
      (31, @thrift.Double(1.0e-30)),
      (0, @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(1), @thrift.I32(49)])),
      (
        127,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
          (
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            @thrift.SetValue(@thrift.I64Kind, []),
          ),
          (
            @thrift.Binary(b""),
            @thrift.SetValue(@thrift.BoolKind, [
              @thrift.Bool(false),
              @thrift.Bool(true),
            ]),
          ),
          (
            @thrift.Binary(
              b"\x34\xc2\xd1\xcc\x71\xdf\x2c\x16\xab\x74\xb4\x16\x23\xdc\x79\x23\x83",
            ),
            @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(-1)]),
          ),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x73\x0c\x00\x0f\x0d\x00\x02\x0a\x04\x00\x00\x00\x00\x06\x00\x0f\x00\x01\x00\x04\x00\x1f\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x0e\x00\x00\x08\x00\x00\x00\x02\x00\x00\x00\x01\x00\x00\x00\x31\x0d\x00\x7f\x0b\x0e\x00\x00\x00\x03\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0a\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x02\x00\x01\x00\x00\x00\x11\x34\xc2\xd1\xcc\x71\xdf\x2c\x16\xab\x74\xb4\x16\x23\xdc\x79\x23\x83\x08\x00\x00\x00\x01\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 14" {
  let original = @thrift.Struct([
    (
      15,
      @thrift.Struct([
        (
          2,
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.DoubleKind), []),
        ),
        (15, @thrift.I16(1)),
      ]),
    ),
    (31, @thrift.Double(1.0e-30)),
    (0, @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(1), @thrift.I32(49)])),
    (
      127,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
        (
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          @thrift.SetValue(@thrift.I64Kind, []),
        ),
        (
          @thrift.Binary(b""),
          @thrift.SetValue(@thrift.BoolKind, [
            @thrift.Bool(false),
            @thrift.Bool(true),
          ]),
        ),
        (
          @thrift.Binary(
            b"\x34\xc2\xd1\xcc\x71\xdf\x2c\x16\xab\x74\xb4\x16\x23\xdc\x79\x23\x83",
          ),
          @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(-1)]),
        ),
      ]),
    ),
  ])
  let wire = b"\xfc\x2b\x00\xd4\x02\x00\x07\x3e\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x0a\x00\x25\x02\x62\x0b\xfe\x01\x03\x8a\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\x00\x21\x02\x01\x11\x34\xc2\xd1\xcc\x71\xdf\x2c\x16\xab\x74\xb4\x16\x23\xdc\x79\x23\x83\x15\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        15,
        @thrift.Struct([
          (2, @thrift.MapValue(None, None, [])),
          (15, @thrift.I16(1)),
        ]),
      ),
      (31, @thrift.Double(1.0e-30)),
      (0, @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(1), @thrift.I32(49)])),
      (
        127,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
          (
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            @thrift.SetValue(@thrift.I64Kind, []),
          ),
          (
            @thrift.Binary(b""),
            @thrift.SetValue(@thrift.BoolKind, [
              @thrift.Bool(false),
              @thrift.Bool(true),
            ]),
          ),
          (
            @thrift.Binary(
              b"\x34\xc2\xd1\xcc\x71\xdf\x2c\x16\xab\x74\xb4\x16\x23\xdc\x79\x23\x83",
            ),
            @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(-1)]),
          ),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x3f\xfc\x2b\x00\xd4\x02\x00\x07\x3e\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x0a\x00\x25\x02\x62\x0b\xfe\x01\x03\x8a\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\x00\x21\x02\x01\x11\x34\xc2\xd1\xcc\x71\xdf\x2c\x16\xab\x74\xb4\x16\x23\xdc\x79\x23\x83\x15\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 15" {
  let original = @thrift.Struct([
    (15, @thrift.Bool(true)),
    (-1, @thrift.Double(-12.125)),
  ])
  let wire = b"\x02\x00\x0f\x01\x04\xff\xff\xc0\x28\x40\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(15, @thrift.Bool(true)), (-1, @thrift.Double(-12.125))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x10\x02\x00\x0f\x01\x04\xff\xff\xc0\x28\x40\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 15" {
  let original = @thrift.Struct([
    (15, @thrift.Bool(true)),
    (-1, @thrift.Double(-12.125)),
  ])
  let wire = b"\xf1\x07\x01\x00\x00\x00\x00\x00\x40\x28\xc0\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(15, @thrift.Bool(true)), (-1, @thrift.Double(-12.125))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0c\xf1\x07\x01\x00\x00\x00\x00\x00\x40\x28\xc0\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 16" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 16" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 17" {
  let original = @thrift.Struct([
    (31, @thrift.I16(1)),
    (15, @thrift.I64(9223372036854775807L)),
    (14, @thrift.Byte(-128)),
  ])
  let wire = b"\x06\x00\x1f\x00\x01\x0a\x00\x0f\x7f\xff\xff\xff\xff\xff\xff\xff\x03\x00\x0e\x80\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.I16(1)),
      (15, @thrift.I64(9223372036854775807L)),
      (14, @thrift.Byte(-128)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x15\x06\x00\x1f\x00\x01\x0a\x00\x0f\x7f\xff\xff\xff\xff\xff\xff\xff\x03\x00\x0e\x80\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 17" {
  let original = @thrift.Struct([
    (31, @thrift.I16(1)),
    (15, @thrift.I64(9223372036854775807L)),
    (14, @thrift.Byte(-128)),
  ])
  let wire = b"\x04\x3e\x02\x06\x1e\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x03\x1c\x80\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.I16(1)),
      (15, @thrift.I64(9223372036854775807L)),
      (14, @thrift.Byte(-128)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x13\x04\x3e\x02\x06\x1e\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x03\x1c\x80\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 18" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 18" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 19" {
  let original = @thrift.Struct([
    (
      16,
      @thrift.List(@thrift.ListKind, [
        @thrift.List(@thrift.BinaryKind, [
          @thrift.Binary(
            b"\x60\x83\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4\xb9",
          ),
          @thrift.Binary(b"\x00\xff\xfe"),
        ]),
        @thrift.List(@thrift.BoolKind, [
          @thrift.Bool(false),
          @thrift.Bool(false),
        ]),
        @thrift.List(@thrift.I64Kind, [
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(-9223372036854775808L),
        ]),
        @thrift.List(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
            (@thrift.I64(-9223372036854775808L), @thrift.Byte(1)),
            (@thrift.I64(-9223372036854775808L), @thrift.Byte(-1)),
            (@thrift.I64(9223372036854775807L), @thrift.Byte(-128)),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BinaryKind), []),
        ]),
        @thrift.List(@thrift.BinaryKind, [
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        ]),
        @thrift.List(@thrift.SetKind, [
          @thrift.SetValue(@thrift.BoolKind, [
            @thrift.Bool(false),
            @thrift.Bool(true),
          ]),
        ]),
        @thrift.List(@thrift.ListKind, [
          @thrift.List(@thrift.BoolKind, [
            @thrift.Bool(false),
            @thrift.Bool(true),
          ]),
          @thrift.List(@thrift.DoubleKind, [
            @thrift.Double(-0.0),
            @thrift.Double(0.0),
          ]),
        ]),
        @thrift.List(@thrift.I64Kind, [@thrift.I64(0L)]),
        @thrift.List(@thrift.I32Kind, [
          @thrift.I32(2147483647),
          @thrift.I32(-2147483648),
        ]),
        @thrift.List(@thrift.I16Kind, [@thrift.I16(0)]),
        @thrift.List(@thrift.ByteKind, [@thrift.Byte(41)]),
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (127, @thrift.I32(0)),
            (-1, @thrift.I32(56)),
            (0, @thrift.I32(2147483647)),
          ]),
        ]),
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (16, @thrift.Byte(50)),
            (32767, @thrift.I16(1)),
            (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          ]),
        ]),
        @thrift.List(@thrift.I64Kind, []),
      ]),
    ),
    (
      -32768,
      @thrift.List(@thrift.SetKind, [
        @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0), @thrift.I16(1)]),
        @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(-2147483648)]),
        @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)]),
        @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0)]),
        @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-12.125)]),
        @thrift.SetValue(@thrift.ListKind, [
          @thrift.List(@thrift.DoubleKind, [
            @thrift.Double(0.0),
            @thrift.Double(1.0e-30),
          ]),
        ]),
        @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(1)]),
        @thrift.SetValue(@thrift.SetKind, [
          @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(1.0e-30)]),
        ]),
        @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-0.0)]),
        @thrift.SetValue(@thrift.SetKind, []),
        @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(2147483647)]),
        @thrift.SetValue(@thrift.ByteKind, []),
        @thrift.SetValue(@thrift.StructKind, [
          @thrift.Struct([
            (2, @thrift.Bool(false)),
            (31, @thrift.I32(2147483647)),
            (32767, @thrift.I32(21)),
            (127, @thrift.Double(1.0e+30)),
          ]),
          @thrift.Struct([(14, @thrift.I64(1L))]),
        ]),
        @thrift.SetValue(@thrift.SetKind, [
          @thrift.SetValue(@thrift.I16Kind, []),
        ]),
      ]),
    ),
    (2, @thrift.Bool(true)),
    (1, @thrift.I32(2147483647)),
  ])
  let wire = b"\x0f\x00\x10\x0f\x00\x00\x00\x0e\x0b\x00\x00\x00\x02\x00\x00\x00\x11\x60\x83\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4\xb9\x00\x00\x00\x03\x00\xff\xfe\x02\x00\x00\x00\x02\x00\x00\x0a\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x0d\x00\x00\x00\x02\x0a\x03\x00\x00\x00\x03\x80\x00\x00\x00\x00\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\xff\x7f\xff\xff\xff\xff\xff\xff\xff\x80\x03\x0b\x00\x00\x00\x00\x0b\x00\x00\x00\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0e\x00\x00\x00\x01\x02\x00\x00\x00\x02\x00\x01\x0f\x00\x00\x00\x02\x02\x00\x00\x00\x02\x00\x01\x04\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0a\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x08\x00\x00\x00\x02\x7f\xff\xff\xff\x80\x00\x00\x00\x06\x00\x00\x00\x01\x00\x00\x03\x00\x00\x00\x01\x29\x0c\x00\x00\x00\x01\x08\x00\x7f\x00\x00\x00\x00\x08\xff\xff\x00\x00\x00\x38\x08\x00\x00\x7f\xff\xff\xff\x00\x0c\x00\x00\x00\x01\x0b\x00\x7f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x00\x10\x32\x06\x7f\xff\x00\x01\x0b\x00\x0e\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x0a\x00\x00\x00\x00\x0f\x80\x00\x0e\x00\x00\x00\x0e\x06\x00\x00\x00\x02\x00\x00\x00\x01\x08\x00\x00\x00\x01\x80\x00\x00\x00\x02\x00\x00\x00\x01\x01\x06\x00\x00\x00\x01\x00\x00\x04\x00\x00\x00\x01\xc0\x28\x40\x00\x00\x00\x00\x00\x0f\x00\x00\x00\x01\x04\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x08\x00\x00\x00\x01\x00\x00\x00\x01\x0e\x00\x00\x00\x01\x04\x00\x00\x00\x01\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x04\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x00\x00\x00\x08\x00\x00\x00\x01\x7f\xff\xff\xff\x03\x00\x00\x00\x00\x0c\x00\x00\x00\x02\x02\x00\x02\x00\x08\x00\x1f\x7f\xff\xff\xff\x08\x7f\xff\x00\x00\x00\x15\x04\x00\x7f\x46\x29\x3e\x59\x39\xa0\x8c\xea\x00\x0a\x00\x0e\x00\x00\x00\x00\x00\x00\x00\x01\x00\x0e\x00\x00\x00\x01\x06\x00\x00\x00\x00\x02\x00\x02\x01\x08\x00\x01\x7f\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        16,
        @thrift.List(@thrift.ListKind, [
          @thrift.List(@thrift.BinaryKind, [
            @thrift.Binary(
              b"\x60\x83\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4\xb9",
            ),
            @thrift.Binary(b"\x00\xff\xfe"),
          ]),
          @thrift.List(@thrift.BoolKind, [
            @thrift.Bool(false),
            @thrift.Bool(false),
          ]),
          @thrift.List(@thrift.I64Kind, [
            @thrift.I64(-9223372036854775808L),
            @thrift.I64(-9223372036854775808L),
          ]),
          @thrift.List(@thrift.MapKind, [
            @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
              (@thrift.I64(-9223372036854775808L), @thrift.Byte(1)),
              (@thrift.I64(-9223372036854775808L), @thrift.Byte(-1)),
              (@thrift.I64(9223372036854775807L), @thrift.Byte(-128)),
            ]),
            @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BinaryKind), []),
          ]),
          @thrift.List(@thrift.BinaryKind, [
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ]),
          @thrift.List(@thrift.SetKind, [
            @thrift.SetValue(@thrift.BoolKind, [
              @thrift.Bool(false),
              @thrift.Bool(true),
            ]),
          ]),
          @thrift.List(@thrift.ListKind, [
            @thrift.List(@thrift.BoolKind, [
              @thrift.Bool(false),
              @thrift.Bool(true),
            ]),
            @thrift.List(@thrift.DoubleKind, [
              @thrift.Double(-0.0),
              @thrift.Double(0.0),
            ]),
          ]),
          @thrift.List(@thrift.I64Kind, [@thrift.I64(0L)]),
          @thrift.List(@thrift.I32Kind, [
            @thrift.I32(2147483647),
            @thrift.I32(-2147483648),
          ]),
          @thrift.List(@thrift.I16Kind, [@thrift.I16(0)]),
          @thrift.List(@thrift.ByteKind, [@thrift.Byte(41)]),
          @thrift.List(@thrift.StructKind, [
            @thrift.Struct([
              (127, @thrift.I32(0)),
              (-1, @thrift.I32(56)),
              (0, @thrift.I32(2147483647)),
            ]),
          ]),
          @thrift.List(@thrift.StructKind, [
            @thrift.Struct([
              (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
              (16, @thrift.Byte(50)),
              (32767, @thrift.I16(1)),
              (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            ]),
          ]),
          @thrift.List(@thrift.I64Kind, []),
        ]),
      ),
      (
        -32768,
        @thrift.List(@thrift.SetKind, [
          @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0), @thrift.I16(1)]),
          @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(-2147483648)]),
          @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)]),
          @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0)]),
          @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-12.125)]),
          @thrift.SetValue(@thrift.ListKind, [
            @thrift.List(@thrift.DoubleKind, [
              @thrift.Double(0.0),
              @thrift.Double(1.0e-30),
            ]),
          ]),
          @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(1)]),
          @thrift.SetValue(@thrift.SetKind, [
            @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(1.0e-30)]),
          ]),
          @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-0.0)]),
          @thrift.SetValue(@thrift.SetKind, []),
          @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(2147483647)]),
          @thrift.SetValue(@thrift.ByteKind, []),
          @thrift.SetValue(@thrift.StructKind, [
            @thrift.Struct([
              (2, @thrift.Bool(false)),
              (31, @thrift.I32(2147483647)),
              (32767, @thrift.I32(21)),
              (127, @thrift.Double(1.0e+30)),
            ]),
            @thrift.Struct([(14, @thrift.I64(1L))]),
          ]),
          @thrift.SetValue(@thrift.SetKind, [
            @thrift.SetValue(@thrift.I16Kind, []),
          ]),
        ]),
      ),
      (2, @thrift.Bool(true)),
      (1, @thrift.I32(2147483647)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\xf7\x0f\x00\x10\x0f\x00\x00\x00\x0e\x0b\x00\x00\x00\x02\x00\x00\x00\x11\x60\x83\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4\xb9\x00\x00\x00\x03\x00\xff\xfe\x02\x00\x00\x00\x02\x00\x00\x0a\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x0d\x00\x00\x00\x02\x0a\x03\x00\x00\x00\x03\x80\x00\x00\x00\x00\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\xff\x7f\xff\xff\xff\xff\xff\xff\xff\x80\x03\x0b\x00\x00\x00\x00\x0b\x00\x00\x00\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0e\x00\x00\x00\x01\x02\x00\x00\x00\x02\x00\x01\x0f\x00\x00\x00\x02\x02\x00\x00\x00\x02\x00\x01\x04\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0a\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x08\x00\x00\x00\x02\x7f\xff\xff\xff\x80\x00\x00\x00\x06\x00\x00\x00\x01\x00\x00\x03\x00\x00\x00\x01\x29\x0c\x00\x00\x00\x01\x08\x00\x7f\x00\x00\x00\x00\x08\xff\xff\x00\x00\x00\x38\x08\x00\x00\x7f\xff\xff\xff\x00\x0c\x00\x00\x00\x01\x0b\x00\x7f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x00\x10\x32\x06\x7f\xff\x00\x01\x0b\x00\x0e\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x0a\x00\x00\x00\x00\x0f\x80\x00\x0e\x00\x00\x00\x0e\x06\x00\x00\x00\x02\x00\x00\x00\x01\x08\x00\x00\x00\x01\x80\x00\x00\x00\x02\x00\x00\x00\x01\x01\x06\x00\x00\x00\x01\x00\x00\x04\x00\x00\x00\x01\xc0\x28\x40\x00\x00\x00\x00\x00\x0f\x00\x00\x00\x01\x04\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x08\x00\x00\x00\x01\x00\x00\x00\x01\x0e\x00\x00\x00\x01\x04\x00\x00\x00\x01\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x04\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x00\x00\x00\x08\x00\x00\x00\x01\x7f\xff\xff\xff\x03\x00\x00\x00\x00\x0c\x00\x00\x00\x02\x02\x00\x02\x00\x08\x00\x1f\x7f\xff\xff\xff\x08\x7f\xff\x00\x00\x00\x15\x04\x00\x7f\x46\x29\x3e\x59\x39\xa0\x8c\xea\x00\x0a\x00\x0e\x00\x00\x00\x00\x00\x00\x00\x01\x00\x0e\x00\x00\x00\x01\x06\x00\x00\x00\x00\x02\x00\x02\x01\x08\x00\x01\x7f\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 19" {
  let original = @thrift.Struct([
    (
      16,
      @thrift.List(@thrift.ListKind, [
        @thrift.List(@thrift.BinaryKind, [
          @thrift.Binary(
            b"\x60\x83\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4\xb9",
          ),
          @thrift.Binary(b"\x00\xff\xfe"),
        ]),
        @thrift.List(@thrift.BoolKind, [
          @thrift.Bool(false),
          @thrift.Bool(false),
        ]),
        @thrift.List(@thrift.I64Kind, [
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(-9223372036854775808L),
        ]),
        @thrift.List(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
            (@thrift.I64(-9223372036854775808L), @thrift.Byte(1)),
            (@thrift.I64(-9223372036854775808L), @thrift.Byte(-1)),
            (@thrift.I64(9223372036854775807L), @thrift.Byte(-128)),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BinaryKind), []),
        ]),
        @thrift.List(@thrift.BinaryKind, [
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        ]),
        @thrift.List(@thrift.SetKind, [
          @thrift.SetValue(@thrift.BoolKind, [
            @thrift.Bool(false),
            @thrift.Bool(true),
          ]),
        ]),
        @thrift.List(@thrift.ListKind, [
          @thrift.List(@thrift.BoolKind, [
            @thrift.Bool(false),
            @thrift.Bool(true),
          ]),
          @thrift.List(@thrift.DoubleKind, [
            @thrift.Double(-0.0),
            @thrift.Double(0.0),
          ]),
        ]),
        @thrift.List(@thrift.I64Kind, [@thrift.I64(0L)]),
        @thrift.List(@thrift.I32Kind, [
          @thrift.I32(2147483647),
          @thrift.I32(-2147483648),
        ]),
        @thrift.List(@thrift.I16Kind, [@thrift.I16(0)]),
        @thrift.List(@thrift.ByteKind, [@thrift.Byte(41)]),
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (127, @thrift.I32(0)),
            (-1, @thrift.I32(56)),
            (0, @thrift.I32(2147483647)),
          ]),
        ]),
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (16, @thrift.Byte(50)),
            (32767, @thrift.I16(1)),
            (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          ]),
        ]),
        @thrift.List(@thrift.I64Kind, []),
      ]),
    ),
    (
      -32768,
      @thrift.List(@thrift.SetKind, [
        @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0), @thrift.I16(1)]),
        @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(-2147483648)]),
        @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)]),
        @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0)]),
        @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-12.125)]),
        @thrift.SetValue(@thrift.ListKind, [
          @thrift.List(@thrift.DoubleKind, [
            @thrift.Double(0.0),
            @thrift.Double(1.0e-30),
          ]),
        ]),
        @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(1)]),
        @thrift.SetValue(@thrift.SetKind, [
          @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(1.0e-30)]),
        ]),
        @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-0.0)]),
        @thrift.SetValue(@thrift.SetKind, []),
        @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(2147483647)]),
        @thrift.SetValue(@thrift.ByteKind, []),
        @thrift.SetValue(@thrift.StructKind, [
          @thrift.Struct([
            (2, @thrift.Bool(false)),
            (31, @thrift.I32(2147483647)),
            (32767, @thrift.I32(21)),
            (127, @thrift.Double(1.0e+30)),
          ]),
          @thrift.Struct([(14, @thrift.I64(1L))]),
        ]),
        @thrift.SetValue(@thrift.SetKind, [
          @thrift.SetValue(@thrift.I16Kind, []),
        ]),
      ]),
    ),
    (2, @thrift.Bool(true)),
    (1, @thrift.I32(2147483647)),
  ])
  let wire = b"\x09\x20\xe9\x28\x11\x60\x83\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4\xb9\x03\x00\xff\xfe\x21\x02\x02\x26\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x2b\x03\x63\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x80\x00\x18\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x1a\x21\x02\x01\x29\x21\x02\x01\x27\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00\x16\x00\x25\xfe\xff\xff\xff\x0f\xff\xff\xff\xff\x0f\x14\x00\x13\x29\x1c\x05\xfe\x01\x00\x05\x01\x70\x15\xfe\xff\xff\xff\x0f\x00\x1c\x08\xfe\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x20\x32\x04\xfe\xff\x03\x02\x08\x1c\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x06\x09\xff\xff\x03\xea\x24\x00\x02\x15\xff\xff\xff\xff\x0f\x11\x01\x14\x00\x17\x00\x00\x00\x00\x00\x40\x28\xc0\x19\x27\x00\x00\x00\x00\x00\x00\x00\x00\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x15\x02\x1a\x17\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x17\x00\x00\x00\x00\x00\x00\x00\x80\x0a\x15\xfe\xff\xff\xff\x0f\x03\x2c\x22\x05\x3e\xfe\xff\xff\xff\x0f\x05\xfe\xff\x03\x2a\x07\xfe\x01\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00\xe6\x02\x00\x1a\x04\x01\x04\x05\x02\xfe\xff\xff\xff\x0f\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        16,
        @thrift.List(@thrift.ListKind, [
          @thrift.List(@thrift.BinaryKind, [
            @thrift.Binary(
              b"\x60\x83\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4\xb9",
            ),
            @thrift.Binary(b"\x00\xff\xfe"),
          ]),
          @thrift.List(@thrift.BoolKind, [
            @thrift.Bool(false),
            @thrift.Bool(false),
          ]),
          @thrift.List(@thrift.I64Kind, [
            @thrift.I64(-9223372036854775808L),
            @thrift.I64(-9223372036854775808L),
          ]),
          @thrift.List(@thrift.MapKind, [
            @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
              (@thrift.I64(-9223372036854775808L), @thrift.Byte(1)),
              (@thrift.I64(-9223372036854775808L), @thrift.Byte(-1)),
              (@thrift.I64(9223372036854775807L), @thrift.Byte(-128)),
            ]),
            @thrift.MapValue(None, None, []),
          ]),
          @thrift.List(@thrift.BinaryKind, [
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ]),
          @thrift.List(@thrift.SetKind, [
            @thrift.SetValue(@thrift.BoolKind, [
              @thrift.Bool(false),
              @thrift.Bool(true),
            ]),
          ]),
          @thrift.List(@thrift.ListKind, [
            @thrift.List(@thrift.BoolKind, [
              @thrift.Bool(false),
              @thrift.Bool(true),
            ]),
            @thrift.List(@thrift.DoubleKind, [
              @thrift.Double(-0.0),
              @thrift.Double(0.0),
            ]),
          ]),
          @thrift.List(@thrift.I64Kind, [@thrift.I64(0L)]),
          @thrift.List(@thrift.I32Kind, [
            @thrift.I32(2147483647),
            @thrift.I32(-2147483648),
          ]),
          @thrift.List(@thrift.I16Kind, [@thrift.I16(0)]),
          @thrift.List(@thrift.ByteKind, [@thrift.Byte(41)]),
          @thrift.List(@thrift.StructKind, [
            @thrift.Struct([
              (127, @thrift.I32(0)),
              (-1, @thrift.I32(56)),
              (0, @thrift.I32(2147483647)),
            ]),
          ]),
          @thrift.List(@thrift.StructKind, [
            @thrift.Struct([
              (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
              (16, @thrift.Byte(50)),
              (32767, @thrift.I16(1)),
              (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            ]),
          ]),
          @thrift.List(@thrift.I64Kind, []),
        ]),
      ),
      (
        -32768,
        @thrift.List(@thrift.SetKind, [
          @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0), @thrift.I16(1)]),
          @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(-2147483648)]),
          @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)]),
          @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0)]),
          @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-12.125)]),
          @thrift.SetValue(@thrift.ListKind, [
            @thrift.List(@thrift.DoubleKind, [
              @thrift.Double(0.0),
              @thrift.Double(1.0e-30),
            ]),
          ]),
          @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(1)]),
          @thrift.SetValue(@thrift.SetKind, [
            @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(1.0e-30)]),
          ]),
          @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-0.0)]),
          @thrift.SetValue(@thrift.SetKind, []),
          @thrift.SetValue(@thrift.I32Kind, [@thrift.I32(2147483647)]),
          @thrift.SetValue(@thrift.ByteKind, []),
          @thrift.SetValue(@thrift.StructKind, [
            @thrift.Struct([
              (2, @thrift.Bool(false)),
              (31, @thrift.I32(2147483647)),
              (32767, @thrift.I32(21)),
              (127, @thrift.Double(1.0e+30)),
            ]),
            @thrift.Struct([(14, @thrift.I64(1L))]),
          ]),
          @thrift.SetValue(@thrift.SetKind, [
            @thrift.SetValue(@thrift.I16Kind, []),
          ]),
        ]),
      ),
      (2, @thrift.Bool(true)),
      (1, @thrift.I32(2147483647)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\x35\x09\x20\xe9\x28\x11\x60\x83\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4\xb9\x03\x00\xff\xfe\x21\x02\x02\x26\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x2b\x03\x63\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x80\x00\x18\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x1a\x21\x02\x01\x29\x21\x02\x01\x27\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00\x16\x00\x25\xfe\xff\xff\xff\x0f\xff\xff\xff\xff\x0f\x14\x00\x13\x29\x1c\x05\xfe\x01\x00\x05\x01\x70\x15\xfe\xff\xff\xff\x0f\x00\x1c\x08\xfe\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x20\x32\x04\xfe\xff\x03\x02\x08\x1c\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x06\x09\xff\xff\x03\xea\x24\x00\x02\x15\xff\xff\xff\xff\x0f\x11\x01\x14\x00\x17\x00\x00\x00\x00\x00\x40\x28\xc0\x19\x27\x00\x00\x00\x00\x00\x00\x00\x00\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x15\x02\x1a\x17\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x17\x00\x00\x00\x00\x00\x00\x00\x80\x0a\x15\xfe\xff\xff\xff\x0f\x03\x2c\x22\x05\x3e\xfe\xff\xff\xff\x0f\x05\xfe\xff\x03\x2a\x07\xfe\x01\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00\xe6\x02\x00\x1a\x04\x01\x04\x05\x02\xfe\xff\xff\xff\x0f\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 20" {
  let original = @thrift.Struct([
    (1, @thrift.List(@thrift.ByteKind, [@thrift.Byte(1)])),
    (0, @thrift.I32(0)),
    (-1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (2, @thrift.Double(1.0e-30)),
  ])
  let wire = b"\x0f\x00\x01\x03\x00\x00\x00\x01\x01\x08\x00\x00\x00\x00\x00\x00\x0b\xff\xff\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x04\x00\x02\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (1, @thrift.List(@thrift.ByteKind, [@thrift.Byte(1)])),
      (0, @thrift.I32(0)),
      (-1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (2, @thrift.Double(1.0e-30)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x2d\x0f\x00\x01\x03\x00\x00\x00\x01\x01\x08\x00\x00\x00\x00\x00\x00\x0b\xff\xff\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x04\x00\x02\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 20" {
  let original = @thrift.Struct([
    (1, @thrift.List(@thrift.ByteKind, [@thrift.Byte(1)])),
    (0, @thrift.I32(0)),
    (-1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (2, @thrift.Double(1.0e-30)),
  ])
  let wire = b"\x19\x13\x01\x05\x00\x00\x08\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x37\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (1, @thrift.List(@thrift.ByteKind, [@thrift.Byte(1)])),
      (0, @thrift.I32(0)),
      (-1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (2, @thrift.Double(1.0e-30)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1d\x19\x13\x01\x05\x00\x00\x08\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x37\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 21" {
  let original = @thrift.Struct([
    (0, @thrift.Bool(true)),
    (31, @thrift.Binary(b"\x00\xff\xfe")),
  ])
  let wire = b"\x02\x00\x00\x01\x0b\x00\x1f\x00\x00\x00\x03\x00\xff\xfe\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (0, @thrift.Bool(true)),
      (31, @thrift.Binary(b"\x00\xff\xfe")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0f\x02\x00\x00\x01\x0b\x00\x1f\x00\x00\x00\x03\x00\xff\xfe\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 21" {
  let original = @thrift.Struct([
    (0, @thrift.Bool(true)),
    (31, @thrift.Binary(b"\x00\xff\xfe")),
  ])
  let wire = b"\x01\x00\x08\x3e\x03\x00\xff\xfe\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (0, @thrift.Bool(true)),
      (31, @thrift.Binary(b"\x00\xff\xfe")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x09\x01\x00\x08\x3e\x03\x00\xff\xfe\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 22" {
  let original = @thrift.Struct([
    (16, @thrift.Double(1.5)),
    (
      14,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), [
        (
          @thrift.Binary(
            b"\x22\x5c\x25\xc2\x48\x6d\xc5\xb2\x36\xab\xfa\xc8\x28\xfc\x74\xb4\x56",
          ),
          @thrift.Byte(-1),
        ),
        (
          @thrift.Binary(
            b"\x8f\x23\xa9\x20\xdd\x86\x25\x91\xe4\xfa\xb1\x8c\xb1\xd7\x00\x66\xf2",
          ),
          @thrift.Byte(0),
        ),
      ]),
    ),
  ])
  let wire = b"\x04\x00\x10\x3f\xf8\x00\x00\x00\x00\x00\x00\x0d\x00\x0e\x0b\x03\x00\x00\x00\x02\x00\x00\x00\x11\x22\x5c\x25\xc2\x48\x6d\xc5\xb2\x36\xab\xfa\xc8\x28\xfc\x74\xb4\x56\xff\x00\x00\x00\x11\x8f\x23\xa9\x20\xdd\x86\x25\x91\xe4\xfa\xb1\x8c\xb1\xd7\x00\x66\xf2\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.Double(1.5)),
      (
        14,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), [
          (
            @thrift.Binary(
              b"\x22\x5c\x25\xc2\x48\x6d\xc5\xb2\x36\xab\xfa\xc8\x28\xfc\x74\xb4\x56",
            ),
            @thrift.Byte(-1),
          ),
          (
            @thrift.Binary(
              b"\x8f\x23\xa9\x20\xdd\x86\x25\x91\xe4\xfa\xb1\x8c\xb1\xd7\x00\x66\xf2",
            ),
            @thrift.Byte(0),
          ),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x41\x04\x00\x10\x3f\xf8\x00\x00\x00\x00\x00\x00\x0d\x00\x0e\x0b\x03\x00\x00\x00\x02\x00\x00\x00\x11\x22\x5c\x25\xc2\x48\x6d\xc5\xb2\x36\xab\xfa\xc8\x28\xfc\x74\xb4\x56\xff\x00\x00\x00\x11\x8f\x23\xa9\x20\xdd\x86\x25\x91\xe4\xfa\xb1\x8c\xb1\xd7\x00\x66\xf2\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 22" {
  let original = @thrift.Struct([
    (16, @thrift.Double(1.5)),
    (
      14,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), [
        (
          @thrift.Binary(
            b"\x22\x5c\x25\xc2\x48\x6d\xc5\xb2\x36\xab\xfa\xc8\x28\xfc\x74\xb4\x56",
          ),
          @thrift.Byte(-1),
        ),
        (
          @thrift.Binary(
            b"\x8f\x23\xa9\x20\xdd\x86\x25\x91\xe4\xfa\xb1\x8c\xb1\xd7\x00\x66\xf2",
          ),
          @thrift.Byte(0),
        ),
      ]),
    ),
  ])
  let wire = b"\x07\x20\x00\x00\x00\x00\x00\x00\xf8\x3f\x0b\x1c\x02\x83\x11\x22\x5c\x25\xc2\x48\x6d\xc5\xb2\x36\xab\xfa\xc8\x28\xfc\x74\xb4\x56\xff\x11\x8f\x23\xa9\x20\xdd\x86\x25\x91\xe4\xfa\xb1\x8c\xb1\xd7\x00\x66\xf2\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.Double(1.5)),
      (
        14,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), [
          (
            @thrift.Binary(
              b"\x22\x5c\x25\xc2\x48\x6d\xc5\xb2\x36\xab\xfa\xc8\x28\xfc\x74\xb4\x56",
            ),
            @thrift.Byte(-1),
          ),
          (
            @thrift.Binary(
              b"\x8f\x23\xa9\x20\xdd\x86\x25\x91\xe4\xfa\xb1\x8c\xb1\xd7\x00\x66\xf2",
            ),
            @thrift.Byte(0),
          ),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x35\x07\x20\x00\x00\x00\x00\x00\x00\xf8\x3f\x0b\x1c\x02\x83\x11\x22\x5c\x25\xc2\x48\x6d\xc5\xb2\x36\xab\xfa\xc8\x28\xfc\x74\xb4\x56\xff\x11\x8f\x23\xa9\x20\xdd\x86\x25\x91\xe4\xfa\xb1\x8c\xb1\xd7\x00\x66\xf2\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 23" {
  let original = @thrift.Struct([
    (
      14,
      @thrift.List(@thrift.MapKind, [
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), []),
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
          (@thrift.I32(-1), @thrift.I16(-1)),
          (@thrift.I32(0), @thrift.I16(-1)),
        ]),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), []),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b""), @thrift.I32(2147483647)),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.I16Kind), [
          (@thrift.Byte(127), @thrift.I16(32767)),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.DoubleKind), [
          (@thrift.Bool(true), @thrift.Double(-12.125)),
          (@thrift.Bool(false), @thrift.Double(1.0e+30)),
          (@thrift.Bool(false), @thrift.Double(-0.0)),
        ]),
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.DoubleKind), [
          (@thrift.I32(-2147483648), @thrift.Double(1.0e-30)),
          (@thrift.I32(70), @thrift.Double(-0.0)),
          (@thrift.I32(0), @thrift.Double(1.0e+30)),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.StructKind), [
          (@thrift.Bool(false), @thrift.Struct([])),
          (
            @thrift.Bool(true),
            @thrift.Struct([(14, @thrift.Byte(-128)), (15, @thrift.I16(-32768))]),
          ),
          (
            @thrift.Bool(false),
            @thrift.Struct([
              (
                -32768,
                @thrift.Binary(
                  b"\xfe\x46\x05\x2f\xc5\x18\xb6\x31\x3b\xd0\x2a\x54\x6c\xb1\xe2\xce\xf1",
                ),
              ),
              (127, @thrift.I64(-1L)),
              (-1, @thrift.I64(41L)),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.StructKind), [
          (@thrift.I64(34L), @thrift.Struct([(32767, @thrift.I32(2147483647))])),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
          (@thrift.Bool(false), @thrift.Bool(true)),
          (@thrift.Bool(true), @thrift.Bool(true)),
          (@thrift.Bool(true), @thrift.Bool(true)),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I32Kind), [
          (@thrift.I64(0L), @thrift.I32(2147483647)),
          (@thrift.I64(0L), @thrift.I32(-36)),
          (@thrift.I64(-9223372036854775808L), @thrift.I32(-2147483648)),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.DoubleKind), []),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
          (@thrift.Byte(0), @thrift.Bool(true)),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I16Kind), [
          (
            @thrift.Binary(
              b"\x29\xf9\x90\x00\xc4\xec\x94\x4a\x73\xe7\x03\xf9\xfc\x79\xa2\x42\x9b",
            ),
            @thrift.I16(-1),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.DoubleKind), [
          (@thrift.Binary(b"\x00\xff\xfe"), @thrift.Double(1.5)),
        ]),
      ]),
    ),
    (-32768, @thrift.Binary(b"\x00\xff\xfe")),
    (-1, @thrift.Byte(127)),
    (32767, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
  ])
  let wire = b"\x0f\x00\x0e\x0d\x00\x00\x00\x0f\x02\x06\x00\x00\x00\x00\x08\x06\x00\x00\x00\x02\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\xff\xff\x06\x0c\x00\x00\x00\x00\x0b\x08\x00\x00\x00\x01\x00\x00\x00\x00\x7f\xff\xff\xff\x03\x06\x00\x00\x00\x01\x7f\x7f\xff\x02\x04\x00\x00\x00\x03\x01\xc0\x28\x40\x00\x00\x00\x00\x00\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x00\x80\x00\x00\x00\x00\x00\x00\x00\x08\x04\x00\x00\x00\x03\x80\x00\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00\x00\x00\x46\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x02\x0c\x00\x00\x00\x03\x00\x00\x01\x03\x00\x0e\x80\x06\x00\x0f\x80\x00\x00\x00\x0b\x80\x00\x00\x00\x00\x11\xfe\x46\x05\x2f\xc5\x18\xb6\x31\x3b\xd0\x2a\x54\x6c\xb1\xe2\xce\xf1\x0a\x00\x7f\xff\xff\xff\xff\xff\xff\xff\xff\x0a\xff\xff\x00\x00\x00\x00\x00\x00\x00\x29\x00\x0a\x0c\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x22\x08\x7f\xff\x7f\xff\xff\xff\x00\x02\x02\x00\x00\x00\x03\x00\x01\x01\x01\x01\x01\x0a\x08\x00\x00\x00\x03\x00\x00\x00\x00\x00\x00\x00\x00\x7f\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\xff\xdc\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x03\x04\x00\x00\x00\x00\x03\x02\x00\x00\x00\x01\x00\x01\x0b\x06\x00\x00\x00\x01\x00\x00\x00\x11\x29\xf9\x90\x00\xc4\xec\x94\x4a\x73\xe7\x03\xf9\xfc\x79\xa2\x42\x9b\xff\xff\x0b\x04\x00\x00\x00\x01\x00\x00\x00\x03\x00\xff\xfe\x3f\xf8\x00\x00\x00\x00\x00\x00\x0b\x80\x00\x00\x00\x00\x03\x00\xff\xfe\x03\xff\xff\x7f\x0b\x7f\xff\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        14,
        @thrift.List(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), []),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
            (@thrift.I32(-1), @thrift.I16(-1)),
            (@thrift.I32(0), @thrift.I16(-1)),
          ]),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), []),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
            (@thrift.Binary(b""), @thrift.I32(2147483647)),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.I16Kind), [
            (@thrift.Byte(127), @thrift.I16(32767)),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.DoubleKind), [
            (@thrift.Bool(true), @thrift.Double(-12.125)),
            (@thrift.Bool(false), @thrift.Double(1.0e+30)),
            (@thrift.Bool(false), @thrift.Double(-0.0)),
          ]),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.DoubleKind), [
            (@thrift.I32(-2147483648), @thrift.Double(1.0e-30)),
            (@thrift.I32(70), @thrift.Double(-0.0)),
            (@thrift.I32(0), @thrift.Double(1.0e+30)),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.StructKind), [
            (@thrift.Bool(false), @thrift.Struct([])),
            (
              @thrift.Bool(true),
              @thrift.Struct([
                (14, @thrift.Byte(-128)),
                (15, @thrift.I16(-32768)),
              ]),
            ),
            (
              @thrift.Bool(false),
              @thrift.Struct([
                (
                  -32768,
                  @thrift.Binary(
                    b"\xfe\x46\x05\x2f\xc5\x18\xb6\x31\x3b\xd0\x2a\x54\x6c\xb1\xe2\xce\xf1",
                  ),
                ),
                (127, @thrift.I64(-1L)),
                (-1, @thrift.I64(41L)),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.StructKind), [
            (
              @thrift.I64(34L),
              @thrift.Struct([(32767, @thrift.I32(2147483647))]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
            (@thrift.Bool(false), @thrift.Bool(true)),
            (@thrift.Bool(true), @thrift.Bool(true)),
            (@thrift.Bool(true), @thrift.Bool(true)),
          ]),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I32Kind), [
            (@thrift.I64(0L), @thrift.I32(2147483647)),
            (@thrift.I64(0L), @thrift.I32(-36)),
            (@thrift.I64(-9223372036854775808L), @thrift.I32(-2147483648)),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.DoubleKind), []),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
            (@thrift.Byte(0), @thrift.Bool(true)),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I16Kind), [
            (
              @thrift.Binary(
                b"\x29\xf9\x90\x00\xc4\xec\x94\x4a\x73\xe7\x03\xf9\xfc\x79\xa2\x42\x9b",
              ),
              @thrift.I16(-1),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.DoubleKind), [
            (@thrift.Binary(b"\x00\xff\xfe"), @thrift.Double(1.5)),
          ]),
        ]),
      ),
      (-32768, @thrift.Binary(b"\x00\xff\xfe")),
      (-1, @thrift.Byte(127)),
      (32767, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\x77\x0f\x00\x0e\x0d\x00\x00\x00\x0f\x02\x06\x00\x00\x00\x00\x08\x06\x00\x00\x00\x02\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\xff\xff\x06\x0c\x00\x00\x00\x00\x0b\x08\x00\x00\x00\x01\x00\x00\x00\x00\x7f\xff\xff\xff\x03\x06\x00\x00\x00\x01\x7f\x7f\xff\x02\x04\x00\x00\x00\x03\x01\xc0\x28\x40\x00\x00\x00\x00\x00\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x00\x80\x00\x00\x00\x00\x00\x00\x00\x08\x04\x00\x00\x00\x03\x80\x00\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00\x00\x00\x46\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x02\x0c\x00\x00\x00\x03\x00\x00\x01\x03\x00\x0e\x80\x06\x00\x0f\x80\x00\x00\x00\x0b\x80\x00\x00\x00\x00\x11\xfe\x46\x05\x2f\xc5\x18\xb6\x31\x3b\xd0\x2a\x54\x6c\xb1\xe2\xce\xf1\x0a\x00\x7f\xff\xff\xff\xff\xff\xff\xff\xff\x0a\xff\xff\x00\x00\x00\x00\x00\x00\x00\x29\x00\x0a\x0c\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x22\x08\x7f\xff\x7f\xff\xff\xff\x00\x02\x02\x00\x00\x00\x03\x00\x01\x01\x01\x01\x01\x0a\x08\x00\x00\x00\x03\x00\x00\x00\x00\x00\x00\x00\x00\x7f\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\xff\xdc\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x03\x04\x00\x00\x00\x00\x03\x02\x00\x00\x00\x01\x00\x01\x0b\x06\x00\x00\x00\x01\x00\x00\x00\x11\x29\xf9\x90\x00\xc4\xec\x94\x4a\x73\xe7\x03\xf9\xfc\x79\xa2\x42\x9b\xff\xff\x0b\x04\x00\x00\x00\x01\x00\x00\x00\x03\x00\xff\xfe\x3f\xf8\x00\x00\x00\x00\x00\x00\x0b\x80\x00\x00\x00\x00\x03\x00\xff\xfe\x03\xff\xff\x7f\x0b\x7f\xff\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 23" {
  let original = @thrift.Struct([
    (
      14,
      @thrift.List(@thrift.MapKind, [
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), []),
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
          (@thrift.I32(-1), @thrift.I16(-1)),
          (@thrift.I32(0), @thrift.I16(-1)),
        ]),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), []),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b""), @thrift.I32(2147483647)),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.I16Kind), [
          (@thrift.Byte(127), @thrift.I16(32767)),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.DoubleKind), [
          (@thrift.Bool(true), @thrift.Double(-12.125)),
          (@thrift.Bool(false), @thrift.Double(1.0e+30)),
          (@thrift.Bool(false), @thrift.Double(-0.0)),
        ]),
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.DoubleKind), [
          (@thrift.I32(-2147483648), @thrift.Double(1.0e-30)),
          (@thrift.I32(70), @thrift.Double(-0.0)),
          (@thrift.I32(0), @thrift.Double(1.0e+30)),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.StructKind), [
          (@thrift.Bool(false), @thrift.Struct([])),
          (
            @thrift.Bool(true),
            @thrift.Struct([(14, @thrift.Byte(-128)), (15, @thrift.I16(-32768))]),
          ),
          (
            @thrift.Bool(false),
            @thrift.Struct([
              (
                -32768,
                @thrift.Binary(
                  b"\xfe\x46\x05\x2f\xc5\x18\xb6\x31\x3b\xd0\x2a\x54\x6c\xb1\xe2\xce\xf1",
                ),
              ),
              (127, @thrift.I64(-1L)),
              (-1, @thrift.I64(41L)),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.StructKind), [
          (@thrift.I64(34L), @thrift.Struct([(32767, @thrift.I32(2147483647))])),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
          (@thrift.Bool(false), @thrift.Bool(true)),
          (@thrift.Bool(true), @thrift.Bool(true)),
          (@thrift.Bool(true), @thrift.Bool(true)),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I32Kind), [
          (@thrift.I64(0L), @thrift.I32(2147483647)),
          (@thrift.I64(0L), @thrift.I32(-36)),
          (@thrift.I64(-9223372036854775808L), @thrift.I32(-2147483648)),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.DoubleKind), []),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
          (@thrift.Byte(0), @thrift.Bool(true)),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I16Kind), [
          (
            @thrift.Binary(
              b"\x29\xf9\x90\x00\xc4\xec\x94\x4a\x73\xe7\x03\xf9\xfc\x79\xa2\x42\x9b",
            ),
            @thrift.I16(-1),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.DoubleKind), [
          (@thrift.Binary(b"\x00\xff\xfe"), @thrift.Double(1.5)),
        ]),
      ]),
    ),
    (-32768, @thrift.Binary(b"\x00\xff\xfe")),
    (-1, @thrift.Byte(127)),
    (32767, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
  ])
  let wire = b"\xe9\xfb\x0f\x00\x02\x54\x01\x01\x00\x01\x00\x01\x85\x00\xfe\xff\xff\xff\x0f\x01\x34\x7f\xfe\xff\x03\x03\x17\x01\x00\x00\x00\x00\x00\x40\x28\xc0\x02\xea\x8c\xa0\x39\x59\x3e\x29\x46\x02\x00\x00\x00\x00\x00\x00\x00\x80\x03\x57\xff\xff\xff\xff\x0f\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x8c\x01\x00\x00\x00\x00\x00\x00\x00\x80\x00\xea\x8c\xa0\x39\x59\x3e\x29\x46\x03\x1c\x02\x00\x01\xe3\x80\x14\xff\xff\x03\x00\x02\x08\xff\xff\x03\x11\xfe\x46\x05\x2f\xc5\x18\xb6\x31\x3b\xd0\x2a\x54\x6c\xb1\xe2\xce\xf1\x06\xfe\x01\x01\x06\x01\x52\x00\x01\x6c\x44\x05\xfe\xff\x03\xfe\xff\xff\xff\x0f\x00\x03\x11\x02\x01\x01\x01\x01\x01\x03\x65\x00\xfe\xff\xff\xff\x0f\x00\x47\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\x0f\x00\x01\x31\x00\x01\x01\x84\x11\x29\xf9\x90\x00\xc4\xec\x94\x4a\x73\xe7\x03\xf9\xfc\x79\xa2\x42\x9b\x01\x01\x87\x03\x00\xff\xfe\x00\x00\x00\x00\x00\x00\xf8\x3f\x08\xff\xff\x03\x03\x00\xff\xfe\x03\x01\x7f\x08\xfe\xff\x03\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        14,
        @thrift.List(@thrift.MapKind, [
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
            (@thrift.I32(-1), @thrift.I16(-1)),
            (@thrift.I32(0), @thrift.I16(-1)),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
            (@thrift.Binary(b""), @thrift.I32(2147483647)),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.I16Kind), [
            (@thrift.Byte(127), @thrift.I16(32767)),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.DoubleKind), [
            (@thrift.Bool(true), @thrift.Double(-12.125)),
            (@thrift.Bool(false), @thrift.Double(1.0e+30)),
            (@thrift.Bool(false), @thrift.Double(-0.0)),
          ]),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.DoubleKind), [
            (@thrift.I32(-2147483648), @thrift.Double(1.0e-30)),
            (@thrift.I32(70), @thrift.Double(-0.0)),
            (@thrift.I32(0), @thrift.Double(1.0e+30)),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.StructKind), [
            (@thrift.Bool(false), @thrift.Struct([])),
            (
              @thrift.Bool(true),
              @thrift.Struct([
                (14, @thrift.Byte(-128)),
                (15, @thrift.I16(-32768)),
              ]),
            ),
            (
              @thrift.Bool(false),
              @thrift.Struct([
                (
                  -32768,
                  @thrift.Binary(
                    b"\xfe\x46\x05\x2f\xc5\x18\xb6\x31\x3b\xd0\x2a\x54\x6c\xb1\xe2\xce\xf1",
                  ),
                ),
                (127, @thrift.I64(-1L)),
                (-1, @thrift.I64(41L)),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.StructKind), [
            (
              @thrift.I64(34L),
              @thrift.Struct([(32767, @thrift.I32(2147483647))]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
            (@thrift.Bool(false), @thrift.Bool(true)),
            (@thrift.Bool(true), @thrift.Bool(true)),
            (@thrift.Bool(true), @thrift.Bool(true)),
          ]),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I32Kind), [
            (@thrift.I64(0L), @thrift.I32(2147483647)),
            (@thrift.I64(0L), @thrift.I32(-36)),
            (@thrift.I64(-9223372036854775808L), @thrift.I32(-2147483648)),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
            (@thrift.Byte(0), @thrift.Bool(true)),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I16Kind), [
            (
              @thrift.Binary(
                b"\x29\xf9\x90\x00\xc4\xec\x94\x4a\x73\xe7\x03\xf9\xfc\x79\xa2\x42\x9b",
              ),
              @thrift.I16(-1),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.DoubleKind), [
            (@thrift.Binary(b"\x00\xff\xfe"), @thrift.Double(1.5)),
          ]),
        ]),
      ),
      (-32768, @thrift.Binary(b"\x00\xff\xfe")),
      (-1, @thrift.Byte(127)),
      (32767, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\xf4\xe9\xfb\x0f\x00\x02\x54\x01\x01\x00\x01\x00\x01\x85\x00\xfe\xff\xff\xff\x0f\x01\x34\x7f\xfe\xff\x03\x03\x17\x01\x00\x00\x00\x00\x00\x40\x28\xc0\x02\xea\x8c\xa0\x39\x59\x3e\x29\x46\x02\x00\x00\x00\x00\x00\x00\x00\x80\x03\x57\xff\xff\xff\xff\x0f\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x8c\x01\x00\x00\x00\x00\x00\x00\x00\x80\x00\xea\x8c\xa0\x39\x59\x3e\x29\x46\x03\x1c\x02\x00\x01\xe3\x80\x14\xff\xff\x03\x00\x02\x08\xff\xff\x03\x11\xfe\x46\x05\x2f\xc5\x18\xb6\x31\x3b\xd0\x2a\x54\x6c\xb1\xe2\xce\xf1\x06\xfe\x01\x01\x06\x01\x52\x00\x01\x6c\x44\x05\xfe\xff\x03\xfe\xff\xff\xff\x0f\x00\x03\x11\x02\x01\x01\x01\x01\x01\x03\x65\x00\xfe\xff\xff\xff\x0f\x00\x47\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\x0f\x00\x01\x31\x00\x01\x01\x84\x11\x29\xf9\x90\x00\xc4\xec\x94\x4a\x73\xe7\x03\xf9\xfc\x79\xa2\x42\x9b\x01\x01\x87\x03\x00\xff\xfe\x00\x00\x00\x00\x00\x00\xf8\x3f\x08\xff\xff\x03\x03\x00\xff\xfe\x03\x01\x7f\x08\xfe\xff\x03\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 24" {
  let original = @thrift.Struct([
    (14, @thrift.Bool(false)),
    (15, @thrift.Bool(true)),
  ])
  let wire = b"\x02\x00\x0e\x00\x02\x00\x0f\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.Bool(false)), (15, @thrift.Bool(true))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x09\x02\x00\x0e\x00\x02\x00\x0f\x01\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 24" {
  let original = @thrift.Struct([
    (14, @thrift.Bool(false)),
    (15, @thrift.Bool(true)),
  ])
  let wire = b"\xe2\x11\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.Bool(false)), (15, @thrift.Bool(true))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x03\xe2\x11\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 25" {
  let original = @thrift.Struct([(14, @thrift.I16(-1))])
  let wire = b"\x06\x00\x0e\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.I16(-1))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x06\x06\x00\x0e\xff\xff\x00")
}

///|
test "Apache seeded CompactProtocol fixture 25" {
  let original = @thrift.Struct([(14, @thrift.I16(-1))])
  let wire = b"\xe4\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.I16(-1))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x03\xe4\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 26" {
  let original = @thrift.Struct([
    (0, @thrift.Double(-12.125)),
    (
      -1,
      @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
        (@thrift.I64(1L), @thrift.I16(-1)),
      ]),
    ),
  ])
  let wire = b"\x04\x00\x00\xc0\x28\x40\x00\x00\x00\x00\x00\x0d\xff\xff\x0a\x06\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (0, @thrift.Double(-12.125)),
      (
        -1,
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
          (@thrift.I64(1L), @thrift.I16(-1)),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1f\x04\x00\x00\xc0\x28\x40\x00\x00\x00\x00\x00\x0d\xff\xff\x0a\x06\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 26" {
  let original = @thrift.Struct([
    (0, @thrift.Double(-12.125)),
    (
      -1,
      @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
        (@thrift.I64(1L), @thrift.I16(-1)),
      ]),
    ),
  ])
  let wire = b"\x07\x00\x00\x00\x00\x00\x00\x40\x28\xc0\x0b\x01\x01\x64\x02\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (0, @thrift.Double(-12.125)),
      (
        -1,
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
          (@thrift.I64(1L), @thrift.I16(-1)),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x11\x07\x00\x00\x00\x00\x00\x00\x40\x28\xc0\x0b\x01\x01\x64\x02\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 27" {
  let original = @thrift.Struct([
    (31, @thrift.Struct([])),
    (15, @thrift.Bool(true)),
    (127, @thrift.Bool(false)),
  ])
  let wire = b"\x0c\x00\x1f\x00\x02\x00\x0f\x01\x02\x00\x7f\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Struct([])),
      (15, @thrift.Bool(true)),
      (127, @thrift.Bool(false)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0d\x0c\x00\x1f\x00\x02\x00\x0f\x01\x02\x00\x7f\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 27" {
  let original = @thrift.Struct([
    (31, @thrift.Struct([])),
    (15, @thrift.Bool(true)),
    (127, @thrift.Bool(false)),
  ])
  let wire = b"\x0c\x3e\x00\x01\x1e\x02\xfe\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Struct([])),
      (15, @thrift.Bool(true)),
      (127, @thrift.Bool(false)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x09\x0c\x3e\x00\x01\x1e\x02\xfe\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 28" {
  let original = @thrift.Struct([
    (
      16,
      @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), [
        (@thrift.Bool(false), @thrift.I16(-32768)),
      ]),
    ),
    (31, @thrift.Byte(-128)),
    (2, @thrift.Bool(true)),
    (0, @thrift.I16(-32768)),
  ])
  let wire = b"\x0d\x00\x10\x02\x06\x00\x00\x00\x01\x00\x80\x00\x03\x00\x1f\x80\x02\x00\x02\x01\x06\x00\x00\x80\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        16,
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), [
          (@thrift.Bool(false), @thrift.I16(-32768)),
        ]),
      ),
      (31, @thrift.Byte(-128)),
      (2, @thrift.Bool(true)),
      (0, @thrift.I16(-32768)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1a\x0d\x00\x10\x02\x06\x00\x00\x00\x01\x00\x80\x00\x03\x00\x1f\x80\x02\x00\x02\x01\x06\x00\x00\x80\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 28" {
  let original = @thrift.Struct([
    (
      16,
      @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), [
        (@thrift.Bool(false), @thrift.I16(-32768)),
      ]),
    ),
    (31, @thrift.Byte(-128)),
    (2, @thrift.Bool(true)),
    (0, @thrift.I16(-32768)),
  ])
  let wire = b"\x0b\x20\x01\x14\x02\xff\xff\x03\xf3\x80\x01\x04\x04\x00\xff\xff\x03\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        16,
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), [
          (@thrift.Bool(false), @thrift.I16(-32768)),
        ]),
      ),
      (31, @thrift.Byte(-128)),
      (2, @thrift.Bool(true)),
      (0, @thrift.I16(-32768)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x12\x0b\x20\x01\x14\x02\xff\xff\x03\xf3\x80\x01\x04\x04\x00\xff\xff\x03\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 29" {
  let original = @thrift.Struct([
    (32767, @thrift.Double(1.0e-30)),
    (
      16,
      @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.BoolKind), [
        (@thrift.I16(32767), @thrift.Bool(false)),
        (@thrift.I16(-1), @thrift.Bool(false)),
        (@thrift.I16(0), @thrift.Bool(false)),
      ]),
    ),
  ])
  let wire = b"\x04\x7f\xff\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x0d\x00\x10\x06\x02\x00\x00\x00\x03\x7f\xff\x00\xff\xff\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.Double(1.0e-30)),
      (
        16,
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.BoolKind), [
          (@thrift.I16(32767), @thrift.Bool(false)),
          (@thrift.I16(-1), @thrift.Bool(false)),
          (@thrift.I16(0), @thrift.Bool(false)),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1e\x04\x7f\xff\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x0d\x00\x10\x06\x02\x00\x00\x00\x03\x7f\xff\x00\xff\xff\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 29" {
  let original = @thrift.Struct([
    (32767, @thrift.Double(1.0e-30)),
    (
      16,
      @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.BoolKind), [
        (@thrift.I16(32767), @thrift.Bool(false)),
        (@thrift.I16(-1), @thrift.Bool(false)),
        (@thrift.I16(0), @thrift.Bool(false)),
      ]),
    ),
  ])
  let wire = b"\x07\xfe\xff\x03\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x0b\x20\x03\x41\xfe\xff\x03\x02\x01\x02\x00\x02\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.Double(1.0e-30)),
      (
        16,
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.BoolKind), [
          (@thrift.I16(32767), @thrift.Bool(false)),
          (@thrift.I16(-1), @thrift.Bool(false)),
          (@thrift.I16(0), @thrift.Bool(false)),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x19\x07\xfe\xff\x03\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x0b\x20\x03\x41\xfe\xff\x03\x02\x01\x02\x00\x02\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 30" {
  let original = @thrift.Struct([(14, @thrift.I32(-1))])
  let wire = b"\x08\x00\x0e\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.I32(-1))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x08\x08\x00\x0e\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 30" {
  let original = @thrift.Struct([(14, @thrift.I32(-1))])
  let wire = b"\xe5\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.I32(-1))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x03\xe5\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 31" {
  let original = @thrift.Struct([
    (-1, @thrift.Byte(127)),
    (2, @thrift.I32(2147483647)),
    (1, @thrift.Double(1.5)),
  ])
  let wire = b"\x03\xff\xff\x7f\x08\x00\x02\x7f\xff\xff\xff\x04\x00\x01\x3f\xf8\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (-1, @thrift.Byte(127)),
      (2, @thrift.I32(2147483647)),
      (1, @thrift.Double(1.5)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x17\x03\xff\xff\x7f\x08\x00\x02\x7f\xff\xff\xff\x04\x00\x01\x3f\xf8\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 31" {
  let original = @thrift.Struct([
    (-1, @thrift.Byte(127)),
    (2, @thrift.I32(2147483647)),
    (1, @thrift.Double(1.5)),
  ])
  let wire = b"\x03\x01\x7f\x35\xfe\xff\xff\xff\x0f\x07\x02\x00\x00\x00\x00\x00\x00\xf8\x3f\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (-1, @thrift.Byte(127)),
      (2, @thrift.I32(2147483647)),
      (1, @thrift.Double(1.5)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x14\x03\x01\x7f\x35\xfe\xff\xff\xff\x0f\x07\x02\x00\x00\x00\x00\x00\x00\xf8\x3f\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 32" {
  let original = @thrift.Struct([
    (
      14,
      @thrift.Struct([
        (16, @thrift.Byte(34)),
        (2, @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)])),
        (31, @thrift.Binary(b"")),
      ]),
    ),
    (1, @thrift.I64(-1L)),
    (16, @thrift.I16(0)),
    (127, @thrift.Double(-0.0)),
  ])
  let wire = b"\x0c\x00\x0e\x03\x00\x10\x22\x0e\x00\x02\x02\x00\x00\x00\x01\x01\x0b\x00\x1f\x00\x00\x00\x00\x00\x0a\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x06\x00\x10\x00\x00\x04\x00\x7f\x80\x00\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        14,
        @thrift.Struct([
          (16, @thrift.Byte(34)),
          (2, @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)])),
          (31, @thrift.Binary(b"")),
        ]),
      ),
      (1, @thrift.I64(-1L)),
      (16, @thrift.I16(0)),
      (127, @thrift.Double(-0.0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x34\x0c\x00\x0e\x03\x00\x10\x22\x0e\x00\x02\x02\x00\x00\x00\x01\x01\x0b\x00\x1f\x00\x00\x00\x00\x00\x0a\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x06\x00\x10\x00\x00\x04\x00\x7f\x80\x00\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 32" {
  let original = @thrift.Struct([
    (
      14,
      @thrift.Struct([
        (16, @thrift.Byte(34)),
        (2, @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)])),
        (31, @thrift.Binary(b"")),
      ]),
    ),
    (1, @thrift.I64(-1L)),
    (16, @thrift.I16(0)),
    (127, @thrift.Double(-0.0)),
  ])
  let wire = b"\xec\x03\x20\x22\x0a\x04\x11\x01\x08\x3e\x00\x00\x06\x02\x01\xf4\x00\x07\xfe\x01\x00\x00\x00\x00\x00\x00\x00\x80\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        14,
        @thrift.Struct([
          (16, @thrift.Byte(34)),
          (2, @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)])),
          (31, @thrift.Binary(b"")),
        ]),
      ),
      (1, @thrift.I64(-1L)),
      (16, @thrift.I16(0)),
      (127, @thrift.Double(-0.0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1d\xec\x03\x20\x22\x0a\x04\x11\x01\x08\x3e\x00\x00\x06\x02\x01\xf4\x00\x07\xfe\x01\x00\x00\x00\x00\x00\x00\x00\x80\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 33" {
  let original = @thrift.Struct([
    (16, @thrift.I32(-2147483648)),
    (
      -32768,
      @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
        (@thrift.I64(-1L), @thrift.I16(-1)),
      ]),
    ),
    (
      0,
      @thrift.SetValue(@thrift.I64Kind, [
        @thrift.I64(9223372036854775807L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(1L),
        @thrift.I64(1L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(-1L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(0L),
        @thrift.I64(0L),
        @thrift.I64(0L),
        @thrift.I64(9223372036854775807L),
        @thrift.I64(95L),
        @thrift.I64(9223372036854775807L),
      ]),
    ),
  ])
  let wire = b"\x08\x00\x10\x80\x00\x00\x00\x0d\x80\x00\x0a\x06\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0e\x00\x00\x0a\x00\x00\x00\x0e\x7f\xff\xff\xff\xff\xff\xff\xff\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\xff\xff\xff\xff\xff\xff\xff\xff\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x5f\x7f\xff\xff\xff\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.I32(-2147483648)),
      (
        -32768,
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
          (@thrift.I64(-1L), @thrift.I16(-1)),
        ]),
      ),
      (
        0,
        @thrift.SetValue(@thrift.I64Kind, [
          @thrift.I64(9223372036854775807L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(1L),
          @thrift.I64(1L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(-1L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(0L),
          @thrift.I64(0L),
          @thrift.I64(0L),
          @thrift.I64(9223372036854775807L),
          @thrift.I64(95L),
          @thrift.I64(9223372036854775807L),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x93\x08\x00\x10\x80\x00\x00\x00\x0d\x80\x00\x0a\x06\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0e\x00\x00\x0a\x00\x00\x00\x0e\x7f\xff\xff\xff\xff\xff\xff\xff\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\xff\xff\xff\xff\xff\xff\xff\xff\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x5f\x7f\xff\xff\xff\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 33" {
  let original = @thrift.Struct([
    (16, @thrift.I32(-2147483648)),
    (
      -32768,
      @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
        (@thrift.I64(-1L), @thrift.I16(-1)),
      ]),
    ),
    (
      0,
      @thrift.SetValue(@thrift.I64Kind, [
        @thrift.I64(9223372036854775807L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(1L),
        @thrift.I64(1L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(-1L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(0L),
        @thrift.I64(0L),
        @thrift.I64(0L),
        @thrift.I64(9223372036854775807L),
        @thrift.I64(95L),
        @thrift.I64(9223372036854775807L),
      ]),
    ),
  ])
  let wire = b"\x05\x20\xff\xff\xff\xff\x0f\x0b\xff\xff\x03\x01\x64\x01\x01\x0a\x00\xe6\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x02\x02\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x00\x00\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\xbe\x01\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.I32(-2147483648)),
      (
        -32768,
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
          (@thrift.I64(-1L), @thrift.I16(-1)),
        ]),
      ),
      (
        0,
        @thrift.SetValue(@thrift.I64Kind, [
          @thrift.I64(9223372036854775807L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(1L),
          @thrift.I64(1L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(-1L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(0L),
          @thrift.I64(0L),
          @thrift.I64(0L),
          @thrift.I64(9223372036854775807L),
          @thrift.I64(95L),
          @thrift.I64(9223372036854775807L),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x61\x05\x20\xff\xff\xff\xff\x0f\x0b\xff\xff\x03\x01\x64\x01\x01\x0a\x00\xe6\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x02\x02\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x00\x00\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\xbe\x01\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 34" {
  let original = @thrift.Struct([
    (
      14,
      @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.BinaryKind), [
        (@thrift.I64(-1L), @thrift.Binary(b"")),
      ]),
    ),
    (0, @thrift.Byte(0)),
  ])
  let wire = b"\x0d\x00\x0e\x0a\x0b\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x03\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        14,
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.BinaryKind), [
          (@thrift.I64(-1L), @thrift.Binary(b"")),
        ]),
      ),
      (0, @thrift.Byte(0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1a\x0d\x00\x0e\x0a\x0b\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x03\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 34" {
  let original = @thrift.Struct([
    (
      14,
      @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.BinaryKind), [
        (@thrift.I64(-1L), @thrift.Binary(b"")),
      ]),
    ),
    (0, @thrift.Byte(0)),
  ])
  let wire = b"\xeb\x01\x68\x01\x00\x03\x00\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        14,
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.BinaryKind), [
          (@thrift.I64(-1L), @thrift.Binary(b"")),
        ]),
      ),
      (0, @thrift.Byte(0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x09\xeb\x01\x68\x01\x00\x03\x00\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 35" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 35" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 36" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 36" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 37" {
  let original = @thrift.Struct([
    (
      2,
      @thrift.SetValue(@thrift.StructKind, [
        @thrift.Struct([(0, @thrift.Bool(true))]),
        @thrift.Struct([]),
      ]),
    ),
    (1, @thrift.I64(24L)),
  ])
  let wire = b"\x0e\x00\x02\x0c\x00\x00\x00\x02\x02\x00\x00\x01\x00\x00\x0a\x00\x01\x00\x00\x00\x00\x00\x00\x00\x18\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        2,
        @thrift.SetValue(@thrift.StructKind, [
          @thrift.Struct([(0, @thrift.Bool(true))]),
          @thrift.Struct([]),
        ]),
      ),
      (1, @thrift.I64(24L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1a\x0e\x00\x02\x0c\x00\x00\x00\x02\x02\x00\x00\x01\x00\x00\x0a\x00\x01\x00\x00\x00\x00\x00\x00\x00\x18\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 37" {
  let original = @thrift.Struct([
    (
      2,
      @thrift.SetValue(@thrift.StructKind, [
        @thrift.Struct([(0, @thrift.Bool(true))]),
        @thrift.Struct([]),
      ]),
    ),
    (1, @thrift.I64(24L)),
  ])
  let wire = b"\x2a\x2c\x01\x00\x00\x00\x06\x02\x30\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        2,
        @thrift.SetValue(@thrift.StructKind, [
          @thrift.Struct([(0, @thrift.Bool(true))]),
          @thrift.Struct([]),
        ]),
      ),
      (1, @thrift.I64(24L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0a\x2a\x2c\x01\x00\x00\x00\x06\x02\x30\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 38" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 38" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 39" {
  let original = @thrift.Struct([
    (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (
      15,
      @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.ListKind), [
        (@thrift.I16(-32768), @thrift.List(@thrift.MapKind, [])),
        (@thrift.I16(-1), @thrift.List(@thrift.BoolKind, [])),
      ]),
    ),
  ])
  let wire = b"\x0b\x00\x10\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0d\x00\x0f\x06\x0f\x00\x00\x00\x02\x80\x00\x0d\x00\x00\x00\x00\xff\xff\x02\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (
        15,
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.ListKind), [
          (@thrift.I16(-32768), @thrift.List(@thrift.MapKind, [])),
          (@thrift.I16(-1), @thrift.List(@thrift.BoolKind, [])),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x29\x0b\x00\x10\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0d\x00\x0f\x06\x0f\x00\x00\x00\x02\x80\x00\x0d\x00\x00\x00\x00\xff\xff\x02\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 39" {
  let original = @thrift.Struct([
    (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (
      15,
      @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.ListKind), [
        (@thrift.I16(-32768), @thrift.List(@thrift.MapKind, [])),
        (@thrift.I16(-1), @thrift.List(@thrift.BoolKind, [])),
      ]),
    ),
  ])
  let wire = b"\x08\x20\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0b\x1e\x02\x49\xff\xff\x03\x0b\x01\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (
        15,
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.ListKind), [
          (@thrift.I16(-32768), @thrift.List(@thrift.MapKind, [])),
          (@thrift.I16(-1), @thrift.List(@thrift.BoolKind, [])),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x18\x08\x20\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0b\x1e\x02\x49\xff\xff\x03\x0b\x01\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 40" {
  let original = @thrift.Struct([
    (14, @thrift.Struct([(31, @thrift.Byte(127)), (1, @thrift.I32(0))])),
    (15, @thrift.I64(9223372036854775807L)),
    (-1, @thrift.Struct([(-1, @thrift.I64(1L))])),
  ])
  let wire = b"\x0c\x00\x0e\x03\x00\x1f\x7f\x08\x00\x01\x00\x00\x00\x00\x00\x0a\x00\x0f\x7f\xff\xff\xff\xff\xff\xff\xff\x0c\xff\xff\x0a\xff\xff\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.Struct([(31, @thrift.Byte(127)), (1, @thrift.I32(0))])),
      (15, @thrift.I64(9223372036854775807L)),
      (-1, @thrift.Struct([(-1, @thrift.I64(1L))])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x2a\x0c\x00\x0e\x03\x00\x1f\x7f\x08\x00\x01\x00\x00\x00\x00\x00\x0a\x00\x0f\x7f\xff\xff\xff\xff\xff\xff\xff\x0c\xff\xff\x0a\xff\xff\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 40" {
  let original = @thrift.Struct([
    (14, @thrift.Struct([(31, @thrift.Byte(127)), (1, @thrift.I32(0))])),
    (15, @thrift.I64(9223372036854775807L)),
    (-1, @thrift.Struct([(-1, @thrift.I64(1L))])),
  ])
  let wire = b"\xec\x03\x3e\x7f\x05\x02\x00\x00\x16\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x0c\x01\x06\x01\x02\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.Struct([(31, @thrift.Byte(127)), (1, @thrift.I32(0))])),
      (15, @thrift.I64(9223372036854775807L)),
      (-1, @thrift.Struct([(-1, @thrift.I64(1L))])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1a\xec\x03\x3e\x7f\x05\x02\x00\x00\x16\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x0c\x01\x06\x01\x02\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 41" {
  let original = @thrift.Struct([(-32768, @thrift.I16(32767))])
  let wire = b"\x06\x80\x00\x7f\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-32768, @thrift.I16(32767))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x06\x06\x80\x00\x7f\xff\x00")
}

///|
test "Apache seeded CompactProtocol fixture 41" {
  let original = @thrift.Struct([(-32768, @thrift.I16(32767))])
  let wire = b"\x04\xff\xff\x03\xfe\xff\x03\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-32768, @thrift.I16(32767))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x08\x04\xff\xff\x03\xfe\xff\x03\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 42" {
  let original = @thrift.Struct([(127, @thrift.I16(1))])
  let wire = b"\x06\x00\x7f\x00\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(127, @thrift.I16(1))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x06\x06\x00\x7f\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 42" {
  let original = @thrift.Struct([(127, @thrift.I16(1))])
  let wire = b"\x04\xfe\x01\x02\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(127, @thrift.I16(1))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x05\x04\xfe\x01\x02\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 43" {
  let original = @thrift.Struct([
    (32767, @thrift.I16(32767)),
    (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (
      15,
      @thrift.SetValue(@thrift.ListKind, [
        @thrift.List(@thrift.ByteKind, [@thrift.Byte(1)]),
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (-1, @thrift.I64(-39L)),
            (16, @thrift.I64(21L)),
            (-32768, @thrift.I16(32767)),
          ]),
        ]),
        @thrift.List(@thrift.I32Kind, []),
        @thrift.List(@thrift.I32Kind, [@thrift.I32(2147483647)]),
        @thrift.List(@thrift.ListKind, []),
        @thrift.List(@thrift.BinaryKind, [
          @thrift.Binary(b""),
          @thrift.Binary(
            b"\x88\xe5\xb5\x80\x47\x9b\xe2\x62\x5b\xa5\x95\x37\x6f\x19\xa5\xf1\x32",
          ),
        ]),
        @thrift.List(@thrift.I32Kind, [@thrift.I32(2147483647), @thrift.I32(1)]),
        @thrift.List(@thrift.DoubleKind, [
          @thrift.Double(0.0),
          @thrift.Double(-0.0),
        ]),
        @thrift.List(@thrift.BoolKind, [@thrift.Bool(false), @thrift.Bool(true)]),
        @thrift.List(@thrift.ByteKind, [@thrift.Byte(127), @thrift.Byte(127)]),
        @thrift.List(@thrift.DoubleKind, [
          @thrift.Double(1.0e+30),
          @thrift.Double(-0.0),
        ]),
        @thrift.List(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I16Kind), [
            (@thrift.Binary(b""), @thrift.I16(-32768)),
            (@thrift.Binary(b""), @thrift.I16(-1)),
            (
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
              @thrift.I16(-1),
            ),
          ]),
        ]),
        @thrift.List(@thrift.I64Kind, []),
        @thrift.List(@thrift.I32Kind, [@thrift.I32(-2147483648)]),
      ]),
    ),
    (1, @thrift.Byte(92)),
  ])
  let wire = b"\x06\x7f\xff\x7f\xff\x0b\x00\x7f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0e\x00\x0f\x0f\x00\x00\x00\x0e\x03\x00\x00\x00\x01\x01\x0c\x00\x00\x00\x01\x0a\xff\xff\xff\xff\xff\xff\xff\xff\xff\xd9\x0a\x00\x10\x00\x00\x00\x00\x00\x00\x00\x15\x06\x80\x00\x7f\xff\x00\x08\x00\x00\x00\x00\x08\x00\x00\x00\x01\x7f\xff\xff\xff\x0f\x00\x00\x00\x00\x0b\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x11\x88\xe5\xb5\x80\x47\x9b\xe2\x62\x5b\xa5\x95\x37\x6f\x19\xa5\xf1\x32\x08\x00\x00\x00\x02\x7f\xff\xff\xff\x00\x00\x00\x01\x04\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x02\x00\x01\x03\x00\x00\x00\x02\x7f\x7f\x04\x00\x00\x00\x02\x46\x29\x3e\x59\x39\xa0\x8c\xea\x80\x00\x00\x00\x00\x00\x00\x00\x0d\x00\x00\x00\x01\x0b\x06\x00\x00\x00\x03\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\xff\xff\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\xff\xff\x0a\x00\x00\x00\x00\x08\x00\x00\x00\x01\x80\x00\x00\x00\x03\x00\x01\x5c\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.I16(32767)),
      (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (
        15,
        @thrift.SetValue(@thrift.ListKind, [
          @thrift.List(@thrift.ByteKind, [@thrift.Byte(1)]),
          @thrift.List(@thrift.StructKind, [
            @thrift.Struct([
              (-1, @thrift.I64(-39L)),
              (16, @thrift.I64(21L)),
              (-32768, @thrift.I16(32767)),
            ]),
          ]),
          @thrift.List(@thrift.I32Kind, []),
          @thrift.List(@thrift.I32Kind, [@thrift.I32(2147483647)]),
          @thrift.List(@thrift.ListKind, []),
          @thrift.List(@thrift.BinaryKind, [
            @thrift.Binary(b""),
            @thrift.Binary(
              b"\x88\xe5\xb5\x80\x47\x9b\xe2\x62\x5b\xa5\x95\x37\x6f\x19\xa5\xf1\x32",
            ),
          ]),
          @thrift.List(@thrift.I32Kind, [
            @thrift.I32(2147483647),
            @thrift.I32(1),
          ]),
          @thrift.List(@thrift.DoubleKind, [
            @thrift.Double(0.0),
            @thrift.Double(-0.0),
          ]),
          @thrift.List(@thrift.BoolKind, [
            @thrift.Bool(false),
            @thrift.Bool(true),
          ]),
          @thrift.List(@thrift.ByteKind, [@thrift.Byte(127), @thrift.Byte(127)]),
          @thrift.List(@thrift.DoubleKind, [
            @thrift.Double(1.0e+30),
            @thrift.Double(-0.0),
          ]),
          @thrift.List(@thrift.MapKind, [
            @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I16Kind), [
              (@thrift.Binary(b""), @thrift.I16(-32768)),
              (@thrift.Binary(b""), @thrift.I16(-1)),
              (
                @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
                @thrift.I16(-1),
              ),
            ]),
          ]),
          @thrift.List(@thrift.I64Kind, []),
          @thrift.List(@thrift.I32Kind, [@thrift.I32(-2147483648)]),
        ]),
      ),
      (1, @thrift.Byte(92)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\xf5\x06\x7f\xff\x7f\xff\x0b\x00\x7f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0e\x00\x0f\x0f\x00\x00\x00\x0e\x03\x00\x00\x00\x01\x01\x0c\x00\x00\x00\x01\x0a\xff\xff\xff\xff\xff\xff\xff\xff\xff\xd9\x0a\x00\x10\x00\x00\x00\x00\x00\x00\x00\x15\x06\x80\x00\x7f\xff\x00\x08\x00\x00\x00\x00\x08\x00\x00\x00\x01\x7f\xff\xff\xff\x0f\x00\x00\x00\x00\x0b\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x11\x88\xe5\xb5\x80\x47\x9b\xe2\x62\x5b\xa5\x95\x37\x6f\x19\xa5\xf1\x32\x08\x00\x00\x00\x02\x7f\xff\xff\xff\x00\x00\x00\x01\x04\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x02\x00\x01\x03\x00\x00\x00\x02\x7f\x7f\x04\x00\x00\x00\x02\x46\x29\x3e\x59\x39\xa0\x8c\xea\x80\x00\x00\x00\x00\x00\x00\x00\x0d\x00\x00\x00\x01\x0b\x06\x00\x00\x00\x03\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\xff\xff\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\xff\xff\x0a\x00\x00\x00\x00\x08\x00\x00\x00\x01\x80\x00\x00\x00\x03\x00\x01\x5c\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 43" {
  let original = @thrift.Struct([
    (32767, @thrift.I16(32767)),
    (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (
      15,
      @thrift.SetValue(@thrift.ListKind, [
        @thrift.List(@thrift.ByteKind, [@thrift.Byte(1)]),
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (-1, @thrift.I64(-39L)),
            (16, @thrift.I64(21L)),
            (-32768, @thrift.I16(32767)),
          ]),
        ]),
        @thrift.List(@thrift.I32Kind, []),
        @thrift.List(@thrift.I32Kind, [@thrift.I32(2147483647)]),
        @thrift.List(@thrift.ListKind, []),
        @thrift.List(@thrift.BinaryKind, [
          @thrift.Binary(b""),
          @thrift.Binary(
            b"\x88\xe5\xb5\x80\x47\x9b\xe2\x62\x5b\xa5\x95\x37\x6f\x19\xa5\xf1\x32",
          ),
        ]),
        @thrift.List(@thrift.I32Kind, [@thrift.I32(2147483647), @thrift.I32(1)]),
        @thrift.List(@thrift.DoubleKind, [
          @thrift.Double(0.0),
          @thrift.Double(-0.0),
        ]),
        @thrift.List(@thrift.BoolKind, [@thrift.Bool(false), @thrift.Bool(true)]),
        @thrift.List(@thrift.ByteKind, [@thrift.Byte(127), @thrift.Byte(127)]),
        @thrift.List(@thrift.DoubleKind, [
          @thrift.Double(1.0e+30),
          @thrift.Double(-0.0),
        ]),
        @thrift.List(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I16Kind), [
            (@thrift.Binary(b""), @thrift.I16(-32768)),
            (@thrift.Binary(b""), @thrift.I16(-1)),
            (
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
              @thrift.I16(-1),
            ),
          ]),
        ]),
        @thrift.List(@thrift.I64Kind, []),
        @thrift.List(@thrift.I32Kind, [@thrift.I32(-2147483648)]),
      ]),
    ),
    (1, @thrift.Byte(92)),
  ])
  let wire = b"\x04\xfe\xff\x03\xfe\xff\x03\x08\xfe\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0a\x1e\xe9\x13\x01\x1c\x06\x01\x4d\x06\x20\x2a\x04\xff\xff\x03\xfe\xff\x03\x00\x05\x15\xfe\xff\xff\xff\x0f\x09\x28\x00\x11\x88\xe5\xb5\x80\x47\x9b\xe2\x62\x5b\xa5\x95\x37\x6f\x19\xa5\xf1\x32\x25\xfe\xff\xff\xff\x0f\x02\x27\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x80\x21\x02\x01\x23\x7f\x7f\x27\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00\x00\x00\x00\x00\x00\x00\x80\x1b\x03\x84\x00\xff\xff\x03\x00\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\x06\x15\xff\xff\xff\xff\x0f\x03\x02\x5c\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.I16(32767)),
      (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (
        15,
        @thrift.SetValue(@thrift.ListKind, [
          @thrift.List(@thrift.ByteKind, [@thrift.Byte(1)]),
          @thrift.List(@thrift.StructKind, [
            @thrift.Struct([
              (-1, @thrift.I64(-39L)),
              (16, @thrift.I64(21L)),
              (-32768, @thrift.I16(32767)),
            ]),
          ]),
          @thrift.List(@thrift.I32Kind, []),
          @thrift.List(@thrift.I32Kind, [@thrift.I32(2147483647)]),
          @thrift.List(@thrift.ListKind, []),
          @thrift.List(@thrift.BinaryKind, [
            @thrift.Binary(b""),
            @thrift.Binary(
              b"\x88\xe5\xb5\x80\x47\x9b\xe2\x62\x5b\xa5\x95\x37\x6f\x19\xa5\xf1\x32",
            ),
          ]),
          @thrift.List(@thrift.I32Kind, [
            @thrift.I32(2147483647),
            @thrift.I32(1),
          ]),
          @thrift.List(@thrift.DoubleKind, [
            @thrift.Double(0.0),
            @thrift.Double(-0.0),
          ]),
          @thrift.List(@thrift.BoolKind, [
            @thrift.Bool(false),
            @thrift.Bool(true),
          ]),
          @thrift.List(@thrift.ByteKind, [@thrift.Byte(127), @thrift.Byte(127)]),
          @thrift.List(@thrift.DoubleKind, [
            @thrift.Double(1.0e+30),
            @thrift.Double(-0.0),
          ]),
          @thrift.List(@thrift.MapKind, [
            @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I16Kind), [
              (@thrift.Binary(b""), @thrift.I16(-32768)),
              (@thrift.Binary(b""), @thrift.I16(-1)),
              (
                @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
                @thrift.I16(-1),
              ),
            ]),
          ]),
          @thrift.List(@thrift.I64Kind, []),
          @thrift.List(@thrift.I32Kind, [@thrift.I32(-2147483648)]),
        ]),
      ),
      (1, @thrift.Byte(92)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x94\x04\xfe\xff\x03\xfe\xff\x03\x08\xfe\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0a\x1e\xe9\x13\x01\x1c\x06\x01\x4d\x06\x20\x2a\x04\xff\xff\x03\xfe\xff\x03\x00\x05\x15\xfe\xff\xff\xff\x0f\x09\x28\x00\x11\x88\xe5\xb5\x80\x47\x9b\xe2\x62\x5b\xa5\x95\x37\x6f\x19\xa5\xf1\x32\x25\xfe\xff\xff\xff\x0f\x02\x27\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x80\x21\x02\x01\x23\x7f\x7f\x27\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00\x00\x00\x00\x00\x00\x00\x80\x1b\x03\x84\x00\xff\xff\x03\x00\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\x06\x15\xff\xff\xff\xff\x0f\x03\x02\x5c\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 44" {
  let original = @thrift.Struct([
    (2, @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), [])),
    (
      127,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.MapKind), [
        (
          @thrift.Byte(55),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
            (
              @thrift.Byte(-95),
              @thrift.Struct([
                (-32768, @thrift.I32(2147483647)),
                (31, @thrift.Byte(127)),
                (2, @thrift.Bool(true)),
              ]),
            ),
            (
              @thrift.Byte(0),
              @thrift.Struct([(31, @thrift.I32(0)), (-32768, @thrift.Byte(0))]),
            ),
            (@thrift.Byte(0), @thrift.Struct([])),
          ]),
        ),
        (
          @thrift.Byte(0),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), []),
        ),
        (
          @thrift.Byte(-1),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
            (@thrift.I32(0), @thrift.I16(32767)),
            (@thrift.I32(-28), @thrift.I16(-1)),
            (@thrift.I32(1), @thrift.I16(-1)),
          ]),
        ),
      ]),
    ),
    (
      16,
      @thrift.Binary(
        b"\x0d\x4e\xc6\xea\xd4\xa2\x1f\xaf\xcc\x8b\xf1\x6c\x69\xca\xae\x61\x69",
      ),
    ),
    (15, @thrift.Double(1.0e+30)),
  ])
  let wire = b"\x0d\x00\x02\x02\x06\x00\x00\x00\x00\x0d\x00\x7f\x03\x0d\x00\x00\x00\x03\x37\x03\x0c\x00\x00\x00\x03\xa1\x08\x80\x00\x7f\xff\xff\xff\x03\x00\x1f\x7f\x02\x00\x02\x01\x00\x00\x08\x00\x1f\x00\x00\x00\x00\x03\x80\x00\x00\x00\x00\x00\x00\x06\x0c\x00\x00\x00\x00\xff\x08\x06\x00\x00\x00\x03\x00\x00\x00\x00\x7f\xff\xff\xff\xff\xe4\xff\xff\x00\x00\x00\x01\xff\xff\x0b\x00\x10\x00\x00\x00\x11\x0d\x4e\xc6\xea\xd4\xa2\x1f\xaf\xcc\x8b\xf1\x6c\x69\xca\xae\x61\x69\x04\x00\x0f\x46\x29\x3e\x59\x39\xa0\x8c\xea\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), [])),
      (
        127,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.MapKind), [
          (
            @thrift.Byte(55),
            @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
              (
                @thrift.Byte(-95),
                @thrift.Struct([
                  (-32768, @thrift.I32(2147483647)),
                  (31, @thrift.Byte(127)),
                  (2, @thrift.Bool(true)),
                ]),
              ),
              (
                @thrift.Byte(0),
                @thrift.Struct([(31, @thrift.I32(0)), (-32768, @thrift.Byte(0))]),
              ),
              (@thrift.Byte(0), @thrift.Struct([])),
            ]),
          ),
          (
            @thrift.Byte(0),
            @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), []),
          ),
          (
            @thrift.Byte(-1),
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
              (@thrift.I32(0), @thrift.I16(32767)),
              (@thrift.I32(-28), @thrift.I16(-1)),
              (@thrift.I32(1), @thrift.I16(-1)),
            ]),
          ),
        ]),
      ),
      (
        16,
        @thrift.Binary(
          b"\x0d\x4e\xc6\xea\xd4\xa2\x1f\xaf\xcc\x8b\xf1\x6c\x69\xca\xae\x61\x69",
        ),
      ),
      (15, @thrift.Double(1.0e+30)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x7d\x0d\x00\x02\x02\x06\x00\x00\x00\x00\x0d\x00\x7f\x03\x0d\x00\x00\x00\x03\x37\x03\x0c\x00\x00\x00\x03\xa1\x08\x80\x00\x7f\xff\xff\xff\x03\x00\x1f\x7f\x02\x00\x02\x01\x00\x00\x08\x00\x1f\x00\x00\x00\x00\x03\x80\x00\x00\x00\x00\x00\x00\x06\x0c\x00\x00\x00\x00\xff\x08\x06\x00\x00\x00\x03\x00\x00\x00\x00\x7f\xff\xff\xff\xff\xe4\xff\xff\x00\x00\x00\x01\xff\xff\x0b\x00\x10\x00\x00\x00\x11\x0d\x4e\xc6\xea\xd4\xa2\x1f\xaf\xcc\x8b\xf1\x6c\x69\xca\xae\x61\x69\x04\x00\x0f\x46\x29\x3e\x59\x39\xa0\x8c\xea\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 44" {
  let original = @thrift.Struct([
    (2, @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), [])),
    (
      127,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.MapKind), [
        (
          @thrift.Byte(55),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
            (
              @thrift.Byte(-95),
              @thrift.Struct([
                (-32768, @thrift.I32(2147483647)),
                (31, @thrift.Byte(127)),
                (2, @thrift.Bool(true)),
              ]),
            ),
            (
              @thrift.Byte(0),
              @thrift.Struct([(31, @thrift.I32(0)), (-32768, @thrift.Byte(0))]),
            ),
            (@thrift.Byte(0), @thrift.Struct([])),
          ]),
        ),
        (
          @thrift.Byte(0),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), []),
        ),
        (
          @thrift.Byte(-1),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
            (@thrift.I32(0), @thrift.I16(32767)),
            (@thrift.I32(-28), @thrift.I16(-1)),
            (@thrift.I32(1), @thrift.I16(-1)),
          ]),
        ),
      ]),
    ),
    (
      16,
      @thrift.Binary(
        b"\x0d\x4e\xc6\xea\xd4\xa2\x1f\xaf\xcc\x8b\xf1\x6c\x69\xca\xae\x61\x69",
      ),
    ),
    (15, @thrift.Double(1.0e+30)),
  ])
  let wire = b"\x2b\x00\x0b\xfe\x01\x03\x3b\x37\x03\x3c\xa1\x05\xff\xff\x03\xfe\xff\xff\xff\x0f\x03\x3e\x7f\x01\x04\x00\x00\x05\x3e\x00\x03\xff\xff\x03\x00\x00\x00\x00\x00\x00\xff\x03\x54\x00\xfe\xff\x03\x37\x01\x02\x01\x08\x20\x11\x0d\x4e\xc6\xea\xd4\xa2\x1f\xaf\xcc\x8b\xf1\x6c\x69\xca\xae\x61\x69\x07\x1e\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.MapValue(None, None, [])),
      (
        127,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.MapKind), [
          (
            @thrift.Byte(55),
            @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
              (
                @thrift.Byte(-95),
                @thrift.Struct([
                  (-32768, @thrift.I32(2147483647)),
                  (31, @thrift.Byte(127)),
                  (2, @thrift.Bool(true)),
                ]),
              ),
              (
                @thrift.Byte(0),
                @thrift.Struct([(31, @thrift.I32(0)), (-32768, @thrift.Byte(0))]),
              ),
              (@thrift.Byte(0), @thrift.Struct([])),
            ]),
          ),
          (@thrift.Byte(0), @thrift.MapValue(None, None, [])),
          (
            @thrift.Byte(-1),
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
              (@thrift.I32(0), @thrift.I16(32767)),
              (@thrift.I32(-28), @thrift.I16(-1)),
              (@thrift.I32(1), @thrift.I16(-1)),
            ]),
          ),
        ]),
      ),
      (
        16,
        @thrift.Binary(
          b"\x0d\x4e\xc6\xea\xd4\xa2\x1f\xaf\xcc\x8b\xf1\x6c\x69\xca\xae\x61\x69",
        ),
      ),
      (15, @thrift.Double(1.0e+30)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x52\x2b\x00\x0b\xfe\x01\x03\x3b\x37\x03\x3c\xa1\x05\xff\xff\x03\xfe\xff\xff\xff\x0f\x03\x3e\x7f\x01\x04\x00\x00\x05\x3e\x00\x03\xff\xff\x03\x00\x00\x00\x00\x00\x00\xff\x03\x54\x00\xfe\xff\x03\x37\x01\x02\x01\x08\x20\x11\x0d\x4e\xc6\xea\xd4\xa2\x1f\xaf\xcc\x8b\xf1\x6c\x69\xca\xae\x61\x69\x07\x1e\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 45" {
  let original = @thrift.Struct([
    (
      31,
      @thrift.SetValue(@thrift.MapKind, [
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ListKind), [
          (
            @thrift.I64(0L),
            @thrift.List(@thrift.BinaryKind, [
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.StructKind), []),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.MapKind), [
          (
            @thrift.Binary(b""),
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I64Kind), [
              (@thrift.I32(2147483647), @thrift.I64(-90L)),
            ]),
          ),
          (
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.BoolKind), []),
          ),
          (
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I64Kind), [
              (@thrift.I16(-32768), @thrift.I64(-1L)),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ListKind), []),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I32Kind), [
          (@thrift.Bool(true), @thrift.I32(0)),
          (@thrift.Bool(false), @thrift.I32(1)),
        ]),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I16Kind), [
          (@thrift.I16(0), @thrift.I16(-1)),
          (@thrift.I16(74), @thrift.I16(0)),
          (@thrift.I16(0), @thrift.I16(-1)),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), []),
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.SetKind), []),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), [
          (@thrift.Bool(true), @thrift.I16(-64)),
          (@thrift.Bool(false), @thrift.I16(-32768)),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
          (
            @thrift.Binary(b"\x00\xff\xfe"),
            @thrift.SetValue(@thrift.I32Kind, []),
          ),
          (
            @thrift.Binary(b"\x00\xff\xfe"),
            @thrift.SetValue(@thrift.BoolKind, []),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.MapKind), []),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BinaryKind), [
          (
            @thrift.Byte(1),
            @thrift.Binary(
              b"\x31\x7d\x18\x8e\x69\x4a\xbb\xad\x44\xe9\x28\x52\x6b\x13\xdb\x61\x65",
            ),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ListKind), []),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I64Kind), []),
      ]),
    ),
    (127, @thrift.Double(1.0e+30)),
    (
      2,
      @thrift.SetValue(@thrift.BoolKind, [
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
      ]),
    ),
  ])
  let wire = b"\x0e\x00\x1f\x0d\x00\x00\x00\x0e\x0a\x0f\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x00\x00\x00\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\x0c\x00\x00\x00\x00\x0b\x0d\x00\x00\x00\x03\x00\x00\x00\x00\x08\x0a\x00\x00\x00\x01\x7f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa6\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\x02\x00\x00\x00\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\x0a\x00\x00\x00\x01\x80\x00\xff\xff\xff\xff\xff\xff\xff\xff\x0a\x0f\x00\x00\x00\x00\x02\x08\x00\x00\x00\x02\x01\x00\x00\x00\x00\x00\x00\x00\x00\x01\x06\x06\x00\x00\x00\x03\x00\x00\xff\xff\x00\x4a\x00\x00\x00\x00\xff\xff\x0b\x0e\x00\x00\x00\x00\x08\x0e\x00\x00\x00\x00\x02\x06\x00\x00\x00\x02\x01\xff\xc0\x00\x80\x00\x0b\x0e\x00\x00\x00\x02\x00\x00\x00\x03\x00\xff\xfe\x08\x00\x00\x00\x00\x00\x00\x00\x03\x00\xff\xfe\x02\x00\x00\x00\x00\x03\x0d\x00\x00\x00\x00\x03\x0b\x00\x00\x00\x01\x01\x00\x00\x00\x11\x31\x7d\x18\x8e\x69\x4a\xbb\xad\x44\xe9\x28\x52\x6b\x13\xdb\x61\x65\x0b\x0f\x00\x00\x00\x00\x06\x0a\x00\x00\x00\x00\x04\x00\x7f\x46\x29\x3e\x59\x39\xa0\x8c\xea\x0e\x00\x02\x02\x00\x00\x00\x0f\x00\x01\x01\x00\x01\x00\x01\x00\x00\x01\x01\x01\x00\x01\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        31,
        @thrift.SetValue(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ListKind), [
            (
              @thrift.I64(0L),
              @thrift.List(@thrift.BinaryKind, [
                @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.StructKind), []),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.MapKind), [
            (
              @thrift.Binary(b""),
              @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I64Kind), [
                (@thrift.I32(2147483647), @thrift.I64(-90L)),
              ]),
            ),
            (
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
              @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.BoolKind), []),
            ),
            (
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
              @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I64Kind), [
                (@thrift.I16(-32768), @thrift.I64(-1L)),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ListKind), []),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I32Kind), [
            (@thrift.Bool(true), @thrift.I32(0)),
            (@thrift.Bool(false), @thrift.I32(1)),
          ]),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I16Kind), [
            (@thrift.I16(0), @thrift.I16(-1)),
            (@thrift.I16(74), @thrift.I16(0)),
            (@thrift.I16(0), @thrift.I16(-1)),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), []),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.SetKind), []),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), [
            (@thrift.Bool(true), @thrift.I16(-64)),
            (@thrift.Bool(false), @thrift.I16(-32768)),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
            (
              @thrift.Binary(b"\x00\xff\xfe"),
              @thrift.SetValue(@thrift.I32Kind, []),
            ),
            (
              @thrift.Binary(b"\x00\xff\xfe"),
              @thrift.SetValue(@thrift.BoolKind, []),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.MapKind), []),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BinaryKind), [
            (
              @thrift.Byte(1),
              @thrift.Binary(
                b"\x31\x7d\x18\x8e\x69\x4a\xbb\xad\x44\xe9\x28\x52\x6b\x13\xdb\x61\x65",
              ),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ListKind), []),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I64Kind), []),
        ]),
      ),
      (127, @thrift.Double(1.0e+30)),
      (
        2,
        @thrift.SetValue(@thrift.BoolKind, [
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\x2c\x0e\x00\x1f\x0d\x00\x00\x00\x0e\x0a\x0f\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x00\x00\x00\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\x0c\x00\x00\x00\x00\x0b\x0d\x00\x00\x00\x03\x00\x00\x00\x00\x08\x0a\x00\x00\x00\x01\x7f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa6\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\x02\x00\x00\x00\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\x0a\x00\x00\x00\x01\x80\x00\xff\xff\xff\xff\xff\xff\xff\xff\x0a\x0f\x00\x00\x00\x00\x02\x08\x00\x00\x00\x02\x01\x00\x00\x00\x00\x00\x00\x00\x00\x01\x06\x06\x00\x00\x00\x03\x00\x00\xff\xff\x00\x4a\x00\x00\x00\x00\xff\xff\x0b\x0e\x00\x00\x00\x00\x08\x0e\x00\x00\x00\x00\x02\x06\x00\x00\x00\x02\x01\xff\xc0\x00\x80\x00\x0b\x0e\x00\x00\x00\x02\x00\x00\x00\x03\x00\xff\xfe\x08\x00\x00\x00\x00\x00\x00\x00\x03\x00\xff\xfe\x02\x00\x00\x00\x00\x03\x0d\x00\x00\x00\x00\x03\x0b\x00\x00\x00\x01\x01\x00\x00\x00\x11\x31\x7d\x18\x8e\x69\x4a\xbb\xad\x44\xe9\x28\x52\x6b\x13\xdb\x61\x65\x0b\x0f\x00\x00\x00\x00\x06\x0a\x00\x00\x00\x00\x04\x00\x7f\x46\x29\x3e\x59\x39\xa0\x8c\xea\x0e\x00\x02\x02\x00\x00\x00\x0f\x00\x01\x01\x00\x01\x00\x01\x00\x00\x01\x01\x01\x00\x01\x01\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 45" {
  let original = @thrift.Struct([
    (
      31,
      @thrift.SetValue(@thrift.MapKind, [
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ListKind), [
          (
            @thrift.I64(0L),
            @thrift.List(@thrift.BinaryKind, [
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.StructKind), []),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.MapKind), [
          (
            @thrift.Binary(b""),
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I64Kind), [
              (@thrift.I32(2147483647), @thrift.I64(-90L)),
            ]),
          ),
          (
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.BoolKind), []),
          ),
          (
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I64Kind), [
              (@thrift.I16(-32768), @thrift.I64(-1L)),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ListKind), []),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I32Kind), [
          (@thrift.Bool(true), @thrift.I32(0)),
          (@thrift.Bool(false), @thrift.I32(1)),
        ]),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I16Kind), [
          (@thrift.I16(0), @thrift.I16(-1)),
          (@thrift.I16(74), @thrift.I16(0)),
          (@thrift.I16(0), @thrift.I16(-1)),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), []),
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.SetKind), []),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), [
          (@thrift.Bool(true), @thrift.I16(-64)),
          (@thrift.Bool(false), @thrift.I16(-32768)),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
          (
            @thrift.Binary(b"\x00\xff\xfe"),
            @thrift.SetValue(@thrift.I32Kind, []),
          ),
          (
            @thrift.Binary(b"\x00\xff\xfe"),
            @thrift.SetValue(@thrift.BoolKind, []),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.MapKind), []),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BinaryKind), [
          (
            @thrift.Byte(1),
            @thrift.Binary(
              b"\x31\x7d\x18\x8e\x69\x4a\xbb\xad\x44\xe9\x28\x52\x6b\x13\xdb\x61\x65",
            ),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ListKind), []),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I64Kind), []),
      ]),
    ),
    (127, @thrift.Double(1.0e+30)),
    (
      2,
      @thrift.SetValue(@thrift.BoolKind, [
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
      ]),
    ),
  ])
  let wire = b"\x0a\x3e\xeb\x01\x69\x00\x18\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x03\x8b\x00\x01\x56\xfe\xff\xff\xff\x0f\xb3\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\x46\xff\xff\x03\x01\x00\x02\x15\x01\x00\x02\x02\x03\x44\x00\x01\x94\x01\x00\x00\x01\x00\x00\x02\x14\x01\x7f\x02\xff\xff\x03\x02\x8a\x03\x00\xff\xfe\x05\x03\x00\xff\xfe\x01\x00\x01\x38\x01\x11\x31\x7d\x18\x8e\x69\x4a\xbb\xad\x44\xe9\x28\x52\x6b\x13\xdb\x61\x65\x00\x00\x07\xfe\x01\xea\x8c\xa0\x39\x59\x3e\x29\x46\x0a\x04\xf1\x0f\x02\x01\x01\x02\x01\x02\x01\x02\x02\x01\x01\x01\x02\x01\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        31,
        @thrift.SetValue(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ListKind), [
            (
              @thrift.I64(0L),
              @thrift.List(@thrift.BinaryKind, [
                @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
              ]),
            ),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.MapKind), [
            (
              @thrift.Binary(b""),
              @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I64Kind), [
                (@thrift.I32(2147483647), @thrift.I64(-90L)),
              ]),
            ),
            (
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
              @thrift.MapValue(None, None, []),
            ),
            (
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
              @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I64Kind), [
                (@thrift.I16(-32768), @thrift.I64(-1L)),
              ]),
            ),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I32Kind), [
            (@thrift.Bool(true), @thrift.I32(0)),
            (@thrift.Bool(false), @thrift.I32(1)),
          ]),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I16Kind), [
            (@thrift.I16(0), @thrift.I16(-1)),
            (@thrift.I16(74), @thrift.I16(0)),
            (@thrift.I16(0), @thrift.I16(-1)),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I16Kind), [
            (@thrift.Bool(true), @thrift.I16(-64)),
            (@thrift.Bool(false), @thrift.I16(-32768)),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
            (
              @thrift.Binary(b"\x00\xff\xfe"),
              @thrift.SetValue(@thrift.I32Kind, []),
            ),
            (
              @thrift.Binary(b"\x00\xff\xfe"),
              @thrift.SetValue(@thrift.BoolKind, []),
            ),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BinaryKind), [
            (
              @thrift.Byte(1),
              @thrift.Binary(
                b"\x31\x7d\x18\x8e\x69\x4a\xbb\xad\x44\xe9\x28\x52\x6b\x13\xdb\x61\x65",
              ),
            ),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(None, None, []),
        ]),
      ),
      (127, @thrift.Double(1.0e+30)),
      (
        2,
        @thrift.SetValue(@thrift.BoolKind, [
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x99\x0a\x3e\xeb\x01\x69\x00\x18\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x03\x8b\x00\x01\x56\xfe\xff\xff\xff\x0f\xb3\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\x46\xff\xff\x03\x01\x00\x02\x15\x01\x00\x02\x02\x03\x44\x00\x01\x94\x01\x00\x00\x01\x00\x00\x02\x14\x01\x7f\x02\xff\xff\x03\x02\x8a\x03\x00\xff\xfe\x05\x03\x00\xff\xfe\x01\x00\x01\x38\x01\x11\x31\x7d\x18\x8e\x69\x4a\xbb\xad\x44\xe9\x28\x52\x6b\x13\xdb\x61\x65\x00\x00\x07\xfe\x01\xea\x8c\xa0\x39\x59\x3e\x29\x46\x0a\x04\xf1\x0f\x02\x01\x01\x02\x01\x02\x01\x02\x02\x01\x01\x01\x02\x01\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 46" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 46" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 47" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 47" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 48" {
  let original = @thrift.Struct([
    (14, @thrift.I32(1)),
    (-1, @thrift.I64(-9223372036854775808L)),
    (31, @thrift.Bool(true)),
    (127, @thrift.I16(0)),
  ])
  let wire = b"\x08\x00\x0e\x00\x00\x00\x01\x0a\xff\xff\x80\x00\x00\x00\x00\x00\x00\x00\x02\x00\x1f\x01\x06\x00\x7f\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.I32(1)),
      (-1, @thrift.I64(-9223372036854775808L)),
      (31, @thrift.Bool(true)),
      (127, @thrift.I16(0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1c\x08\x00\x0e\x00\x00\x00\x01\x0a\xff\xff\x80\x00\x00\x00\x00\x00\x00\x00\x02\x00\x1f\x01\x06\x00\x7f\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 48" {
  let original = @thrift.Struct([
    (14, @thrift.I32(1)),
    (-1, @thrift.I64(-9223372036854775808L)),
    (31, @thrift.Bool(true)),
    (127, @thrift.I16(0)),
  ])
  let wire = b"\xe5\x02\x06\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x01\x3e\x04\xfe\x01\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.I32(1)),
      (-1, @thrift.I64(-9223372036854775808L)),
      (31, @thrift.Bool(true)),
      (127, @thrift.I16(0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x15\xe5\x02\x06\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x01\x3e\x04\xfe\x01\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 49" {
  let original = @thrift.Struct([
    (15, @thrift.Binary(b"")),
    (32767, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (0, @thrift.List(@thrift.I32Kind, [])),
  ])
  let wire = b"\x0b\x00\x0f\x00\x00\x00\x00\x0b\x7f\xff\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0f\x00\x00\x08\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.Binary(b"")),
      (32767, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (0, @thrift.List(@thrift.I32Kind, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x21\x0b\x00\x0f\x00\x00\x00\x00\x0b\x7f\xff\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0f\x00\x00\x08\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 49" {
  let original = @thrift.Struct([
    (15, @thrift.Binary(b"")),
    (32767, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (0, @thrift.List(@thrift.I32Kind, [])),
  ])
  let wire = b"\xf8\x00\x08\xfe\xff\x03\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x09\x00\x05\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.Binary(b"")),
      (32767, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (0, @thrift.List(@thrift.I32Kind, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x15\xf8\x00\x08\xfe\xff\x03\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x09\x00\x05\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 50" {
  let original = @thrift.Struct([
    (14, @thrift.Binary(b"\x00\xff\xfe")),
    (15, @thrift.Binary(b"")),
  ])
  let wire = b"\x0b\x00\x0e\x00\x00\x00\x03\x00\xff\xfe\x0b\x00\x0f\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.Binary(b"\x00\xff\xfe")),
      (15, @thrift.Binary(b"")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x12\x0b\x00\x0e\x00\x00\x00\x03\x00\xff\xfe\x0b\x00\x0f\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 50" {
  let original = @thrift.Struct([
    (14, @thrift.Binary(b"\x00\xff\xfe")),
    (15, @thrift.Binary(b"")),
  ])
  let wire = b"\xe8\x03\x00\xff\xfe\x18\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.Binary(b"\x00\xff\xfe")),
      (15, @thrift.Binary(b"")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x08\xe8\x03\x00\xff\xfe\x18\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 51" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 51" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 52" {
  let original = @thrift.Struct([
    (14, @thrift.I16(1)),
    (0, @thrift.I64(1L)),
    (
      -1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), [
        (
          @thrift.Binary(
            b"\x11\xe0\xa0\xc7\x70\xf4\x85\x43\x4c\xd4\xa5\x85\x67\x5e\x44\x0a\x5f",
          ),
          @thrift.Byte(127),
        ),
      ]),
    ),
    (16, @thrift.Bool(false)),
  ])
  let wire = b"\x06\x00\x0e\x00\x01\x0a\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x0d\xff\xff\x0b\x03\x00\x00\x00\x01\x00\x00\x00\x11\x11\xe0\xa0\xc7\x70\xf4\x85\x43\x4c\xd4\xa5\x85\x67\x5e\x44\x0a\x5f\x7f\x02\x00\x10\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.I16(1)),
      (0, @thrift.I64(1L)),
      (
        -1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), [
          (
            @thrift.Binary(
              b"\x11\xe0\xa0\xc7\x70\xf4\x85\x43\x4c\xd4\xa5\x85\x67\x5e\x44\x0a\x5f",
            ),
            @thrift.Byte(127),
          ),
        ]),
      ),
      (16, @thrift.Bool(false)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x34\x06\x00\x0e\x00\x01\x0a\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x0d\xff\xff\x0b\x03\x00\x00\x00\x01\x00\x00\x00\x11\x11\xe0\xa0\xc7\x70\xf4\x85\x43\x4c\xd4\xa5\x85\x67\x5e\x44\x0a\x5f\x7f\x02\x00\x10\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 52" {
  let original = @thrift.Struct([
    (14, @thrift.I16(1)),
    (0, @thrift.I64(1L)),
    (
      -1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), [
        (
          @thrift.Binary(
            b"\x11\xe0\xa0\xc7\x70\xf4\x85\x43\x4c\xd4\xa5\x85\x67\x5e\x44\x0a\x5f",
          ),
          @thrift.Byte(127),
        ),
      ]),
    ),
    (16, @thrift.Bool(false)),
  ])
  let wire = b"\xe4\x02\x06\x00\x02\x0b\x01\x01\x83\x11\x11\xe0\xa0\xc7\x70\xf4\x85\x43\x4c\xd4\xa5\x85\x67\x5e\x44\x0a\x5f\x7f\x02\x20\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.I16(1)),
      (0, @thrift.I64(1L)),
      (
        -1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), [
          (
            @thrift.Binary(
              b"\x11\xe0\xa0\xc7\x70\xf4\x85\x43\x4c\xd4\xa5\x85\x67\x5e\x44\x0a\x5f",
            ),
            @thrift.Byte(127),
          ),
        ]),
      ),
      (16, @thrift.Bool(false)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1f\xe4\x02\x06\x00\x02\x0b\x01\x01\x83\x11\x11\xe0\xa0\xc7\x70\xf4\x85\x43\x4c\xd4\xa5\x85\x67\x5e\x44\x0a\x5f\x7f\x02\x20\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 53" {
  let original = @thrift.Struct([
    (16, @thrift.Double(-12.125)),
    (
      2,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
        (@thrift.Byte(1), @thrift.Bool(true)),
      ]),
    ),
    (127, @thrift.Bool(false)),
  ])
  let wire = b"\x04\x00\x10\xc0\x28\x40\x00\x00\x00\x00\x00\x0d\x00\x02\x03\x02\x00\x00\x00\x01\x01\x01\x02\x00\x7f\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.Double(-12.125)),
      (
        2,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
          (@thrift.Byte(1), @thrift.Bool(true)),
        ]),
      ),
      (127, @thrift.Bool(false)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1b\x04\x00\x10\xc0\x28\x40\x00\x00\x00\x00\x00\x0d\x00\x02\x03\x02\x00\x00\x00\x01\x01\x01\x02\x00\x7f\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 53" {
  let original = @thrift.Struct([
    (16, @thrift.Double(-12.125)),
    (
      2,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
        (@thrift.Byte(1), @thrift.Bool(true)),
      ]),
    ),
    (127, @thrift.Bool(false)),
  ])
  let wire = b"\x07\x20\x00\x00\x00\x00\x00\x40\x28\xc0\x0b\x04\x01\x31\x01\x01\x02\xfe\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.Double(-12.125)),
      (
        2,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
          (@thrift.Byte(1), @thrift.Bool(true)),
        ]),
      ),
      (127, @thrift.Bool(false)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x14\x07\x20\x00\x00\x00\x00\x00\x40\x28\xc0\x0b\x04\x01\x31\x01\x01\x02\xfe\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 54" {
  let original = @thrift.Struct([(0, @thrift.Byte(0))])
  let wire = b"\x03\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(0, @thrift.Byte(0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x05\x03\x00\x00\x00\x00")
}

///|
test "Apache seeded CompactProtocol fixture 54" {
  let original = @thrift.Struct([(0, @thrift.Byte(0))])
  let wire = b"\x03\x00\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(0, @thrift.Byte(0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x04\x03\x00\x00\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 55" {
  let original = @thrift.Struct([
    (32767, @thrift.I32(-1)),
    (
      16,
      @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.StructKind), [
        (
          @thrift.I32(-2147483648),
          @thrift.Struct([
            (32767, @thrift.Bool(true)),
            (0, @thrift.Double(0.0)),
            (2, @thrift.I32(-20)),
          ]),
        ),
        (
          @thrift.I32(0),
          @thrift.Struct([
            (2, @thrift.Double(1.0e+30)),
            (
              14,
              @thrift.Struct([
                (-32768, @thrift.I64(76L)),
                (1, @thrift.Bool(true)),
              ]),
            ),
            (0, @thrift.List(@thrift.BoolKind, [])),
            (31, @thrift.Byte(-42)),
          ]),
        ),
        (
          @thrift.I32(-1),
          @thrift.Struct([
            (
              1,
              @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
                (@thrift.I64(9223372036854775807L), @thrift.I16(11)),
              ]),
            ),
            (2, @thrift.I32(-2147483648)),
            (14, @thrift.Byte(1)),
            (
              127,
              @thrift.List(@thrift.BoolKind, [
                @thrift.Bool(false),
                @thrift.Bool(false),
              ]),
            ),
          ]),
        ),
      ]),
    ),
    (-1, @thrift.Struct([(1, @thrift.I64(-9223372036854775808L))])),
    (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
  ])
  let wire = b"\x08\x7f\xff\xff\xff\xff\xff\x0d\x00\x10\x08\x0c\x00\x00\x00\x03\x80\x00\x00\x00\x02\x7f\xff\x01\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x08\x00\x02\xff\xff\xff\xec\x00\x00\x00\x00\x00\x04\x00\x02\x46\x29\x3e\x59\x39\xa0\x8c\xea\x0c\x00\x0e\x0a\x80\x00\x00\x00\x00\x00\x00\x00\x00\x4c\x02\x00\x01\x01\x00\x0f\x00\x00\x02\x00\x00\x00\x00\x03\x00\x1f\xd6\x00\xff\xff\xff\xff\x0d\x00\x01\x0a\x06\x00\x00\x00\x01\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x0b\x08\x00\x02\x80\x00\x00\x00\x03\x00\x0e\x01\x0f\x00\x7f\x02\x00\x00\x00\x02\x00\x00\x00\x0c\xff\xff\x0a\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x00\x0f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.I32(-1)),
      (
        16,
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.StructKind), [
          (
            @thrift.I32(-2147483648),
            @thrift.Struct([
              (32767, @thrift.Bool(true)),
              (0, @thrift.Double(0.0)),
              (2, @thrift.I32(-20)),
            ]),
          ),
          (
            @thrift.I32(0),
            @thrift.Struct([
              (2, @thrift.Double(1.0e+30)),
              (
                14,
                @thrift.Struct([
                  (-32768, @thrift.I64(76L)),
                  (1, @thrift.Bool(true)),
                ]),
              ),
              (0, @thrift.List(@thrift.BoolKind, [])),
              (31, @thrift.Byte(-42)),
            ]),
          ),
          (
            @thrift.I32(-1),
            @thrift.Struct([
              (
                1,
                @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
                  (@thrift.I64(9223372036854775807L), @thrift.I16(11)),
                ]),
              ),
              (2, @thrift.I32(-2147483648)),
              (14, @thrift.Byte(1)),
              (
                127,
                @thrift.List(@thrift.BoolKind, [
                  @thrift.Bool(false),
                  @thrift.Bool(false),
                ]),
              ),
            ]),
          ),
        ]),
      ),
      (-1, @thrift.Struct([(1, @thrift.I64(-9223372036854775808L))])),
      (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\xa8\x08\x7f\xff\xff\xff\xff\xff\x0d\x00\x10\x08\x0c\x00\x00\x00\x03\x80\x00\x00\x00\x02\x7f\xff\x01\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x08\x00\x02\xff\xff\xff\xec\x00\x00\x00\x00\x00\x04\x00\x02\x46\x29\x3e\x59\x39\xa0\x8c\xea\x0c\x00\x0e\x0a\x80\x00\x00\x00\x00\x00\x00\x00\x00\x4c\x02\x00\x01\x01\x00\x0f\x00\x00\x02\x00\x00\x00\x00\x03\x00\x1f\xd6\x00\xff\xff\xff\xff\x0d\x00\x01\x0a\x06\x00\x00\x00\x01\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x0b\x08\x00\x02\x80\x00\x00\x00\x03\x00\x0e\x01\x0f\x00\x7f\x02\x00\x00\x00\x02\x00\x00\x00\x0c\xff\xff\x0a\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x00\x0f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 55" {
  let original = @thrift.Struct([
    (32767, @thrift.I32(-1)),
    (
      16,
      @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.StructKind), [
        (
          @thrift.I32(-2147483648),
          @thrift.Struct([
            (32767, @thrift.Bool(true)),
            (0, @thrift.Double(0.0)),
            (2, @thrift.I32(-20)),
          ]),
        ),
        (
          @thrift.I32(0),
          @thrift.Struct([
            (2, @thrift.Double(1.0e+30)),
            (
              14,
              @thrift.Struct([
                (-32768, @thrift.I64(76L)),
                (1, @thrift.Bool(true)),
              ]),
            ),
            (0, @thrift.List(@thrift.BoolKind, [])),
            (31, @thrift.Byte(-42)),
          ]),
        ),
        (
          @thrift.I32(-1),
          @thrift.Struct([
            (
              1,
              @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
                (@thrift.I64(9223372036854775807L), @thrift.I16(11)),
              ]),
            ),
            (2, @thrift.I32(-2147483648)),
            (14, @thrift.Byte(1)),
            (
              127,
              @thrift.List(@thrift.BoolKind, [
                @thrift.Bool(false),
                @thrift.Bool(false),
              ]),
            ),
          ]),
        ),
      ]),
    ),
    (-1, @thrift.Struct([(1, @thrift.I64(-9223372036854775808L))])),
    (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
  ])
  let wire = b"\x05\xfe\xff\x03\x01\x0b\x20\x03\x5c\xff\xff\xff\xff\x0f\x01\xfe\xff\x03\x07\x00\x00\x00\x00\x00\x00\x00\x00\x00\x25\x27\x00\x00\x27\xea\x8c\xa0\x39\x59\x3e\x29\x46\xcc\x06\xff\xff\x03\x98\x01\x01\x02\x00\x09\x00\x01\x03\x3e\xd6\x00\x01\x1b\x01\x64\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x16\x15\xff\xff\xff\xff\x0f\xc3\x01\x09\xfe\x01\x21\x02\x02\x00\x0c\x01\x16\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x08\x1e\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.I32(-1)),
      (
        16,
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.StructKind), [
          (
            @thrift.I32(-2147483648),
            @thrift.Struct([
              (32767, @thrift.Bool(true)),
              (0, @thrift.Double(0.0)),
              (2, @thrift.I32(-20)),
            ]),
          ),
          (
            @thrift.I32(0),
            @thrift.Struct([
              (2, @thrift.Double(1.0e+30)),
              (
                14,
                @thrift.Struct([
                  (-32768, @thrift.I64(76L)),
                  (1, @thrift.Bool(true)),
                ]),
              ),
              (0, @thrift.List(@thrift.BoolKind, [])),
              (31, @thrift.Byte(-42)),
            ]),
          ),
          (
            @thrift.I32(-1),
            @thrift.Struct([
              (
                1,
                @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I16Kind), [
                  (@thrift.I64(9223372036854775807L), @thrift.I16(11)),
                ]),
              ),
              (2, @thrift.I32(-2147483648)),
              (14, @thrift.Byte(1)),
              (
                127,
                @thrift.List(@thrift.BoolKind, [
                  @thrift.Bool(false),
                  @thrift.Bool(false),
                ]),
              ),
            ]),
          ),
        ]),
      ),
      (-1, @thrift.Struct([(1, @thrift.I64(-9223372036854775808L))])),
      (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x74\x05\xfe\xff\x03\x01\x0b\x20\x03\x5c\xff\xff\xff\xff\x0f\x01\xfe\xff\x03\x07\x00\x00\x00\x00\x00\x00\x00\x00\x00\x25\x27\x00\x00\x27\xea\x8c\xa0\x39\x59\x3e\x29\x46\xcc\x06\xff\xff\x03\x98\x01\x01\x02\x00\x09\x00\x01\x03\x3e\xd6\x00\x01\x1b\x01\x64\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x16\x15\xff\xff\xff\xff\x0f\xc3\x01\x09\xfe\x01\x21\x02\x02\x00\x0c\x01\x16\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x08\x1e\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 56" {
  let original = @thrift.Struct([
    (-32768, @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)])),
  ])
  let wire = b"\x0f\x80\x00\x02\x00\x00\x00\x01\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (-32768, @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0a\x0f\x80\x00\x02\x00\x00\x00\x01\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 56" {
  let original = @thrift.Struct([
    (-32768, @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)])),
  ])
  let wire = b"\x09\xff\xff\x03\x11\x02\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (-32768, @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x07\x09\xff\xff\x03\x11\x02\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 57" {
  let original = @thrift.Struct([
    (
      31,
      @thrift.List(@thrift.ByteKind, [
        @thrift.Byte(0),
        @thrift.Byte(-128),
        @thrift.Byte(-1),
        @thrift.Byte(0),
        @thrift.Byte(1),
        @thrift.Byte(-128),
        @thrift.Byte(0),
        @thrift.Byte(95),
        @thrift.Byte(127),
        @thrift.Byte(0),
        @thrift.Byte(-73),
        @thrift.Byte(1),
        @thrift.Byte(38),
        @thrift.Byte(-1),
      ]),
    ),
    (-1, @thrift.I16(32767)),
    (15, @thrift.I16(-32768)),
    (0, @thrift.SetValue(@thrift.MapKind, [])),
  ])
  let wire = b"\x0f\x00\x1f\x03\x00\x00\x00\x0e\x00\x80\xff\x00\x01\x80\x00\x5f\x7f\x00\xb7\x01\x26\xff\x06\xff\xff\x7f\xff\x06\x00\x0f\x80\x00\x0e\x00\x00\x0d\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        31,
        @thrift.List(@thrift.ByteKind, [
          @thrift.Byte(0),
          @thrift.Byte(-128),
          @thrift.Byte(-1),
          @thrift.Byte(0),
          @thrift.Byte(1),
          @thrift.Byte(-128),
          @thrift.Byte(0),
          @thrift.Byte(95),
          @thrift.Byte(127),
          @thrift.Byte(0),
          @thrift.Byte(-73),
          @thrift.Byte(1),
          @thrift.Byte(38),
          @thrift.Byte(-1),
        ]),
      ),
      (-1, @thrift.I16(32767)),
      (15, @thrift.I16(-32768)),
      (0, @thrift.SetValue(@thrift.MapKind, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x29\x0f\x00\x1f\x03\x00\x00\x00\x0e\x00\x80\xff\x00\x01\x80\x00\x5f\x7f\x00\xb7\x01\x26\xff\x06\xff\xff\x7f\xff\x06\x00\x0f\x80\x00\x0e\x00\x00\x0d\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 57" {
  let original = @thrift.Struct([
    (
      31,
      @thrift.List(@thrift.ByteKind, [
        @thrift.Byte(0),
        @thrift.Byte(-128),
        @thrift.Byte(-1),
        @thrift.Byte(0),
        @thrift.Byte(1),
        @thrift.Byte(-128),
        @thrift.Byte(0),
        @thrift.Byte(95),
        @thrift.Byte(127),
        @thrift.Byte(0),
        @thrift.Byte(-73),
        @thrift.Byte(1),
        @thrift.Byte(38),
        @thrift.Byte(-1),
      ]),
    ),
    (-1, @thrift.I16(32767)),
    (15, @thrift.I16(-32768)),
    (0, @thrift.SetValue(@thrift.MapKind, [])),
  ])
  let wire = b"\x09\x3e\xe3\x00\x80\xff\x00\x01\x80\x00\x5f\x7f\x00\xb7\x01\x26\xff\x04\x01\xfe\xff\x03\x04\x1e\xff\xff\x03\x0a\x00\x0b\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        31,
        @thrift.List(@thrift.ByteKind, [
          @thrift.Byte(0),
          @thrift.Byte(-128),
          @thrift.Byte(-1),
          @thrift.Byte(0),
          @thrift.Byte(1),
          @thrift.Byte(-128),
          @thrift.Byte(0),
          @thrift.Byte(95),
          @thrift.Byte(127),
          @thrift.Byte(0),
          @thrift.Byte(-73),
          @thrift.Byte(1),
          @thrift.Byte(38),
          @thrift.Byte(-1),
        ]),
      ),
      (-1, @thrift.I16(32767)),
      (15, @thrift.I16(-32768)),
      (0, @thrift.SetValue(@thrift.MapKind, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1f\x09\x3e\xe3\x00\x80\xff\x00\x01\x80\x00\x5f\x7f\x00\xb7\x01\x26\xff\x04\x01\xfe\xff\x03\x04\x1e\xff\xff\x03\x0a\x00\x0b\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 58" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 58" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 59" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 59" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 60" {
  let original = @thrift.Struct([
    (-32768, @thrift.Bool(true)),
    (
      16,
      @thrift.Struct([
        (15, @thrift.Bool(true)),
        (32767, @thrift.Binary(b"\x00\xff\xfe")),
        (127, @thrift.Double(-0.0)),
      ]),
    ),
    (31, @thrift.Byte(-128)),
    (1, @thrift.Bool(true)),
  ])
  let wire = b"\x02\x80\x00\x01\x0c\x00\x10\x02\x00\x0f\x01\x0b\x7f\xff\x00\x00\x00\x03\x00\xff\xfe\x04\x00\x7f\x80\x00\x00\x00\x00\x00\x00\x00\x00\x03\x00\x1f\x80\x02\x00\x01\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (-32768, @thrift.Bool(true)),
      (
        16,
        @thrift.Struct([
          (15, @thrift.Bool(true)),
          (32767, @thrift.Binary(b"\x00\xff\xfe")),
          (127, @thrift.Double(-0.0)),
        ]),
      ),
      (31, @thrift.Byte(-128)),
      (1, @thrift.Bool(true)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x2a\x02\x80\x00\x01\x0c\x00\x10\x02\x00\x0f\x01\x0b\x7f\xff\x00\x00\x00\x03\x00\xff\xfe\x04\x00\x7f\x80\x00\x00\x00\x00\x00\x00\x00\x00\x03\x00\x1f\x80\x02\x00\x01\x01\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 60" {
  let original = @thrift.Struct([
    (-32768, @thrift.Bool(true)),
    (
      16,
      @thrift.Struct([
        (15, @thrift.Bool(true)),
        (32767, @thrift.Binary(b"\x00\xff\xfe")),
        (127, @thrift.Double(-0.0)),
      ]),
    ),
    (31, @thrift.Byte(-128)),
    (1, @thrift.Bool(true)),
  ])
  let wire = b"\x01\xff\xff\x03\x0c\x20\xf1\x08\xfe\xff\x03\x03\x00\xff\xfe\x07\xfe\x01\x00\x00\x00\x00\x00\x00\x00\x80\x00\xf3\x80\x01\x02\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (-32768, @thrift.Bool(true)),
      (
        16,
        @thrift.Struct([
          (15, @thrift.Bool(true)),
          (32767, @thrift.Binary(b"\x00\xff\xfe")),
          (127, @thrift.Double(-0.0)),
        ]),
      ),
      (31, @thrift.Byte(-128)),
      (1, @thrift.Bool(true)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x20\x01\xff\xff\x03\x0c\x20\xf1\x08\xfe\xff\x03\x03\x00\xff\xfe\x07\xfe\x01\x00\x00\x00\x00\x00\x00\x00\x80\x00\xf3\x80\x01\x02\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 61" {
  let original = @thrift.Struct([
    (
      127,
      @thrift.List(@thrift.ByteKind, [
        @thrift.Byte(0),
        @thrift.Byte(1),
        @thrift.Byte(127),
        @thrift.Byte(-128),
        @thrift.Byte(0),
        @thrift.Byte(-1),
        @thrift.Byte(1),
        @thrift.Byte(127),
        @thrift.Byte(-128),
        @thrift.Byte(1),
        @thrift.Byte(-128),
        @thrift.Byte(127),
        @thrift.Byte(127),
        @thrift.Byte(0),
      ]),
    ),
    (14, @thrift.I16(32767)),
    (0, @thrift.Double(-0.0)),
  ])
  let wire = b"\x0f\x00\x7f\x03\x00\x00\x00\x0e\x00\x01\x7f\x80\x00\xff\x01\x7f\x80\x01\x80\x7f\x7f\x00\x06\x00\x0e\x7f\xff\x04\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        127,
        @thrift.List(@thrift.ByteKind, [
          @thrift.Byte(0),
          @thrift.Byte(1),
          @thrift.Byte(127),
          @thrift.Byte(-128),
          @thrift.Byte(0),
          @thrift.Byte(-1),
          @thrift.Byte(1),
          @thrift.Byte(127),
          @thrift.Byte(-128),
          @thrift.Byte(1),
          @thrift.Byte(-128),
          @thrift.Byte(127),
          @thrift.Byte(127),
          @thrift.Byte(0),
        ]),
      ),
      (14, @thrift.I16(32767)),
      (0, @thrift.Double(-0.0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x27\x0f\x00\x7f\x03\x00\x00\x00\x0e\x00\x01\x7f\x80\x00\xff\x01\x7f\x80\x01\x80\x7f\x7f\x00\x06\x00\x0e\x7f\xff\x04\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 61" {
  let original = @thrift.Struct([
    (
      127,
      @thrift.List(@thrift.ByteKind, [
        @thrift.Byte(0),
        @thrift.Byte(1),
        @thrift.Byte(127),
        @thrift.Byte(-128),
        @thrift.Byte(0),
        @thrift.Byte(-1),
        @thrift.Byte(1),
        @thrift.Byte(127),
        @thrift.Byte(-128),
        @thrift.Byte(1),
        @thrift.Byte(-128),
        @thrift.Byte(127),
        @thrift.Byte(127),
        @thrift.Byte(0),
      ]),
    ),
    (14, @thrift.I16(32767)),
    (0, @thrift.Double(-0.0)),
  ])
  let wire = b"\x09\xfe\x01\xe3\x00\x01\x7f\x80\x00\xff\x01\x7f\x80\x01\x80\x7f\x7f\x00\x04\x1c\xfe\xff\x03\x07\x00\x00\x00\x00\x00\x00\x00\x00\x80\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        127,
        @thrift.List(@thrift.ByteKind, [
          @thrift.Byte(0),
          @thrift.Byte(1),
          @thrift.Byte(127),
          @thrift.Byte(-128),
          @thrift.Byte(0),
          @thrift.Byte(-1),
          @thrift.Byte(1),
          @thrift.Byte(127),
          @thrift.Byte(-128),
          @thrift.Byte(1),
          @thrift.Byte(-128),
          @thrift.Byte(127),
          @thrift.Byte(127),
          @thrift.Byte(0),
        ]),
      ),
      (14, @thrift.I16(32767)),
      (0, @thrift.Double(-0.0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x22\x09\xfe\x01\xe3\x00\x01\x7f\x80\x00\xff\x01\x7f\x80\x01\x80\x7f\x7f\x00\x04\x1c\xfe\xff\x03\x07\x00\x00\x00\x00\x00\x00\x00\x00\x80\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 62" {
  let original = @thrift.Struct([(16, @thrift.Binary(b"\x00\xff\xfe"))])
  let wire = b"\x0b\x00\x10\x00\x00\x00\x03\x00\xff\xfe\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(16, @thrift.Binary(b"\x00\xff\xfe"))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0b\x0b\x00\x10\x00\x00\x00\x03\x00\xff\xfe\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 62" {
  let original = @thrift.Struct([(16, @thrift.Binary(b"\x00\xff\xfe"))])
  let wire = b"\x08\x20\x03\x00\xff\xfe\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(16, @thrift.Binary(b"\x00\xff\xfe"))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x07\x08\x20\x03\x00\xff\xfe\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 63" {
  let original = @thrift.Struct([
    (
      1,
      @thrift.Binary(
        b"\x32\x81\x79\x1f\xf7\x16\x83\x88\x31\xa1\x05\x01\xaf\x02\x55\x67\x5a",
      ),
    ),
    (127, @thrift.List(@thrift.SetKind, [])),
    (32767, @thrift.Byte(0)),
    (
      31,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
        (
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.SetValue(@thrift.SetKind, [
            @thrift.SetValue(@thrift.BinaryKind, []),
            @thrift.SetValue(@thrift.DoubleKind, []),
          ]),
        ),
        (
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.SetValue(@thrift.I32Kind, [
            @thrift.I32(2147483647),
            @thrift.I32(-1),
          ]),
        ),
      ]),
    ),
  ])
  let wire = b"\x0b\x00\x01\x00\x00\x00\x11\x32\x81\x79\x1f\xf7\x16\x83\x88\x31\xa1\x05\x01\xaf\x02\x55\x67\x5a\x0f\x00\x7f\x0e\x00\x00\x00\x00\x03\x7f\xff\x00\x0d\x00\x1f\x0b\x0e\x00\x00\x00\x02\x00\x00\x00\x03\x00\xff\xfe\x0e\x00\x00\x00\x02\x0b\x00\x00\x00\x00\x04\x00\x00\x00\x00\x00\x00\x00\x03\x00\xff\xfe\x08\x00\x00\x00\x02\x7f\xff\xff\xff\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        1,
        @thrift.Binary(
          b"\x32\x81\x79\x1f\xf7\x16\x83\x88\x31\xa1\x05\x01\xaf\x02\x55\x67\x5a",
        ),
      ),
      (127, @thrift.List(@thrift.SetKind, [])),
      (32767, @thrift.Byte(0)),
      (
        31,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
          (
            @thrift.Binary(b"\x00\xff\xfe"),
            @thrift.SetValue(@thrift.SetKind, [
              @thrift.SetValue(@thrift.BinaryKind, []),
              @thrift.SetValue(@thrift.DoubleKind, []),
            ]),
          ),
          (
            @thrift.Binary(b"\x00\xff\xfe"),
            @thrift.SetValue(@thrift.I32Kind, [
              @thrift.I32(2147483647),
              @thrift.I32(-1),
            ]),
          ),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x58\x0b\x00\x01\x00\x00\x00\x11\x32\x81\x79\x1f\xf7\x16\x83\x88\x31\xa1\x05\x01\xaf\x02\x55\x67\x5a\x0f\x00\x7f\x0e\x00\x00\x00\x00\x03\x7f\xff\x00\x0d\x00\x1f\x0b\x0e\x00\x00\x00\x02\x00\x00\x00\x03\x00\xff\xfe\x0e\x00\x00\x00\x02\x0b\x00\x00\x00\x00\x04\x00\x00\x00\x00\x00\x00\x00\x03\x00\xff\xfe\x08\x00\x00\x00\x02\x7f\xff\xff\xff\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 63" {
  let original = @thrift.Struct([
    (
      1,
      @thrift.Binary(
        b"\x32\x81\x79\x1f\xf7\x16\x83\x88\x31\xa1\x05\x01\xaf\x02\x55\x67\x5a",
      ),
    ),
    (127, @thrift.List(@thrift.SetKind, [])),
    (32767, @thrift.Byte(0)),
    (
      31,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
        (
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.SetValue(@thrift.SetKind, [
            @thrift.SetValue(@thrift.BinaryKind, []),
            @thrift.SetValue(@thrift.DoubleKind, []),
          ]),
        ),
        (
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.SetValue(@thrift.I32Kind, [
            @thrift.I32(2147483647),
            @thrift.I32(-1),
          ]),
        ),
      ]),
    ),
  ])
  let wire = b"\x18\x11\x32\x81\x79\x1f\xf7\x16\x83\x88\x31\xa1\x05\x01\xaf\x02\x55\x67\x5a\x09\xfe\x01\x0a\x03\xfe\xff\x03\x00\x0b\x3e\x02\x8a\x03\x00\xff\xfe\x2a\x08\x07\x03\x00\xff\xfe\x25\xfe\xff\xff\xff\x0f\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        1,
        @thrift.Binary(
          b"\x32\x81\x79\x1f\xf7\x16\x83\x88\x31\xa1\x05\x01\xaf\x02\x55\x67\x5a",
        ),
      ),
      (127, @thrift.List(@thrift.SetKind, [])),
      (32767, @thrift.Byte(0)),
      (
        31,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [
          (
            @thrift.Binary(b"\x00\xff\xfe"),
            @thrift.SetValue(@thrift.SetKind, [
              @thrift.SetValue(@thrift.BinaryKind, []),
              @thrift.SetValue(@thrift.DoubleKind, []),
            ]),
          ),
          (
            @thrift.Binary(b"\x00\xff\xfe"),
            @thrift.SetValue(@thrift.I32Kind, [
              @thrift.I32(2147483647),
              @thrift.I32(-1),
            ]),
          ),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x33\x18\x11\x32\x81\x79\x1f\xf7\x16\x83\x88\x31\xa1\x05\x01\xaf\x02\x55\x67\x5a\x09\xfe\x01\x0a\x03\xfe\xff\x03\x00\x0b\x3e\x02\x8a\x03\x00\xff\xfe\x2a\x08\x07\x03\x00\xff\xfe\x25\xfe\xff\xff\xff\x0f\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 64" {
  let original = @thrift.Struct([
    (
      0,
      @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.StructKind), [
        (@thrift.I64(0L), @thrift.Struct([])),
      ]),
    ),
    (
      16,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b""), @thrift.I32(18)),
      ]),
    ),
    (-32768, @thrift.SetValue(@thrift.MapKind, [])),
    (
      14,
      @thrift.SetValue(@thrift.MapKind, [
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), [
          (@thrift.I16(32767), @thrift.Struct([(2, @thrift.Bool(false))])),
          (
            @thrift.I16(-32768),
            @thrift.Struct([
              (14, @thrift.I16(0)),
              (
                2,
                @thrift.Binary(
                  b"\xff\x04\x09\x7f\x49\x82\xaf\xa9\x52\xeb\x38\x79\xdc\x59\x27\x6e\x86",
                ),
              ),
              (0, @thrift.I32(-88)),
            ]),
          ),
          (
            @thrift.I16(32767),
            @thrift.Struct([
              (14, @thrift.Bool(false)),
              (15, @thrift.Double(1.5)),
              (16, @thrift.Binary(b"\x00\xff\xfe")),
            ]),
          ),
        ]),
      ]),
    ),
  ])
  let wire = b"\x0d\x00\x00\x0a\x0c\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0d\x00\x10\x0b\x08\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x12\x0e\x80\x00\x0d\x00\x00\x00\x00\x0e\x00\x0e\x0d\x00\x00\x00\x01\x06\x0c\x00\x00\x00\x03\x7f\xff\x02\x00\x02\x00\x00\x80\x00\x06\x00\x0e\x00\x00\x0b\x00\x02\x00\x00\x00\x11\xff\x04\x09\x7f\x49\x82\xaf\xa9\x52\xeb\x38\x79\xdc\x59\x27\x6e\x86\x08\x00\x00\xff\xff\xff\xa8\x00\x7f\xff\x02\x00\x0e\x00\x04\x00\x0f\x3f\xf8\x00\x00\x00\x00\x00\x00\x0b\x00\x10\x00\x00\x00\x03\x00\xff\xfe\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        0,
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.StructKind), [
          (@thrift.I64(0L), @thrift.Struct([])),
        ]),
      ),
      (
        16,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b""), @thrift.I32(18)),
        ]),
      ),
      (-32768, @thrift.SetValue(@thrift.MapKind, [])),
      (
        14,
        @thrift.SetValue(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), [
            (@thrift.I16(32767), @thrift.Struct([(2, @thrift.Bool(false))])),
            (
              @thrift.I16(-32768),
              @thrift.Struct([
                (14, @thrift.I16(0)),
                (
                  2,
                  @thrift.Binary(
                    b"\xff\x04\x09\x7f\x49\x82\xaf\xa9\x52\xeb\x38\x79\xdc\x59\x27\x6e\x86",
                  ),
                ),
                (0, @thrift.I32(-88)),
              ]),
            ),
            (
              @thrift.I16(32767),
              @thrift.Struct([
                (14, @thrift.Bool(false)),
                (15, @thrift.Double(1.5)),
                (16, @thrift.Binary(b"\x00\xff\xfe")),
              ]),
            ),
          ]),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x84\x0d\x00\x00\x0a\x0c\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0d\x00\x10\x0b\x08\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x12\x0e\x80\x00\x0d\x00\x00\x00\x00\x0e\x00\x0e\x0d\x00\x00\x00\x01\x06\x0c\x00\x00\x00\x03\x7f\xff\x02\x00\x02\x00\x00\x80\x00\x06\x00\x0e\x00\x00\x0b\x00\x02\x00\x00\x00\x11\xff\x04\x09\x7f\x49\x82\xaf\xa9\x52\xeb\x38\x79\xdc\x59\x27\x6e\x86\x08\x00\x00\xff\xff\xff\xa8\x00\x7f\xff\x02\x00\x0e\x00\x04\x00\x0f\x3f\xf8\x00\x00\x00\x00\x00\x00\x0b\x00\x10\x00\x00\x00\x03\x00\xff\xfe\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 64" {
  let original = @thrift.Struct([
    (
      0,
      @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.StructKind), [
        (@thrift.I64(0L), @thrift.Struct([])),
      ]),
    ),
    (
      16,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b""), @thrift.I32(18)),
      ]),
    ),
    (-32768, @thrift.SetValue(@thrift.MapKind, [])),
    (
      14,
      @thrift.SetValue(@thrift.MapKind, [
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), [
          (@thrift.I16(32767), @thrift.Struct([(2, @thrift.Bool(false))])),
          (
            @thrift.I16(-32768),
            @thrift.Struct([
              (14, @thrift.I16(0)),
              (
                2,
                @thrift.Binary(
                  b"\xff\x04\x09\x7f\x49\x82\xaf\xa9\x52\xeb\x38\x79\xdc\x59\x27\x6e\x86",
                ),
              ),
              (0, @thrift.I32(-88)),
            ]),
          ),
          (
            @thrift.I16(32767),
            @thrift.Struct([
              (14, @thrift.Bool(false)),
              (15, @thrift.Double(1.5)),
              (16, @thrift.Binary(b"\x00\xff\xfe")),
            ]),
          ),
        ]),
      ]),
    ),
  ])
  let wire = b"\x0b\x00\x01\x6c\x00\x00\x0b\x20\x01\x85\x00\x24\x0a\xff\xff\x03\x0b\x0a\x1c\x1b\x03\x4c\xfe\xff\x03\x22\x00\xff\xff\x03\xe4\x00\x08\x04\x11\xff\x04\x09\x7f\x49\x82\xaf\xa9\x52\xeb\x38\x79\xdc\x59\x27\x6e\x86\x05\x00\xaf\x01\x00\xfe\xff\x03\xe2\x17\x00\x00\x00\x00\x00\x00\xf8\x3f\x18\x03\x00\xff\xfe\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        0,
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.StructKind), [
          (@thrift.I64(0L), @thrift.Struct([])),
        ]),
      ),
      (
        16,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b""), @thrift.I32(18)),
        ]),
      ),
      (-32768, @thrift.SetValue(@thrift.MapKind, [])),
      (
        14,
        @thrift.SetValue(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), [
            (@thrift.I16(32767), @thrift.Struct([(2, @thrift.Bool(false))])),
            (
              @thrift.I16(-32768),
              @thrift.Struct([
                (14, @thrift.I16(0)),
                (
                  2,
                  @thrift.Binary(
                    b"\xff\x04\x09\x7f\x49\x82\xaf\xa9\x52\xeb\x38\x79\xdc\x59\x27\x6e\x86",
                  ),
                ),
                (0, @thrift.I32(-88)),
              ]),
            ),
            (
              @thrift.I16(32767),
              @thrift.Struct([
                (14, @thrift.Bool(false)),
                (15, @thrift.Double(1.5)),
                (16, @thrift.Binary(b"\x00\xff\xfe")),
              ]),
            ),
          ]),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x4d\x0b\x00\x01\x6c\x00\x00\x0b\x20\x01\x85\x00\x24\x0a\xff\xff\x03\x0b\x0a\x1c\x1b\x03\x4c\xfe\xff\x03\x22\x00\xff\xff\x03\xe4\x00\x08\x04\x11\xff\x04\x09\x7f\x49\x82\xaf\xa9\x52\xeb\x38\x79\xdc\x59\x27\x6e\x86\x05\x00\xaf\x01\x00\xfe\xff\x03\xe2\x17\x00\x00\x00\x00\x00\x00\xf8\x3f\x18\x03\x00\xff\xfe\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 65" {
  let original = @thrift.Struct([(127, @thrift.I64(-1L))])
  let wire = b"\x0a\x00\x7f\xff\xff\xff\xff\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(127, @thrift.I64(-1L))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0c\x0a\x00\x7f\xff\xff\xff\xff\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 65" {
  let original = @thrift.Struct([(127, @thrift.I64(-1L))])
  let wire = b"\x06\xfe\x01\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(127, @thrift.I64(-1L))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x05\x06\xfe\x01\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 66" {
  let original = @thrift.Struct([
    (-1, @thrift.Double(0.0)),
    (0, @thrift.Byte(0)),
  ])
  let wire = b"\x04\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\x03\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-1, @thrift.Double(0.0)), (0, @thrift.Byte(0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x10\x04\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\x03\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 66" {
  let original = @thrift.Struct([
    (-1, @thrift.Double(0.0)),
    (0, @thrift.Byte(0)),
  ])
  let wire = b"\x07\x01\x00\x00\x00\x00\x00\x00\x00\x00\x13\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-1, @thrift.Double(0.0)), (0, @thrift.Byte(0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0d\x07\x01\x00\x00\x00\x00\x00\x00\x00\x00\x13\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 67" {
  let original = @thrift.Struct([
    (-1, @thrift.Double(1.0e+30)),
    (15, @thrift.I32(0)),
  ])
  let wire = b"\x04\xff\xff\x46\x29\x3e\x59\x39\xa0\x8c\xea\x08\x00\x0f\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-1, @thrift.Double(1.0e+30)), (15, @thrift.I32(0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x13\x04\xff\xff\x46\x29\x3e\x59\x39\xa0\x8c\xea\x08\x00\x0f\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 67" {
  let original = @thrift.Struct([
    (-1, @thrift.Double(1.0e+30)),
    (15, @thrift.I32(0)),
  ])
  let wire = b"\x07\x01\xea\x8c\xa0\x39\x59\x3e\x29\x46\x05\x1e\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-1, @thrift.Double(1.0e+30)), (15, @thrift.I32(0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0e\x07\x01\xea\x8c\xa0\x39\x59\x3e\x29\x46\x05\x1e\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 68" {
  let original = @thrift.Struct([
    (14, @thrift.List(@thrift.BoolKind, [@thrift.Bool(true)])),
    (127, @thrift.I64(-9223372036854775808L)),
  ])
  let wire = b"\x0f\x00\x0e\x02\x00\x00\x00\x01\x01\x0a\x00\x7f\x80\x00\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.List(@thrift.BoolKind, [@thrift.Bool(true)])),
      (127, @thrift.I64(-9223372036854775808L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x15\x0f\x00\x0e\x02\x00\x00\x00\x01\x01\x0a\x00\x7f\x80\x00\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 68" {
  let original = @thrift.Struct([
    (14, @thrift.List(@thrift.BoolKind, [@thrift.Bool(true)])),
    (127, @thrift.I64(-9223372036854775808L)),
  ])
  let wire = b"\xe9\x11\x01\x06\xfe\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.List(@thrift.BoolKind, [@thrift.Bool(true)])),
      (127, @thrift.I64(-9223372036854775808L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x11\xe9\x11\x01\x06\xfe\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 69" {
  let original = @thrift.Struct([(2, @thrift.Byte(1))])
  let wire = b"\x03\x00\x02\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(2, @thrift.Byte(1))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x05\x03\x00\x02\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 69" {
  let original = @thrift.Struct([(2, @thrift.Byte(1))])
  let wire = b"\x23\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(2, @thrift.Byte(1))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x03\x23\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 70" {
  let original = @thrift.Struct([
    (16, @thrift.I16(32767)),
    (-32768, @thrift.Byte(-128)),
  ])
  let wire = b"\x06\x00\x10\x7f\xff\x03\x80\x00\x80\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(16, @thrift.I16(32767)), (-32768, @thrift.Byte(-128))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0a\x06\x00\x10\x7f\xff\x03\x80\x00\x80\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 70" {
  let original = @thrift.Struct([
    (16, @thrift.I16(32767)),
    (-32768, @thrift.Byte(-128)),
  ])
  let wire = b"\x04\x20\xfe\xff\x03\x03\xff\xff\x03\x80\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(16, @thrift.I16(32767)), (-32768, @thrift.Byte(-128))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0b\x04\x20\xfe\xff\x03\x03\xff\xff\x03\x80\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 71" {
  let original = @thrift.Struct([
    (
      31,
      @thrift.SetValue(@thrift.I16Kind, [
        @thrift.I16(-32768),
        @thrift.I16(-1),
        @thrift.I16(1),
        @thrift.I16(32767),
        @thrift.I16(32),
        @thrift.I16(0),
        @thrift.I16(32767),
        @thrift.I16(1),
        @thrift.I16(-32768),
        @thrift.I16(32767),
        @thrift.I16(-32768),
        @thrift.I16(-32768),
        @thrift.I16(-1),
        @thrift.I16(0),
        @thrift.I16(0),
      ]),
    ),
  ])
  let wire = b"\x0e\x00\x1f\x06\x00\x00\x00\x0f\x80\x00\xff\xff\x00\x01\x7f\xff\x00\x20\x00\x00\x7f\xff\x00\x01\x80\x00\x7f\xff\x80\x00\x80\x00\xff\xff\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        31,
        @thrift.SetValue(@thrift.I16Kind, [
          @thrift.I16(-32768),
          @thrift.I16(-1),
          @thrift.I16(1),
          @thrift.I16(32767),
          @thrift.I16(32),
          @thrift.I16(0),
          @thrift.I16(32767),
          @thrift.I16(1),
          @thrift.I16(-32768),
          @thrift.I16(32767),
          @thrift.I16(-32768),
          @thrift.I16(-32768),
          @thrift.I16(-1),
          @thrift.I16(0),
          @thrift.I16(0),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x27\x0e\x00\x1f\x06\x00\x00\x00\x0f\x80\x00\xff\xff\x00\x01\x7f\xff\x00\x20\x00\x00\x7f\xff\x00\x01\x80\x00\x7f\xff\x80\x00\x80\x00\xff\xff\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 71" {
  let original = @thrift.Struct([
    (
      31,
      @thrift.SetValue(@thrift.I16Kind, [
        @thrift.I16(-32768),
        @thrift.I16(-1),
        @thrift.I16(1),
        @thrift.I16(32767),
        @thrift.I16(32),
        @thrift.I16(0),
        @thrift.I16(32767),
        @thrift.I16(1),
        @thrift.I16(-32768),
        @thrift.I16(32767),
        @thrift.I16(-32768),
        @thrift.I16(-32768),
        @thrift.I16(-1),
        @thrift.I16(0),
        @thrift.I16(0),
      ]),
    ),
  ])
  let wire = b"\x0a\x3e\xf4\x0f\xff\xff\x03\x01\x02\xfe\xff\x03\x40\x00\xfe\xff\x03\x02\xff\xff\x03\xfe\xff\x03\xff\xff\x03\xff\xff\x03\x01\x00\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        31,
        @thrift.SetValue(@thrift.I16Kind, [
          @thrift.I16(-32768),
          @thrift.I16(-1),
          @thrift.I16(1),
          @thrift.I16(32767),
          @thrift.I16(32),
          @thrift.I16(0),
          @thrift.I16(32767),
          @thrift.I16(1),
          @thrift.I16(-32768),
          @thrift.I16(32767),
          @thrift.I16(-32768),
          @thrift.I16(-32768),
          @thrift.I16(-1),
          @thrift.I16(0),
          @thrift.I16(0),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x22\x0a\x3e\xf4\x0f\xff\xff\x03\x01\x02\xfe\xff\x03\x40\x00\xfe\xff\x03\x02\xff\xff\x03\xfe\xff\x03\xff\xff\x03\xff\xff\x03\x01\x00\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 72" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 72" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 73" {
  let original = @thrift.Struct([(-1, @thrift.I64(9223372036854775807L))])
  let wire = b"\x0a\xff\xff\x7f\xff\xff\xff\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-1, @thrift.I64(9223372036854775807L))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0c\x0a\xff\xff\x7f\xff\xff\xff\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 73" {
  let original = @thrift.Struct([(-1, @thrift.I64(9223372036854775807L))])
  let wire = b"\x06\x01\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-1, @thrift.I64(9223372036854775807L))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0d\x06\x01\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 74" {
  let original = @thrift.Struct([
    (15, @thrift.I64(9223372036854775807L)),
    (16, @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ByteKind), [])),
  ])
  let wire = b"\x0a\x00\x0f\x7f\xff\xff\xff\xff\xff\xff\xff\x0d\x00\x10\x08\x03\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.I64(9223372036854775807L)),
      (16, @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ByteKind), [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x15\x0a\x00\x0f\x7f\xff\xff\xff\xff\xff\xff\xff\x0d\x00\x10\x08\x03\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 74" {
  let original = @thrift.Struct([
    (15, @thrift.I64(9223372036854775807L)),
    (16, @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ByteKind), [])),
  ])
  let wire = b"\xf6\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x1b\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.I64(9223372036854775807L)),
      (16, @thrift.MapValue(None, None, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0e\xf6\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x1b\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 75" {
  let original = @thrift.Struct([
    (16, @thrift.I16(1)),
    (2, @thrift.I32(1)),
    (-32768, @thrift.I32(-2147483648)),
  ])
  let wire = b"\x06\x00\x10\x00\x01\x08\x00\x02\x00\x00\x00\x01\x08\x80\x00\x80\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.I16(1)),
      (2, @thrift.I32(1)),
      (-32768, @thrift.I32(-2147483648)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x14\x06\x00\x10\x00\x01\x08\x00\x02\x00\x00\x00\x01\x08\x80\x00\x80\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 75" {
  let original = @thrift.Struct([
    (16, @thrift.I16(1)),
    (2, @thrift.I32(1)),
    (-32768, @thrift.I32(-2147483648)),
  ])
  let wire = b"\x04\x20\x02\x05\x04\x02\x05\xff\xff\x03\xff\xff\xff\xff\x0f\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.I16(1)),
      (2, @thrift.I32(1)),
      (-32768, @thrift.I32(-2147483648)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x10\x04\x20\x02\x05\x04\x02\x05\xff\xff\x03\xff\xff\xff\xff\x0f\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 76" {
  let original = @thrift.Struct([
    (-32768, @thrift.Double(-0.0)),
    (-1, @thrift.I16(-32768)),
  ])
  let wire = b"\x04\x80\x00\x80\x00\x00\x00\x00\x00\x00\x00\x06\xff\xff\x80\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-32768, @thrift.Double(-0.0)), (-1, @thrift.I16(-32768))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x11\x04\x80\x00\x80\x00\x00\x00\x00\x00\x00\x00\x06\xff\xff\x80\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 76" {
  let original = @thrift.Struct([
    (-32768, @thrift.Double(-0.0)),
    (-1, @thrift.I16(-32768)),
  ])
  let wire = b"\x07\xff\xff\x03\x00\x00\x00\x00\x00\x00\x00\x80\x04\x01\xff\xff\x03\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-32768, @thrift.Double(-0.0)), (-1, @thrift.I16(-32768))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x12\x07\xff\xff\x03\x00\x00\x00\x00\x00\x00\x00\x80\x04\x01\xff\xff\x03\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 77" {
  let original = @thrift.Struct([
    (127, @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)])),
    (
      15,
      @thrift.Binary(
        b"\x27\x68\x98\xa8\xad\xb6\x71\x58\xc2\x5c\xcf\xf1\x52\x0e\xf8\xa2\x9d",
      ),
    ),
    (0, @thrift.Binary(b"\x00\xff\xfe")),
    (-32768, @thrift.Bool(true)),
  ])
  let wire = b"\x0e\x00\x7f\x02\x00\x00\x00\x01\x01\x0b\x00\x0f\x00\x00\x00\x11\x27\x68\x98\xa8\xad\xb6\x71\x58\xc2\x5c\xcf\xf1\x52\x0e\xf8\xa2\x9d\x0b\x00\x00\x00\x00\x00\x03\x00\xff\xfe\x02\x80\x00\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (127, @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)])),
      (
        15,
        @thrift.Binary(
          b"\x27\x68\x98\xa8\xad\xb6\x71\x58\xc2\x5c\xcf\xf1\x52\x0e\xf8\xa2\x9d",
        ),
      ),
      (0, @thrift.Binary(b"\x00\xff\xfe")),
      (-32768, @thrift.Bool(true)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x30\x0e\x00\x7f\x02\x00\x00\x00\x01\x01\x0b\x00\x0f\x00\x00\x00\x11\x27\x68\x98\xa8\xad\xb6\x71\x58\xc2\x5c\xcf\xf1\x52\x0e\xf8\xa2\x9d\x0b\x00\x00\x00\x00\x00\x03\x00\xff\xfe\x02\x80\x00\x01\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 77" {
  let original = @thrift.Struct([
    (127, @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)])),
    (
      15,
      @thrift.Binary(
        b"\x27\x68\x98\xa8\xad\xb6\x71\x58\xc2\x5c\xcf\xf1\x52\x0e\xf8\xa2\x9d",
      ),
    ),
    (0, @thrift.Binary(b"\x00\xff\xfe")),
    (-32768, @thrift.Bool(true)),
  ])
  let wire = b"\x0a\xfe\x01\x11\x01\x08\x1e\x11\x27\x68\x98\xa8\xad\xb6\x71\x58\xc2\x5c\xcf\xf1\x52\x0e\xf8\xa2\x9d\x08\x00\x03\x00\xff\xfe\x01\xff\xff\x03\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (127, @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(true)])),
      (
        15,
        @thrift.Binary(
          b"\x27\x68\x98\xa8\xad\xb6\x71\x58\xc2\x5c\xcf\xf1\x52\x0e\xf8\xa2\x9d",
        ),
      ),
      (0, @thrift.Binary(b"\x00\xff\xfe")),
      (-32768, @thrift.Bool(true)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x24\x0a\xfe\x01\x11\x01\x08\x1e\x11\x27\x68\x98\xa8\xad\xb6\x71\x58\xc2\x5c\xcf\xf1\x52\x0e\xf8\xa2\x9d\x08\x00\x03\x00\xff\xfe\x01\xff\xff\x03\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 78" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 78" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 79" {
  let original = @thrift.Struct([
    (
      32767,
      @thrift.List(@thrift.ByteKind, [
        @thrift.Byte(1),
        @thrift.Byte(-128),
        @thrift.Byte(0),
        @thrift.Byte(0),
        @thrift.Byte(-128),
        @thrift.Byte(127),
        @thrift.Byte(-1),
        @thrift.Byte(-1),
        @thrift.Byte(-128),
        @thrift.Byte(-128),
        @thrift.Byte(-68),
        @thrift.Byte(-1),
        @thrift.Byte(-24),
        @thrift.Byte(0),
        @thrift.Byte(127),
      ]),
    ),
    (1, @thrift.Binary(b"\x00\xff\xfe")),
    (-1, @thrift.List(@thrift.I16Kind, [@thrift.I16(-32768)])),
  ])
  let wire = b"\x0f\x7f\xff\x03\x00\x00\x00\x0f\x01\x80\x00\x00\x80\x7f\xff\xff\x80\x80\xbc\xff\xe8\x00\x7f\x0b\x00\x01\x00\x00\x00\x03\x00\xff\xfe\x0f\xff\xff\x06\x00\x00\x00\x01\x80\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        32767,
        @thrift.List(@thrift.ByteKind, [
          @thrift.Byte(1),
          @thrift.Byte(-128),
          @thrift.Byte(0),
          @thrift.Byte(0),
          @thrift.Byte(-128),
          @thrift.Byte(127),
          @thrift.Byte(-1),
          @thrift.Byte(-1),
          @thrift.Byte(-128),
          @thrift.Byte(-128),
          @thrift.Byte(-68),
          @thrift.Byte(-1),
          @thrift.Byte(-24),
          @thrift.Byte(0),
          @thrift.Byte(127),
        ]),
      ),
      (1, @thrift.Binary(b"\x00\xff\xfe")),
      (-1, @thrift.List(@thrift.I16Kind, [@thrift.I16(-32768)])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x2c\x0f\x7f\xff\x03\x00\x00\x00\x0f\x01\x80\x00\x00\x80\x7f\xff\xff\x80\x80\xbc\xff\xe8\x00\x7f\x0b\x00\x01\x00\x00\x00\x03\x00\xff\xfe\x0f\xff\xff\x06\x00\x00\x00\x01\x80\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 79" {
  let original = @thrift.Struct([
    (
      32767,
      @thrift.List(@thrift.ByteKind, [
        @thrift.Byte(1),
        @thrift.Byte(-128),
        @thrift.Byte(0),
        @thrift.Byte(0),
        @thrift.Byte(-128),
        @thrift.Byte(127),
        @thrift.Byte(-1),
        @thrift.Byte(-1),
        @thrift.Byte(-128),
        @thrift.Byte(-128),
        @thrift.Byte(-68),
        @thrift.Byte(-1),
        @thrift.Byte(-24),
        @thrift.Byte(0),
        @thrift.Byte(127),
      ]),
    ),
    (1, @thrift.Binary(b"\x00\xff\xfe")),
    (-1, @thrift.List(@thrift.I16Kind, [@thrift.I16(-32768)])),
  ])
  let wire = b"\x09\xfe\xff\x03\xf3\x0f\x01\x80\x00\x00\x80\x7f\xff\xff\x80\x80\xbc\xff\xe8\x00\x7f\x08\x02\x03\x00\xff\xfe\x09\x01\x14\xff\xff\x03\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        32767,
        @thrift.List(@thrift.ByteKind, [
          @thrift.Byte(1),
          @thrift.Byte(-128),
          @thrift.Byte(0),
          @thrift.Byte(0),
          @thrift.Byte(-128),
          @thrift.Byte(127),
          @thrift.Byte(-1),
          @thrift.Byte(-1),
          @thrift.Byte(-128),
          @thrift.Byte(-128),
          @thrift.Byte(-68),
          @thrift.Byte(-1),
          @thrift.Byte(-24),
          @thrift.Byte(0),
          @thrift.Byte(127),
        ]),
      ),
      (1, @thrift.Binary(b"\x00\xff\xfe")),
      (-1, @thrift.List(@thrift.I16Kind, [@thrift.I16(-32768)])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x22\x09\xfe\xff\x03\xf3\x0f\x01\x80\x00\x00\x80\x7f\xff\xff\x80\x80\xbc\xff\xe8\x00\x7f\x08\x02\x03\x00\xff\xfe\x09\x01\x14\xff\xff\x03\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 80" {
  let original = @thrift.Struct([
    (1, @thrift.I64(9223372036854775807L)),
    (
      14,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
        (
          @thrift.Byte(-64),
          @thrift.Struct([
            (14, @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(-32768)])),
          ]),
        ),
        (
          @thrift.Byte(-1),
          @thrift.Struct([
            (16, @thrift.Bool(false)),
            (0, @thrift.I32(-2147483648)),
            (14, @thrift.I64(9223372036854775807L)),
          ]),
        ),
        (
          @thrift.Byte(-1),
          @thrift.Struct([
            (14, @thrift.Byte(-1)),
            (
              32767,
              @thrift.Struct([
                (15, @thrift.Double(-12.125)),
                (32767, @thrift.Byte(-1)),
                (127, @thrift.Bool(true)),
              ]),
            ),
          ]),
        ),
      ]),
    ),
  ])
  let wire = b"\x0a\x00\x01\x7f\xff\xff\xff\xff\xff\xff\xff\x0d\x00\x0e\x03\x0c\x00\x00\x00\x03\xc0\x0e\x00\x0e\x06\x00\x00\x00\x01\x80\x00\x00\xff\x02\x00\x10\x00\x08\x00\x00\x80\x00\x00\x00\x0a\x00\x0e\x7f\xff\xff\xff\xff\xff\xff\xff\x00\xff\x03\x00\x0e\xff\x0c\x7f\xff\x04\x00\x0f\xc0\x28\x40\x00\x00\x00\x00\x00\x03\x7f\xff\xff\x02\x00\x7f\x01\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (1, @thrift.I64(9223372036854775807L)),
      (
        14,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
          (
            @thrift.Byte(-64),
            @thrift.Struct([
              (14, @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(-32768)])),
            ]),
          ),
          (
            @thrift.Byte(-1),
            @thrift.Struct([
              (16, @thrift.Bool(false)),
              (0, @thrift.I32(-2147483648)),
              (14, @thrift.I64(9223372036854775807L)),
            ]),
          ),
          (
            @thrift.Byte(-1),
            @thrift.Struct([
              (14, @thrift.Byte(-1)),
              (
                32767,
                @thrift.Struct([
                  (15, @thrift.Double(-12.125)),
                  (32767, @thrift.Byte(-1)),
                  (127, @thrift.Bool(true)),
                ]),
              ),
            ]),
          ),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x56\x0a\x00\x01\x7f\xff\xff\xff\xff\xff\xff\xff\x0d\x00\x0e\x03\x0c\x00\x00\x00\x03\xc0\x0e\x00\x0e\x06\x00\x00\x00\x01\x80\x00\x00\xff\x02\x00\x10\x00\x08\x00\x00\x80\x00\x00\x00\x0a\x00\x0e\x7f\xff\xff\xff\xff\xff\xff\xff\x00\xff\x03\x00\x0e\xff\x0c\x7f\xff\x04\x00\x0f\xc0\x28\x40\x00\x00\x00\x00\x00\x03\x7f\xff\xff\x02\x00\x7f\x01\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 80" {
  let original = @thrift.Struct([
    (1, @thrift.I64(9223372036854775807L)),
    (
      14,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
        (
          @thrift.Byte(-64),
          @thrift.Struct([
            (14, @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(-32768)])),
          ]),
        ),
        (
          @thrift.Byte(-1),
          @thrift.Struct([
            (16, @thrift.Bool(false)),
            (0, @thrift.I32(-2147483648)),
            (14, @thrift.I64(9223372036854775807L)),
          ]),
        ),
        (
          @thrift.Byte(-1),
          @thrift.Struct([
            (14, @thrift.Byte(-1)),
            (
              32767,
              @thrift.Struct([
                (15, @thrift.Double(-12.125)),
                (32767, @thrift.Byte(-1)),
                (127, @thrift.Bool(true)),
              ]),
            ),
          ]),
        ),
      ]),
    ),
  ])
  let wire = b"\x16\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\xdb\x03\x3c\xc0\xea\x14\xff\xff\x03\x00\xff\x02\x20\x05\x00\xff\xff\xff\xff\x0f\xe6\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\xff\xe3\xff\x0c\xfe\xff\x03\xf7\x00\x00\x00\x00\x00\x40\x28\xc0\x03\xfe\xff\x03\xff\x01\xfe\x01\x00\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (1, @thrift.I64(9223372036854775807L)),
      (
        14,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
          (
            @thrift.Byte(-64),
            @thrift.Struct([
              (14, @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(-32768)])),
            ]),
          ),
          (
            @thrift.Byte(-1),
            @thrift.Struct([
              (16, @thrift.Bool(false)),
              (0, @thrift.I32(-2147483648)),
              (14, @thrift.I64(9223372036854775807L)),
            ]),
          ),
          (
            @thrift.Byte(-1),
            @thrift.Struct([
              (14, @thrift.Byte(-1)),
              (
                32767,
                @thrift.Struct([
                  (15, @thrift.Double(-12.125)),
                  (32767, @thrift.Byte(-1)),
                  (127, @thrift.Bool(true)),
                ]),
              ),
            ]),
          ),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x46\x16\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\xdb\x03\x3c\xc0\xea\x14\xff\xff\x03\x00\xff\x02\x20\x05\x00\xff\xff\xff\xff\x0f\xe6\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\xff\xe3\xff\x0c\xfe\xff\x03\xf7\x00\x00\x00\x00\x00\x40\x28\xc0\x03\xfe\xff\x03\xff\x01\xfe\x01\x00\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 81" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 81" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 82" {
  let original = @thrift.Struct([
    (15, @thrift.SetValue(@thrift.ListKind, [])),
    (16, @thrift.Bool(false)),
  ])
  let wire = b"\x0e\x00\x0f\x0f\x00\x00\x00\x00\x02\x00\x10\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.SetValue(@thrift.ListKind, [])),
      (16, @thrift.Bool(false)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0d\x0e\x00\x0f\x0f\x00\x00\x00\x00\x02\x00\x10\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 82" {
  let original = @thrift.Struct([
    (15, @thrift.SetValue(@thrift.ListKind, [])),
    (16, @thrift.Bool(false)),
  ])
  let wire = b"\xfa\x09\x12\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.SetValue(@thrift.ListKind, [])),
      (16, @thrift.Bool(false)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x04\xfa\x09\x12\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 83" {
  let original = @thrift.Struct([(14, @thrift.Byte(53))])
  let wire = b"\x03\x00\x0e\x35\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.Byte(53))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x05\x03\x00\x0e\x35\x00")
}

///|
test "Apache seeded CompactProtocol fixture 83" {
  let original = @thrift.Struct([(14, @thrift.Byte(53))])
  let wire = b"\xe3\x35\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.Byte(53))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x03\xe3\x35\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 84" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 84" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 85" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 85" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 86" {
  let original = @thrift.Struct([
    (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (15, @thrift.Byte(42)),
    (-32768, @thrift.I16(0)),
  ])
  let wire = b"\x0b\x00\x10\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x00\x0f\x2a\x06\x80\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (15, @thrift.Byte(42)),
      (-32768, @thrift.I16(0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1b\x0b\x00\x10\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x00\x0f\x2a\x06\x80\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 86" {
  let original = @thrift.Struct([
    (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (15, @thrift.Byte(42)),
    (-32768, @thrift.I16(0)),
  ])
  let wire = b"\x08\x20\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x1e\x2a\x04\xff\xff\x03\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (15, @thrift.Byte(42)),
      (-32768, @thrift.I16(0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x16\x08\x20\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x1e\x2a\x04\xff\xff\x03\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 87" {
  let original = @thrift.Struct([
    (0, @thrift.Binary(b"")),
    (
      15,
      @thrift.Struct([
        (14, @thrift.I64(-9223372036854775808L)),
        (16, @thrift.I16(32767)),
        (-1, @thrift.SetValue(@thrift.I16Kind, [])),
      ]),
    ),
    (-32768, @thrift.I32(2147483647)),
  ])
  let wire = b"\x0b\x00\x00\x00\x00\x00\x00\x0c\x00\x0f\x0a\x00\x0e\x80\x00\x00\x00\x00\x00\x00\x00\x06\x00\x10\x7f\xff\x0e\xff\xff\x06\x00\x00\x00\x00\x00\x08\x80\x00\x7f\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (0, @thrift.Binary(b"")),
      (
        15,
        @thrift.Struct([
          (14, @thrift.I64(-9223372036854775808L)),
          (16, @thrift.I16(32767)),
          (-1, @thrift.SetValue(@thrift.I16Kind, [])),
        ]),
      ),
      (-32768, @thrift.I32(2147483647)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x2b\x0b\x00\x00\x00\x00\x00\x00\x0c\x00\x0f\x0a\x00\x0e\x80\x00\x00\x00\x00\x00\x00\x00\x06\x00\x10\x7f\xff\x0e\xff\xff\x06\x00\x00\x00\x00\x00\x08\x80\x00\x7f\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 87" {
  let original = @thrift.Struct([
    (0, @thrift.Binary(b"")),
    (
      15,
      @thrift.Struct([
        (14, @thrift.I64(-9223372036854775808L)),
        (16, @thrift.I16(32767)),
        (-1, @thrift.SetValue(@thrift.I16Kind, [])),
      ]),
    ),
    (-32768, @thrift.I32(2147483647)),
  ])
  let wire = b"\x08\x00\x00\xfc\xe6\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x24\xfe\xff\x03\x0a\x01\x04\x00\x05\xff\xff\x03\xfe\xff\xff\xff\x0f\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (0, @thrift.Binary(b"")),
      (
        15,
        @thrift.Struct([
          (14, @thrift.I64(-9223372036854775808L)),
          (16, @thrift.I16(32767)),
          (-1, @thrift.SetValue(@thrift.I16Kind, [])),
        ]),
      ),
      (-32768, @thrift.I32(2147483647)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x21\x08\x00\x00\xfc\xe6\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x24\xfe\xff\x03\x0a\x01\x04\x00\x05\xff\xff\x03\xfe\xff\xff\xff\x0f\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 88" {
  let original = @thrift.Struct([
    (
      -1,
      @thrift.SetValue(@thrift.StructKind, [
        @thrift.Struct([
          (14, @thrift.Bool(true)),
          (
            32767,
            @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
              (@thrift.Byte(-1), @thrift.Bool(true)),
              (@thrift.Byte(-1), @thrift.Bool(true)),
            ]),
          ),
          (1, @thrift.I16(1)),
          (-32768, @thrift.Bool(true)),
        ]),
        @thrift.Struct([
          (16, @thrift.SetValue(@thrift.I16Kind, [])),
          (2, @thrift.I16(50)),
          (15, @thrift.Byte(1)),
          (14, @thrift.Byte(-128)),
        ]),
        @thrift.Struct([
          (15, @thrift.Bool(true)),
          (
            0,
            @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.I64Kind), []),
          ),
          (127, @thrift.Struct([(2, @thrift.I16(32767))])),
        ]),
        @thrift.Struct([
          (15, @thrift.Double(1.0e+30)),
          (-32768, @thrift.Byte(127)),
          (
            -1,
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.BinaryKind), [
              (@thrift.I32(2147483647), @thrift.Binary(b"")),
            ]),
          ),
        ]),
        @thrift.Struct([
          (31, @thrift.I32(-2147483648)),
          (14, @thrift.Double(1.0e-30)),
        ]),
        @thrift.Struct([
          (
            31,
            @thrift.Struct([
              (16, @thrift.I64(9223372036854775807L)),
              (2, @thrift.I16(0)),
              (14, @thrift.Byte(-52)),
              (31, @thrift.Bool(true)),
            ]),
          ),
          (0, @thrift.I64(0L)),
          (127, @thrift.List(@thrift.I64Kind, [])),
          (16, @thrift.I16(1)),
        ]),
        @thrift.Struct([(-32768, @thrift.Double(1.5))]),
        @thrift.Struct([
          (31, @thrift.SetValue(@thrift.ByteKind, [])),
          (1, @thrift.SetValue(@thrift.I64Kind, [])),
        ]),
        @thrift.Struct([
          (127, @thrift.List(@thrift.ByteKind, [@thrift.Byte(-77)])),
          (31, @thrift.I64(0L)),
          (14, @thrift.Byte(127)),
          (
            0,
            @thrift.SetValue(@thrift.BinaryKind, [
              @thrift.Binary(
                b"\x29\xa3\xf3\x25\xa8\x5d\x42\x7e\xe8\x65\x14\x77\xc6\x35\x5b\x7e\x64",
              ),
              @thrift.Binary(
                b"\xac\x60\x7f\xe3\x93\x7d\xe8\xc3\xef\xa3\x50\x18\x40\xdf\x39\xac\x04",
              ),
            ]),
          ),
        ]),
        @thrift.Struct([
          (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (-1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (14, @thrift.I16(32767)),
        ]),
        @thrift.Struct([
          (
            14,
            @thrift.Struct([
              (127, @thrift.Byte(127)),
              (15, @thrift.Bool(false)),
              (0, @thrift.I32(2147483647)),
            ]),
          ),
          (32767, @thrift.I16(32767)),
          (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (-32768, @thrift.Struct([(127, @thrift.I16(-32768))])),
        ]),
        @thrift.Struct([
          (
            31,
            @thrift.Struct([(14, @thrift.I16(-1)), (1, @thrift.Double(-12.125))]),
          ),
          (15, @thrift.Byte(0)),
          (127, @thrift.List(@thrift.ByteKind, [])),
          (
            32767,
            @thrift.SetValue(@thrift.BoolKind, [
              @thrift.Bool(false),
              @thrift.Bool(false),
            ]),
          ),
        ]),
        @thrift.Struct([]),
        @thrift.Struct([
          (
            -32768,
            @thrift.SetValue(@thrift.BinaryKind, [
              @thrift.Binary(
                b"\x5c\x92\x0f\x98\xa6\x95\x6e\x15\x08\x1a\x73\xb1\x84\x28\x0f\xcf\x3f",
              ),
            ]),
          ),
          (32767, @thrift.I16(0)),
          (14, @thrift.Byte(0)),
          (0, @thrift.I32(0)),
        ]),
      ]),
    ),
    (15, @thrift.I16(32767)),
    (31, @thrift.I16(-32768)),
    (14, @thrift.I64(-74L)),
  ])
  let wire = b"\x0e\xff\xff\x0c\x00\x00\x00\x0e\x02\x00\x0e\x01\x0d\x7f\xff\x03\x02\x00\x00\x00\x02\xff\x01\xff\x01\x06\x00\x01\x00\x01\x02\x80\x00\x01\x00\x0e\x00\x10\x06\x00\x00\x00\x00\x06\x00\x02\x00\x32\x03\x00\x0f\x01\x03\x00\x0e\x80\x00\x02\x00\x0f\x01\x0d\x00\x00\x03\x0a\x00\x00\x00\x00\x0c\x00\x7f\x06\x00\x02\x7f\xff\x00\x00\x04\x00\x0f\x46\x29\x3e\x59\x39\xa0\x8c\xea\x03\x80\x00\x7f\x0d\xff\xff\x08\x0b\x00\x00\x00\x01\x7f\xff\xff\xff\x00\x00\x00\x00\x00\x08\x00\x1f\x80\x00\x00\x00\x04\x00\x0e\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00\x0c\x00\x1f\x0a\x00\x10\x7f\xff\xff\xff\xff\xff\xff\xff\x06\x00\x02\x00\x00\x03\x00\x0e\xcc\x02\x00\x1f\x01\x00\x0a\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0f\x00\x7f\x0a\x00\x00\x00\x00\x06\x00\x10\x00\x01\x00\x04\x80\x00\x3f\xf8\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x1f\x03\x00\x00\x00\x00\x0e\x00\x01\x0a\x00\x00\x00\x00\x00\x0f\x00\x7f\x03\x00\x00\x00\x01\xb3\x0a\x00\x1f\x00\x00\x00\x00\x00\x00\x00\x00\x03\x00\x0e\x7f\x0e\x00\x00\x0b\x00\x00\x00\x02\x00\x00\x00\x11\x29\xa3\xf3\x25\xa8\x5d\x42\x7e\xe8\x65\x14\x77\xc6\x35\x5b\x7e\x64\x00\x00\x00\x11\xac\x60\x7f\xe3\x93\x7d\xe8\xc3\xef\xa3\x50\x18\x40\xdf\x39\xac\x04\x00\x0b\x00\x7f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0b\xff\xff\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\x00\x0e\x7f\xff\x00\x0c\x00\x0e\x03\x00\x7f\x7f\x02\x00\x0f\x00\x08\x00\x00\x7f\xff\xff\xff\x00\x06\x7f\xff\x7f\xff\x0b\x00\x10\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0c\x80\x00\x06\x00\x7f\x80\x00\x00\x00\x0c\x00\x1f\x06\x00\x0e\xff\xff\x04\x00\x01\xc0\x28\x40\x00\x00\x00\x00\x00\x00\x03\x00\x0f\x00\x0f\x00\x7f\x03\x00\x00\x00\x00\x0e\x7f\xff\x02\x00\x00\x00\x02\x00\x00\x00\x00\x0e\x80\x00\x0b\x00\x00\x00\x01\x00\x00\x00\x11\x5c\x92\x0f\x98\xa6\x95\x6e\x15\x08\x1a\x73\xb1\x84\x28\x0f\xcf\x3f\x06\x7f\xff\x00\x00\x03\x00\x0e\x00\x08\x00\x00\x00\x00\x00\x00\x00\x06\x00\x0f\x7f\xff\x06\x00\x1f\x80\x00\x0a\x00\x0e\xff\xff\xff\xff\xff\xff\xff\xb6\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        -1,
        @thrift.SetValue(@thrift.StructKind, [
          @thrift.Struct([
            (14, @thrift.Bool(true)),
            (
              32767,
              @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
                (@thrift.Byte(-1), @thrift.Bool(true)),
                (@thrift.Byte(-1), @thrift.Bool(true)),
              ]),
            ),
            (1, @thrift.I16(1)),
            (-32768, @thrift.Bool(true)),
          ]),
          @thrift.Struct([
            (16, @thrift.SetValue(@thrift.I16Kind, [])),
            (2, @thrift.I16(50)),
            (15, @thrift.Byte(1)),
            (14, @thrift.Byte(-128)),
          ]),
          @thrift.Struct([
            (15, @thrift.Bool(true)),
            (
              0,
              @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.I64Kind), []),
            ),
            (127, @thrift.Struct([(2, @thrift.I16(32767))])),
          ]),
          @thrift.Struct([
            (15, @thrift.Double(1.0e+30)),
            (-32768, @thrift.Byte(127)),
            (
              -1,
              @thrift.MapValue(
                Some(@thrift.I32Kind),
                Some(@thrift.BinaryKind),
                [(@thrift.I32(2147483647), @thrift.Binary(b""))],
              ),
            ),
          ]),
          @thrift.Struct([
            (31, @thrift.I32(-2147483648)),
            (14, @thrift.Double(1.0e-30)),
          ]),
          @thrift.Struct([
            (
              31,
              @thrift.Struct([
                (16, @thrift.I64(9223372036854775807L)),
                (2, @thrift.I16(0)),
                (14, @thrift.Byte(-52)),
                (31, @thrift.Bool(true)),
              ]),
            ),
            (0, @thrift.I64(0L)),
            (127, @thrift.List(@thrift.I64Kind, [])),
            (16, @thrift.I16(1)),
          ]),
          @thrift.Struct([(-32768, @thrift.Double(1.5))]),
          @thrift.Struct([
            (31, @thrift.SetValue(@thrift.ByteKind, [])),
            (1, @thrift.SetValue(@thrift.I64Kind, [])),
          ]),
          @thrift.Struct([
            (127, @thrift.List(@thrift.ByteKind, [@thrift.Byte(-77)])),
            (31, @thrift.I64(0L)),
            (14, @thrift.Byte(127)),
            (
              0,
              @thrift.SetValue(@thrift.BinaryKind, [
                @thrift.Binary(
                  b"\x29\xa3\xf3\x25\xa8\x5d\x42\x7e\xe8\x65\x14\x77\xc6\x35\x5b\x7e\x64",
                ),
                @thrift.Binary(
                  b"\xac\x60\x7f\xe3\x93\x7d\xe8\xc3\xef\xa3\x50\x18\x40\xdf\x39\xac\x04",
                ),
              ]),
            ),
          ]),
          @thrift.Struct([
            (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (-1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (14, @thrift.I16(32767)),
          ]),
          @thrift.Struct([
            (
              14,
              @thrift.Struct([
                (127, @thrift.Byte(127)),
                (15, @thrift.Bool(false)),
                (0, @thrift.I32(2147483647)),
              ]),
            ),
            (32767, @thrift.I16(32767)),
            (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (-32768, @thrift.Struct([(127, @thrift.I16(-32768))])),
          ]),
          @thrift.Struct([
            (
              31,
              @thrift.Struct([
                (14, @thrift.I16(-1)),
                (1, @thrift.Double(-12.125)),
              ]),
            ),
            (15, @thrift.Byte(0)),
            (127, @thrift.List(@thrift.ByteKind, [])),
            (
              32767,
              @thrift.SetValue(@thrift.BoolKind, [
                @thrift.Bool(false),
                @thrift.Bool(false),
              ]),
            ),
          ]),
          @thrift.Struct([]),
          @thrift.Struct([
            (
              -32768,
              @thrift.SetValue(@thrift.BinaryKind, [
                @thrift.Binary(
                  b"\x5c\x92\x0f\x98\xa6\x95\x6e\x15\x08\x1a\x73\xb1\x84\x28\x0f\xcf\x3f",
                ),
              ]),
            ),
            (32767, @thrift.I16(0)),
            (14, @thrift.Byte(0)),
            (0, @thrift.I32(0)),
          ]),
        ]),
      ),
      (15, @thrift.I16(32767)),
      (31, @thrift.I16(-32768)),
      (14, @thrift.I64(-74L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\xec\x0e\xff\xff\x0c\x00\x00\x00\x0e\x02\x00\x0e\x01\x0d\x7f\xff\x03\x02\x00\x00\x00\x02\xff\x01\xff\x01\x06\x00\x01\x00\x01\x02\x80\x00\x01\x00\x0e\x00\x10\x06\x00\x00\x00\x00\x06\x00\x02\x00\x32\x03\x00\x0f\x01\x03\x00\x0e\x80\x00\x02\x00\x0f\x01\x0d\x00\x00\x03\x0a\x00\x00\x00\x00\x0c\x00\x7f\x06\x00\x02\x7f\xff\x00\x00\x04\x00\x0f\x46\x29\x3e\x59\x39\xa0\x8c\xea\x03\x80\x00\x7f\x0d\xff\xff\x08\x0b\x00\x00\x00\x01\x7f\xff\xff\xff\x00\x00\x00\x00\x00\x08\x00\x1f\x80\x00\x00\x00\x04\x00\x0e\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00\x0c\x00\x1f\x0a\x00\x10\x7f\xff\xff\xff\xff\xff\xff\xff\x06\x00\x02\x00\x00\x03\x00\x0e\xcc\x02\x00\x1f\x01\x00\x0a\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0f\x00\x7f\x0a\x00\x00\x00\x00\x06\x00\x10\x00\x01\x00\x04\x80\x00\x3f\xf8\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x1f\x03\x00\x00\x00\x00\x0e\x00\x01\x0a\x00\x00\x00\x00\x00\x0f\x00\x7f\x03\x00\x00\x00\x01\xb3\x0a\x00\x1f\x00\x00\x00\x00\x00\x00\x00\x00\x03\x00\x0e\x7f\x0e\x00\x00\x0b\x00\x00\x00\x02\x00\x00\x00\x11\x29\xa3\xf3\x25\xa8\x5d\x42\x7e\xe8\x65\x14\x77\xc6\x35\x5b\x7e\x64\x00\x00\x00\x11\xac\x60\x7f\xe3\x93\x7d\xe8\xc3\xef\xa3\x50\x18\x40\xdf\x39\xac\x04\x00\x0b\x00\x7f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0b\xff\xff\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\x00\x0e\x7f\xff\x00\x0c\x00\x0e\x03\x00\x7f\x7f\x02\x00\x0f\x00\x08\x00\x00\x7f\xff\xff\xff\x00\x06\x7f\xff\x7f\xff\x0b\x00\x10\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0c\x80\x00\x06\x00\x7f\x80\x00\x00\x00\x0c\x00\x1f\x06\x00\x0e\xff\xff\x04\x00\x01\xc0\x28\x40\x00\x00\x00\x00\x00\x00\x03\x00\x0f\x00\x0f\x00\x7f\x03\x00\x00\x00\x00\x0e\x7f\xff\x02\x00\x00\x00\x02\x00\x00\x00\x00\x0e\x80\x00\x0b\x00\x00\x00\x01\x00\x00\x00\x11\x5c\x92\x0f\x98\xa6\x95\x6e\x15\x08\x1a\x73\xb1\x84\x28\x0f\xcf\x3f\x06\x7f\xff\x00\x00\x03\x00\x0e\x00\x08\x00\x00\x00\x00\x00\x00\x00\x06\x00\x0f\x7f\xff\x06\x00\x1f\x80\x00\x0a\x00\x0e\xff\xff\xff\xff\xff\xff\xff\xb6\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 88" {
  let original = @thrift.Struct([
    (
      -1,
      @thrift.SetValue(@thrift.StructKind, [
        @thrift.Struct([
          (14, @thrift.Bool(true)),
          (
            32767,
            @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
              (@thrift.Byte(-1), @thrift.Bool(true)),
              (@thrift.Byte(-1), @thrift.Bool(true)),
            ]),
          ),
          (1, @thrift.I16(1)),
          (-32768, @thrift.Bool(true)),
        ]),
        @thrift.Struct([
          (16, @thrift.SetValue(@thrift.I16Kind, [])),
          (2, @thrift.I16(50)),
          (15, @thrift.Byte(1)),
          (14, @thrift.Byte(-128)),
        ]),
        @thrift.Struct([
          (15, @thrift.Bool(true)),
          (
            0,
            @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.I64Kind), []),
          ),
          (127, @thrift.Struct([(2, @thrift.I16(32767))])),
        ]),
        @thrift.Struct([
          (15, @thrift.Double(1.0e+30)),
          (-32768, @thrift.Byte(127)),
          (
            -1,
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.BinaryKind), [
              (@thrift.I32(2147483647), @thrift.Binary(b"")),
            ]),
          ),
        ]),
        @thrift.Struct([
          (31, @thrift.I32(-2147483648)),
          (14, @thrift.Double(1.0e-30)),
        ]),
        @thrift.Struct([
          (
            31,
            @thrift.Struct([
              (16, @thrift.I64(9223372036854775807L)),
              (2, @thrift.I16(0)),
              (14, @thrift.Byte(-52)),
              (31, @thrift.Bool(true)),
            ]),
          ),
          (0, @thrift.I64(0L)),
          (127, @thrift.List(@thrift.I64Kind, [])),
          (16, @thrift.I16(1)),
        ]),
        @thrift.Struct([(-32768, @thrift.Double(1.5))]),
        @thrift.Struct([
          (31, @thrift.SetValue(@thrift.ByteKind, [])),
          (1, @thrift.SetValue(@thrift.I64Kind, [])),
        ]),
        @thrift.Struct([
          (127, @thrift.List(@thrift.ByteKind, [@thrift.Byte(-77)])),
          (31, @thrift.I64(0L)),
          (14, @thrift.Byte(127)),
          (
            0,
            @thrift.SetValue(@thrift.BinaryKind, [
              @thrift.Binary(
                b"\x29\xa3\xf3\x25\xa8\x5d\x42\x7e\xe8\x65\x14\x77\xc6\x35\x5b\x7e\x64",
              ),
              @thrift.Binary(
                b"\xac\x60\x7f\xe3\x93\x7d\xe8\xc3\xef\xa3\x50\x18\x40\xdf\x39\xac\x04",
              ),
            ]),
          ),
        ]),
        @thrift.Struct([
          (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (-1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (14, @thrift.I16(32767)),
        ]),
        @thrift.Struct([
          (
            14,
            @thrift.Struct([
              (127, @thrift.Byte(127)),
              (15, @thrift.Bool(false)),
              (0, @thrift.I32(2147483647)),
            ]),
          ),
          (32767, @thrift.I16(32767)),
          (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (-32768, @thrift.Struct([(127, @thrift.I16(-32768))])),
        ]),
        @thrift.Struct([
          (
            31,
            @thrift.Struct([(14, @thrift.I16(-1)), (1, @thrift.Double(-12.125))]),
          ),
          (15, @thrift.Byte(0)),
          (127, @thrift.List(@thrift.ByteKind, [])),
          (
            32767,
            @thrift.SetValue(@thrift.BoolKind, [
              @thrift.Bool(false),
              @thrift.Bool(false),
            ]),
          ),
        ]),
        @thrift.Struct([]),
        @thrift.Struct([
          (
            -32768,
            @thrift.SetValue(@thrift.BinaryKind, [
              @thrift.Binary(
                b"\x5c\x92\x0f\x98\xa6\x95\x6e\x15\x08\x1a\x73\xb1\x84\x28\x0f\xcf\x3f",
              ),
            ]),
          ),
          (32767, @thrift.I16(0)),
          (14, @thrift.Byte(0)),
          (0, @thrift.I32(0)),
        ]),
      ]),
    ),
    (15, @thrift.I16(32767)),
    (31, @thrift.I16(-32768)),
    (14, @thrift.I64(-74L)),
  ])
  let wire = b"\x0a\x01\xec\xe1\x0b\xfe\xff\x03\x02\x31\xff\x01\xff\x01\x04\x02\x02\x01\xff\xff\x03\x00\x0a\x20\x04\x04\x04\x64\xd3\x01\x03\x1c\x80\x00\xf1\x0b\x00\x00\x0c\xfe\x01\x24\xfe\xff\x03\x00\x00\xf7\xea\x8c\xa0\x39\x59\x3e\x29\x46\x03\xff\xff\x03\x7f\x0b\x01\x01\x58\xfe\xff\xff\xff\x0f\x00\x00\x05\x3e\xff\xff\xff\xff\x0f\x07\x1c\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x0c\x3e\x06\x20\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x04\x04\x00\xc3\xcc\x01\x3e\x00\x06\x00\x00\x09\xfe\x01\x06\x04\x20\x02\x00\x07\xff\xff\x03\x00\x00\x00\x00\x00\x00\xf8\x3f\x00\x0a\x3e\x03\x0a\x02\x06\x00\x09\xfe\x01\x13\xb3\x06\x3e\x00\x03\x1c\x7f\x0a\x00\x28\x11\x29\xa3\xf3\x25\xa8\x5d\x42\x7e\xe8\x65\x14\x77\xc6\x35\x5b\x7e\x64\x11\xac\x60\x7f\xe3\x93\x7d\xe8\xc3\xef\xa3\x50\x18\x40\xdf\x39\xac\x04\x00\x08\xfe\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x08\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\xf4\xfe\xff\x03\x00\xec\x03\xfe\x01\x7f\x02\x1e\x05\x00\xfe\xff\xff\xff\x0f\x00\x04\xfe\xff\x03\xfe\xff\x03\x08\x20\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0c\xff\xff\x03\x04\xfe\x01\xff\xff\x03\x00\x00\x0c\x3e\xe4\x01\x07\x02\x00\x00\x00\x00\x00\x40\x28\xc0\x00\x03\x1e\x00\x09\xfe\x01\x03\x0a\xfe\xff\x03\x21\x02\x02\x00\x00\x0a\xff\xff\x03\x18\x11\x5c\x92\x0f\x98\xa6\x95\x6e\x15\x08\x1a\x73\xb1\x84\x28\x0f\xcf\x3f\x04\xfe\xff\x03\x00\x03\x1c\x00\x05\x00\x00\x00\x04\x1e\xfe\xff\x03\x04\x3e\xff\xff\x03\x06\x1c\x93\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        -1,
        @thrift.SetValue(@thrift.StructKind, [
          @thrift.Struct([
            (14, @thrift.Bool(true)),
            (
              32767,
              @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BoolKind), [
                (@thrift.Byte(-1), @thrift.Bool(true)),
                (@thrift.Byte(-1), @thrift.Bool(true)),
              ]),
            ),
            (1, @thrift.I16(1)),
            (-32768, @thrift.Bool(true)),
          ]),
          @thrift.Struct([
            (16, @thrift.SetValue(@thrift.I16Kind, [])),
            (2, @thrift.I16(50)),
            (15, @thrift.Byte(1)),
            (14, @thrift.Byte(-128)),
          ]),
          @thrift.Struct([
            (15, @thrift.Bool(true)),
            (0, @thrift.MapValue(None, None, [])),
            (127, @thrift.Struct([(2, @thrift.I16(32767))])),
          ]),
          @thrift.Struct([
            (15, @thrift.Double(1.0e+30)),
            (-32768, @thrift.Byte(127)),
            (
              -1,
              @thrift.MapValue(
                Some(@thrift.I32Kind),
                Some(@thrift.BinaryKind),
                [(@thrift.I32(2147483647), @thrift.Binary(b""))],
              ),
            ),
          ]),
          @thrift.Struct([
            (31, @thrift.I32(-2147483648)),
            (14, @thrift.Double(1.0e-30)),
          ]),
          @thrift.Struct([
            (
              31,
              @thrift.Struct([
                (16, @thrift.I64(9223372036854775807L)),
                (2, @thrift.I16(0)),
                (14, @thrift.Byte(-52)),
                (31, @thrift.Bool(true)),
              ]),
            ),
            (0, @thrift.I64(0L)),
            (127, @thrift.List(@thrift.I64Kind, [])),
            (16, @thrift.I16(1)),
          ]),
          @thrift.Struct([(-32768, @thrift.Double(1.5))]),
          @thrift.Struct([
            (31, @thrift.SetValue(@thrift.ByteKind, [])),
            (1, @thrift.SetValue(@thrift.I64Kind, [])),
          ]),
          @thrift.Struct([
            (127, @thrift.List(@thrift.ByteKind, [@thrift.Byte(-77)])),
            (31, @thrift.I64(0L)),
            (14, @thrift.Byte(127)),
            (
              0,
              @thrift.SetValue(@thrift.BinaryKind, [
                @thrift.Binary(
                  b"\x29\xa3\xf3\x25\xa8\x5d\x42\x7e\xe8\x65\x14\x77\xc6\x35\x5b\x7e\x64",
                ),
                @thrift.Binary(
                  b"\xac\x60\x7f\xe3\x93\x7d\xe8\xc3\xef\xa3\x50\x18\x40\xdf\x39\xac\x04",
                ),
              ]),
            ),
          ]),
          @thrift.Struct([
            (127, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (-1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (14, @thrift.I16(32767)),
          ]),
          @thrift.Struct([
            (
              14,
              @thrift.Struct([
                (127, @thrift.Byte(127)),
                (15, @thrift.Bool(false)),
                (0, @thrift.I32(2147483647)),
              ]),
            ),
            (32767, @thrift.I16(32767)),
            (16, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (-32768, @thrift.Struct([(127, @thrift.I16(-32768))])),
          ]),
          @thrift.Struct([
            (
              31,
              @thrift.Struct([
                (14, @thrift.I16(-1)),
                (1, @thrift.Double(-12.125)),
              ]),
            ),
            (15, @thrift.Byte(0)),
            (127, @thrift.List(@thrift.ByteKind, [])),
            (
              32767,
              @thrift.SetValue(@thrift.BoolKind, [
                @thrift.Bool(false),
                @thrift.Bool(false),
              ]),
            ),
          ]),
          @thrift.Struct([]),
          @thrift.Struct([
            (
              -32768,
              @thrift.SetValue(@thrift.BinaryKind, [
                @thrift.Binary(
                  b"\x5c\x92\x0f\x98\xa6\x95\x6e\x15\x08\x1a\x73\xb1\x84\x28\x0f\xcf\x3f",
                ),
              ]),
            ),
            (32767, @thrift.I16(0)),
            (14, @thrift.Byte(0)),
            (0, @thrift.I32(0)),
          ]),
        ]),
      ),
      (15, @thrift.I16(32767)),
      (31, @thrift.I16(-32768)),
      (14, @thrift.I64(-74L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\x62\x0a\x01\xec\xe1\x0b\xfe\xff\x03\x02\x31\xff\x01\xff\x01\x04\x02\x02\x01\xff\xff\x03\x00\x0a\x20\x04\x04\x04\x64\xd3\x01\x03\x1c\x80\x00\xf1\x0b\x00\x00\x0c\xfe\x01\x24\xfe\xff\x03\x00\x00\xf7\xea\x8c\xa0\x39\x59\x3e\x29\x46\x03\xff\xff\x03\x7f\x0b\x01\x01\x58\xfe\xff\xff\xff\x0f\x00\x00\x05\x3e\xff\xff\xff\xff\x0f\x07\x1c\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x0c\x3e\x06\x20\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x04\x04\x00\xc3\xcc\x01\x3e\x00\x06\x00\x00\x09\xfe\x01\x06\x04\x20\x02\x00\x07\xff\xff\x03\x00\x00\x00\x00\x00\x00\xf8\x3f\x00\x0a\x3e\x03\x0a\x02\x06\x00\x09\xfe\x01\x13\xb3\x06\x3e\x00\x03\x1c\x7f\x0a\x00\x28\x11\x29\xa3\xf3\x25\xa8\x5d\x42\x7e\xe8\x65\x14\x77\xc6\x35\x5b\x7e\x64\x11\xac\x60\x7f\xe3\x93\x7d\xe8\xc3\xef\xa3\x50\x18\x40\xdf\x39\xac\x04\x00\x08\xfe\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x08\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\xf4\xfe\xff\x03\x00\xec\x03\xfe\x01\x7f\x02\x1e\x05\x00\xfe\xff\xff\xff\x0f\x00\x04\xfe\xff\x03\xfe\xff\x03\x08\x20\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0c\xff\xff\x03\x04\xfe\x01\xff\xff\x03\x00\x00\x0c\x3e\xe4\x01\x07\x02\x00\x00\x00\x00\x00\x40\x28\xc0\x00\x03\x1e\x00\x09\xfe\x01\x03\x0a\xfe\xff\x03\x21\x02\x02\x00\x00\x0a\xff\xff\x03\x18\x11\x5c\x92\x0f\x98\xa6\x95\x6e\x15\x08\x1a\x73\xb1\x84\x28\x0f\xcf\x3f\x04\xfe\xff\x03\x00\x03\x1c\x00\x05\x00\x00\x00\x04\x1e\xfe\xff\x03\x04\x3e\xff\xff\x03\x06\x1c\x93\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 89" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 89" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 90" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 90" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 91" {
  let original = @thrift.Struct([
    (-32768, @thrift.I32(1)),
    (
      127,
      @thrift.SetValue(@thrift.DoubleKind, [
        @thrift.Double(1.5),
        @thrift.Double(1.0e-30),
        @thrift.Double(1.5),
        @thrift.Double(1.0e+30),
        @thrift.Double(1.0e-30),
        @thrift.Double(-0.0),
        @thrift.Double(1.0e-30),
        @thrift.Double(-0.0),
        @thrift.Double(-0.0),
        @thrift.Double(1.0e+30),
        @thrift.Double(-0.0),
        @thrift.Double(1.0e-30),
        @thrift.Double(1.0e-30),
        @thrift.Double(1.5),
      ]),
    ),
    (
      2,
      @thrift.Struct([
        (15, @thrift.I32(2147483647)),
        (
          127,
          @thrift.Struct([
            (
              127,
              @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(1.0e-30)]),
            ),
            (32767, @thrift.I64(9223372036854775807L)),
          ]),
        ),
        (
          2,
          @thrift.Struct([
            (-1, @thrift.Bool(false)),
            (-32768, @thrift.I64(-79L)),
            (32767, @thrift.I16(32767)),
          ]),
        ),
      ]),
    ),
    (
      31,
      @thrift.List(@thrift.I64Kind, [
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(0L),
        @thrift.I64(0L),
        @thrift.I64(9223372036854775807L),
        @thrift.I64(0L),
        @thrift.I64(0L),
        @thrift.I64(1L),
        @thrift.I64(-1L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(1L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(1L),
        @thrift.I64(-1L),
      ]),
    ),
  ])
  let wire = b"\x08\x80\x00\x00\x00\x00\x01\x0e\x00\x7f\x04\x00\x00\x00\x0e\x3f\xf8\x00\x00\x00\x00\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x3f\xf8\x00\x00\x00\x00\x00\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x80\x00\x00\x00\x00\x00\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x80\x00\x00\x00\x00\x00\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x3f\xf8\x00\x00\x00\x00\x00\x00\x0c\x00\x02\x08\x00\x0f\x7f\xff\xff\xff\x0c\x00\x7f\x0e\x00\x7f\x04\x00\x00\x00\x01\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x0a\x7f\xff\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x0c\x00\x02\x02\xff\xff\x00\x0a\x80\x00\xff\xff\xff\xff\xff\xff\xff\xb1\x06\x7f\xff\x7f\xff\x00\x00\x0f\x00\x1f\x0a\x00\x00\x00\x0e\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (-32768, @thrift.I32(1)),
      (
        127,
        @thrift.SetValue(@thrift.DoubleKind, [
          @thrift.Double(1.5),
          @thrift.Double(1.0e-30),
          @thrift.Double(1.5),
          @thrift.Double(1.0e+30),
          @thrift.Double(1.0e-30),
          @thrift.Double(-0.0),
          @thrift.Double(1.0e-30),
          @thrift.Double(-0.0),
          @thrift.Double(-0.0),
          @thrift.Double(1.0e+30),
          @thrift.Double(-0.0),
          @thrift.Double(1.0e-30),
          @thrift.Double(1.0e-30),
          @thrift.Double(1.5),
        ]),
      ),
      (
        2,
        @thrift.Struct([
          (15, @thrift.I32(2147483647)),
          (
            127,
            @thrift.Struct([
              (
                127,
                @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(1.0e-30)]),
              ),
              (32767, @thrift.I64(9223372036854775807L)),
            ]),
          ),
          (
            2,
            @thrift.Struct([
              (-1, @thrift.Bool(false)),
              (-32768, @thrift.I64(-79L)),
              (32767, @thrift.I16(32767)),
            ]),
          ),
        ]),
      ),
      (
        31,
        @thrift.List(@thrift.I64Kind, [
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(0L),
          @thrift.I64(0L),
          @thrift.I64(9223372036854775807L),
          @thrift.I64(0L),
          @thrift.I64(0L),
          @thrift.I64(1L),
          @thrift.I64(-1L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(1L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(1L),
          @thrift.I64(-1L),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\x3a\x08\x80\x00\x00\x00\x00\x01\x0e\x00\x7f\x04\x00\x00\x00\x0e\x3f\xf8\x00\x00\x00\x00\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x3f\xf8\x00\x00\x00\x00\x00\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x80\x00\x00\x00\x00\x00\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x80\x00\x00\x00\x00\x00\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x3f\xf8\x00\x00\x00\x00\x00\x00\x0c\x00\x02\x08\x00\x0f\x7f\xff\xff\xff\x0c\x00\x7f\x0e\x00\x7f\x04\x00\x00\x00\x01\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x0a\x7f\xff\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x0c\x00\x02\x02\xff\xff\x00\x0a\x80\x00\xff\xff\xff\xff\xff\xff\xff\xb1\x06\x7f\xff\x7f\xff\x00\x00\x0f\x00\x1f\x0a\x00\x00\x00\x0e\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 91" {
  let original = @thrift.Struct([
    (-32768, @thrift.I32(1)),
    (
      127,
      @thrift.SetValue(@thrift.DoubleKind, [
        @thrift.Double(1.5),
        @thrift.Double(1.0e-30),
        @thrift.Double(1.5),
        @thrift.Double(1.0e+30),
        @thrift.Double(1.0e-30),
        @thrift.Double(-0.0),
        @thrift.Double(1.0e-30),
        @thrift.Double(-0.0),
        @thrift.Double(-0.0),
        @thrift.Double(1.0e+30),
        @thrift.Double(-0.0),
        @thrift.Double(1.0e-30),
        @thrift.Double(1.0e-30),
        @thrift.Double(1.5),
      ]),
    ),
    (
      2,
      @thrift.Struct([
        (15, @thrift.I32(2147483647)),
        (
          127,
          @thrift.Struct([
            (
              127,
              @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(1.0e-30)]),
            ),
            (32767, @thrift.I64(9223372036854775807L)),
          ]),
        ),
        (
          2,
          @thrift.Struct([
            (-1, @thrift.Bool(false)),
            (-32768, @thrift.I64(-79L)),
            (32767, @thrift.I16(32767)),
          ]),
        ),
      ]),
    ),
    (
      31,
      @thrift.List(@thrift.I64Kind, [
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(0L),
        @thrift.I64(0L),
        @thrift.I64(9223372036854775807L),
        @thrift.I64(0L),
        @thrift.I64(0L),
        @thrift.I64(1L),
        @thrift.I64(-1L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(1L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(1L),
        @thrift.I64(-1L),
      ]),
    ),
  ])
  let wire = b"\x05\xff\xff\x03\x02\x0a\xfe\x01\xe7\x00\x00\x00\x00\x00\x00\xf8\x3f\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x00\x00\x00\x00\xf8\x3f\xea\x8c\xa0\x39\x59\x3e\x29\x46\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x00\x00\x00\x00\x00\x80\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x80\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00\x00\x00\x00\x00\x00\x00\x80\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x00\x00\x00\x00\xf8\x3f\x0c\x04\xf5\xfe\xff\xff\xff\x0f\x0c\xfe\x01\x0a\xfe\x01\x17\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x06\xfe\xff\x03\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x0c\x04\x02\x01\x06\xff\xff\x03\x9d\x01\x04\xfe\xff\x03\xfe\xff\x03\x00\x00\x09\x3e\xe6\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x00\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x00\x02\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x02\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x02\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (-32768, @thrift.I32(1)),
      (
        127,
        @thrift.SetValue(@thrift.DoubleKind, [
          @thrift.Double(1.5),
          @thrift.Double(1.0e-30),
          @thrift.Double(1.5),
          @thrift.Double(1.0e+30),
          @thrift.Double(1.0e-30),
          @thrift.Double(-0.0),
          @thrift.Double(1.0e-30),
          @thrift.Double(-0.0),
          @thrift.Double(-0.0),
          @thrift.Double(1.0e+30),
          @thrift.Double(-0.0),
          @thrift.Double(1.0e-30),
          @thrift.Double(1.0e-30),
          @thrift.Double(1.5),
        ]),
      ),
      (
        2,
        @thrift.Struct([
          (15, @thrift.I32(2147483647)),
          (
            127,
            @thrift.Struct([
              (
                127,
                @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(1.0e-30)]),
              ),
              (32767, @thrift.I64(9223372036854775807L)),
            ]),
          ),
          (
            2,
            @thrift.Struct([
              (-1, @thrift.Bool(false)),
              (-32768, @thrift.I64(-79L)),
              (32767, @thrift.I16(32767)),
            ]),
          ),
        ]),
      ),
      (
        31,
        @thrift.List(@thrift.I64Kind, [
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(0L),
          @thrift.I64(0L),
          @thrift.I64(9223372036854775807L),
          @thrift.I64(0L),
          @thrift.I64(0L),
          @thrift.I64(1L),
          @thrift.I64(-1L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(1L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(1L),
          @thrift.I64(-1L),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\xf1\x05\xff\xff\x03\x02\x0a\xfe\x01\xe7\x00\x00\x00\x00\x00\x00\xf8\x3f\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x00\x00\x00\x00\xf8\x3f\xea\x8c\xa0\x39\x59\x3e\x29\x46\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x00\x00\x00\x00\x00\x80\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x80\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00\x00\x00\x00\x00\x00\x00\x80\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x00\x00\x00\x00\xf8\x3f\x0c\x04\xf5\xfe\xff\xff\xff\x0f\x0c\xfe\x01\x0a\xfe\x01\x17\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x06\xfe\xff\x03\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x0c\x04\x02\x01\x06\xff\xff\x03\x9d\x01\x04\xfe\xff\x03\xfe\xff\x03\x00\x00\x09\x3e\xe6\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x00\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x00\x02\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x02\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x02\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 92" {
  let original = @thrift.Struct([(-1, @thrift.Double(1.0e+30))])
  let wire = b"\x04\xff\xff\x46\x29\x3e\x59\x39\xa0\x8c\xea\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-1, @thrift.Double(1.0e+30))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0c\x04\xff\xff\x46\x29\x3e\x59\x39\xa0\x8c\xea\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 92" {
  let original = @thrift.Struct([(-1, @thrift.Double(1.0e+30))])
  let wire = b"\x07\x01\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-1, @thrift.Double(1.0e+30))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0b\x07\x01\xea\x8c\xa0\x39\x59\x3e\x29\x46\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 93" {
  let original = @thrift.Struct([
    (1, @thrift.I64(51L)),
    (31, @thrift.Binary(b"\x00\xff\xfe")),
  ])
  let wire = b"\x0a\x00\x01\x00\x00\x00\x00\x00\x00\x00\x33\x0b\x00\x1f\x00\x00\x00\x03\x00\xff\xfe\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (1, @thrift.I64(51L)),
      (31, @thrift.Binary(b"\x00\xff\xfe")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x16\x0a\x00\x01\x00\x00\x00\x00\x00\x00\x00\x33\x0b\x00\x1f\x00\x00\x00\x03\x00\xff\xfe\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 93" {
  let original = @thrift.Struct([
    (1, @thrift.I64(51L)),
    (31, @thrift.Binary(b"\x00\xff\xfe")),
  ])
  let wire = b"\x16\x66\x08\x3e\x03\x00\xff\xfe\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (1, @thrift.I64(51L)),
      (31, @thrift.Binary(b"\x00\xff\xfe")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x09\x16\x66\x08\x3e\x03\x00\xff\xfe\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 94" {
  let original = @thrift.Struct([
    (2, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (-32768, @thrift.Byte(127)),
    (31, @thrift.I64(-62L)),
  ])
  let wire = b"\x0b\x00\x02\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x80\x00\x7f\x0a\x00\x1f\xff\xff\xff\xff\xff\xff\xff\xc2\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (-32768, @thrift.Byte(127)),
      (31, @thrift.I64(-62L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x21\x0b\x00\x02\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x80\x00\x7f\x0a\x00\x1f\xff\xff\xff\xff\xff\xff\xff\xc2\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 94" {
  let original = @thrift.Struct([
    (2, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (-32768, @thrift.Byte(127)),
    (31, @thrift.I64(-62L)),
  ])
  let wire = b"\x28\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\xff\xff\x03\x7f\x06\x3e\x7b\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (-32768, @thrift.Byte(127)),
      (31, @thrift.I64(-62L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x15\x28\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\xff\xff\x03\x7f\x06\x3e\x7b\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 95" {
  let original = @thrift.Struct([
    (2, @thrift.Bool(true)),
    (31, @thrift.Double(1.5)),
    (16, @thrift.I16(-19)),
    (
      0,
      @thrift.List(@thrift.MapKind, [
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.SetKind), []),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.SetKind), [
          (
            @thrift.I16(0),
            @thrift.SetValue(@thrift.BinaryKind, [
              @thrift.Binary(b"\x00\xff\xfe"),
            ]),
          ),
          (
            @thrift.I16(1),
            @thrift.SetValue(@thrift.I64Kind, [
              @thrift.I64(0L),
              @thrift.I64(-9223372036854775808L),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.MapKind), [
          (
            @thrift.Bool(true),
            @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
              (@thrift.I64(1L), @thrift.Byte(-1)),
            ]),
          ),
          (
            @thrift.Bool(false),
            @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I32Kind), []),
          ),
          (
            @thrift.Bool(false),
            @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ByteKind), [
              (@thrift.Bool(false), @thrift.Byte(1)),
              (@thrift.Bool(false), @thrift.Byte(-1)),
              (@thrift.Bool(false), @thrift.Byte(127)),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I64Kind), [
          (@thrift.I64(-1L), @thrift.I64(9223372036854775807L)),
          (@thrift.I64(-1L), @thrift.I64(0L)),
          (@thrift.I64(1L), @thrift.I64(0L)),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ListKind), [
          (
            @thrift.Binary(b""),
            @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)]),
          ),
          (@thrift.Binary(b"\x00\xff\xfe"), @thrift.List(@thrift.I64Kind, [])),
          (
            @thrift.Binary(b""),
            @thrift.List(@thrift.BinaryKind, [
              @thrift.Binary(b""),
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.ByteKind), [
          (@thrift.I16(0), @thrift.Byte(-1)),
          (@thrift.I16(32767), @thrift.Byte(0)),
          (@thrift.I16(32767), @thrift.Byte(127)),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
          (@thrift.Byte(127), @thrift.Struct([(0, @thrift.Byte(-128))])),
          (
            @thrift.Byte(127),
            @thrift.Struct([
              (2, @thrift.Byte(0)),
              (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            ]),
          ),
          (@thrift.Byte(-1), @thrift.Struct([])),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.BinaryKind), [
          (
            @thrift.Binary(
              b"\xf6\x04\x0c\xfd\x09\xe1\x9e\xdc\x96\x64\xe4\x38\xdb\x2d\xdd\x53\xee",
            ),
            @thrift.Binary(b"\x00\xff\xfe"),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.MapKind), [
          (
            @thrift.Byte(127),
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
              (@thrift.I32(-2147483648), @thrift.I16(-32768)),
            ]),
          ),
          (
            @thrift.Byte(-46),
            @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
              (@thrift.Bool(false), @thrift.Bool(false)),
            ]),
          ),
          (
            @thrift.Byte(1),
            @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BinaryKind), [
              (@thrift.Byte(0), @thrift.Binary(b"")),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I32Kind), [
          (@thrift.Bool(true), @thrift.I32(-1)),
          (@thrift.Bool(false), @thrift.I32(-2147483648)),
          (@thrift.Bool(false), @thrift.I32(-2147483648)),
        ]),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I64Kind), []),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BinaryKind), [
          (
            @thrift.Bool(false),
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ),
          (@thrift.Bool(true), @thrift.Binary(b"\x00\xff\xfe")),
          (
            @thrift.Bool(false),
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ByteKind), [
          (@thrift.I32(1), @thrift.Byte(1)),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ListKind), [
          (@thrift.Bool(false), @thrift.List(@thrift.I32Kind, [])),
          (
            @thrift.Bool(true),
            @thrift.List(@thrift.BinaryKind, [
              @thrift.Binary(
                b"\x3e\xc7\x52\xea\x57\x37\x77\x08\x3e\x09\x7d\xc1\x4f\xc9\xd4\xa5\x77",
              ),
              @thrift.Binary(
                b"\x3a\x5c\x94\x4b\x9f\xf6\xde\x36\x4c\xde\x74\x31\xb8\xbf\x68\xf5\xec",
              ),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ListKind), [
          (
            @thrift.Bool(true),
            @thrift.List(@thrift.BoolKind, [@thrift.Bool(true)]),
          ),
        ]),
      ]),
    ),
  ])
  let wire = b"\x02\x00\x02\x01\x04\x00\x1f\x3f\xf8\x00\x00\x00\x00\x00\x00\x06\x00\x10\xff\xed\x0f\x00\x00\x0d\x00\x00\x00\x0f\x06\x0e\x00\x00\x00\x00\x06\x0e\x00\x00\x00\x02\x00\x00\x0b\x00\x00\x00\x01\x00\x00\x00\x03\x00\xff\xfe\x00\x01\x0a\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x02\x0d\x00\x00\x00\x03\x01\x0a\x03\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\xff\x00\x06\x08\x00\x00\x00\x00\x00\x02\x03\x00\x00\x00\x03\x00\x01\x00\xff\x00\x7f\x0a\x0a\x00\x00\x00\x03\xff\xff\xff\xff\xff\xff\xff\xff\x7f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x0f\x00\x00\x00\x03\x00\x00\x00\x00\x02\x00\x00\x00\x01\x00\x00\x00\x00\x03\x00\xff\xfe\x0a\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\x03\x00\x00\x00\x03\x00\x00\xff\x7f\xff\x00\x7f\xff\x7f\x03\x0c\x00\x00\x00\x03\x7f\x03\x00\x00\x80\x00\x7f\x03\x00\x02\x00\x0b\x00\x0e\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\xff\x00\x0b\x0b\x00\x00\x00\x01\x00\x00\x00\x11\xf6\x04\x0c\xfd\x09\xe1\x9e\xdc\x96\x64\xe4\x38\xdb\x2d\xdd\x53\xee\x00\x00\x00\x03\x00\xff\xfe\x03\x0d\x00\x00\x00\x03\x7f\x08\x06\x00\x00\x00\x01\x80\x00\x00\x00\x80\x00\xd2\x02\x02\x00\x00\x00\x01\x00\x00\x01\x03\x0b\x00\x00\x00\x01\x00\x00\x00\x00\x00\x02\x08\x00\x00\x00\x03\x01\xff\xff\xff\xff\x00\x80\x00\x00\x00\x00\x80\x00\x00\x00\x06\x0a\x00\x00\x00\x00\x02\x0b\x00\x00\x00\x03\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x08\x03\x00\x00\x00\x01\x00\x00\x00\x01\x01\x02\x0f\x00\x00\x00\x02\x00\x08\x00\x00\x00\x00\x01\x0b\x00\x00\x00\x02\x00\x00\x00\x11\x3e\xc7\x52\xea\x57\x37\x77\x08\x3e\x09\x7d\xc1\x4f\xc9\xd4\xa5\x77\x00\x00\x00\x11\x3a\x5c\x94\x4b\x9f\xf6\xde\x36\x4c\xde\x74\x31\xb8\xbf\x68\xf5\xec\x02\x0f\x00\x00\x00\x01\x01\x02\x00\x00\x00\x01\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.Bool(true)),
      (31, @thrift.Double(1.5)),
      (16, @thrift.I16(-19)),
      (
        0,
        @thrift.List(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.SetKind), []),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.SetKind), [
            (
              @thrift.I16(0),
              @thrift.SetValue(@thrift.BinaryKind, [
                @thrift.Binary(b"\x00\xff\xfe"),
              ]),
            ),
            (
              @thrift.I16(1),
              @thrift.SetValue(@thrift.I64Kind, [
                @thrift.I64(0L),
                @thrift.I64(-9223372036854775808L),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.MapKind), [
            (
              @thrift.Bool(true),
              @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
                (@thrift.I64(1L), @thrift.Byte(-1)),
              ]),
            ),
            (
              @thrift.Bool(false),
              @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I32Kind), []),
            ),
            (
              @thrift.Bool(false),
              @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ByteKind), [
                (@thrift.Bool(false), @thrift.Byte(1)),
                (@thrift.Bool(false), @thrift.Byte(-1)),
                (@thrift.Bool(false), @thrift.Byte(127)),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I64Kind), [
            (@thrift.I64(-1L), @thrift.I64(9223372036854775807L)),
            (@thrift.I64(-1L), @thrift.I64(0L)),
            (@thrift.I64(1L), @thrift.I64(0L)),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ListKind), [
            (
              @thrift.Binary(b""),
              @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)]),
            ),
            (@thrift.Binary(b"\x00\xff\xfe"), @thrift.List(@thrift.I64Kind, [])),
            (
              @thrift.Binary(b""),
              @thrift.List(@thrift.BinaryKind, [
                @thrift.Binary(b""),
                @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.ByteKind), [
            (@thrift.I16(0), @thrift.Byte(-1)),
            (@thrift.I16(32767), @thrift.Byte(0)),
            (@thrift.I16(32767), @thrift.Byte(127)),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
            (@thrift.Byte(127), @thrift.Struct([(0, @thrift.Byte(-128))])),
            (
              @thrift.Byte(127),
              @thrift.Struct([
                (2, @thrift.Byte(0)),
                (
                  14,
                  @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
                ),
              ]),
            ),
            (@thrift.Byte(-1), @thrift.Struct([])),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.BinaryKind), [
            (
              @thrift.Binary(
                b"\xf6\x04\x0c\xfd\x09\xe1\x9e\xdc\x96\x64\xe4\x38\xdb\x2d\xdd\x53\xee",
              ),
              @thrift.Binary(b"\x00\xff\xfe"),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.MapKind), [
            (
              @thrift.Byte(127),
              @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
                (@thrift.I32(-2147483648), @thrift.I16(-32768)),
              ]),
            ),
            (
              @thrift.Byte(-46),
              @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
                (@thrift.Bool(false), @thrift.Bool(false)),
              ]),
            ),
            (
              @thrift.Byte(1),
              @thrift.MapValue(
                Some(@thrift.ByteKind),
                Some(@thrift.BinaryKind),
                [(@thrift.Byte(0), @thrift.Binary(b""))],
              ),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I32Kind), [
            (@thrift.Bool(true), @thrift.I32(-1)),
            (@thrift.Bool(false), @thrift.I32(-2147483648)),
            (@thrift.Bool(false), @thrift.I32(-2147483648)),
          ]),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I64Kind), []),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BinaryKind), [
            (
              @thrift.Bool(false),
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            ),
            (@thrift.Bool(true), @thrift.Binary(b"\x00\xff\xfe")),
            (
              @thrift.Bool(false),
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ByteKind), [
            (@thrift.I32(1), @thrift.Byte(1)),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ListKind), [
            (@thrift.Bool(false), @thrift.List(@thrift.I32Kind, [])),
            (
              @thrift.Bool(true),
              @thrift.List(@thrift.BinaryKind, [
                @thrift.Binary(
                  b"\x3e\xc7\x52\xea\x57\x37\x77\x08\x3e\x09\x7d\xc1\x4f\xc9\xd4\xa5\x77",
                ),
                @thrift.Binary(
                  b"\x3a\x5c\x94\x4b\x9f\xf6\xde\x36\x4c\xde\x74\x31\xb8\xbf\x68\xf5\xec",
                ),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ListKind), [
            (
              @thrift.Bool(true),
              @thrift.List(@thrift.BoolKind, [@thrift.Bool(true)]),
            ),
          ]),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\xfe\x02\x00\x02\x01\x04\x00\x1f\x3f\xf8\x00\x00\x00\x00\x00\x00\x06\x00\x10\xff\xed\x0f\x00\x00\x0d\x00\x00\x00\x0f\x06\x0e\x00\x00\x00\x00\x06\x0e\x00\x00\x00\x02\x00\x00\x0b\x00\x00\x00\x01\x00\x00\x00\x03\x00\xff\xfe\x00\x01\x0a\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x02\x0d\x00\x00\x00\x03\x01\x0a\x03\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\xff\x00\x06\x08\x00\x00\x00\x00\x00\x02\x03\x00\x00\x00\x03\x00\x01\x00\xff\x00\x7f\x0a\x0a\x00\x00\x00\x03\xff\xff\xff\xff\xff\xff\xff\xff\x7f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x0f\x00\x00\x00\x03\x00\x00\x00\x00\x02\x00\x00\x00\x01\x00\x00\x00\x00\x03\x00\xff\xfe\x0a\x00\x00\x00\x00\x00\x00\x00\x00\x0b\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\x03\x00\x00\x00\x03\x00\x00\xff\x7f\xff\x00\x7f\xff\x7f\x03\x0c\x00\x00\x00\x03\x7f\x03\x00\x00\x80\x00\x7f\x03\x00\x02\x00\x0b\x00\x0e\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\xff\x00\x0b\x0b\x00\x00\x00\x01\x00\x00\x00\x11\xf6\x04\x0c\xfd\x09\xe1\x9e\xdc\x96\x64\xe4\x38\xdb\x2d\xdd\x53\xee\x00\x00\x00\x03\x00\xff\xfe\x03\x0d\x00\x00\x00\x03\x7f\x08\x06\x00\x00\x00\x01\x80\x00\x00\x00\x80\x00\xd2\x02\x02\x00\x00\x00\x01\x00\x00\x01\x03\x0b\x00\x00\x00\x01\x00\x00\x00\x00\x00\x02\x08\x00\x00\x00\x03\x01\xff\xff\xff\xff\x00\x80\x00\x00\x00\x00\x80\x00\x00\x00\x06\x0a\x00\x00\x00\x00\x02\x0b\x00\x00\x00\x03\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x08\x03\x00\x00\x00\x01\x00\x00\x00\x01\x01\x02\x0f\x00\x00\x00\x02\x00\x08\x00\x00\x00\x00\x01\x0b\x00\x00\x00\x02\x00\x00\x00\x11\x3e\xc7\x52\xea\x57\x37\x77\x08\x3e\x09\x7d\xc1\x4f\xc9\xd4\xa5\x77\x00\x00\x00\x11\x3a\x5c\x94\x4b\x9f\xf6\xde\x36\x4c\xde\x74\x31\xb8\xbf\x68\xf5\xec\x02\x0f\x00\x00\x00\x01\x01\x02\x00\x00\x00\x01\x01\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 95" {
  let original = @thrift.Struct([
    (2, @thrift.Bool(true)),
    (31, @thrift.Double(1.5)),
    (16, @thrift.I16(-19)),
    (
      0,
      @thrift.List(@thrift.MapKind, [
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.SetKind), []),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.SetKind), [
          (
            @thrift.I16(0),
            @thrift.SetValue(@thrift.BinaryKind, [
              @thrift.Binary(b"\x00\xff\xfe"),
            ]),
          ),
          (
            @thrift.I16(1),
            @thrift.SetValue(@thrift.I64Kind, [
              @thrift.I64(0L),
              @thrift.I64(-9223372036854775808L),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.MapKind), [
          (
            @thrift.Bool(true),
            @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
              (@thrift.I64(1L), @thrift.Byte(-1)),
            ]),
          ),
          (
            @thrift.Bool(false),
            @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I32Kind), []),
          ),
          (
            @thrift.Bool(false),
            @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ByteKind), [
              (@thrift.Bool(false), @thrift.Byte(1)),
              (@thrift.Bool(false), @thrift.Byte(-1)),
              (@thrift.Bool(false), @thrift.Byte(127)),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I64Kind), [
          (@thrift.I64(-1L), @thrift.I64(9223372036854775807L)),
          (@thrift.I64(-1L), @thrift.I64(0L)),
          (@thrift.I64(1L), @thrift.I64(0L)),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ListKind), [
          (
            @thrift.Binary(b""),
            @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)]),
          ),
          (@thrift.Binary(b"\x00\xff\xfe"), @thrift.List(@thrift.I64Kind, [])),
          (
            @thrift.Binary(b""),
            @thrift.List(@thrift.BinaryKind, [
              @thrift.Binary(b""),
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.ByteKind), [
          (@thrift.I16(0), @thrift.Byte(-1)),
          (@thrift.I16(32767), @thrift.Byte(0)),
          (@thrift.I16(32767), @thrift.Byte(127)),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
          (@thrift.Byte(127), @thrift.Struct([(0, @thrift.Byte(-128))])),
          (
            @thrift.Byte(127),
            @thrift.Struct([
              (2, @thrift.Byte(0)),
              (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            ]),
          ),
          (@thrift.Byte(-1), @thrift.Struct([])),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.BinaryKind), [
          (
            @thrift.Binary(
              b"\xf6\x04\x0c\xfd\x09\xe1\x9e\xdc\x96\x64\xe4\x38\xdb\x2d\xdd\x53\xee",
            ),
            @thrift.Binary(b"\x00\xff\xfe"),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.MapKind), [
          (
            @thrift.Byte(127),
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
              (@thrift.I32(-2147483648), @thrift.I16(-32768)),
            ]),
          ),
          (
            @thrift.Byte(-46),
            @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
              (@thrift.Bool(false), @thrift.Bool(false)),
            ]),
          ),
          (
            @thrift.Byte(1),
            @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.BinaryKind), [
              (@thrift.Byte(0), @thrift.Binary(b"")),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I32Kind), [
          (@thrift.Bool(true), @thrift.I32(-1)),
          (@thrift.Bool(false), @thrift.I32(-2147483648)),
          (@thrift.Bool(false), @thrift.I32(-2147483648)),
        ]),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.I64Kind), []),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BinaryKind), [
          (
            @thrift.Bool(false),
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ),
          (@thrift.Bool(true), @thrift.Binary(b"\x00\xff\xfe")),
          (
            @thrift.Bool(false),
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ByteKind), [
          (@thrift.I32(1), @thrift.Byte(1)),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ListKind), [
          (@thrift.Bool(false), @thrift.List(@thrift.I32Kind, [])),
          (
            @thrift.Bool(true),
            @thrift.List(@thrift.BinaryKind, [
              @thrift.Binary(
                b"\x3e\xc7\x52\xea\x57\x37\x77\x08\x3e\x09\x7d\xc1\x4f\xc9\xd4\xa5\x77",
              ),
              @thrift.Binary(
                b"\x3a\x5c\x94\x4b\x9f\xf6\xde\x36\x4c\xde\x74\x31\xb8\xbf\x68\xf5\xec",
              ),
            ]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ListKind), [
          (
            @thrift.Bool(true),
            @thrift.List(@thrift.BoolKind, [@thrift.Bool(true)]),
          ),
        ]),
      ]),
    ),
  ])
  let wire = b"\x21\x07\x3e\x00\x00\x00\x00\x00\x00\xf8\x3f\x04\x20\x25\x09\x00\xfb\x0f\x00\x02\x4a\x00\x18\x03\x00\xff\xfe\x02\x26\x00\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x03\x1b\x01\x01\x63\x02\xff\x02\x00\x02\x03\x13\x02\x01\x02\xff\x02\x7f\x03\x66\x01\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x01\x00\x02\x00\x03\x89\x00\x11\x02\x03\x00\xff\xfe\x06\x00\x28\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x43\x00\xff\xfe\xff\x03\x00\xfe\xff\x03\x7f\x03\x3c\x7f\x03\x00\x80\x00\x7f\x23\x00\xc8\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\xff\x00\x01\x88\x11\xf6\x04\x0c\xfd\x09\xe1\x9e\xdc\x96\x64\xe4\x38\xdb\x2d\xdd\x53\xee\x03\x00\xff\xfe\x03\x3b\x7f\x01\x54\xff\xff\xff\xff\x0f\xff\xff\x03\xd2\x01\x11\x02\x02\x01\x01\x38\x00\x00\x03\x15\x01\x01\x02\xff\xff\xff\xff\x0f\x02\xff\xff\xff\xff\x0f\x00\x03\x18\x02\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\x03\x00\xff\xfe\x02\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\x53\x02\x01\x02\x19\x02\x05\x01\x28\x11\x3e\xc7\x52\xea\x57\x37\x77\x08\x3e\x09\x7d\xc1\x4f\xc9\xd4\xa5\x77\x11\x3a\x5c\x94\x4b\x9f\xf6\xde\x36\x4c\xde\x74\x31\xb8\xbf\x68\xf5\xec\x01\x19\x01\x11\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.Bool(true)),
      (31, @thrift.Double(1.5)),
      (16, @thrift.I16(-19)),
      (
        0,
        @thrift.List(@thrift.MapKind, [
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.SetKind), [
            (
              @thrift.I16(0),
              @thrift.SetValue(@thrift.BinaryKind, [
                @thrift.Binary(b"\x00\xff\xfe"),
              ]),
            ),
            (
              @thrift.I16(1),
              @thrift.SetValue(@thrift.I64Kind, [
                @thrift.I64(0L),
                @thrift.I64(-9223372036854775808L),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.MapKind), [
            (
              @thrift.Bool(true),
              @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
                (@thrift.I64(1L), @thrift.Byte(-1)),
              ]),
            ),
            (@thrift.Bool(false), @thrift.MapValue(None, None, [])),
            (
              @thrift.Bool(false),
              @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ByteKind), [
                (@thrift.Bool(false), @thrift.Byte(1)),
                (@thrift.Bool(false), @thrift.Byte(-1)),
                (@thrift.Bool(false), @thrift.Byte(127)),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I64Kind), [
            (@thrift.I64(-1L), @thrift.I64(9223372036854775807L)),
            (@thrift.I64(-1L), @thrift.I64(0L)),
            (@thrift.I64(1L), @thrift.I64(0L)),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ListKind), [
            (
              @thrift.Binary(b""),
              @thrift.List(@thrift.BoolKind, [@thrift.Bool(false)]),
            ),
            (@thrift.Binary(b"\x00\xff\xfe"), @thrift.List(@thrift.I64Kind, [])),
            (
              @thrift.Binary(b""),
              @thrift.List(@thrift.BinaryKind, [
                @thrift.Binary(b""),
                @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.ByteKind), [
            (@thrift.I16(0), @thrift.Byte(-1)),
            (@thrift.I16(32767), @thrift.Byte(0)),
            (@thrift.I16(32767), @thrift.Byte(127)),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
            (@thrift.Byte(127), @thrift.Struct([(0, @thrift.Byte(-128))])),
            (
              @thrift.Byte(127),
              @thrift.Struct([
                (2, @thrift.Byte(0)),
                (
                  14,
                  @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
                ),
              ]),
            ),
            (@thrift.Byte(-1), @thrift.Struct([])),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.BinaryKind), [
            (
              @thrift.Binary(
                b"\xf6\x04\x0c\xfd\x09\xe1\x9e\xdc\x96\x64\xe4\x38\xdb\x2d\xdd\x53\xee",
              ),
              @thrift.Binary(b"\x00\xff\xfe"),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.MapKind), [
            (
              @thrift.Byte(127),
              @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
                (@thrift.I32(-2147483648), @thrift.I16(-32768)),
              ]),
            ),
            (
              @thrift.Byte(-46),
              @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
                (@thrift.Bool(false), @thrift.Bool(false)),
              ]),
            ),
            (
              @thrift.Byte(1),
              @thrift.MapValue(
                Some(@thrift.ByteKind),
                Some(@thrift.BinaryKind),
                [(@thrift.Byte(0), @thrift.Binary(b""))],
              ),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I32Kind), [
            (@thrift.Bool(true), @thrift.I32(-1)),
            (@thrift.Bool(false), @thrift.I32(-2147483648)),
            (@thrift.Bool(false), @thrift.I32(-2147483648)),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BinaryKind), [
            (
              @thrift.Bool(false),
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            ),
            (@thrift.Bool(true), @thrift.Binary(b"\x00\xff\xfe")),
            (
              @thrift.Bool(false),
              @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.ByteKind), [
            (@thrift.I32(1), @thrift.Byte(1)),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ListKind), [
            (@thrift.Bool(false), @thrift.List(@thrift.I32Kind, [])),
            (
              @thrift.Bool(true),
              @thrift.List(@thrift.BinaryKind, [
                @thrift.Binary(
                  b"\x3e\xc7\x52\xea\x57\x37\x77\x08\x3e\x09\x7d\xc1\x4f\xc9\xd4\xa5\x77",
                ),
                @thrift.Binary(
                  b"\x3a\x5c\x94\x4b\x9f\xf6\xde\x36\x4c\xde\x74\x31\xb8\xbf\x68\xf5\xec",
                ),
              ]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ListKind), [
            (
              @thrift.Bool(true),
              @thrift.List(@thrift.BoolKind, [@thrift.Bool(true)]),
            ),
          ]),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\x1b\x21\x07\x3e\x00\x00\x00\x00\x00\x00\xf8\x3f\x04\x20\x25\x09\x00\xfb\x0f\x00\x02\x4a\x00\x18\x03\x00\xff\xfe\x02\x26\x00\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x03\x1b\x01\x01\x63\x02\xff\x02\x00\x02\x03\x13\x02\x01\x02\xff\x02\x7f\x03\x66\x01\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x01\x00\x02\x00\x03\x89\x00\x11\x02\x03\x00\xff\xfe\x06\x00\x28\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x43\x00\xff\xfe\xff\x03\x00\xfe\xff\x03\x7f\x03\x3c\x7f\x03\x00\x80\x00\x7f\x23\x00\xc8\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\xff\x00\x01\x88\x11\xf6\x04\x0c\xfd\x09\xe1\x9e\xdc\x96\x64\xe4\x38\xdb\x2d\xdd\x53\xee\x03\x00\xff\xfe\x03\x3b\x7f\x01\x54\xff\xff\xff\xff\x0f\xff\xff\x03\xd2\x01\x11\x02\x02\x01\x01\x38\x00\x00\x03\x15\x01\x01\x02\xff\xff\xff\xff\x0f\x02\xff\xff\xff\xff\x0f\x00\x03\x18\x02\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\x03\x00\xff\xfe\x02\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\x53\x02\x01\x02\x19\x02\x05\x01\x28\x11\x3e\xc7\x52\xea\x57\x37\x77\x08\x3e\x09\x7d\xc1\x4f\xc9\xd4\xa5\x77\x11\x3a\x5c\x94\x4b\x9f\xf6\xde\x36\x4c\xde\x74\x31\xb8\xbf\x68\xf5\xec\x01\x19\x01\x11\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 96" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 96" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 97" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 97" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 98" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 98" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 99" {
  let original = @thrift.Struct([
    (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
  ])
  let wire = b"\x0b\x00\x0f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x12\x0b\x00\x0f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 99" {
  let original = @thrift.Struct([
    (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
  ])
  let wire = b"\xf8\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0d\xf8\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 100" {
  let original = @thrift.Struct([
    (
      31,
      @thrift.List(@thrift.SetKind, [
        @thrift.SetValue(@thrift.BinaryKind, [
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        ]),
      ]),
    ),
    (32767, @thrift.Bool(true)),
  ])
  let wire = b"\x0f\x00\x1f\x0e\x00\x00\x00\x01\x0b\x00\x00\x00\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\x7f\xff\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        31,
        @thrift.List(@thrift.SetKind, [
          @thrift.SetValue(@thrift.BinaryKind, [
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ]),
        ]),
      ),
      (32767, @thrift.Bool(true)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x20\x0f\x00\x1f\x0e\x00\x00\x00\x01\x0b\x00\x00\x00\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\x7f\xff\x01\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 100" {
  let original = @thrift.Struct([
    (
      31,
      @thrift.List(@thrift.SetKind, [
        @thrift.SetValue(@thrift.BinaryKind, [
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        ]),
      ]),
    ),
    (32767, @thrift.Bool(true)),
  ])
  let wire = b"\x09\x3e\x1a\x18\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\xfe\xff\x03\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        31,
        @thrift.List(@thrift.SetKind, [
          @thrift.SetValue(@thrift.BinaryKind, [
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ]),
        ]),
      ),
      (32767, @thrift.Bool(true)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x14\x09\x3e\x1a\x18\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x01\xfe\xff\x03\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 101" {
  let original = @thrift.Struct([
    (32767, @thrift.I16(1)),
    (2, @thrift.Struct([(2, @thrift.I16(-1))])),
  ])
  let wire = b"\x06\x7f\xff\x00\x01\x0c\x00\x02\x06\x00\x02\xff\xff\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.I16(1)),
      (2, @thrift.Struct([(2, @thrift.I16(-1))])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0f\x06\x7f\xff\x00\x01\x0c\x00\x02\x06\x00\x02\xff\xff\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 101" {
  let original = @thrift.Struct([
    (32767, @thrift.I16(1)),
    (2, @thrift.Struct([(2, @thrift.I16(-1))])),
  ])
  let wire = b"\x04\xfe\xff\x03\x02\x0c\x04\x24\x01\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.I16(1)),
      (2, @thrift.Struct([(2, @thrift.I16(-1))])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0b\x04\xfe\xff\x03\x02\x0c\x04\x24\x01\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 102" {
  let original = @thrift.Struct([
    (
      -32768,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), []),
    ),
  ])
  let wire = b"\x0d\x80\x00\x0b\x03\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        -32768,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), []),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0a\x0d\x80\x00\x0b\x03\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 102" {
  let original = @thrift.Struct([
    (
      -32768,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), []),
    ),
  ])
  let wire = b"\x0b\xff\xff\x03\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-32768, @thrift.MapValue(None, None, []))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x06\x0b\xff\xff\x03\x00\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 103" {
  let original = @thrift.Struct([
    (31, @thrift.Double(1.5)),
    (0, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (-32768, @thrift.I32(2147483647)),
    (-1, @thrift.List(@thrift.I64Kind, [@thrift.I64(0L), @thrift.I64(-1L)])),
  ])
  let wire = b"\x04\x00\x1f\x3f\xf8\x00\x00\x00\x00\x00\x00\x0b\x00\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x08\x80\x00\x7f\xff\xff\xff\x0f\xff\xff\x0a\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\xff\xff\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Double(1.5)),
      (0, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (-32768, @thrift.I32(2147483647)),
      (-1, @thrift.List(@thrift.I64Kind, [@thrift.I64(0L), @thrift.I64(-1L)])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x3c\x04\x00\x1f\x3f\xf8\x00\x00\x00\x00\x00\x00\x0b\x00\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x08\x80\x00\x7f\xff\xff\xff\x0f\xff\xff\x0a\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\xff\xff\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 103" {
  let original = @thrift.Struct([
    (31, @thrift.Double(1.5)),
    (0, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (-32768, @thrift.I32(2147483647)),
    (-1, @thrift.List(@thrift.I64Kind, [@thrift.I64(0L), @thrift.I64(-1L)])),
  ])
  let wire = b"\x07\x3e\x00\x00\x00\x00\x00\x00\xf8\x3f\x08\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x05\xff\xff\x03\xfe\xff\xff\xff\x0f\x09\x01\x26\x00\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Double(1.5)),
      (0, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (-32768, @thrift.I32(2147483647)),
      (-1, @thrift.List(@thrift.I64Kind, [@thrift.I64(0L), @thrift.I64(-1L)])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x26\x07\x3e\x00\x00\x00\x00\x00\x00\xf8\x3f\x08\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x05\xff\xff\x03\xfe\xff\xff\xff\x0f\x09\x01\x26\x00\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 104" {
  let original = @thrift.Struct([
    (
      15,
      @thrift.Binary(
        b"\x1e\x86\x0b\x8f\x51\x40\x65\x5a\xc7\x66\x6b\x72\x79\x7b\x51\x16\x03",
      ),
    ),
  ])
  let wire = b"\x0b\x00\x0f\x00\x00\x00\x11\x1e\x86\x0b\x8f\x51\x40\x65\x5a\xc7\x66\x6b\x72\x79\x7b\x51\x16\x03\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        15,
        @thrift.Binary(
          b"\x1e\x86\x0b\x8f\x51\x40\x65\x5a\xc7\x66\x6b\x72\x79\x7b\x51\x16\x03",
        ),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x19\x0b\x00\x0f\x00\x00\x00\x11\x1e\x86\x0b\x8f\x51\x40\x65\x5a\xc7\x66\x6b\x72\x79\x7b\x51\x16\x03\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 104" {
  let original = @thrift.Struct([
    (
      15,
      @thrift.Binary(
        b"\x1e\x86\x0b\x8f\x51\x40\x65\x5a\xc7\x66\x6b\x72\x79\x7b\x51\x16\x03",
      ),
    ),
  ])
  let wire = b"\xf8\x11\x1e\x86\x0b\x8f\x51\x40\x65\x5a\xc7\x66\x6b\x72\x79\x7b\x51\x16\x03\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        15,
        @thrift.Binary(
          b"\x1e\x86\x0b\x8f\x51\x40\x65\x5a\xc7\x66\x6b\x72\x79\x7b\x51\x16\x03",
        ),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x14\xf8\x11\x1e\x86\x0b\x8f\x51\x40\x65\x5a\xc7\x66\x6b\x72\x79\x7b\x51\x16\x03\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 105" {
  let original = @thrift.Struct([
    (
      -1,
      @thrift.Struct([
        (1, @thrift.I16(0)),
        (127, @thrift.List(@thrift.I64Kind, [@thrift.I64(1L)])),
        (
          15,
          @thrift.List(@thrift.MapKind, [
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I64Kind), [
              (@thrift.I32(1), @thrift.I64(-1L)),
            ]),
            @thrift.MapValue(
              Some(@thrift.BinaryKind),
              Some(@thrift.BinaryKind),
              [(@thrift.Binary(b""), @thrift.Binary(b"\x00\xff\xfe"))],
            ),
          ]),
        ),
        (0, @thrift.I16(88)),
      ]),
    ),
    (
      14,
      @thrift.Struct([
        (14, @thrift.I64(-9223372036854775808L)),
        (
          127,
          @thrift.SetValue(@thrift.MapKind, [
            @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
              (@thrift.I64(-9223372036854775808L), @thrift.Byte(-35)),
              (@thrift.I64(-1L), @thrift.Byte(-1)),
            ]),
          ]),
        ),
        (1, @thrift.I32(12)),
        (15, @thrift.Struct([(16, @thrift.Bool(false))])),
      ]),
    ),
  ])
  let wire = b"\x0c\xff\xff\x06\x00\x01\x00\x00\x0f\x00\x7f\x0a\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\x0f\x00\x0f\x0d\x00\x00\x00\x02\x08\x0a\x00\x00\x00\x01\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x0b\x0b\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x03\x00\xff\xfe\x06\x00\x00\x00\x58\x00\x0c\x00\x0e\x0a\x00\x0e\x80\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x7f\x0d\x00\x00\x00\x01\x0a\x03\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\xdd\xff\xff\xff\xff\xff\xff\xff\xff\xff\x08\x00\x01\x00\x00\x00\x0c\x0c\x00\x0f\x02\x00\x10\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        -1,
        @thrift.Struct([
          (1, @thrift.I16(0)),
          (127, @thrift.List(@thrift.I64Kind, [@thrift.I64(1L)])),
          (
            15,
            @thrift.List(@thrift.MapKind, [
              @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I64Kind), [
                (@thrift.I32(1), @thrift.I64(-1L)),
              ]),
              @thrift.MapValue(
                Some(@thrift.BinaryKind),
                Some(@thrift.BinaryKind),
                [(@thrift.Binary(b""), @thrift.Binary(b"\x00\xff\xfe"))],
              ),
            ]),
          ),
          (0, @thrift.I16(88)),
        ]),
      ),
      (
        14,
        @thrift.Struct([
          (14, @thrift.I64(-9223372036854775808L)),
          (
            127,
            @thrift.SetValue(@thrift.MapKind, [
              @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
                (@thrift.I64(-9223372036854775808L), @thrift.Byte(-35)),
                (@thrift.I64(-1L), @thrift.Byte(-1)),
              ]),
            ]),
          ),
          (1, @thrift.I32(12)),
          (15, @thrift.Struct([(16, @thrift.Bool(false))])),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x88\x0c\xff\xff\x06\x00\x01\x00\x00\x0f\x00\x7f\x0a\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\x0f\x00\x0f\x0d\x00\x00\x00\x02\x08\x0a\x00\x00\x00\x01\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x0b\x0b\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x03\x00\xff\xfe\x06\x00\x00\x00\x58\x00\x0c\x00\x0e\x0a\x00\x0e\x80\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x7f\x0d\x00\x00\x00\x01\x0a\x03\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\xdd\xff\xff\xff\xff\xff\xff\xff\xff\xff\x08\x00\x01\x00\x00\x00\x0c\x0c\x00\x0f\x02\x00\x10\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 105" {
  let original = @thrift.Struct([
    (
      -1,
      @thrift.Struct([
        (1, @thrift.I16(0)),
        (127, @thrift.List(@thrift.I64Kind, [@thrift.I64(1L)])),
        (
          15,
          @thrift.List(@thrift.MapKind, [
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I64Kind), [
              (@thrift.I32(1), @thrift.I64(-1L)),
            ]),
            @thrift.MapValue(
              Some(@thrift.BinaryKind),
              Some(@thrift.BinaryKind),
              [(@thrift.Binary(b""), @thrift.Binary(b"\x00\xff\xfe"))],
            ),
          ]),
        ),
        (0, @thrift.I16(88)),
      ]),
    ),
    (
      14,
      @thrift.Struct([
        (14, @thrift.I64(-9223372036854775808L)),
        (
          127,
          @thrift.SetValue(@thrift.MapKind, [
            @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
              (@thrift.I64(-9223372036854775808L), @thrift.Byte(-35)),
              (@thrift.I64(-1L), @thrift.Byte(-1)),
            ]),
          ]),
        ),
        (1, @thrift.I32(12)),
        (15, @thrift.Struct([(16, @thrift.Bool(false))])),
      ]),
    ),
  ])
  let wire = b"\x0c\x01\x14\x00\x09\xfe\x01\x16\x02\x09\x1e\x2b\x01\x56\x02\x01\x01\x88\x00\x03\x00\xff\xfe\x04\x00\xb0\x01\x00\xfc\xe6\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x0a\xfe\x01\x1b\x02\x63\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xdd\x01\xff\x05\x02\x18\xec\x02\x20\x00\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        -1,
        @thrift.Struct([
          (1, @thrift.I16(0)),
          (127, @thrift.List(@thrift.I64Kind, [@thrift.I64(1L)])),
          (
            15,
            @thrift.List(@thrift.MapKind, [
              @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I64Kind), [
                (@thrift.I32(1), @thrift.I64(-1L)),
              ]),
              @thrift.MapValue(
                Some(@thrift.BinaryKind),
                Some(@thrift.BinaryKind),
                [(@thrift.Binary(b""), @thrift.Binary(b"\x00\xff\xfe"))],
              ),
            ]),
          ),
          (0, @thrift.I16(88)),
        ]),
      ),
      (
        14,
        @thrift.Struct([
          (14, @thrift.I64(-9223372036854775808L)),
          (
            127,
            @thrift.SetValue(@thrift.MapKind, [
              @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [
                (@thrift.I64(-9223372036854775808L), @thrift.Byte(-35)),
                (@thrift.I64(-1L), @thrift.Byte(-1)),
              ]),
            ]),
          ),
          (1, @thrift.I32(12)),
          (15, @thrift.Struct([(16, @thrift.Bool(false))])),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x44\x0c\x01\x14\x00\x09\xfe\x01\x16\x02\x09\x1e\x2b\x01\x56\x02\x01\x01\x88\x00\x03\x00\xff\xfe\x04\x00\xb0\x01\x00\xfc\xe6\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x0a\xfe\x01\x1b\x02\x63\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xdd\x01\xff\x05\x02\x18\xec\x02\x20\x00\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 106" {
  let original = @thrift.Struct([(14, @thrift.Byte(127))])
  let wire = b"\x03\x00\x0e\x7f\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.Byte(127))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x05\x03\x00\x0e\x7f\x00")
}

///|
test "Apache seeded CompactProtocol fixture 106" {
  let original = @thrift.Struct([(14, @thrift.Byte(127))])
  let wire = b"\xe3\x7f\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(14, @thrift.Byte(127))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x03\xe3\x7f\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 107" {
  let original = @thrift.Struct([
    (15, @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [])),
    (14, @thrift.Byte(1)),
    (-32768, @thrift.List(@thrift.DoubleKind, [])),
  ])
  let wire = b"\x0d\x00\x0f\x0a\x03\x00\x00\x00\x00\x03\x00\x0e\x01\x0f\x80\x00\x04\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [])),
      (14, @thrift.Byte(1)),
      (-32768, @thrift.List(@thrift.DoubleKind, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x16\x0d\x00\x0f\x0a\x03\x00\x00\x00\x00\x03\x00\x0e\x01\x0f\x80\x00\x04\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 107" {
  let original = @thrift.Struct([
    (15, @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ByteKind), [])),
    (14, @thrift.Byte(1)),
    (-32768, @thrift.List(@thrift.DoubleKind, [])),
  ])
  let wire = b"\xfb\x00\x03\x1c\x01\x09\xff\xff\x03\x07\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.MapValue(None, None, [])),
      (14, @thrift.Byte(1)),
      (-32768, @thrift.List(@thrift.DoubleKind, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0b\xfb\x00\x03\x1c\x01\x09\xff\xff\x03\x07\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 108" {
  let original = @thrift.Struct([
    (2, @thrift.I32(1)),
    (
      127,
      @thrift.Binary(
        b"\xc8\x98\x0d\x61\x27\xaa\x9b\x89\x49\x37\x6e\xfd\x3c\x81\x6d\x71\xa4",
      ),
    ),
    (31, @thrift.I32(2147483647)),
    (
      32767,
      @thrift.Struct([
        (14, @thrift.Bool(true)),
        (-32768, @thrift.Double(1.0e+30)),
        (127, @thrift.Binary(b"\x00\xff\xfe")),
      ]),
    ),
  ])
  let wire = b"\x08\x00\x02\x00\x00\x00\x01\x0b\x00\x7f\x00\x00\x00\x11\xc8\x98\x0d\x61\x27\xaa\x9b\x89\x49\x37\x6e\xfd\x3c\x81\x6d\x71\xa4\x08\x00\x1f\x7f\xff\xff\xff\x0c\x7f\xff\x02\x00\x0e\x01\x04\x80\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x0b\x00\x7f\x00\x00\x00\x03\x00\xff\xfe\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.I32(1)),
      (
        127,
        @thrift.Binary(
          b"\xc8\x98\x0d\x61\x27\xaa\x9b\x89\x49\x37\x6e\xfd\x3c\x81\x6d\x71\xa4",
        ),
      ),
      (31, @thrift.I32(2147483647)),
      (
        32767,
        @thrift.Struct([
          (14, @thrift.Bool(true)),
          (-32768, @thrift.Double(1.0e+30)),
          (127, @thrift.Binary(b"\x00\xff\xfe")),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x44\x08\x00\x02\x00\x00\x00\x01\x0b\x00\x7f\x00\x00\x00\x11\xc8\x98\x0d\x61\x27\xaa\x9b\x89\x49\x37\x6e\xfd\x3c\x81\x6d\x71\xa4\x08\x00\x1f\x7f\xff\xff\xff\x0c\x7f\xff\x02\x00\x0e\x01\x04\x80\x00\x46\x29\x3e\x59\x39\xa0\x8c\xea\x0b\x00\x7f\x00\x00\x00\x03\x00\xff\xfe\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 108" {
  let original = @thrift.Struct([
    (2, @thrift.I32(1)),
    (
      127,
      @thrift.Binary(
        b"\xc8\x98\x0d\x61\x27\xaa\x9b\x89\x49\x37\x6e\xfd\x3c\x81\x6d\x71\xa4",
      ),
    ),
    (31, @thrift.I32(2147483647)),
    (
      32767,
      @thrift.Struct([
        (14, @thrift.Bool(true)),
        (-32768, @thrift.Double(1.0e+30)),
        (127, @thrift.Binary(b"\x00\xff\xfe")),
      ]),
    ),
  ])
  let wire = b"\x25\x02\x08\xfe\x01\x11\xc8\x98\x0d\x61\x27\xaa\x9b\x89\x49\x37\x6e\xfd\x3c\x81\x6d\x71\xa4\x05\x3e\xfe\xff\xff\xff\x0f\x0c\xfe\xff\x03\xe1\x07\xff\xff\x03\xea\x8c\xa0\x39\x59\x3e\x29\x46\x08\xfe\x01\x03\x00\xff\xfe\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.I32(1)),
      (
        127,
        @thrift.Binary(
          b"\xc8\x98\x0d\x61\x27\xaa\x9b\x89\x49\x37\x6e\xfd\x3c\x81\x6d\x71\xa4",
        ),
      ),
      (31, @thrift.I32(2147483647)),
      (
        32767,
        @thrift.Struct([
          (14, @thrift.Bool(true)),
          (-32768, @thrift.Double(1.0e+30)),
          (127, @thrift.Binary(b"\x00\xff\xfe")),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x38\x25\x02\x08\xfe\x01\x11\xc8\x98\x0d\x61\x27\xaa\x9b\x89\x49\x37\x6e\xfd\x3c\x81\x6d\x71\xa4\x05\x3e\xfe\xff\xff\xff\x0f\x0c\xfe\xff\x03\xe1\x07\xff\xff\x03\xea\x8c\xa0\x39\x59\x3e\x29\x46\x08\xfe\x01\x03\x00\xff\xfe\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 109" {
  let original = @thrift.Struct([
    (2, @thrift.I64(24L)),
    (1, @thrift.I64(-9223372036854775808L)),
    (
      31,
      @thrift.SetValue(@thrift.BoolKind, [
        @thrift.Bool(false),
        @thrift.Bool(true),
      ]),
    ),
    (
      -32768,
      @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), [
        (@thrift.I16(-38), @thrift.Struct([])),
        (
          @thrift.I16(0),
          @thrift.Struct([
            (
              1,
              @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I32Kind), [
                (@thrift.Bool(false), @thrift.I32(1)),
              ]),
            ),
          ]),
        ),
        (
          @thrift.I16(-47),
          @thrift.Struct([
            (1, @thrift.I16(0)),
            (31, @thrift.Byte(-128)),
            (16, @thrift.Byte(-1)),
            (
              -32768,
              @thrift.Struct([
                (2, @thrift.I64(-9223372036854775808L)),
                (
                  127,
                  @thrift.Binary(
                    b"\xb2\xcc\x1e\x1a\x5d\x94\xad\x8c\xec\xc8\x3e\xe0\xc9\x20\xb0\x79\x13",
                  ),
                ),
                (16, @thrift.Double(1.0e-30)),
                (31, @thrift.I16(0)),
              ]),
            ),
          ]),
        ),
      ]),
    ),
  ])
  let wire = b"\x0a\x00\x02\x00\x00\x00\x00\x00\x00\x00\x18\x0a\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x1f\x02\x00\x00\x00\x02\x00\x01\x0d\x80\x00\x06\x0c\x00\x00\x00\x03\xff\xda\x00\x00\x00\x0d\x00\x01\x02\x08\x00\x00\x00\x01\x00\x00\x00\x00\x01\x00\xff\xd1\x06\x00\x01\x00\x00\x03\x00\x1f\x80\x03\x00\x10\xff\x0c\x80\x00\x0a\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x0b\x00\x7f\x00\x00\x00\x11\xb2\xcc\x1e\x1a\x5d\x94\xad\x8c\xec\xc8\x3e\xe0\xc9\x20\xb0\x79\x13\x04\x00\x10\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x06\x00\x1f\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.I64(24L)),
      (1, @thrift.I64(-9223372036854775808L)),
      (
        31,
        @thrift.SetValue(@thrift.BoolKind, [
          @thrift.Bool(false),
          @thrift.Bool(true),
        ]),
      ),
      (
        -32768,
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), [
          (@thrift.I16(-38), @thrift.Struct([])),
          (
            @thrift.I16(0),
            @thrift.Struct([
              (
                1,
                @thrift.MapValue(
                  Some(@thrift.BoolKind),
                  Some(@thrift.I32Kind),
                  [(@thrift.Bool(false), @thrift.I32(1))],
                ),
              ),
            ]),
          ),
          (
            @thrift.I16(-47),
            @thrift.Struct([
              (1, @thrift.I16(0)),
              (31, @thrift.Byte(-128)),
              (16, @thrift.Byte(-1)),
              (
                -32768,
                @thrift.Struct([
                  (2, @thrift.I64(-9223372036854775808L)),
                  (
                    127,
                    @thrift.Binary(
                      b"\xb2\xcc\x1e\x1a\x5d\x94\xad\x8c\xec\xc8\x3e\xe0\xc9\x20\xb0\x79\x13",
                    ),
                  ),
                  (16, @thrift.Double(1.0e-30)),
                  (31, @thrift.I16(0)),
                ]),
              ),
            ]),
          ),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x85\x0a\x00\x02\x00\x00\x00\x00\x00\x00\x00\x18\x0a\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x1f\x02\x00\x00\x00\x02\x00\x01\x0d\x80\x00\x06\x0c\x00\x00\x00\x03\xff\xda\x00\x00\x00\x0d\x00\x01\x02\x08\x00\x00\x00\x01\x00\x00\x00\x00\x01\x00\xff\xd1\x06\x00\x01\x00\x00\x03\x00\x1f\x80\x03\x00\x10\xff\x0c\x80\x00\x0a\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x0b\x00\x7f\x00\x00\x00\x11\xb2\xcc\x1e\x1a\x5d\x94\xad\x8c\xec\xc8\x3e\xe0\xc9\x20\xb0\x79\x13\x04\x00\x10\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x06\x00\x1f\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 109" {
  let original = @thrift.Struct([
    (2, @thrift.I64(24L)),
    (1, @thrift.I64(-9223372036854775808L)),
    (
      31,
      @thrift.SetValue(@thrift.BoolKind, [
        @thrift.Bool(false),
        @thrift.Bool(true),
      ]),
    ),
    (
      -32768,
      @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), [
        (@thrift.I16(-38), @thrift.Struct([])),
        (
          @thrift.I16(0),
          @thrift.Struct([
            (
              1,
              @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I32Kind), [
                (@thrift.Bool(false), @thrift.I32(1)),
              ]),
            ),
          ]),
        ),
        (
          @thrift.I16(-47),
          @thrift.Struct([
            (1, @thrift.I16(0)),
            (31, @thrift.Byte(-128)),
            (16, @thrift.Byte(-1)),
            (
              -32768,
              @thrift.Struct([
                (2, @thrift.I64(-9223372036854775808L)),
                (
                  127,
                  @thrift.Binary(
                    b"\xb2\xcc\x1e\x1a\x5d\x94\xad\x8c\xec\xc8\x3e\xe0\xc9\x20\xb0\x79\x13",
                  ),
                ),
                (16, @thrift.Double(1.0e-30)),
                (31, @thrift.I16(0)),
              ]),
            ),
          ]),
        ),
      ]),
    ),
  ])
  let wire = b"\x26\x30\x06\x02\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x0a\x3e\x21\x02\x01\x0b\xff\xff\x03\x03\x4c\x4b\x00\x00\x1b\x01\x15\x02\x02\x00\x5d\x14\x00\x03\x3e\x80\x03\x20\xff\x0c\xff\xff\x03\x26\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x08\xfe\x01\x11\xb2\xcc\x1e\x1a\x5d\x94\xad\x8c\xec\xc8\x3e\xe0\xc9\x20\xb0\x79\x13\x07\x20\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\xf4\x00\x00\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.I64(24L)),
      (1, @thrift.I64(-9223372036854775808L)),
      (
        31,
        @thrift.SetValue(@thrift.BoolKind, [
          @thrift.Bool(false),
          @thrift.Bool(true),
        ]),
      ),
      (
        -32768,
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.StructKind), [
          (@thrift.I16(-38), @thrift.Struct([])),
          (
            @thrift.I16(0),
            @thrift.Struct([
              (
                1,
                @thrift.MapValue(
                  Some(@thrift.BoolKind),
                  Some(@thrift.I32Kind),
                  [(@thrift.Bool(false), @thrift.I32(1))],
                ),
              ),
            ]),
          ),
          (
            @thrift.I16(-47),
            @thrift.Struct([
              (1, @thrift.I16(0)),
              (31, @thrift.Byte(-128)),
              (16, @thrift.Byte(-1)),
              (
                -32768,
                @thrift.Struct([
                  (2, @thrift.I64(-9223372036854775808L)),
                  (
                    127,
                    @thrift.Binary(
                      b"\xb2\xcc\x1e\x1a\x5d\x94\xad\x8c\xec\xc8\x3e\xe0\xc9\x20\xb0\x79\x13",
                    ),
                  ),
                  (16, @thrift.Double(1.0e-30)),
                  (31, @thrift.I16(0)),
                ]),
              ),
            ]),
          ),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x5e\x26\x30\x06\x02\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x0a\x3e\x21\x02\x01\x0b\xff\xff\x03\x03\x4c\x4b\x00\x00\x1b\x01\x15\x02\x02\x00\x5d\x14\x00\x03\x3e\x80\x03\x20\xff\x0c\xff\xff\x03\x26\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x08\xfe\x01\x11\xb2\xcc\x1e\x1a\x5d\x94\xad\x8c\xec\xc8\x3e\xe0\xc9\x20\xb0\x79\x13\x07\x20\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\xf4\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 110" {
  let original = @thrift.Struct([
    (32767, @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-0.0)])),
    (
      127,
      @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I64Kind), [
        (@thrift.Bool(true), @thrift.I64(-9223372036854775808L)),
      ]),
    ),
    (
      16,
      @thrift.List(@thrift.I16Kind, [
        @thrift.I16(32767),
        @thrift.I16(-28),
        @thrift.I16(32767),
        @thrift.I16(1),
        @thrift.I16(-94),
        @thrift.I16(-32768),
        @thrift.I16(-32768),
        @thrift.I16(4),
        @thrift.I16(50),
        @thrift.I16(-1),
        @thrift.I16(0),
        @thrift.I16(-1),
        @thrift.I16(-9),
        @thrift.I16(-1),
        @thrift.I16(64),
      ]),
    ),
  ])
  let wire = b"\x0e\x7f\xff\x04\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x0d\x00\x7f\x02\x0a\x00\x00\x00\x01\x01\x80\x00\x00\x00\x00\x00\x00\x00\x0f\x00\x10\x06\x00\x00\x00\x0f\x7f\xff\xff\xe4\x7f\xff\x00\x01\xff\xa2\x80\x00\x80\x00\x00\x04\x00\x32\xff\xff\x00\x00\xff\xff\xff\xf7\xff\xff\x00\x40\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-0.0)])),
      (
        127,
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I64Kind), [
          (@thrift.Bool(true), @thrift.I64(-9223372036854775808L)),
        ]),
      ),
      (
        16,
        @thrift.List(@thrift.I16Kind, [
          @thrift.I16(32767),
          @thrift.I16(-28),
          @thrift.I16(32767),
          @thrift.I16(1),
          @thrift.I16(-94),
          @thrift.I16(-32768),
          @thrift.I16(-32768),
          @thrift.I16(4),
          @thrift.I16(50),
          @thrift.I16(-1),
          @thrift.I16(0),
          @thrift.I16(-1),
          @thrift.I16(-9),
          @thrift.I16(-1),
          @thrift.I16(64),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x49\x0e\x7f\xff\x04\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x0d\x00\x7f\x02\x0a\x00\x00\x00\x01\x01\x80\x00\x00\x00\x00\x00\x00\x00\x0f\x00\x10\x06\x00\x00\x00\x0f\x7f\xff\xff\xe4\x7f\xff\x00\x01\xff\xa2\x80\x00\x80\x00\x00\x04\x00\x32\xff\xff\x00\x00\xff\xff\xff\xf7\xff\xff\x00\x40\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 110" {
  let original = @thrift.Struct([
    (32767, @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-0.0)])),
    (
      127,
      @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I64Kind), [
        (@thrift.Bool(true), @thrift.I64(-9223372036854775808L)),
      ]),
    ),
    (
      16,
      @thrift.List(@thrift.I16Kind, [
        @thrift.I16(32767),
        @thrift.I16(-28),
        @thrift.I16(32767),
        @thrift.I16(1),
        @thrift.I16(-94),
        @thrift.I16(-32768),
        @thrift.I16(-32768),
        @thrift.I16(4),
        @thrift.I16(50),
        @thrift.I16(-1),
        @thrift.I16(0),
        @thrift.I16(-1),
        @thrift.I16(-9),
        @thrift.I16(-1),
        @thrift.I16(64),
      ]),
    ),
  ])
  let wire = b"\x0a\xfe\xff\x03\x17\x00\x00\x00\x00\x00\x00\x00\x80\x0b\xfe\x01\x01\x16\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x09\x20\xf4\x0f\xfe\xff\x03\x37\xfe\xff\x03\x02\xbb\x01\xff\xff\x03\xff\xff\x03\x08\x64\x01\x00\x01\x11\x01\x80\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.SetValue(@thrift.DoubleKind, [@thrift.Double(-0.0)])),
      (
        127,
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I64Kind), [
          (@thrift.Bool(true), @thrift.I64(-9223372036854775808L)),
        ]),
      ),
      (
        16,
        @thrift.List(@thrift.I16Kind, [
          @thrift.I16(32767),
          @thrift.I16(-28),
          @thrift.I16(32767),
          @thrift.I16(1),
          @thrift.I16(-94),
          @thrift.I16(-32768),
          @thrift.I16(-32768),
          @thrift.I16(4),
          @thrift.I16(50),
          @thrift.I16(-1),
          @thrift.I16(0),
          @thrift.I16(-1),
          @thrift.I16(-9),
          @thrift.I16(-1),
          @thrift.I16(64),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x3b\x0a\xfe\xff\x03\x17\x00\x00\x00\x00\x00\x00\x00\x80\x0b\xfe\x01\x01\x16\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x09\x20\xf4\x0f\xfe\xff\x03\x37\xfe\xff\x03\x02\xbb\x01\xff\xff\x03\xff\xff\x03\x08\x64\x01\x00\x01\x11\x01\x80\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 111" {
  let original = @thrift.Struct([
    (
      -1,
      @thrift.Struct([
        (14, @thrift.Binary(b"")),
        (-1, @thrift.List(@thrift.ByteKind, [])),
        (2, @thrift.I64(0L)),
      ]),
    ),
    (0, @thrift.I16(94)),
    (1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (2, @thrift.Byte(-14)),
  ])
  let wire = b"\x0c\xff\xff\x0b\x00\x0e\x00\x00\x00\x00\x0f\xff\xff\x03\x00\x00\x00\x00\x0a\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x06\x00\x00\x00\x5e\x0b\x00\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x00\x02\xf2\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        -1,
        @thrift.Struct([
          (14, @thrift.Binary(b"")),
          (-1, @thrift.List(@thrift.ByteKind, [])),
          (2, @thrift.I64(0L)),
        ]),
      ),
      (0, @thrift.I16(94)),
      (1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (2, @thrift.Byte(-14)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x39\x0c\xff\xff\x0b\x00\x0e\x00\x00\x00\x00\x0f\xff\xff\x03\x00\x00\x00\x00\x0a\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x06\x00\x00\x00\x5e\x0b\x00\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x03\x00\x02\xf2\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 111" {
  let original = @thrift.Struct([
    (
      -1,
      @thrift.Struct([
        (14, @thrift.Binary(b"")),
        (-1, @thrift.List(@thrift.ByteKind, [])),
        (2, @thrift.I64(0L)),
      ]),
    ),
    (0, @thrift.I16(94)),
    (1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    (2, @thrift.Byte(-14)),
  ])
  let wire = b"\x0c\x01\xe8\x00\x09\x01\x03\x36\x00\x00\x14\xbc\x01\x18\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x13\xf2\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        -1,
        @thrift.Struct([
          (14, @thrift.Binary(b"")),
          (-1, @thrift.List(@thrift.ByteKind, [])),
          (2, @thrift.I64(0L)),
        ]),
      ),
      (0, @thrift.I16(94)),
      (1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
      (2, @thrift.Byte(-14)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1c\x0c\x01\xe8\x00\x09\x01\x03\x36\x00\x00\x14\xbc\x01\x18\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x13\xf2\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 112" {
  let original = @thrift.Struct([(32767, @thrift.I16(32767))])
  let wire = b"\x06\x7f\xff\x7f\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(32767, @thrift.I16(32767))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x06\x06\x7f\xff\x7f\xff\x00")
}

///|
test "Apache seeded CompactProtocol fixture 112" {
  let original = @thrift.Struct([(32767, @thrift.I16(32767))])
  let wire = b"\x04\xfe\xff\x03\xfe\xff\x03\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(32767, @thrift.I16(32767))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x08\x04\xfe\xff\x03\xfe\xff\x03\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 113" {
  let original = @thrift.Struct([
    (16, @thrift.I64(51L)),
    (-32768, @thrift.List(@thrift.StructKind, [])),
  ])
  let wire = b"\x0a\x00\x10\x00\x00\x00\x00\x00\x00\x00\x33\x0f\x80\x00\x0c\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.I64(51L)),
      (-32768, @thrift.List(@thrift.StructKind, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x14\x0a\x00\x10\x00\x00\x00\x00\x00\x00\x00\x33\x0f\x80\x00\x0c\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 113" {
  let original = @thrift.Struct([
    (16, @thrift.I64(51L)),
    (-32768, @thrift.List(@thrift.StructKind, [])),
  ])
  let wire = b"\x06\x20\x66\x09\xff\xff\x03\x0c\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.I64(51L)),
      (-32768, @thrift.List(@thrift.StructKind, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x09\x06\x20\x66\x09\xff\xff\x03\x0c\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 114" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 114" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 115" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 115" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 116" {
  let original = @thrift.Struct([
    (
      16,
      @thrift.List(@thrift.StructKind, [
        @thrift.Struct([
          (15, @thrift.List(@thrift.BoolKind, [])),
          (2, @thrift.I64(-1L)),
          (
            127,
            @thrift.Binary(
              b"\xeb\x26\xfd\x89\x1b\xf0\xd2\x3f\x8a\xd2\xf0\xa8\x36\x8f\x60\x30\xf7",
            ),
          ),
        ]),
        @thrift.Struct([(-1, @thrift.SetValue(@thrift.I32Kind, []))]),
      ]),
    ),
    (
      0,
      @thrift.List(@thrift.SetKind, [
        @thrift.SetValue(@thrift.ByteKind, []),
        @thrift.SetValue(@thrift.ListKind, [@thrift.List(@thrift.I16Kind, [])]),
        @thrift.SetValue(@thrift.StructKind, []),
        @thrift.SetValue(@thrift.BinaryKind, [
          @thrift.Binary(
            b"\x79\x8a\x71\x04\x9a\x7c\x92\x12\xf6\xae\x96\xc8\x1a\x80\x9c\xc3\x15",
          ),
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        ]),
        @thrift.SetValue(@thrift.BoolKind, [
          @thrift.Bool(true),
          @thrift.Bool(false),
        ]),
        @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(-32768), @thrift.I16(86)]),
        @thrift.SetValue(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I64Kind), []),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.DoubleKind), [
            (@thrift.I32(-1), @thrift.Double(-12.125)),
          ]),
        ]),
        @thrift.SetValue(@thrift.ListKind, [@thrift.List(@thrift.ByteKind, [])]),
        @thrift.SetValue(@thrift.SetKind, [
          @thrift.SetValue(@thrift.DoubleKind, []),
          @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(-32768)]),
        ]),
        @thrift.SetValue(@thrift.BinaryKind, [
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(b""),
        ]),
        @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(-128)]),
        @thrift.SetValue(@thrift.ListKind, []),
        @thrift.SetValue(@thrift.ByteKind, []),
        @thrift.SetValue(@thrift.BoolKind, []),
      ]),
    ),
  ])
  let wire = b"\x0f\x00\x10\x0c\x00\x00\x00\x02\x0f\x00\x0f\x02\x00\x00\x00\x00\x0a\x00\x02\xff\xff\xff\xff\xff\xff\xff\xff\x0b\x00\x7f\x00\x00\x00\x11\xeb\x26\xfd\x89\x1b\xf0\xd2\x3f\x8a\xd2\xf0\xa8\x36\x8f\x60\x30\xf7\x00\x0e\xff\xff\x08\x00\x00\x00\x00\x00\x0f\x00\x00\x0e\x00\x00\x00\x0e\x03\x00\x00\x00\x00\x0f\x00\x00\x00\x01\x06\x00\x00\x00\x00\x0c\x00\x00\x00\x00\x0b\x00\x00\x00\x02\x00\x00\x00\x11\x79\x8a\x71\x04\x9a\x7c\x92\x12\xf6\xae\x96\xc8\x1a\x80\x9c\xc3\x15\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\x00\x00\x00\x02\x01\x00\x06\x00\x00\x00\x02\x80\x00\x00\x56\x0d\x00\x00\x00\x02\x02\x0a\x00\x00\x00\x00\x08\x04\x00\x00\x00\x01\xff\xff\xff\xff\xc0\x28\x40\x00\x00\x00\x00\x00\x0f\x00\x00\x00\x01\x03\x00\x00\x00\x00\x0e\x00\x00\x00\x02\x04\x00\x00\x00\x00\x06\x00\x00\x00\x01\x80\x00\x0b\x00\x00\x00\x02\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x00\x03\x00\x00\x00\x01\x80\x0f\x00\x00\x00\x00\x03\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        16,
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (15, @thrift.List(@thrift.BoolKind, [])),
            (2, @thrift.I64(-1L)),
            (
              127,
              @thrift.Binary(
                b"\xeb\x26\xfd\x89\x1b\xf0\xd2\x3f\x8a\xd2\xf0\xa8\x36\x8f\x60\x30\xf7",
              ),
            ),
          ]),
          @thrift.Struct([(-1, @thrift.SetValue(@thrift.I32Kind, []))]),
        ]),
      ),
      (
        0,
        @thrift.List(@thrift.SetKind, [
          @thrift.SetValue(@thrift.ByteKind, []),
          @thrift.SetValue(@thrift.ListKind, [@thrift.List(@thrift.I16Kind, [])]),
          @thrift.SetValue(@thrift.StructKind, []),
          @thrift.SetValue(@thrift.BinaryKind, [
            @thrift.Binary(
              b"\x79\x8a\x71\x04\x9a\x7c\x92\x12\xf6\xae\x96\xc8\x1a\x80\x9c\xc3\x15",
            ),
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ]),
          @thrift.SetValue(@thrift.BoolKind, [
            @thrift.Bool(true),
            @thrift.Bool(false),
          ]),
          @thrift.SetValue(@thrift.I16Kind, [
            @thrift.I16(-32768),
            @thrift.I16(86),
          ]),
          @thrift.SetValue(@thrift.MapKind, [
            @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I64Kind), []),
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.DoubleKind), [
              (@thrift.I32(-1), @thrift.Double(-12.125)),
            ]),
          ]),
          @thrift.SetValue(@thrift.ListKind, [
            @thrift.List(@thrift.ByteKind, []),
          ]),
          @thrift.SetValue(@thrift.SetKind, [
            @thrift.SetValue(@thrift.DoubleKind, []),
            @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(-32768)]),
          ]),
          @thrift.SetValue(@thrift.BinaryKind, [
            @thrift.Binary(b"\x00\xff\xfe"),
            @thrift.Binary(b""),
          ]),
          @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(-128)]),
          @thrift.SetValue(@thrift.ListKind, []),
          @thrift.SetValue(@thrift.ByteKind, []),
          @thrift.SetValue(@thrift.BoolKind, []),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\xef\x0f\x00\x10\x0c\x00\x00\x00\x02\x0f\x00\x0f\x02\x00\x00\x00\x00\x0a\x00\x02\xff\xff\xff\xff\xff\xff\xff\xff\x0b\x00\x7f\x00\x00\x00\x11\xeb\x26\xfd\x89\x1b\xf0\xd2\x3f\x8a\xd2\xf0\xa8\x36\x8f\x60\x30\xf7\x00\x0e\xff\xff\x08\x00\x00\x00\x00\x00\x0f\x00\x00\x0e\x00\x00\x00\x0e\x03\x00\x00\x00\x00\x0f\x00\x00\x00\x01\x06\x00\x00\x00\x00\x0c\x00\x00\x00\x00\x0b\x00\x00\x00\x02\x00\x00\x00\x11\x79\x8a\x71\x04\x9a\x7c\x92\x12\xf6\xae\x96\xc8\x1a\x80\x9c\xc3\x15\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\x00\x00\x00\x02\x01\x00\x06\x00\x00\x00\x02\x80\x00\x00\x56\x0d\x00\x00\x00\x02\x02\x0a\x00\x00\x00\x00\x08\x04\x00\x00\x00\x01\xff\xff\xff\xff\xc0\x28\x40\x00\x00\x00\x00\x00\x0f\x00\x00\x00\x01\x03\x00\x00\x00\x00\x0e\x00\x00\x00\x02\x04\x00\x00\x00\x00\x06\x00\x00\x00\x01\x80\x00\x0b\x00\x00\x00\x02\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x00\x03\x00\x00\x00\x01\x80\x0f\x00\x00\x00\x00\x03\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 116" {
  let original = @thrift.Struct([
    (
      16,
      @thrift.List(@thrift.StructKind, [
        @thrift.Struct([
          (15, @thrift.List(@thrift.BoolKind, [])),
          (2, @thrift.I64(-1L)),
          (
            127,
            @thrift.Binary(
              b"\xeb\x26\xfd\x89\x1b\xf0\xd2\x3f\x8a\xd2\xf0\xa8\x36\x8f\x60\x30\xf7",
            ),
          ),
        ]),
        @thrift.Struct([(-1, @thrift.SetValue(@thrift.I32Kind, []))]),
      ]),
    ),
    (
      0,
      @thrift.List(@thrift.SetKind, [
        @thrift.SetValue(@thrift.ByteKind, []),
        @thrift.SetValue(@thrift.ListKind, [@thrift.List(@thrift.I16Kind, [])]),
        @thrift.SetValue(@thrift.StructKind, []),
        @thrift.SetValue(@thrift.BinaryKind, [
          @thrift.Binary(
            b"\x79\x8a\x71\x04\x9a\x7c\x92\x12\xf6\xae\x96\xc8\x1a\x80\x9c\xc3\x15",
          ),
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        ]),
        @thrift.SetValue(@thrift.BoolKind, [
          @thrift.Bool(true),
          @thrift.Bool(false),
        ]),
        @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(-32768), @thrift.I16(86)]),
        @thrift.SetValue(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.I64Kind), []),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.DoubleKind), [
            (@thrift.I32(-1), @thrift.Double(-12.125)),
          ]),
        ]),
        @thrift.SetValue(@thrift.ListKind, [@thrift.List(@thrift.ByteKind, [])]),
        @thrift.SetValue(@thrift.SetKind, [
          @thrift.SetValue(@thrift.DoubleKind, []),
          @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(-32768)]),
        ]),
        @thrift.SetValue(@thrift.BinaryKind, [
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(b""),
        ]),
        @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(-128)]),
        @thrift.SetValue(@thrift.ListKind, []),
        @thrift.SetValue(@thrift.ByteKind, []),
        @thrift.SetValue(@thrift.BoolKind, []),
      ]),
    ),
  ])
  let wire = b"\x09\x20\x2c\xf9\x01\x06\x04\x01\x08\xfe\x01\x11\xeb\x26\xfd\x89\x1b\xf0\xd2\x3f\x8a\xd2\xf0\xa8\x36\x8f\x60\x30\xf7\x00\x0a\x01\x05\x00\x09\x00\xea\x03\x19\x04\x0c\x28\x11\x79\x8a\x71\x04\x9a\x7c\x92\x12\xf6\xae\x96\xc8\x1a\x80\x9c\xc3\x15\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x21\x01\x02\x24\xff\xff\x03\xac\x01\x2b\x00\x01\x57\x01\x00\x00\x00\x00\x00\x40\x28\xc0\x19\x03\x2a\x07\x14\xff\xff\x03\x28\x03\x00\xff\xfe\x00\x13\x80\x09\x03\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        16,
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (15, @thrift.List(@thrift.BoolKind, [])),
            (2, @thrift.I64(-1L)),
            (
              127,
              @thrift.Binary(
                b"\xeb\x26\xfd\x89\x1b\xf0\xd2\x3f\x8a\xd2\xf0\xa8\x36\x8f\x60\x30\xf7",
              ),
            ),
          ]),
          @thrift.Struct([(-1, @thrift.SetValue(@thrift.I32Kind, []))]),
        ]),
      ),
      (
        0,
        @thrift.List(@thrift.SetKind, [
          @thrift.SetValue(@thrift.ByteKind, []),
          @thrift.SetValue(@thrift.ListKind, [@thrift.List(@thrift.I16Kind, [])]),
          @thrift.SetValue(@thrift.StructKind, []),
          @thrift.SetValue(@thrift.BinaryKind, [
            @thrift.Binary(
              b"\x79\x8a\x71\x04\x9a\x7c\x92\x12\xf6\xae\x96\xc8\x1a\x80\x9c\xc3\x15",
            ),
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ]),
          @thrift.SetValue(@thrift.BoolKind, [
            @thrift.Bool(true),
            @thrift.Bool(false),
          ]),
          @thrift.SetValue(@thrift.I16Kind, [
            @thrift.I16(-32768),
            @thrift.I16(86),
          ]),
          @thrift.SetValue(@thrift.MapKind, [
            @thrift.MapValue(None, None, []),
            @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.DoubleKind), [
              (@thrift.I32(-1), @thrift.Double(-12.125)),
            ]),
          ]),
          @thrift.SetValue(@thrift.ListKind, [
            @thrift.List(@thrift.ByteKind, []),
          ]),
          @thrift.SetValue(@thrift.SetKind, [
            @thrift.SetValue(@thrift.DoubleKind, []),
            @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(-32768)]),
          ]),
          @thrift.SetValue(@thrift.BinaryKind, [
            @thrift.Binary(b"\x00\xff\xfe"),
            @thrift.Binary(b""),
          ]),
          @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(-128)]),
          @thrift.SetValue(@thrift.ListKind, []),
          @thrift.SetValue(@thrift.ByteKind, []),
          @thrift.SetValue(@thrift.BoolKind, []),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x71\x09\x20\x2c\xf9\x01\x06\x04\x01\x08\xfe\x01\x11\xeb\x26\xfd\x89\x1b\xf0\xd2\x3f\x8a\xd2\xf0\xa8\x36\x8f\x60\x30\xf7\x00\x0a\x01\x05\x00\x09\x00\xea\x03\x19\x04\x0c\x28\x11\x79\x8a\x71\x04\x9a\x7c\x92\x12\xf6\xae\x96\xc8\x1a\x80\x9c\xc3\x15\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x21\x01\x02\x24\xff\xff\x03\xac\x01\x2b\x00\x01\x57\x01\x00\x00\x00\x00\x00\x40\x28\xc0\x19\x03\x2a\x07\x14\xff\xff\x03\x28\x03\x00\xff\xfe\x00\x13\x80\x09\x03\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 117" {
  let original = @thrift.Struct([
    (-32768, @thrift.Double(1.0e-30)),
    (14, @thrift.Byte(0)),
    (0, @thrift.Double(1.0e-30)),
    (31, @thrift.I16(-32768)),
  ])
  let wire = b"\x04\x80\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x03\x00\x0e\x00\x04\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x06\x00\x1f\x80\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (-32768, @thrift.Double(1.0e-30)),
      (14, @thrift.Byte(0)),
      (0, @thrift.Double(1.0e-30)),
      (31, @thrift.I16(-32768)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x20\x04\x80\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x03\x00\x0e\x00\x04\x00\x00\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x06\x00\x1f\x80\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 117" {
  let original = @thrift.Struct([
    (-32768, @thrift.Double(1.0e-30)),
    (14, @thrift.Byte(0)),
    (0, @thrift.Double(1.0e-30)),
    (31, @thrift.I16(-32768)),
  ])
  let wire = b"\x07\xff\xff\x03\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x03\x1c\x00\x07\x00\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x04\x3e\xff\xff\x03\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (-32768, @thrift.Double(1.0e-30)),
      (14, @thrift.Byte(0)),
      (0, @thrift.Double(1.0e-30)),
      (31, @thrift.I16(-32768)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1f\x07\xff\xff\x03\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x03\x1c\x00\x07\x00\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x04\x3e\xff\xff\x03\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 118" {
  let original = @thrift.Struct([
    (
      32767,
      @thrift.SetValue(@thrift.BoolKind, [
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
      ]),
    ),
    (
      31,
      @thrift.List(@thrift.BoolKind, [
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
      ]),
    ),
    (1, @thrift.I64(-1L)),
    (-1, @thrift.I64(9223372036854775807L)),
  ])
  let wire = b"\x0e\x7f\xff\x02\x00\x00\x00\x0e\x01\x00\x00\x00\x01\x01\x00\x01\x00\x00\x01\x00\x01\x01\x0f\x00\x1f\x02\x00\x00\x00\x0f\x00\x01\x01\x00\x01\x01\x00\x01\x00\x01\x00\x00\x01\x00\x00\x0a\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x0a\xff\xff\x7f\xff\xff\xff\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        32767,
        @thrift.SetValue(@thrift.BoolKind, [
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
        ]),
      ),
      (
        31,
        @thrift.List(@thrift.BoolKind, [
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
        ]),
      ),
      (1, @thrift.I64(-1L)),
      (-1, @thrift.I64(9223372036854775807L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x44\x0e\x7f\xff\x02\x00\x00\x00\x0e\x01\x00\x00\x00\x01\x01\x00\x01\x00\x00\x01\x00\x01\x01\x0f\x00\x1f\x02\x00\x00\x00\x0f\x00\x01\x01\x00\x01\x01\x00\x01\x00\x01\x00\x00\x01\x00\x00\x0a\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x0a\xff\xff\x7f\xff\xff\xff\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 118" {
  let original = @thrift.Struct([
    (
      32767,
      @thrift.SetValue(@thrift.BoolKind, [
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
      ]),
    ),
    (
      31,
      @thrift.List(@thrift.BoolKind, [
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
      ]),
    ),
    (1, @thrift.I64(-1L)),
    (-1, @thrift.I64(9223372036854775807L)),
  ])
  let wire = b"\x0a\xfe\xff\x03\xe1\x01\x02\x02\x02\x01\x01\x02\x01\x02\x02\x01\x02\x01\x01\x09\x3e\xf1\x0f\x02\x01\x01\x02\x01\x01\x02\x01\x02\x01\x02\x02\x01\x02\x02\x06\x02\x01\x06\x01\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        32767,
        @thrift.SetValue(@thrift.BoolKind, [
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
        ]),
      ),
      (
        31,
        @thrift.List(@thrift.BoolKind, [
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
        ]),
      ),
      (1, @thrift.I64(-1L)),
      (-1, @thrift.I64(9223372036854775807L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x36\x0a\xfe\xff\x03\xe1\x01\x02\x02\x02\x01\x01\x02\x01\x02\x02\x01\x02\x01\x01\x09\x3e\xf1\x0f\x02\x01\x01\x02\x01\x01\x02\x01\x02\x01\x02\x02\x01\x02\x02\x06\x02\x01\x06\x01\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 119" {
  let original = @thrift.Struct([(31, @thrift.Byte(1)), (15, @thrift.I16(-19))])
  let wire = b"\x03\x00\x1f\x01\x06\x00\x0f\xff\xed\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(31, @thrift.Byte(1)), (15, @thrift.I16(-19))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0a\x03\x00\x1f\x01\x06\x00\x0f\xff\xed\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 119" {
  let original = @thrift.Struct([(31, @thrift.Byte(1)), (15, @thrift.I16(-19))])
  let wire = b"\x03\x3e\x01\x04\x1e\x25\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(31, @thrift.Byte(1)), (15, @thrift.I16(-19))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x07\x03\x3e\x01\x04\x1e\x25\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 120" {
  let original = @thrift.Struct([(32767, @thrift.Double(-12.125))])
  let wire = b"\x04\x7f\xff\xc0\x28\x40\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(32767, @thrift.Double(-12.125))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0c\x04\x7f\xff\xc0\x28\x40\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 120" {
  let original = @thrift.Struct([(32767, @thrift.Double(-12.125))])
  let wire = b"\x07\xfe\xff\x03\x00\x00\x00\x00\x00\x40\x28\xc0\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(32767, @thrift.Double(-12.125))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0d\x07\xfe\xff\x03\x00\x00\x00\x00\x00\x40\x28\xc0\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 121" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 121" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 122" {
  let original = @thrift.Struct([
    (
      16,
      @thrift.List(@thrift.StructKind, [
        @thrift.Struct([
          (0, @thrift.I32(-1)),
          (
            1,
            @thrift.SetValue(@thrift.I64Kind, [
              @thrift.I64(9223372036854775807L),
              @thrift.I64(46L),
            ]),
          ),
          (31, @thrift.I16(1)),
        ]),
        @thrift.Struct([]),
      ]),
    ),
    (14, @thrift.SetValue(@thrift.ListKind, [])),
    (
      15,
      @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BinaryKind), [
        (
          @thrift.Bool(true),
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        ),
        (
          @thrift.Bool(false),
          @thrift.Binary(
            b"\x2a\xe9\xf8\xb0\x0e\xf9\xf0\x67\x9a\x94\x02\x8f\xf2\x6d\x7b\x6f\x93",
          ),
        ),
      ]),
    ),
    (2, @thrift.SetValue(@thrift.DoubleKind, [])),
  ])
  let wire = b"\x0f\x00\x10\x0c\x00\x00\x00\x02\x08\x00\x00\xff\xff\xff\xff\x0e\x00\x01\x0a\x00\x00\x00\x02\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x2e\x06\x00\x1f\x00\x01\x00\x00\x0e\x00\x0e\x0f\x00\x00\x00\x00\x0d\x00\x0f\x02\x0b\x00\x00\x00\x02\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x00\x00\x00\x11\x2a\xe9\xf8\xb0\x0e\xf9\xf0\x67\x9a\x94\x02\x8f\xf2\x6d\x7b\x6f\x93\x0e\x00\x02\x04\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        16,
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (0, @thrift.I32(-1)),
            (
              1,
              @thrift.SetValue(@thrift.I64Kind, [
                @thrift.I64(9223372036854775807L),
                @thrift.I64(46L),
              ]),
            ),
            (31, @thrift.I16(1)),
          ]),
          @thrift.Struct([]),
        ]),
      ),
      (14, @thrift.SetValue(@thrift.ListKind, [])),
      (
        15,
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BinaryKind), [
          (
            @thrift.Bool(true),
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ),
          (
            @thrift.Bool(false),
            @thrift.Binary(
              b"\x2a\xe9\xf8\xb0\x0e\xf9\xf0\x67\x9a\x94\x02\x8f\xf2\x6d\x7b\x6f\x93",
            ),
          ),
        ]),
      ),
      (2, @thrift.SetValue(@thrift.DoubleKind, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x6d\x0f\x00\x10\x0c\x00\x00\x00\x02\x08\x00\x00\xff\xff\xff\xff\x0e\x00\x01\x0a\x00\x00\x00\x02\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x2e\x06\x00\x1f\x00\x01\x00\x00\x0e\x00\x0e\x0f\x00\x00\x00\x00\x0d\x00\x0f\x02\x0b\x00\x00\x00\x02\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x00\x00\x00\x11\x2a\xe9\xf8\xb0\x0e\xf9\xf0\x67\x9a\x94\x02\x8f\xf2\x6d\x7b\x6f\x93\x0e\x00\x02\x04\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 122" {
  let original = @thrift.Struct([
    (
      16,
      @thrift.List(@thrift.StructKind, [
        @thrift.Struct([
          (0, @thrift.I32(-1)),
          (
            1,
            @thrift.SetValue(@thrift.I64Kind, [
              @thrift.I64(9223372036854775807L),
              @thrift.I64(46L),
            ]),
          ),
          (31, @thrift.I16(1)),
        ]),
        @thrift.Struct([]),
      ]),
    ),
    (14, @thrift.SetValue(@thrift.ListKind, [])),
    (
      15,
      @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BinaryKind), [
        (
          @thrift.Bool(true),
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        ),
        (
          @thrift.Bool(false),
          @thrift.Binary(
            b"\x2a\xe9\xf8\xb0\x0e\xf9\xf0\x67\x9a\x94\x02\x8f\xf2\x6d\x7b\x6f\x93",
          ),
        ),
      ]),
    ),
    (2, @thrift.SetValue(@thrift.DoubleKind, [])),
  ])
  let wire = b"\x09\x20\x2c\x05\x00\x01\x1a\x26\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x5c\x04\x3e\x02\x00\x00\x0a\x1c\x09\x1b\x02\x18\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\x11\x2a\xe9\xf8\xb0\x0e\xf9\xf0\x67\x9a\x94\x02\x8f\xf2\x6d\x7b\x6f\x93\x0a\x04\x07\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        16,
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (0, @thrift.I32(-1)),
            (
              1,
              @thrift.SetValue(@thrift.I64Kind, [
                @thrift.I64(9223372036854775807L),
                @thrift.I64(46L),
              ]),
            ),
            (31, @thrift.I16(1)),
          ]),
          @thrift.Struct([]),
        ]),
      ),
      (14, @thrift.SetValue(@thrift.ListKind, [])),
      (
        15,
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BinaryKind), [
          (
            @thrift.Bool(true),
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          ),
          (
            @thrift.Bool(false),
            @thrift.Binary(
              b"\x2a\xe9\xf8\xb0\x0e\xf9\xf0\x67\x9a\x94\x02\x8f\xf2\x6d\x7b\x6f\x93",
            ),
          ),
        ]),
      ),
      (2, @thrift.SetValue(@thrift.DoubleKind, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x41\x09\x20\x2c\x05\x00\x01\x1a\x26\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x5c\x04\x3e\x02\x00\x00\x0a\x1c\x09\x1b\x02\x18\x01\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\x11\x2a\xe9\xf8\xb0\x0e\xf9\xf0\x67\x9a\x94\x02\x8f\xf2\x6d\x7b\x6f\x93\x0a\x04\x07\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 123" {
  let original = @thrift.Struct([
    (127, @thrift.Bool(true)),
    (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
  ])
  let wire = b"\x02\x00\x7f\x01\x0b\x00\x0e\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (127, @thrift.Bool(true)),
      (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x16\x02\x00\x7f\x01\x0b\x00\x0e\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 123" {
  let original = @thrift.Struct([
    (127, @thrift.Bool(true)),
    (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
  ])
  let wire = b"\x01\xfe\x01\x08\x1c\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (127, @thrift.Bool(true)),
      (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x11\x01\xfe\x01\x08\x1c\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 124" {
  let original = @thrift.Struct([(16, @thrift.Bool(false))])
  let wire = b"\x02\x00\x10\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(16, @thrift.Bool(false))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x05\x02\x00\x10\x00\x00")
}

///|
test "Apache seeded CompactProtocol fixture 124" {
  let original = @thrift.Struct([(16, @thrift.Bool(false))])
  let wire = b"\x02\x20\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(16, @thrift.Bool(false))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x03\x02\x20\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 125" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 125" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 126" {
  let original = @thrift.Struct([
    (
      1,
      @thrift.List(@thrift.BoolKind, [
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
      ]),
    ),
    (0, @thrift.Struct([])),
    (-1, @thrift.Bool(true)),
  ])
  let wire = b"\x0f\x00\x01\x02\x00\x00\x00\x0e\x01\x00\x00\x01\x01\x01\x00\x01\x01\x00\x00\x00\x01\x01\x0c\x00\x00\x00\x02\xff\xff\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        1,
        @thrift.List(@thrift.BoolKind, [
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
        ]),
      ),
      (0, @thrift.Struct([])),
      (-1, @thrift.Bool(true)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1f\x0f\x00\x01\x02\x00\x00\x00\x0e\x01\x00\x00\x01\x01\x01\x00\x01\x01\x00\x00\x00\x01\x01\x0c\x00\x00\x00\x02\xff\xff\x01\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 126" {
  let original = @thrift.Struct([
    (
      1,
      @thrift.List(@thrift.BoolKind, [
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(false),
        @thrift.Bool(true),
        @thrift.Bool(true),
      ]),
    ),
    (0, @thrift.Struct([])),
    (-1, @thrift.Bool(true)),
  ])
  let wire = b"\x19\xe1\x01\x02\x02\x01\x01\x01\x02\x01\x01\x02\x02\x02\x01\x01\x0c\x00\x00\x01\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        1,
        @thrift.List(@thrift.BoolKind, [
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(false),
          @thrift.Bool(true),
          @thrift.Bool(true),
        ]),
      ),
      (0, @thrift.Struct([])),
      (-1, @thrift.Bool(true)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x16\x19\xe1\x01\x02\x02\x01\x01\x01\x02\x01\x01\x02\x02\x02\x01\x01\x0c\x00\x00\x01\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 127" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 127" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 128" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 128" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 129" {
  let original = @thrift.Struct([
    (
      2,
      @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.DoubleKind), [
        (@thrift.I64(1L), @thrift.Double(-0.0)),
      ]),
    ),
    (15, @thrift.SetValue(@thrift.I16Kind, [])),
    (
      127,
      @thrift.List(@thrift.BinaryKind, [
        @thrift.Binary(b""),
        @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        @thrift.Binary(
          b"\x50\x4c\xa7\x2d\xd5\x30\xc6\xf2\x1b\xe8\x90\xb6\x7c\xdb\x05\xa6\x9d",
        ),
        @thrift.Binary(b"\x00\xff\xfe"),
        @thrift.Binary(b"\x00\xff\xfe"),
        @thrift.Binary(
          b"\xcf\xc8\xb5\x26\xb0\x2b\x03\xe6\x6c\xe4\x97\xd6\x3b\x62\xd4\x00\x32",
        ),
        @thrift.Binary(b"\x00\xff\xfe"),
        @thrift.Binary(b"\x00\xff\xfe"),
        @thrift.Binary(b"\x00\xff\xfe"),
        @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        @thrift.Binary(b""),
        @thrift.Binary(b""),
        @thrift.Binary(b""),
        @thrift.Binary(
          b"\x02\x5b\xb6\xe4\x4f\xf6\xc4\x16\x0d\x40\xe8\xc2\x6b\xb5\x12\x81\xa2",
        ),
        @thrift.Binary(b""),
      ]),
    ),
  ])
  let wire = b"\x0d\x00\x02\x0a\x04\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x0f\x06\x00\x00\x00\x00\x0f\x00\x7f\x0b\x00\x00\x00\x0f\x00\x00\x00\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x00\x00\x11\x50\x4c\xa7\x2d\xd5\x30\xc6\xf2\x1b\xe8\x90\xb6\x7c\xdb\x05\xa6\x9d\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x11\xcf\xc8\xb5\x26\xb0\x2b\x03\xe6\x6c\xe4\x97\xd6\x3b\x62\xd4\x00\x32\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x11\x02\x5b\xb6\xe4\x4f\xf6\xc4\x16\x0d\x40\xe8\xc2\x6b\xb5\x12\x81\xa2\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        2,
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.DoubleKind), [
          (@thrift.I64(1L), @thrift.Double(-0.0)),
        ]),
      ),
      (15, @thrift.SetValue(@thrift.I16Kind, [])),
      (
        127,
        @thrift.List(@thrift.BinaryKind, [
          @thrift.Binary(b""),
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          @thrift.Binary(
            b"\x50\x4c\xa7\x2d\xd5\x30\xc6\xf2\x1b\xe8\x90\xb6\x7c\xdb\x05\xa6\x9d",
          ),
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(
            b"\xcf\xc8\xb5\x26\xb0\x2b\x03\xe6\x6c\xe4\x97\xd6\x3b\x62\xd4\x00\x32",
          ),
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          @thrift.Binary(b""),
          @thrift.Binary(b""),
          @thrift.Binary(b""),
          @thrift.Binary(
            b"\x02\x5b\xb6\xe4\x4f\xf6\xc4\x16\x0d\x40\xe8\xc2\x6b\xb5\x12\x81\xa2",
          ),
          @thrift.Binary(b""),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\xbc\x0d\x00\x02\x0a\x04\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x0f\x06\x00\x00\x00\x00\x0f\x00\x7f\x0b\x00\x00\x00\x0f\x00\x00\x00\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x00\x00\x11\x50\x4c\xa7\x2d\xd5\x30\xc6\xf2\x1b\xe8\x90\xb6\x7c\xdb\x05\xa6\x9d\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x11\xcf\xc8\xb5\x26\xb0\x2b\x03\xe6\x6c\xe4\x97\xd6\x3b\x62\xd4\x00\x32\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x11\x02\x5b\xb6\xe4\x4f\xf6\xc4\x16\x0d\x40\xe8\xc2\x6b\xb5\x12\x81\xa2\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 129" {
  let original = @thrift.Struct([
    (
      2,
      @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.DoubleKind), [
        (@thrift.I64(1L), @thrift.Double(-0.0)),
      ]),
    ),
    (15, @thrift.SetValue(@thrift.I16Kind, [])),
    (
      127,
      @thrift.List(@thrift.BinaryKind, [
        @thrift.Binary(b""),
        @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        @thrift.Binary(
          b"\x50\x4c\xa7\x2d\xd5\x30\xc6\xf2\x1b\xe8\x90\xb6\x7c\xdb\x05\xa6\x9d",
        ),
        @thrift.Binary(b"\x00\xff\xfe"),
        @thrift.Binary(b"\x00\xff\xfe"),
        @thrift.Binary(
          b"\xcf\xc8\xb5\x26\xb0\x2b\x03\xe6\x6c\xe4\x97\xd6\x3b\x62\xd4\x00\x32",
        ),
        @thrift.Binary(b"\x00\xff\xfe"),
        @thrift.Binary(b"\x00\xff\xfe"),
        @thrift.Binary(b"\x00\xff\xfe"),
        @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
        @thrift.Binary(b""),
        @thrift.Binary(b""),
        @thrift.Binary(b""),
        @thrift.Binary(
          b"\x02\x5b\xb6\xe4\x4f\xf6\xc4\x16\x0d\x40\xe8\xc2\x6b\xb5\x12\x81\xa2",
        ),
        @thrift.Binary(b""),
      ]),
    ),
  ])
  let wire = b"\x2b\x01\x67\x02\x00\x00\x00\x00\x00\x00\x00\x80\xda\x04\x09\xfe\x01\xf8\x0f\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x11\x50\x4c\xa7\x2d\xd5\x30\xc6\xf2\x1b\xe8\x90\xb6\x7c\xdb\x05\xa6\x9d\x03\x00\xff\xfe\x03\x00\xff\xfe\x11\xcf\xc8\xb5\x26\xb0\x2b\x03\xe6\x6c\xe4\x97\xd6\x3b\x62\xd4\x00\x32\x03\x00\xff\xfe\x03\x00\xff\xfe\x03\x00\xff\xfe\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x00\x00\x11\x02\x5b\xb6\xe4\x4f\xf6\xc4\x16\x0d\x40\xe8\xc2\x6b\xb5\x12\x81\xa2\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        2,
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.DoubleKind), [
          (@thrift.I64(1L), @thrift.Double(-0.0)),
        ]),
      ),
      (15, @thrift.SetValue(@thrift.I16Kind, [])),
      (
        127,
        @thrift.List(@thrift.BinaryKind, [
          @thrift.Binary(b""),
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          @thrift.Binary(
            b"\x50\x4c\xa7\x2d\xd5\x30\xc6\xf2\x1b\xe8\x90\xb6\x7c\xdb\x05\xa6\x9d",
          ),
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(
            b"\xcf\xc8\xb5\x26\xb0\x2b\x03\xe6\x6c\xe4\x97\xd6\x3b\x62\xd4\x00\x32",
          ),
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(b"\x00\xff\xfe"),
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          @thrift.Binary(b""),
          @thrift.Binary(b""),
          @thrift.Binary(b""),
          @thrift.Binary(
            b"\x02\x5b\xb6\xe4\x4f\xf6\xc4\x16\x0d\x40\xe8\xc2\x6b\xb5\x12\x81\xa2",
          ),
          @thrift.Binary(b""),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x79\x2b\x01\x67\x02\x00\x00\x00\x00\x00\x00\x00\x80\xda\x04\x09\xfe\x01\xf8\x0f\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x11\x50\x4c\xa7\x2d\xd5\x30\xc6\xf2\x1b\xe8\x90\xb6\x7c\xdb\x05\xa6\x9d\x03\x00\xff\xfe\x03\x00\xff\xfe\x11\xcf\xc8\xb5\x26\xb0\x2b\x03\xe6\x6c\xe4\x97\xd6\x3b\x62\xd4\x00\x32\x03\x00\xff\xfe\x03\x00\xff\xfe\x03\x00\xff\xfe\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00\x00\x00\x11\x02\x5b\xb6\xe4\x4f\xf6\xc4\x16\x0d\x40\xe8\xc2\x6b\xb5\x12\x81\xa2\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 130" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 130" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 131" {
  let original = @thrift.Struct([
    (1, @thrift.I32(73)),
    (127, @thrift.I64(1L)),
    (32767, @thrift.I32(-84)),
    (0, @thrift.Byte(-1)),
  ])
  let wire = b"\x08\x00\x01\x00\x00\x00\x49\x0a\x00\x7f\x00\x00\x00\x00\x00\x00\x00\x01\x08\x7f\xff\xff\xff\xff\xac\x03\x00\x00\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (1, @thrift.I32(73)),
      (127, @thrift.I64(1L)),
      (32767, @thrift.I32(-84)),
      (0, @thrift.Byte(-1)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1e\x08\x00\x01\x00\x00\x00\x49\x0a\x00\x7f\x00\x00\x00\x00\x00\x00\x00\x01\x08\x7f\xff\xff\xff\xff\xac\x03\x00\x00\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 131" {
  let original = @thrift.Struct([
    (1, @thrift.I32(73)),
    (127, @thrift.I64(1L)),
    (32767, @thrift.I32(-84)),
    (0, @thrift.Byte(-1)),
  ])
  let wire = b"\x15\x92\x01\x06\xfe\x01\x02\x05\xfe\xff\x03\xa7\x01\x03\x00\xff\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (1, @thrift.I32(73)),
      (127, @thrift.I64(1L)),
      (32767, @thrift.I32(-84)),
      (0, @thrift.Byte(-1)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x11\x15\x92\x01\x06\xfe\x01\x02\x05\xfe\xff\x03\xa7\x01\x03\x00\xff\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 132" {
  let original = @thrift.Struct([
    (14, @thrift.Double(0.0)),
    (
      0,
      @thrift.SetValue(@thrift.MapKind, [
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.SetKind), [
          (
            @thrift.Bool(true),
            @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0)]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.MapKind), []),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.ListKind), []),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.SetKind), [
          (
            @thrift.I16(1),
            @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(false)]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
          (@thrift.Bool(true), @thrift.Bool(true)),
          (@thrift.Bool(true), @thrift.Bool(false)),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), []),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I32Kind), []),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.BinaryKind), [
          (@thrift.I64(9223372036854775807L), @thrift.Binary(b"\x00\xff\xfe")),
          (@thrift.I64(58L), @thrift.Binary(b"\x00\xff\xfe")),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.I64Kind), [
          (@thrift.Byte(0), @thrift.I64(1L)),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ListKind), [
          (
            @thrift.I64(-60L),
            @thrift.List(@thrift.ByteKind, [@thrift.Byte(-128)]),
          ),
          (
            @thrift.I64(-1L),
            @thrift.List(@thrift.BoolKind, [
              @thrift.Bool(true),
              @thrift.Bool(true),
            ]),
          ),
          (
            @thrift.I64(-9223372036854775808L),
            @thrift.List(@thrift.ByteKind, []),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I64Kind), [
          (
            @thrift.I64(-9223372036854775808L),
            @thrift.I64(9223372036854775807L),
          ),
          (@thrift.I64(-1L), @thrift.I64(-9223372036854775808L)),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ByteKind), []),
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
          (@thrift.I32(2147483647), @thrift.I16(-32768)),
          (@thrift.I32(-2147483648), @thrift.I16(-1)),
          (@thrift.I32(1), @thrift.I16(0)),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.DoubleKind), []),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.SetKind), [
          (
            @thrift.Bool(true),
            @thrift.SetValue(@thrift.BoolKind, [
              @thrift.Bool(true),
              @thrift.Bool(true),
            ]),
          ),
          (
            @thrift.Bool(false),
            @thrift.SetValue(@thrift.DoubleKind, [
              @thrift.Double(1.0e+30),
              @thrift.Double(1.0e+30),
            ]),
          ),
        ]),
      ]),
    ),
    (1, @thrift.Bool(true)),
    (2, @thrift.I16(0)),
  ])
  let wire = b"\x04\x00\x0e\x00\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x00\x0d\x00\x00\x00\x0f\x02\x0e\x00\x00\x00\x01\x01\x06\x00\x00\x00\x01\x00\x00\x06\x0d\x00\x00\x00\x00\x03\x0f\x00\x00\x00\x00\x06\x0e\x00\x00\x00\x01\x00\x01\x02\x00\x00\x00\x01\x00\x02\x02\x00\x00\x00\x02\x01\x01\x01\x00\x0b\x08\x00\x00\x00\x00\x0a\x08\x00\x00\x00\x00\x0a\x0b\x00\x00\x00\x02\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x00\x00\x00\x00\x3a\x00\x00\x00\x03\x00\xff\xfe\x03\x0a\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x01\x0a\x0f\x00\x00\x00\x03\xff\xff\xff\xff\xff\xff\xff\xc4\x03\x00\x00\x00\x01\x80\xff\xff\xff\xff\xff\xff\xff\xff\x02\x00\x00\x00\x02\x01\x01\x80\x00\x00\x00\x00\x00\x00\x00\x03\x00\x00\x00\x00\x0a\x0a\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x7f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x80\x00\x00\x00\x00\x00\x00\x00\x02\x03\x00\x00\x00\x00\x08\x06\x00\x00\x00\x03\x7f\xff\xff\xff\x80\x00\x80\x00\x00\x00\xff\xff\x00\x00\x00\x01\x00\x00\x03\x04\x00\x00\x00\x00\x02\x0e\x00\x00\x00\x02\x01\x02\x00\x00\x00\x02\x01\x01\x00\x04\x00\x00\x00\x02\x46\x29\x3e\x59\x39\xa0\x8c\xea\x46\x29\x3e\x59\x39\xa0\x8c\xea\x02\x00\x01\x01\x06\x00\x02\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.Double(0.0)),
      (
        0,
        @thrift.SetValue(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.SetKind), [
            (
              @thrift.Bool(true),
              @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0)]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.MapKind), []),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.ListKind), []),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.SetKind), [
            (
              @thrift.I16(1),
              @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(false)]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
            (@thrift.Bool(true), @thrift.Bool(true)),
            (@thrift.Bool(true), @thrift.Bool(false)),
          ]),
          @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), []),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I32Kind), []),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.BinaryKind), [
            (@thrift.I64(9223372036854775807L), @thrift.Binary(b"\x00\xff\xfe")),
            (@thrift.I64(58L), @thrift.Binary(b"\x00\xff\xfe")),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.I64Kind), [
            (@thrift.Byte(0), @thrift.I64(1L)),
          ]),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ListKind), [
            (
              @thrift.I64(-60L),
              @thrift.List(@thrift.ByteKind, [@thrift.Byte(-128)]),
            ),
            (
              @thrift.I64(-1L),
              @thrift.List(@thrift.BoolKind, [
                @thrift.Bool(true),
                @thrift.Bool(true),
              ]),
            ),
            (
              @thrift.I64(-9223372036854775808L),
              @thrift.List(@thrift.ByteKind, []),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I64Kind), [
            (
              @thrift.I64(-9223372036854775808L),
              @thrift.I64(9223372036854775807L),
            ),
            (@thrift.I64(-1L), @thrift.I64(-9223372036854775808L)),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ByteKind), []),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
            (@thrift.I32(2147483647), @thrift.I16(-32768)),
            (@thrift.I32(-2147483648), @thrift.I16(-1)),
            (@thrift.I32(1), @thrift.I16(0)),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.DoubleKind), []),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.SetKind), [
            (
              @thrift.Bool(true),
              @thrift.SetValue(@thrift.BoolKind, [
                @thrift.Bool(true),
                @thrift.Bool(true),
              ]),
            ),
            (
              @thrift.Bool(false),
              @thrift.SetValue(@thrift.DoubleKind, [
                @thrift.Double(1.0e+30),
                @thrift.Double(1.0e+30),
              ]),
            ),
          ]),
        ]),
      ),
      (1, @thrift.Bool(true)),
      (2, @thrift.I16(0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\x2c\x04\x00\x0e\x00\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x00\x0d\x00\x00\x00\x0f\x02\x0e\x00\x00\x00\x01\x01\x06\x00\x00\x00\x01\x00\x00\x06\x0d\x00\x00\x00\x00\x03\x0f\x00\x00\x00\x00\x06\x0e\x00\x00\x00\x01\x00\x01\x02\x00\x00\x00\x01\x00\x02\x02\x00\x00\x00\x02\x01\x01\x01\x00\x0b\x08\x00\x00\x00\x00\x0a\x08\x00\x00\x00\x00\x0a\x0b\x00\x00\x00\x02\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x03\x00\xff\xfe\x00\x00\x00\x00\x00\x00\x00\x3a\x00\x00\x00\x03\x00\xff\xfe\x03\x0a\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x01\x0a\x0f\x00\x00\x00\x03\xff\xff\xff\xff\xff\xff\xff\xc4\x03\x00\x00\x00\x01\x80\xff\xff\xff\xff\xff\xff\xff\xff\x02\x00\x00\x00\x02\x01\x01\x80\x00\x00\x00\x00\x00\x00\x00\x03\x00\x00\x00\x00\x0a\x0a\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x7f\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x80\x00\x00\x00\x00\x00\x00\x00\x02\x03\x00\x00\x00\x00\x08\x06\x00\x00\x00\x03\x7f\xff\xff\xff\x80\x00\x80\x00\x00\x00\xff\xff\x00\x00\x00\x01\x00\x00\x03\x04\x00\x00\x00\x00\x02\x0e\x00\x00\x00\x02\x01\x02\x00\x00\x00\x02\x01\x01\x00\x04\x00\x00\x00\x02\x46\x29\x3e\x59\x39\xa0\x8c\xea\x46\x29\x3e\x59\x39\xa0\x8c\xea\x02\x00\x01\x01\x06\x00\x02\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 132" {
  let original = @thrift.Struct([
    (14, @thrift.Double(0.0)),
    (
      0,
      @thrift.SetValue(@thrift.MapKind, [
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.SetKind), [
          (
            @thrift.Bool(true),
            @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0)]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.MapKind), []),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.ListKind), []),
        @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.SetKind), [
          (
            @thrift.I16(1),
            @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(false)]),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
          (@thrift.Bool(true), @thrift.Bool(true)),
          (@thrift.Bool(true), @thrift.Bool(false)),
        ]),
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), []),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I32Kind), []),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.BinaryKind), [
          (@thrift.I64(9223372036854775807L), @thrift.Binary(b"\x00\xff\xfe")),
          (@thrift.I64(58L), @thrift.Binary(b"\x00\xff\xfe")),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.I64Kind), [
          (@thrift.Byte(0), @thrift.I64(1L)),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ListKind), [
          (
            @thrift.I64(-60L),
            @thrift.List(@thrift.ByteKind, [@thrift.Byte(-128)]),
          ),
          (
            @thrift.I64(-1L),
            @thrift.List(@thrift.BoolKind, [
              @thrift.Bool(true),
              @thrift.Bool(true),
            ]),
          ),
          (
            @thrift.I64(-9223372036854775808L),
            @thrift.List(@thrift.ByteKind, []),
          ),
        ]),
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I64Kind), [
          (
            @thrift.I64(-9223372036854775808L),
            @thrift.I64(9223372036854775807L),
          ),
          (@thrift.I64(-1L), @thrift.I64(-9223372036854775808L)),
        ]),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ByteKind), []),
        @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
          (@thrift.I32(2147483647), @thrift.I16(-32768)),
          (@thrift.I32(-2147483648), @thrift.I16(-1)),
          (@thrift.I32(1), @thrift.I16(0)),
        ]),
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.DoubleKind), []),
        @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.SetKind), [
          (
            @thrift.Bool(true),
            @thrift.SetValue(@thrift.BoolKind, [
              @thrift.Bool(true),
              @thrift.Bool(true),
            ]),
          ),
          (
            @thrift.Bool(false),
            @thrift.SetValue(@thrift.DoubleKind, [
              @thrift.Double(1.0e+30),
              @thrift.Double(1.0e+30),
            ]),
          ),
        ]),
      ]),
    ),
    (1, @thrift.Bool(true)),
    (2, @thrift.I16(0)),
  ])
  let wire = b"\xe7\x00\x00\x00\x00\x00\x00\x00\x00\x0a\x00\xfb\x0f\x01\x1a\x01\x14\x00\x00\x00\x01\x4a\x02\x11\x02\x02\x11\x01\x01\x01\x02\x00\x00\x02\x68\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x03\x00\xff\xfe\x74\x03\x00\xff\xfe\x01\x36\x00\x02\x03\x69\x77\x13\x80\x01\x21\x01\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x03\x02\x66\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x03\x54\xfe\xff\xff\xff\x0f\xff\xff\x03\xff\xff\xff\xff\x0f\x01\x02\x00\x00\x02\x1a\x01\x21\x01\x01\x02\x27\xea\x8c\xa0\x39\x59\x3e\x29\x46\xea\x8c\xa0\x39\x59\x3e\x29\x46\x11\x14\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.Double(0.0)),
      (
        0,
        @thrift.SetValue(@thrift.MapKind, [
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.SetKind), [
            (
              @thrift.Bool(true),
              @thrift.SetValue(@thrift.I16Kind, [@thrift.I16(0)]),
            ),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.I16Kind), Some(@thrift.SetKind), [
            (
              @thrift.I16(1),
              @thrift.SetValue(@thrift.BoolKind, [@thrift.Bool(false)]),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.BoolKind), [
            (@thrift.Bool(true), @thrift.Bool(true)),
            (@thrift.Bool(true), @thrift.Bool(false)),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.BinaryKind), [
            (@thrift.I64(9223372036854775807L), @thrift.Binary(b"\x00\xff\xfe")),
            (@thrift.I64(58L), @thrift.Binary(b"\x00\xff\xfe")),
          ]),
          @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.I64Kind), [
            (@thrift.Byte(0), @thrift.I64(1L)),
          ]),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.ListKind), [
            (
              @thrift.I64(-60L),
              @thrift.List(@thrift.ByteKind, [@thrift.Byte(-128)]),
            ),
            (
              @thrift.I64(-1L),
              @thrift.List(@thrift.BoolKind, [
                @thrift.Bool(true),
                @thrift.Bool(true),
              ]),
            ),
            (
              @thrift.I64(-9223372036854775808L),
              @thrift.List(@thrift.ByteKind, []),
            ),
          ]),
          @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.I64Kind), [
            (
              @thrift.I64(-9223372036854775808L),
              @thrift.I64(9223372036854775807L),
            ),
            (@thrift.I64(-1L), @thrift.I64(-9223372036854775808L)),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.I32Kind), Some(@thrift.I16Kind), [
            (@thrift.I32(2147483647), @thrift.I16(-32768)),
            (@thrift.I32(-2147483648), @thrift.I16(-1)),
            (@thrift.I32(1), @thrift.I16(0)),
          ]),
          @thrift.MapValue(None, None, []),
          @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.SetKind), [
            (
              @thrift.Bool(true),
              @thrift.SetValue(@thrift.BoolKind, [
                @thrift.Bool(true),
                @thrift.Bool(true),
              ]),
            ),
            (
              @thrift.Bool(false),
              @thrift.SetValue(@thrift.DoubleKind, [
                @thrift.Double(1.0e+30),
                @thrift.Double(1.0e+30),
              ]),
            ),
          ]),
        ]),
      ),
      (1, @thrift.Bool(true)),
      (2, @thrift.I16(0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x9f\xe7\x00\x00\x00\x00\x00\x00\x00\x00\x0a\x00\xfb\x0f\x01\x1a\x01\x14\x00\x00\x00\x01\x4a\x02\x11\x02\x02\x11\x01\x01\x01\x02\x00\x00\x02\x68\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x03\x00\xff\xfe\x74\x03\x00\xff\xfe\x01\x36\x00\x02\x03\x69\x77\x13\x80\x01\x21\x01\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x03\x02\x66\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x03\x54\xfe\xff\xff\xff\x0f\xff\xff\x03\xff\xff\xff\xff\x0f\x01\x02\x00\x00\x02\x1a\x01\x21\x01\x01\x02\x27\xea\x8c\xa0\x39\x59\x3e\x29\x46\xea\x8c\xa0\x39\x59\x3e\x29\x46\x11\x14\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 133" {
  let original = @thrift.Struct([
    (
      -32768,
      @thrift.SetValue(@thrift.StructKind, [
        @thrift.Struct([
          (-1, @thrift.Double(-12.125)),
          (1, @thrift.I32(2147483647)),
          (
            16,
            @thrift.List(@thrift.BinaryKind, [@thrift.Binary(b"\x00\xff\xfe")]),
          ),
          (31, @thrift.SetValue(@thrift.I64Kind, [])),
        ]),
        @thrift.Struct([]),
        @thrift.Struct([
          (
            127,
            @thrift.List(@thrift.DoubleKind, [
              @thrift.Double(1.0e-30),
              @thrift.Double(0.0),
            ]),
          ),
        ]),
        @thrift.Struct([
          (2, @thrift.I32(-1)),
          (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (127, @thrift.I64(-1L)),
          (
            16,
            @thrift.SetValue(@thrift.BoolKind, [
              @thrift.Bool(true),
              @thrift.Bool(true),
            ]),
          ),
        ]),
        @thrift.Struct([
          (
            -32768,
            @thrift.List(@thrift.I64Kind, [
              @thrift.I64(-9223372036854775808L),
              @thrift.I64(-9223372036854775808L),
            ]),
          ),
          (1, @thrift.Double(-12.125)),
        ]),
        @thrift.Struct([
          (-32768, @thrift.Byte(-1)),
          (
            -1,
            @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), []),
          ),
          (127, @thrift.I16(32767)),
        ]),
        @thrift.Struct([
          (
            15,
            @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.ByteKind), [
              (@thrift.Byte(-1), @thrift.Byte(-1)),
              (@thrift.Byte(43), @thrift.Byte(127)),
            ]),
          ),
          (
            31,
            @thrift.List(@thrift.ByteKind, [
              @thrift.Byte(-128),
              @thrift.Byte(-128),
            ]),
          ),
          (32767, @thrift.I64(1L)),
        ]),
        @thrift.Struct([
          (1, @thrift.List(@thrift.BoolKind, [])),
          (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (-1, @thrift.Bool(false)),
        ]),
        @thrift.Struct([
          (-32768, @thrift.Bool(true)),
          (127, @thrift.I64(-9223372036854775808L)),
          (0, @thrift.Bool(false)),
        ]),
        @thrift.Struct([(1, @thrift.Double(-0.0)), (-32768, @thrift.I16(-1))]),
        @thrift.Struct([]),
        @thrift.Struct([
          (
            15,
            @thrift.Struct([
              (15, @thrift.Double(1.5)),
              (2, @thrift.Binary(b"\x00\xff\xfe")),
              (16, @thrift.Double(1.0e-30)),
            ]),
          ),
        ]),
        @thrift.Struct([
          (16, @thrift.Bool(true)),
          (31, @thrift.I64(0L)),
          (1, @thrift.List(@thrift.ByteKind, [@thrift.Byte(127)])),
        ]),
        @thrift.Struct([]),
        @thrift.Struct([
          (14, @thrift.Byte(1)),
          (127, @thrift.Byte(127)),
          (
            0,
            @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ByteKind), []),
          ),
        ]),
      ]),
    ),
  ])
  let wire = b"\x0e\x80\x00\x0c\x00\x00\x00\x0f\x04\xff\xff\xc0\x28\x40\x00\x00\x00\x00\x00\x08\x00\x01\x7f\xff\xff\xff\x0f\x00\x10\x0b\x00\x00\x00\x01\x00\x00\x00\x03\x00\xff\xfe\x0e\x00\x1f\x0a\x00\x00\x00\x00\x00\x00\x0f\x00\x7f\x04\x00\x00\x00\x02\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x08\x00\x02\xff\xff\xff\xff\x0b\x00\x0f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0a\x00\x7f\xff\xff\xff\xff\xff\xff\xff\xff\x0e\x00\x10\x02\x00\x00\x00\x02\x01\x01\x00\x0f\x80\x00\x0a\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x04\x00\x01\xc0\x28\x40\x00\x00\x00\x00\x00\x00\x03\x80\x00\xff\x0d\xff\xff\x0b\x03\x00\x00\x00\x00\x06\x00\x7f\x7f\xff\x00\x0d\x00\x0f\x03\x03\x00\x00\x00\x02\xff\xff\x2b\x7f\x0f\x00\x1f\x03\x00\x00\x00\x02\x80\x80\x0a\x7f\xff\x00\x00\x00\x00\x00\x00\x00\x01\x00\x0f\x00\x01\x02\x00\x00\x00\x00\x0b\x00\x0f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0b\x00\x0e\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\xff\xff\x00\x00\x02\x80\x00\x01\x0a\x00\x7f\x80\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x04\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x06\x80\x00\xff\xff\x00\x00\x0c\x00\x0f\x04\x00\x0f\x3f\xf8\x00\x00\x00\x00\x00\x00\x0b\x00\x02\x00\x00\x00\x03\x00\xff\xfe\x04\x00\x10\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00\x00\x02\x00\x10\x01\x0a\x00\x1f\x00\x00\x00\x00\x00\x00\x00\x00\x0f\x00\x01\x03\x00\x00\x00\x01\x7f\x00\x00\x03\x00\x0e\x01\x03\x00\x7f\x7f\x0d\x00\x00\x02\x03\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        -32768,
        @thrift.SetValue(@thrift.StructKind, [
          @thrift.Struct([
            (-1, @thrift.Double(-12.125)),
            (1, @thrift.I32(2147483647)),
            (
              16,
              @thrift.List(@thrift.BinaryKind, [@thrift.Binary(b"\x00\xff\xfe")]),
            ),
            (31, @thrift.SetValue(@thrift.I64Kind, [])),
          ]),
          @thrift.Struct([]),
          @thrift.Struct([
            (
              127,
              @thrift.List(@thrift.DoubleKind, [
                @thrift.Double(1.0e-30),
                @thrift.Double(0.0),
              ]),
            ),
          ]),
          @thrift.Struct([
            (2, @thrift.I32(-1)),
            (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (127, @thrift.I64(-1L)),
            (
              16,
              @thrift.SetValue(@thrift.BoolKind, [
                @thrift.Bool(true),
                @thrift.Bool(true),
              ]),
            ),
          ]),
          @thrift.Struct([
            (
              -32768,
              @thrift.List(@thrift.I64Kind, [
                @thrift.I64(-9223372036854775808L),
                @thrift.I64(-9223372036854775808L),
              ]),
            ),
            (1, @thrift.Double(-12.125)),
          ]),
          @thrift.Struct([
            (-32768, @thrift.Byte(-1)),
            (
              -1,
              @thrift.MapValue(
                Some(@thrift.BinaryKind),
                Some(@thrift.ByteKind),
                [],
              ),
            ),
            (127, @thrift.I16(32767)),
          ]),
          @thrift.Struct([
            (
              15,
              @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.ByteKind), [
                (@thrift.Byte(-1), @thrift.Byte(-1)),
                (@thrift.Byte(43), @thrift.Byte(127)),
              ]),
            ),
            (
              31,
              @thrift.List(@thrift.ByteKind, [
                @thrift.Byte(-128),
                @thrift.Byte(-128),
              ]),
            ),
            (32767, @thrift.I64(1L)),
          ]),
          @thrift.Struct([
            (1, @thrift.List(@thrift.BoolKind, [])),
            (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (-1, @thrift.Bool(false)),
          ]),
          @thrift.Struct([
            (-32768, @thrift.Bool(true)),
            (127, @thrift.I64(-9223372036854775808L)),
            (0, @thrift.Bool(false)),
          ]),
          @thrift.Struct([(1, @thrift.Double(-0.0)), (-32768, @thrift.I16(-1))]),
          @thrift.Struct([]),
          @thrift.Struct([
            (
              15,
              @thrift.Struct([
                (15, @thrift.Double(1.5)),
                (2, @thrift.Binary(b"\x00\xff\xfe")),
                (16, @thrift.Double(1.0e-30)),
              ]),
            ),
          ]),
          @thrift.Struct([
            (16, @thrift.Bool(true)),
            (31, @thrift.I64(0L)),
            (1, @thrift.List(@thrift.ByteKind, [@thrift.Byte(127)])),
          ]),
          @thrift.Struct([]),
          @thrift.Struct([
            (14, @thrift.Byte(1)),
            (127, @thrift.Byte(127)),
            (
              0,
              @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ByteKind), []),
            ),
          ]),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\x7b\x0e\x80\x00\x0c\x00\x00\x00\x0f\x04\xff\xff\xc0\x28\x40\x00\x00\x00\x00\x00\x08\x00\x01\x7f\xff\xff\xff\x0f\x00\x10\x0b\x00\x00\x00\x01\x00\x00\x00\x03\x00\xff\xfe\x0e\x00\x1f\x0a\x00\x00\x00\x00\x00\x00\x0f\x00\x7f\x04\x00\x00\x00\x02\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x08\x00\x02\xff\xff\xff\xff\x0b\x00\x0f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0a\x00\x7f\xff\xff\xff\xff\xff\xff\xff\xff\x0e\x00\x10\x02\x00\x00\x00\x02\x01\x01\x00\x0f\x80\x00\x0a\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x04\x00\x01\xc0\x28\x40\x00\x00\x00\x00\x00\x00\x03\x80\x00\xff\x0d\xff\xff\x0b\x03\x00\x00\x00\x00\x06\x00\x7f\x7f\xff\x00\x0d\x00\x0f\x03\x03\x00\x00\x00\x02\xff\xff\x2b\x7f\x0f\x00\x1f\x03\x00\x00\x00\x02\x80\x80\x0a\x7f\xff\x00\x00\x00\x00\x00\x00\x00\x01\x00\x0f\x00\x01\x02\x00\x00\x00\x00\x0b\x00\x0f\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x0b\x00\x0e\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\xff\xff\x00\x00\x02\x80\x00\x01\x0a\x00\x7f\x80\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x04\x00\x01\x80\x00\x00\x00\x00\x00\x00\x00\x06\x80\x00\xff\xff\x00\x00\x0c\x00\x0f\x04\x00\x0f\x3f\xf8\x00\x00\x00\x00\x00\x00\x0b\x00\x02\x00\x00\x00\x03\x00\xff\xfe\x04\x00\x10\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00\x00\x02\x00\x10\x01\x0a\x00\x1f\x00\x00\x00\x00\x00\x00\x00\x00\x0f\x00\x01\x03\x00\x00\x00\x01\x7f\x00\x00\x03\x00\x0e\x01\x03\x00\x7f\x7f\x0d\x00\x00\x02\x03\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 133" {
  let original = @thrift.Struct([
    (
      -32768,
      @thrift.SetValue(@thrift.StructKind, [
        @thrift.Struct([
          (-1, @thrift.Double(-12.125)),
          (1, @thrift.I32(2147483647)),
          (
            16,
            @thrift.List(@thrift.BinaryKind, [@thrift.Binary(b"\x00\xff\xfe")]),
          ),
          (31, @thrift.SetValue(@thrift.I64Kind, [])),
        ]),
        @thrift.Struct([]),
        @thrift.Struct([
          (
            127,
            @thrift.List(@thrift.DoubleKind, [
              @thrift.Double(1.0e-30),
              @thrift.Double(0.0),
            ]),
          ),
        ]),
        @thrift.Struct([
          (2, @thrift.I32(-1)),
          (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (127, @thrift.I64(-1L)),
          (
            16,
            @thrift.SetValue(@thrift.BoolKind, [
              @thrift.Bool(true),
              @thrift.Bool(true),
            ]),
          ),
        ]),
        @thrift.Struct([
          (
            -32768,
            @thrift.List(@thrift.I64Kind, [
              @thrift.I64(-9223372036854775808L),
              @thrift.I64(-9223372036854775808L),
            ]),
          ),
          (1, @thrift.Double(-12.125)),
        ]),
        @thrift.Struct([
          (-32768, @thrift.Byte(-1)),
          (
            -1,
            @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.ByteKind), []),
          ),
          (127, @thrift.I16(32767)),
        ]),
        @thrift.Struct([
          (
            15,
            @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.ByteKind), [
              (@thrift.Byte(-1), @thrift.Byte(-1)),
              (@thrift.Byte(43), @thrift.Byte(127)),
            ]),
          ),
          (
            31,
            @thrift.List(@thrift.ByteKind, [
              @thrift.Byte(-128),
              @thrift.Byte(-128),
            ]),
          ),
          (32767, @thrift.I64(1L)),
        ]),
        @thrift.Struct([
          (1, @thrift.List(@thrift.BoolKind, [])),
          (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
          (-1, @thrift.Bool(false)),
        ]),
        @thrift.Struct([
          (-32768, @thrift.Bool(true)),
          (127, @thrift.I64(-9223372036854775808L)),
          (0, @thrift.Bool(false)),
        ]),
        @thrift.Struct([(1, @thrift.Double(-0.0)), (-32768, @thrift.I16(-1))]),
        @thrift.Struct([]),
        @thrift.Struct([
          (
            15,
            @thrift.Struct([
              (15, @thrift.Double(1.5)),
              (2, @thrift.Binary(b"\x00\xff\xfe")),
              (16, @thrift.Double(1.0e-30)),
            ]),
          ),
        ]),
        @thrift.Struct([
          (16, @thrift.Bool(true)),
          (31, @thrift.I64(0L)),
          (1, @thrift.List(@thrift.ByteKind, [@thrift.Byte(127)])),
        ]),
        @thrift.Struct([]),
        @thrift.Struct([
          (14, @thrift.Byte(1)),
          (127, @thrift.Byte(127)),
          (
            0,
            @thrift.MapValue(Some(@thrift.BoolKind), Some(@thrift.ByteKind), []),
          ),
        ]),
      ]),
    ),
  ])
  let wire = b"\x0a\xff\xff\x03\xfc\x0f\x07\x01\x00\x00\x00\x00\x00\x40\x28\xc0\x25\xfe\xff\xff\xff\x0f\xf9\x18\x03\x00\xff\xfe\xfa\x06\x00\x00\x09\xfe\x01\x27\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x00\x00\x00\x00\x00\x00\x00\x25\x01\xd8\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\xfe\x01\x01\x0a\x20\x21\x01\x01\x00\x09\xff\xff\x03\x26\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x07\x02\x00\x00\x00\x00\x00\x40\x28\xc0\x00\x03\xff\xff\x03\xff\x0b\x01\x00\x04\xfe\x01\xfe\xff\x03\x00\xfb\x02\x33\xff\xff\x2b\x7f\x09\x3e\x23\x80\x80\x06\xfe\xff\x03\x02\x00\x19\x01\xe8\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x08\x1c\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\x01\x00\x01\xff\xff\x03\x06\xfe\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x02\x00\x00\x17\x00\x00\x00\x00\x00\x00\x00\x80\x04\xff\xff\x03\x01\x00\x00\xfc\xf7\x00\x00\x00\x00\x00\x00\xf8\x3f\x08\x04\x03\x00\xff\xfe\xe7\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x01\x20\xf6\x00\x09\x02\x13\x7f\x00\x00\xe3\x01\x03\xfe\x01\x7f\x0b\x00\x00\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        -32768,
        @thrift.SetValue(@thrift.StructKind, [
          @thrift.Struct([
            (-1, @thrift.Double(-12.125)),
            (1, @thrift.I32(2147483647)),
            (
              16,
              @thrift.List(@thrift.BinaryKind, [@thrift.Binary(b"\x00\xff\xfe")]),
            ),
            (31, @thrift.SetValue(@thrift.I64Kind, [])),
          ]),
          @thrift.Struct([]),
          @thrift.Struct([
            (
              127,
              @thrift.List(@thrift.DoubleKind, [
                @thrift.Double(1.0e-30),
                @thrift.Double(0.0),
              ]),
            ),
          ]),
          @thrift.Struct([
            (2, @thrift.I32(-1)),
            (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (127, @thrift.I64(-1L)),
            (
              16,
              @thrift.SetValue(@thrift.BoolKind, [
                @thrift.Bool(true),
                @thrift.Bool(true),
              ]),
            ),
          ]),
          @thrift.Struct([
            (
              -32768,
              @thrift.List(@thrift.I64Kind, [
                @thrift.I64(-9223372036854775808L),
                @thrift.I64(-9223372036854775808L),
              ]),
            ),
            (1, @thrift.Double(-12.125)),
          ]),
          @thrift.Struct([
            (-32768, @thrift.Byte(-1)),
            (-1, @thrift.MapValue(None, None, [])),
            (127, @thrift.I16(32767)),
          ]),
          @thrift.Struct([
            (
              15,
              @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.ByteKind), [
                (@thrift.Byte(-1), @thrift.Byte(-1)),
                (@thrift.Byte(43), @thrift.Byte(127)),
              ]),
            ),
            (
              31,
              @thrift.List(@thrift.ByteKind, [
                @thrift.Byte(-128),
                @thrift.Byte(-128),
              ]),
            ),
            (32767, @thrift.I64(1L)),
          ]),
          @thrift.Struct([
            (1, @thrift.List(@thrift.BoolKind, [])),
            (15, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (14, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
            (-1, @thrift.Bool(false)),
          ]),
          @thrift.Struct([
            (-32768, @thrift.Bool(true)),
            (127, @thrift.I64(-9223372036854775808L)),
            (0, @thrift.Bool(false)),
          ]),
          @thrift.Struct([(1, @thrift.Double(-0.0)), (-32768, @thrift.I16(-1))]),
          @thrift.Struct([]),
          @thrift.Struct([
            (
              15,
              @thrift.Struct([
                (15, @thrift.Double(1.5)),
                (2, @thrift.Binary(b"\x00\xff\xfe")),
                (16, @thrift.Double(1.0e-30)),
              ]),
            ),
          ]),
          @thrift.Struct([
            (16, @thrift.Bool(true)),
            (31, @thrift.I64(0L)),
            (1, @thrift.List(@thrift.ByteKind, [@thrift.Byte(127)])),
          ]),
          @thrift.Struct([]),
          @thrift.Struct([
            (14, @thrift.Byte(1)),
            (127, @thrift.Byte(127)),
            (0, @thrift.MapValue(None, None, [])),
          ]),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x01\x04\x0a\xff\xff\x03\xfc\x0f\x07\x01\x00\x00\x00\x00\x00\x40\x28\xc0\x25\xfe\xff\xff\xff\x0f\xf9\x18\x03\x00\xff\xfe\xfa\x06\x00\x00\x09\xfe\x01\x27\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x00\x00\x00\x00\x00\x00\x00\x25\x01\xd8\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x06\xfe\x01\x01\x0a\x20\x21\x01\x01\x00\x09\xff\xff\x03\x26\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x07\x02\x00\x00\x00\x00\x00\x40\x28\xc0\x00\x03\xff\xff\x03\xff\x0b\x01\x00\x04\xfe\x01\xfe\xff\x03\x00\xfb\x02\x33\xff\xff\x2b\x7f\x09\x3e\x23\x80\x80\x06\xfe\xff\x03\x02\x00\x19\x01\xe8\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x08\x1c\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x02\x01\x00\x01\xff\xff\x03\x06\xfe\x01\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x02\x00\x00\x17\x00\x00\x00\x00\x00\x00\x00\x80\x04\xff\xff\x03\x01\x00\x00\xfc\xf7\x00\x00\x00\x00\x00\x00\xf8\x3f\x08\x04\x03\x00\xff\xfe\xe7\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x00\x01\x20\xf6\x00\x09\x02\x13\x7f\x00\x00\xe3\x01\x03\xfe\x01\x7f\x0b\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 134" {
  let original = @thrift.Struct([
    (14, @thrift.I32(-44)),
    (
      127,
      @thrift.Struct([
        (
          127,
          @thrift.Struct([
            (2, @thrift.Bool(false)),
            (
              14,
              @thrift.SetValue(@thrift.I64Kind, [
                @thrift.I64(0L),
                @thrift.I64(0L),
              ]),
            ),
            (31, @thrift.Double(1.0e-30)),
          ]),
        ),
        (
          -1,
          @thrift.Binary(
            b"\xe1\xfb\x0a\xda\x67\xc6\x85\x99\x8b\x7e\x91\x8a\xf5\x43\x14\xc0\x95",
          ),
        ),
        (0, @thrift.List(@thrift.StructKind, [@thrift.Struct([])])),
        (31, @thrift.I64(-1L)),
      ]),
    ),
    (-32768, @thrift.Double(-0.0)),
  ])
  let wire = b"\x08\x00\x0e\xff\xff\xff\xd4\x0c\x00\x7f\x0c\x00\x7f\x02\x00\x02\x00\x0e\x00\x0e\x0a\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x00\x1f\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00\x0b\xff\xff\x00\x00\x00\x11\xe1\xfb\x0a\xda\x67\xc6\x85\x99\x8b\x7e\x91\x8a\xf5\x43\x14\xc0\x95\x0f\x00\x00\x0c\x00\x00\x00\x01\x00\x0a\x00\x1f\xff\xff\xff\xff\xff\xff\xff\xff\x00\x04\x80\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.I32(-44)),
      (
        127,
        @thrift.Struct([
          (
            127,
            @thrift.Struct([
              (2, @thrift.Bool(false)),
              (
                14,
                @thrift.SetValue(@thrift.I64Kind, [
                  @thrift.I64(0L),
                  @thrift.I64(0L),
                ]),
              ),
              (31, @thrift.Double(1.0e-30)),
            ]),
          ),
          (
            -1,
            @thrift.Binary(
              b"\xe1\xfb\x0a\xda\x67\xc6\x85\x99\x8b\x7e\x91\x8a\xf5\x43\x14\xc0\x95",
            ),
          ),
          (0, @thrift.List(@thrift.StructKind, [@thrift.Struct([])])),
          (31, @thrift.I64(-1L)),
        ]),
      ),
      (-32768, @thrift.Double(-0.0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x6e\x08\x00\x0e\xff\xff\xff\xd4\x0c\x00\x7f\x0c\x00\x7f\x02\x00\x02\x00\x0e\x00\x0e\x0a\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x00\x1f\x39\xb4\x48\x4b\xfe\xeb\xc2\xa0\x00\x0b\xff\xff\x00\x00\x00\x11\xe1\xfb\x0a\xda\x67\xc6\x85\x99\x8b\x7e\x91\x8a\xf5\x43\x14\xc0\x95\x0f\x00\x00\x0c\x00\x00\x00\x01\x00\x0a\x00\x1f\xff\xff\xff\xff\xff\xff\xff\xff\x00\x04\x80\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 134" {
  let original = @thrift.Struct([
    (14, @thrift.I32(-44)),
    (
      127,
      @thrift.Struct([
        (
          127,
          @thrift.Struct([
            (2, @thrift.Bool(false)),
            (
              14,
              @thrift.SetValue(@thrift.I64Kind, [
                @thrift.I64(0L),
                @thrift.I64(0L),
              ]),
            ),
            (31, @thrift.Double(1.0e-30)),
          ]),
        ),
        (
          -1,
          @thrift.Binary(
            b"\xe1\xfb\x0a\xda\x67\xc6\x85\x99\x8b\x7e\x91\x8a\xf5\x43\x14\xc0\x95",
          ),
        ),
        (0, @thrift.List(@thrift.StructKind, [@thrift.Struct([])])),
        (31, @thrift.I64(-1L)),
      ]),
    ),
    (-32768, @thrift.Double(-0.0)),
  ])
  let wire = b"\xe5\x57\x0c\xfe\x01\x0c\xfe\x01\x22\xca\x26\x00\x00\x07\x3e\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x08\x01\x11\xe1\xfb\x0a\xda\x67\xc6\x85\x99\x8b\x7e\x91\x8a\xf5\x43\x14\xc0\x95\x19\x1c\x00\x06\x3e\x01\x00\x07\xff\xff\x03\x00\x00\x00\x00\x00\x00\x00\x80\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.I32(-44)),
      (
        127,
        @thrift.Struct([
          (
            127,
            @thrift.Struct([
              (2, @thrift.Bool(false)),
              (
                14,
                @thrift.SetValue(@thrift.I64Kind, [
                  @thrift.I64(0L),
                  @thrift.I64(0L),
                ]),
              ),
              (31, @thrift.Double(1.0e-30)),
            ]),
          ),
          (
            -1,
            @thrift.Binary(
              b"\xe1\xfb\x0a\xda\x67\xc6\x85\x99\x8b\x7e\x91\x8a\xf5\x43\x14\xc0\x95",
            ),
          ),
          (0, @thrift.List(@thrift.StructKind, [@thrift.Struct([])])),
          (31, @thrift.I64(-1L)),
        ]),
      ),
      (-32768, @thrift.Double(-0.0)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x40\xe5\x57\x0c\xfe\x01\x0c\xfe\x01\x22\xca\x26\x00\x00\x07\x3e\xa0\xc2\xeb\xfe\x4b\x48\xb4\x39\x00\x08\x01\x11\xe1\xfb\x0a\xda\x67\xc6\x85\x99\x8b\x7e\x91\x8a\xf5\x43\x14\xc0\x95\x19\x1c\x00\x06\x3e\x01\x00\x07\xff\xff\x03\x00\x00\x00\x00\x00\x00\x00\x80\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 135" {
  let original = @thrift.Struct([
    (2, @thrift.List(@thrift.BinaryKind, [@thrift.Binary(b"")])),
  ])
  let wire = b"\x0f\x00\x02\x0b\x00\x00\x00\x01\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.List(@thrift.BinaryKind, [@thrift.Binary(b"")])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0d\x0f\x00\x02\x0b\x00\x00\x00\x01\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 135" {
  let original = @thrift.Struct([
    (2, @thrift.List(@thrift.BinaryKind, [@thrift.Binary(b"")])),
  ])
  let wire = b"\x29\x18\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (2, @thrift.List(@thrift.BinaryKind, [@thrift.Binary(b"")])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x04\x29\x18\x00\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 136" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 136" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 137" {
  let original = @thrift.Struct([
    (1, @thrift.I32(-2147483648)),
    (2, @thrift.I32(-2147483648)),
    (31, @thrift.I64(87L)),
  ])
  let wire = b"\x08\x00\x01\x80\x00\x00\x00\x08\x00\x02\x80\x00\x00\x00\x0a\x00\x1f\x00\x00\x00\x00\x00\x00\x00\x57\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (1, @thrift.I32(-2147483648)),
      (2, @thrift.I32(-2147483648)),
      (31, @thrift.I64(87L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1a\x08\x00\x01\x80\x00\x00\x00\x08\x00\x02\x80\x00\x00\x00\x0a\x00\x1f\x00\x00\x00\x00\x00\x00\x00\x57\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 137" {
  let original = @thrift.Struct([
    (1, @thrift.I32(-2147483648)),
    (2, @thrift.I32(-2147483648)),
    (31, @thrift.I64(87L)),
  ])
  let wire = b"\x15\xff\xff\xff\xff\x0f\x15\xff\xff\xff\xff\x0f\x06\x3e\xae\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (1, @thrift.I32(-2147483648)),
      (2, @thrift.I32(-2147483648)),
      (31, @thrift.I64(87L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x11\x15\xff\xff\xff\xff\x0f\x15\xff\xff\xff\xff\x0f\x06\x3e\xae\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 138" {
  let original = @thrift.Struct([
    (
      2,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b""), @thrift.I32(0)),
        (
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          @thrift.I32(2147483647),
        ),
        (@thrift.Binary(b"\x00\xff\xfe"), @thrift.I32(-2147483648)),
      ]),
    ),
    (1, @thrift.Bool(true)),
  ])
  let wire = b"\x0d\x00\x02\x0b\x08\x00\x00\x00\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x7f\xff\xff\xff\x00\x00\x00\x03\x00\xff\xfe\x80\x00\x00\x00\x02\x00\x01\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        2,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b""), @thrift.I32(0)),
          (
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            @thrift.I32(2147483647),
          ),
          (@thrift.Binary(b"\x00\xff\xfe"), @thrift.I32(-2147483648)),
        ]),
      ),
      (1, @thrift.Bool(true)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x33\x0d\x00\x02\x0b\x08\x00\x00\x00\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x7f\xff\xff\xff\x00\x00\x00\x03\x00\xff\xfe\x80\x00\x00\x00\x02\x00\x01\x01\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 138" {
  let original = @thrift.Struct([
    (
      2,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b""), @thrift.I32(0)),
        (
          @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
          @thrift.I32(2147483647),
        ),
        (@thrift.Binary(b"\x00\xff\xfe"), @thrift.I32(-2147483648)),
      ]),
    ),
    (1, @thrift.Bool(true)),
  ])
  let wire = b"\x2b\x03\x85\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\xfe\xff\xff\xff\x0f\x03\x00\xff\xfe\xff\xff\xff\xff\x0f\x01\x02\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        2,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b""), @thrift.I32(0)),
          (
            @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80"),
            @thrift.I32(2147483647),
          ),
          (@thrift.Binary(b"\x00\xff\xfe"), @thrift.I32(-2147483648)),
        ]),
      ),
      (1, @thrift.Bool(true)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x21\x2b\x03\x85\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\xfe\xff\xff\xff\x0f\x03\x00\xff\xfe\xff\xff\xff\xff\x0f\x01\x02\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 139" {
  let original = @thrift.Struct([
    (31, @thrift.Bool(false)),
    (15, @thrift.I16(0)),
    (
      32767,
      @thrift.SetValue(@thrift.I64Kind, [
        @thrift.I64(0L),
        @thrift.I64(-1L),
        @thrift.I64(1L),
        @thrift.I64(1L),
        @thrift.I64(-1L),
        @thrift.I64(1L),
        @thrift.I64(9223372036854775807L),
        @thrift.I64(0L),
        @thrift.I64(-1L),
        @thrift.I64(0L),
        @thrift.I64(2L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(1L),
        @thrift.I64(9223372036854775807L),
      ]),
    ),
    (
      1,
      @thrift.List(@thrift.ListKind, [
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (31, @thrift.Byte(-1)),
            (14, @thrift.Byte(97)),
            (32767, @thrift.Double(0.0)),
          ]),
        ]),
        @thrift.List(@thrift.I32Kind, [@thrift.I32(1), @thrift.I32(2147483647)]),
      ]),
    ),
  ])
  let wire = b"\x02\x00\x1f\x00\x06\x00\x0f\x00\x00\x0e\x7f\xff\x0a\x00\x00\x00\x0e\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x01\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x7f\xff\xff\xff\xff\xff\xff\xff\x0f\x00\x01\x0f\x00\x00\x00\x02\x0c\x00\x00\x00\x01\x03\x00\x1f\xff\x03\x00\x0e\x61\x04\x7f\xff\x00\x00\x00\x00\x00\x00\x00\x00\x00\x08\x00\x00\x00\x02\x00\x00\x00\x01\x7f\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Bool(false)),
      (15, @thrift.I16(0)),
      (
        32767,
        @thrift.SetValue(@thrift.I64Kind, [
          @thrift.I64(0L),
          @thrift.I64(-1L),
          @thrift.I64(1L),
          @thrift.I64(1L),
          @thrift.I64(-1L),
          @thrift.I64(1L),
          @thrift.I64(9223372036854775807L),
          @thrift.I64(0L),
          @thrift.I64(-1L),
          @thrift.I64(0L),
          @thrift.I64(2L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(1L),
          @thrift.I64(9223372036854775807L),
        ]),
      ),
      (
        1,
        @thrift.List(@thrift.ListKind, [
          @thrift.List(@thrift.StructKind, [
            @thrift.Struct([
              (31, @thrift.Byte(-1)),
              (14, @thrift.Byte(97)),
              (32767, @thrift.Double(0.0)),
            ]),
          ]),
          @thrift.List(@thrift.I32Kind, [
            @thrift.I32(1),
            @thrift.I32(2147483647),
          ]),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\xb0\x02\x00\x1f\x00\x06\x00\x0f\x00\x00\x0e\x7f\xff\x0a\x00\x00\x00\x0e\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x01\x7f\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\xff\xff\xff\xff\xff\xff\xff\xff\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x7f\xff\xff\xff\xff\xff\xff\xff\x0f\x00\x01\x0f\x00\x00\x00\x02\x0c\x00\x00\x00\x01\x03\x00\x1f\xff\x03\x00\x0e\x61\x04\x7f\xff\x00\x00\x00\x00\x00\x00\x00\x00\x00\x08\x00\x00\x00\x02\x00\x00\x00\x01\x7f\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 139" {
  let original = @thrift.Struct([
    (31, @thrift.Bool(false)),
    (15, @thrift.I16(0)),
    (
      32767,
      @thrift.SetValue(@thrift.I64Kind, [
        @thrift.I64(0L),
        @thrift.I64(-1L),
        @thrift.I64(1L),
        @thrift.I64(1L),
        @thrift.I64(-1L),
        @thrift.I64(1L),
        @thrift.I64(9223372036854775807L),
        @thrift.I64(0L),
        @thrift.I64(-1L),
        @thrift.I64(0L),
        @thrift.I64(2L),
        @thrift.I64(-9223372036854775808L),
        @thrift.I64(1L),
        @thrift.I64(9223372036854775807L),
      ]),
    ),
    (
      1,
      @thrift.List(@thrift.ListKind, [
        @thrift.List(@thrift.StructKind, [
          @thrift.Struct([
            (31, @thrift.Byte(-1)),
            (14, @thrift.Byte(97)),
            (32767, @thrift.Double(0.0)),
          ]),
        ]),
        @thrift.List(@thrift.I32Kind, [@thrift.I32(1), @thrift.I32(2147483647)]),
      ]),
    ),
  ])
  let wire = b"\x02\x3e\x04\x1e\x00\x0a\xfe\xff\x03\xe6\x00\x01\x02\x02\x01\x02\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x01\x00\x04\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x02\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x09\x02\x29\x1c\x03\x3e\xff\x03\x1c\x61\x07\xfe\xff\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00\x25\x02\xfe\xff\xff\xff\x0f\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Bool(false)),
      (15, @thrift.I16(0)),
      (
        32767,
        @thrift.SetValue(@thrift.I64Kind, [
          @thrift.I64(0L),
          @thrift.I64(-1L),
          @thrift.I64(1L),
          @thrift.I64(1L),
          @thrift.I64(-1L),
          @thrift.I64(1L),
          @thrift.I64(9223372036854775807L),
          @thrift.I64(0L),
          @thrift.I64(-1L),
          @thrift.I64(0L),
          @thrift.I64(2L),
          @thrift.I64(-9223372036854775808L),
          @thrift.I64(1L),
          @thrift.I64(9223372036854775807L),
        ]),
      ),
      (
        1,
        @thrift.List(@thrift.ListKind, [
          @thrift.List(@thrift.StructKind, [
            @thrift.Struct([
              (31, @thrift.Byte(-1)),
              (14, @thrift.Byte(97)),
              (32767, @thrift.Double(0.0)),
            ]),
          ]),
          @thrift.List(@thrift.I32Kind, [
            @thrift.I32(1),
            @thrift.I32(2147483647),
          ]),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x52\x02\x3e\x04\x1e\x00\x0a\xfe\xff\x03\xe6\x00\x01\x02\x02\x01\x02\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00\x01\x00\x04\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x02\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x09\x02\x29\x1c\x03\x3e\xff\x03\x1c\x61\x07\xfe\xff\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00\x25\x02\xfe\xff\xff\xff\x0f\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 140" {
  let original = @thrift.Struct([
    (16, @thrift.Double(-0.0)),
    (-32768, @thrift.I32(0)),
  ])
  let wire = b"\x04\x00\x10\x80\x00\x00\x00\x00\x00\x00\x00\x08\x80\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(16, @thrift.Double(-0.0)), (-32768, @thrift.I32(0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x13\x04\x00\x10\x80\x00\x00\x00\x00\x00\x00\x00\x08\x80\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 140" {
  let original = @thrift.Struct([
    (16, @thrift.Double(-0.0)),
    (-32768, @thrift.I32(0)),
  ])
  let wire = b"\x07\x20\x00\x00\x00\x00\x00\x00\x00\x80\x05\xff\xff\x03\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(16, @thrift.Double(-0.0)), (-32768, @thrift.I32(0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x10\x07\x20\x00\x00\x00\x00\x00\x00\x00\x80\x05\xff\xff\x03\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 141" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 141" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 142" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 142" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 143" {
  let original = @thrift.Struct([
    (31, @thrift.Byte(0)),
    (
      -32768,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.DoubleKind), [
        (@thrift.Byte(-128), @thrift.Double(1.0e+30)),
      ]),
    ),
    (1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
  ])
  let wire = b"\x03\x00\x1f\x00\x0d\x80\x00\x03\x04\x00\x00\x00\x01\x80\x46\x29\x3e\x59\x39\xa0\x8c\xea\x0b\x00\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Byte(0)),
      (
        -32768,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.DoubleKind), [
          (@thrift.Byte(-128), @thrift.Double(1.0e+30)),
        ]),
      ),
      (1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x28\x03\x00\x1f\x00\x0d\x80\x00\x03\x04\x00\x00\x00\x01\x80\x46\x29\x3e\x59\x39\xa0\x8c\xea\x0b\x00\x01\x00\x00\x00\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 143" {
  let original = @thrift.Struct([
    (31, @thrift.Byte(0)),
    (
      -32768,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.DoubleKind), [
        (@thrift.Byte(-128), @thrift.Double(1.0e+30)),
      ]),
    ),
    (1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
  ])
  let wire = b"\x03\x3e\x00\x0b\xff\xff\x03\x01\x37\x80\xea\x8c\xa0\x39\x59\x3e\x29\x46\x08\x02\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Byte(0)),
      (
        -32768,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.DoubleKind), [
          (@thrift.Byte(-128), @thrift.Double(1.0e+30)),
        ]),
      ),
      (1, @thrift.Binary(b"\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x20\x03\x3e\x00\x0b\xff\xff\x03\x01\x37\x80\xea\x8c\xa0\x39\x59\x3e\x29\x46\x08\x02\x0a\xe4\xb8\xad\xe6\x96\x87\xf0\x9f\x9a\x80\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 144" {
  let original = @thrift.Struct([
    (
      127,
      @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(0), @thrift.Byte(1)]),
    ),
    (32767, @thrift.I32(1)),
    (15, @thrift.Binary(b"")),
    (0, @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [])),
  ])
  let wire = b"\x0e\x00\x7f\x03\x00\x00\x00\x02\x00\x01\x08\x7f\xff\x00\x00\x00\x01\x0b\x00\x0f\x00\x00\x00\x00\x0d\x00\x00\x0b\x0e\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        127,
        @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(0), @thrift.Byte(1)]),
      ),
      (32767, @thrift.I32(1)),
      (15, @thrift.Binary(b"")),
      (0, @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x22\x0e\x00\x7f\x03\x00\x00\x00\x02\x00\x01\x08\x7f\xff\x00\x00\x00\x01\x0b\x00\x0f\x00\x00\x00\x00\x0d\x00\x00\x0b\x0e\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 144" {
  let original = @thrift.Struct([
    (
      127,
      @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(0), @thrift.Byte(1)]),
    ),
    (32767, @thrift.I32(1)),
    (15, @thrift.Binary(b"")),
    (0, @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.SetKind), [])),
  ])
  let wire = b"\x0a\xfe\x01\x23\x00\x01\x05\xfe\xff\x03\x02\x08\x1e\x00\x0b\x00\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        127,
        @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(0), @thrift.Byte(1)]),
      ),
      (32767, @thrift.I32(1)),
      (15, @thrift.Binary(b"")),
      (0, @thrift.MapValue(None, None, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x12\x0a\xfe\x01\x23\x00\x01\x05\xfe\xff\x03\x02\x08\x1e\x00\x0b\x00\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 145" {
  let original = @thrift.Struct([
    (31, @thrift.Binary(b"\x00\xff\xfe")),
    (-1, @thrift.Bool(true)),
    (2, @thrift.Double(0.0)),
    (16, @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.DoubleKind), [])),
  ])
  let wire = b"\x0b\x00\x1f\x00\x00\x00\x03\x00\xff\xfe\x02\xff\xff\x01\x04\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x0d\x00\x10\x0a\x04\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Binary(b"\x00\xff\xfe")),
      (-1, @thrift.Bool(true)),
      (2, @thrift.Double(0.0)),
      (
        16,
        @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.DoubleKind), []),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x23\x0b\x00\x1f\x00\x00\x00\x03\x00\xff\xfe\x02\xff\xff\x01\x04\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x0d\x00\x10\x0a\x04\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 145" {
  let original = @thrift.Struct([
    (31, @thrift.Binary(b"\x00\xff\xfe")),
    (-1, @thrift.Bool(true)),
    (2, @thrift.Double(0.0)),
    (16, @thrift.MapValue(Some(@thrift.I64Kind), Some(@thrift.DoubleKind), [])),
  ])
  let wire = b"\x08\x3e\x03\x00\xff\xfe\x01\x01\x37\x00\x00\x00\x00\x00\x00\x00\x00\xeb\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Binary(b"\x00\xff\xfe")),
      (-1, @thrift.Bool(true)),
      (2, @thrift.Double(0.0)),
      (16, @thrift.MapValue(None, None, [])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x14\x08\x3e\x03\x00\xff\xfe\x01\x01\x37\x00\x00\x00\x00\x00\x00\x00\x00\xeb\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 146" {
  let original = @thrift.Struct([
    (15, @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(1)])),
  ])
  let wire = b"\x0e\x00\x0f\x03\x00\x00\x00\x01\x01\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(15, @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(1)]))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0a\x0e\x00\x0f\x03\x00\x00\x00\x01\x01\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 146" {
  let original = @thrift.Struct([
    (15, @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(1)])),
  ])
  let wire = b"\xfa\x13\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(15, @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(1)]))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x04\xfa\x13\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 147" {
  let original = @thrift.Struct([
    (16, @thrift.I64(0L)),
    (0, @thrift.I16(32767)),
    (1, @thrift.Binary(b"")),
    (14, @thrift.I64(9223372036854775807L)),
  ])
  let wire = b"\x0a\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x06\x00\x00\x7f\xff\x0b\x00\x01\x00\x00\x00\x00\x0a\x00\x0e\x7f\xff\xff\xff\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.I64(0L)),
      (0, @thrift.I16(32767)),
      (1, @thrift.Binary(b"")),
      (14, @thrift.I64(9223372036854775807L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x23\x0a\x00\x10\x00\x00\x00\x00\x00\x00\x00\x00\x06\x00\x00\x7f\xff\x0b\x00\x01\x00\x00\x00\x00\x0a\x00\x0e\x7f\xff\xff\xff\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 147" {
  let original = @thrift.Struct([
    (16, @thrift.I64(0L)),
    (0, @thrift.I16(32767)),
    (1, @thrift.Binary(b"")),
    (14, @thrift.I64(9223372036854775807L)),
  ])
  let wire = b"\x06\x20\x00\x04\x00\xfe\xff\x03\x18\x00\xd6\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (16, @thrift.I64(0L)),
      (0, @thrift.I16(32767)),
      (1, @thrift.Binary(b"")),
      (14, @thrift.I64(9223372036854775807L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x16\x06\x20\x00\x04\x00\xfe\xff\x03\x18\x00\xd6\xfe\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 148" {
  let original = @thrift.Struct([
    (1, @thrift.Binary(b"")),
    (32767, @thrift.Binary(b"")),
  ])
  let wire = b"\x0b\x00\x01\x00\x00\x00\x00\x0b\x7f\xff\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(1, @thrift.Binary(b"")), (32767, @thrift.Binary(b""))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0f\x0b\x00\x01\x00\x00\x00\x00\x0b\x7f\xff\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 148" {
  let original = @thrift.Struct([
    (1, @thrift.Binary(b"")),
    (32767, @thrift.Binary(b"")),
  ])
  let wire = b"\x18\x00\x08\xfe\xff\x03\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(1, @thrift.Binary(b"")), (32767, @thrift.Binary(b""))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x08\x18\x00\x08\xfe\xff\x03\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 149" {
  let original = @thrift.Struct([
    (31, @thrift.Bool(false)),
    (15, @thrift.Struct([])),
    (
      16,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.SetKind), [
        (@thrift.Byte(-1), @thrift.SetValue(@thrift.DoubleKind, [])),
        (@thrift.Byte(1), @thrift.SetValue(@thrift.ByteKind, [])),
      ]),
    ),
    (
      32767,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
        (
          @thrift.Byte(-1),
          @thrift.Struct([
            (32767, @thrift.Double(1.0e+30)),
            (31, @thrift.Bool(false)),
          ]),
        ),
        (
          @thrift.Byte(127),
          @thrift.Struct([
            (
              15,
              @thrift.SetValue(@thrift.DoubleKind, [
                @thrift.Double(-0.0),
                @thrift.Double(-12.125),
              ]),
            ),
          ]),
        ),
        (@thrift.Byte(0), @thrift.Struct([])),
      ]),
    ),
  ])
  let wire = b"\x02\x00\x1f\x00\x0c\x00\x0f\x00\x0d\x00\x10\x03\x0e\x00\x00\x00\x02\xff\x04\x00\x00\x00\x00\x01\x03\x00\x00\x00\x00\x0d\x7f\xff\x03\x0c\x00\x00\x00\x03\xff\x04\x7f\xff\x46\x29\x3e\x59\x39\xa0\x8c\xea\x02\x00\x1f\x00\x00\x7f\x0e\x00\x0f\x04\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\xc0\x28\x40\x00\x00\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Bool(false)),
      (15, @thrift.Struct([])),
      (
        16,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.SetKind), [
          (@thrift.Byte(-1), @thrift.SetValue(@thrift.DoubleKind, [])),
          (@thrift.Byte(1), @thrift.SetValue(@thrift.ByteKind, [])),
        ]),
      ),
      (
        32767,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
          (
            @thrift.Byte(-1),
            @thrift.Struct([
              (32767, @thrift.Double(1.0e+30)),
              (31, @thrift.Bool(false)),
            ]),
          ),
          (
            @thrift.Byte(127),
            @thrift.Struct([
              (
                15,
                @thrift.SetValue(@thrift.DoubleKind, [
                  @thrift.Double(-0.0),
                  @thrift.Double(-12.125),
                ]),
              ),
            ]),
          ),
          (@thrift.Byte(0), @thrift.Struct([])),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x54\x02\x00\x1f\x00\x0c\x00\x0f\x00\x0d\x00\x10\x03\x0e\x00\x00\x00\x02\xff\x04\x00\x00\x00\x00\x01\x03\x00\x00\x00\x00\x0d\x7f\xff\x03\x0c\x00\x00\x00\x03\xff\x04\x7f\xff\x46\x29\x3e\x59\x39\xa0\x8c\xea\x02\x00\x1f\x00\x00\x7f\x0e\x00\x0f\x04\x00\x00\x00\x02\x80\x00\x00\x00\x00\x00\x00\x00\xc0\x28\x40\x00\x00\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 149" {
  let original = @thrift.Struct([
    (31, @thrift.Bool(false)),
    (15, @thrift.Struct([])),
    (
      16,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.SetKind), [
        (@thrift.Byte(-1), @thrift.SetValue(@thrift.DoubleKind, [])),
        (@thrift.Byte(1), @thrift.SetValue(@thrift.ByteKind, [])),
      ]),
    ),
    (
      32767,
      @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
        (
          @thrift.Byte(-1),
          @thrift.Struct([
            (32767, @thrift.Double(1.0e+30)),
            (31, @thrift.Bool(false)),
          ]),
        ),
        (
          @thrift.Byte(127),
          @thrift.Struct([
            (
              15,
              @thrift.SetValue(@thrift.DoubleKind, [
                @thrift.Double(-0.0),
                @thrift.Double(-12.125),
              ]),
            ),
          ]),
        ),
        (@thrift.Byte(0), @thrift.Struct([])),
      ]),
    ),
  ])
  let wire = b"\x02\x3e\x0c\x1e\x00\x1b\x02\x3a\xff\x07\x01\x03\x0b\xfe\xff\x03\x03\x3c\xff\x07\xfe\xff\x03\xea\x8c\xa0\x39\x59\x3e\x29\x46\x02\x3e\x00\x7f\xfa\x27\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x40\x28\xc0\x00\x00\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (31, @thrift.Bool(false)),
      (15, @thrift.Struct([])),
      (
        16,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.SetKind), [
          (@thrift.Byte(-1), @thrift.SetValue(@thrift.DoubleKind, [])),
          (@thrift.Byte(1), @thrift.SetValue(@thrift.ByteKind, [])),
        ]),
      ),
      (
        32767,
        @thrift.MapValue(Some(@thrift.ByteKind), Some(@thrift.StructKind), [
          (
            @thrift.Byte(-1),
            @thrift.Struct([
              (32767, @thrift.Double(1.0e+30)),
              (31, @thrift.Bool(false)),
            ]),
          ),
          (
            @thrift.Byte(127),
            @thrift.Struct([
              (
                15,
                @thrift.SetValue(@thrift.DoubleKind, [
                  @thrift.Double(-0.0),
                  @thrift.Double(-12.125),
                ]),
              ),
            ]),
          ),
          (@thrift.Byte(0), @thrift.Struct([])),
        ]),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x39\x02\x3e\x0c\x1e\x00\x1b\x02\x3a\xff\x07\x01\x03\x0b\xfe\xff\x03\x03\x3c\xff\x07\xfe\xff\x03\xea\x8c\xa0\x39\x59\x3e\x29\x46\x02\x3e\x00\x7f\xfa\x27\x00\x00\x00\x00\x00\x00\x00\x80\x00\x00\x00\x00\x00\x40\x28\xc0\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 150" {
  let original = @thrift.Struct([
    (
      0,
      @thrift.Binary(
        b"\xb5\xd4\x5b\x73\x09\xdf\x03\x31\xb6\x56\x26\x77\x3c\x23\xe0\x77\x7c",
      ),
    ),
  ])
  let wire = b"\x0b\x00\x00\x00\x00\x00\x11\xb5\xd4\x5b\x73\x09\xdf\x03\x31\xb6\x56\x26\x77\x3c\x23\xe0\x77\x7c\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        0,
        @thrift.Binary(
          b"\xb5\xd4\x5b\x73\x09\xdf\x03\x31\xb6\x56\x26\x77\x3c\x23\xe0\x77\x7c",
        ),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x19\x0b\x00\x00\x00\x00\x00\x11\xb5\xd4\x5b\x73\x09\xdf\x03\x31\xb6\x56\x26\x77\x3c\x23\xe0\x77\x7c\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 150" {
  let original = @thrift.Struct([
    (
      0,
      @thrift.Binary(
        b"\xb5\xd4\x5b\x73\x09\xdf\x03\x31\xb6\x56\x26\x77\x3c\x23\xe0\x77\x7c",
      ),
    ),
  ])
  let wire = b"\x08\x00\x11\xb5\xd4\x5b\x73\x09\xdf\x03\x31\xb6\x56\x26\x77\x3c\x23\xe0\x77\x7c\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (
        0,
        @thrift.Binary(
          b"\xb5\xd4\x5b\x73\x09\xdf\x03\x31\xb6\x56\x26\x77\x3c\x23\xe0\x77\x7c",
        ),
      ),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x15\x08\x00\x11\xb5\xd4\x5b\x73\x09\xdf\x03\x31\xb6\x56\x26\x77\x3c\x23\xe0\x77\x7c\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 151" {
  let original = @thrift.Struct([
    (0, @thrift.I16(32767)),
    (31, @thrift.Bool(false)),
    (32767, @thrift.I64(-9223372036854775808L)),
    (14, @thrift.I32(-1)),
  ])
  let wire = b"\x06\x00\x00\x7f\xff\x02\x00\x1f\x00\x0a\x7f\xff\x80\x00\x00\x00\x00\x00\x00\x00\x08\x00\x0e\xff\xff\xff\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (0, @thrift.I16(32767)),
      (31, @thrift.Bool(false)),
      (32767, @thrift.I64(-9223372036854775808L)),
      (14, @thrift.I32(-1)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1c\x06\x00\x00\x7f\xff\x02\x00\x1f\x00\x0a\x7f\xff\x80\x00\x00\x00\x00\x00\x00\x00\x08\x00\x0e\xff\xff\xff\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 151" {
  let original = @thrift.Struct([
    (0, @thrift.I16(32767)),
    (31, @thrift.Bool(false)),
    (32767, @thrift.I64(-9223372036854775808L)),
    (14, @thrift.I32(-1)),
  ])
  let wire = b"\x04\x00\xfe\xff\x03\x02\x3e\x06\xfe\xff\x03\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x05\x1c\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (0, @thrift.I16(32767)),
      (31, @thrift.Bool(false)),
      (32767, @thrift.I64(-9223372036854775808L)),
      (14, @thrift.I32(-1)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x19\x04\x00\xfe\xff\x03\x02\x3e\x06\xfe\xff\x03\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x05\x1c\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 152" {
  let original = @thrift.Struct([(32767, @thrift.Double(0.0))])
  let wire = b"\x04\x7f\xff\x00\x00\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(32767, @thrift.Double(0.0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0c\x04\x7f\xff\x00\x00\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 152" {
  let original = @thrift.Struct([(32767, @thrift.Double(0.0))])
  let wire = b"\x07\xfe\xff\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(32767, @thrift.Double(0.0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0d\x07\xfe\xff\x03\x00\x00\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 153" {
  let original = @thrift.Struct([
    (1, @thrift.I16(-86)),
    (0, @thrift.Double(-0.0)),
  ])
  let wire = b"\x06\x00\x01\xff\xaa\x04\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(1, @thrift.I16(-86)), (0, @thrift.Double(-0.0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x11\x06\x00\x01\xff\xaa\x04\x00\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 153" {
  let original = @thrift.Struct([
    (1, @thrift.I16(-86)),
    (0, @thrift.Double(-0.0)),
  ])
  let wire = b"\x14\xab\x01\x07\x00\x00\x00\x00\x00\x00\x00\x00\x80\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(1, @thrift.I16(-86)), (0, @thrift.Double(-0.0))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x0e\x14\xab\x01\x07\x00\x00\x00\x00\x00\x00\x00\x00\x80\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 154" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 154" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 155" {
  let original = @thrift.Struct([
    (15, @thrift.Double(-12.125)),
    (
      0,
      @thrift.SetValue(@thrift.ListKind, [
        @thrift.List(@thrift.DoubleKind, [@thrift.Double(1.5)]),
        @thrift.List(@thrift.BoolKind, [@thrift.Bool(true), @thrift.Bool(true)]),
      ]),
    ),
    (32767, @thrift.Binary(b"\x00\xff\xfe")),
  ])
  let wire = b"\x04\x00\x0f\xc0\x28\x40\x00\x00\x00\x00\x00\x0e\x00\x00\x0f\x00\x00\x00\x02\x04\x00\x00\x00\x01\x3f\xf8\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x02\x01\x01\x0b\x7f\xff\x00\x00\x00\x03\x00\xff\xfe\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.Double(-12.125)),
      (
        0,
        @thrift.SetValue(@thrift.ListKind, [
          @thrift.List(@thrift.DoubleKind, [@thrift.Double(1.5)]),
          @thrift.List(@thrift.BoolKind, [
            @thrift.Bool(true),
            @thrift.Bool(true),
          ]),
        ]),
      ),
      (32767, @thrift.Binary(b"\x00\xff\xfe")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x32\x04\x00\x0f\xc0\x28\x40\x00\x00\x00\x00\x00\x0e\x00\x00\x0f\x00\x00\x00\x02\x04\x00\x00\x00\x01\x3f\xf8\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x02\x01\x01\x0b\x7f\xff\x00\x00\x00\x03\x00\xff\xfe\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 155" {
  let original = @thrift.Struct([
    (15, @thrift.Double(-12.125)),
    (
      0,
      @thrift.SetValue(@thrift.ListKind, [
        @thrift.List(@thrift.DoubleKind, [@thrift.Double(1.5)]),
        @thrift.List(@thrift.BoolKind, [@thrift.Bool(true), @thrift.Bool(true)]),
      ]),
    ),
    (32767, @thrift.Binary(b"\x00\xff\xfe")),
  ])
  let wire = b"\xf7\x00\x00\x00\x00\x00\x40\x28\xc0\x0a\x00\x29\x17\x00\x00\x00\x00\x00\x00\xf8\x3f\x21\x01\x01\x08\xfe\xff\x03\x03\x00\xff\xfe\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (15, @thrift.Double(-12.125)),
      (
        0,
        @thrift.SetValue(@thrift.ListKind, [
          @thrift.List(@thrift.DoubleKind, [@thrift.Double(1.5)]),
          @thrift.List(@thrift.BoolKind, [
            @thrift.Bool(true),
            @thrift.Bool(true),
          ]),
        ]),
      ),
      (32767, @thrift.Binary(b"\x00\xff\xfe")),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x21\xf7\x00\x00\x00\x00\x00\x40\x28\xc0\x0a\x00\x29\x17\x00\x00\x00\x00\x00\x00\xf8\x3f\x21\x01\x01\x08\xfe\xff\x03\x03\x00\xff\xfe\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 156" {
  let original = @thrift.Struct([(-1, @thrift.List(@thrift.BinaryKind, []))])
  let wire = b"\x0f\xff\xff\x0b\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-1, @thrift.List(@thrift.BinaryKind, []))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x09\x0f\xff\xff\x0b\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 156" {
  let original = @thrift.Struct([(-1, @thrift.List(@thrift.BinaryKind, []))])
  let wire = b"\x09\x01\x08\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([(-1, @thrift.List(@thrift.BinaryKind, []))]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x04\x09\x01\x08\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 157" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded CompactProtocol fixture 157" {
  let original = @thrift.Struct([])
  let wire = b"\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(@thrift.frame(wire), b"\x00\x00\x00\x01\x00")
}

///|
test "Apache seeded BinaryProtocol fixture 158" {
  let original = @thrift.Struct([
    (32767, @thrift.Binary(b"\x00\xff\xfe")),
    (1, @thrift.Double(-12.125)),
    (-32768, @thrift.I64(-9223372036854775808L)),
  ])
  let wire = b"\x0b\x7f\xff\x00\x00\x00\x03\x00\xff\xfe\x04\x00\x01\xc0\x28\x40\x00\x00\x00\x00\x00\x0a\x80\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.Binary(b"\x00\xff\xfe")),
      (1, @thrift.Double(-12.125)),
      (-32768, @thrift.I64(-9223372036854775808L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x21\x0b\x7f\xff\x00\x00\x00\x03\x00\xff\xfe\x04\x00\x01\xc0\x28\x40\x00\x00\x00\x00\x00\x0a\x80\x00\x80\x00\x00\x00\x00\x00\x00\x00\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 158" {
  let original = @thrift.Struct([
    (32767, @thrift.Binary(b"\x00\xff\xfe")),
    (1, @thrift.Double(-12.125)),
    (-32768, @thrift.I64(-9223372036854775808L)),
  ])
  let wire = b"\x08\xfe\xff\x03\x03\x00\xff\xfe\x07\x02\x00\x00\x00\x00\x00\x40\x28\xc0\x06\xff\xff\x03\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (32767, @thrift.Binary(b"\x00\xff\xfe")),
      (1, @thrift.Double(-12.125)),
      (-32768, @thrift.I64(-9223372036854775808L)),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x21\x08\xfe\xff\x03\x03\x00\xff\xfe\x07\x02\x00\x00\x00\x00\x00\x40\x28\xc0\x06\xff\xff\x03\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\x00",
  )
}

///|
test "Apache seeded BinaryProtocol fixture 159" {
  let original = @thrift.Struct([
    (14, @thrift.Double(0.0)),
    (127, @thrift.SetValue(@thrift.BoolKind, [])),
    (-32768, @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(-1)])),
  ])
  let wire = b"\x04\x00\x0e\x00\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x7f\x02\x00\x00\x00\x00\x0e\x80\x00\x03\x00\x00\x00\x01\xff\x00"
  let protocol = @thrift.BinaryProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.Double(0.0)),
      (127, @thrift.SetValue(@thrift.BoolKind, [])),
      (-32768, @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(-1)])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x1d\x04\x00\x0e\x00\x00\x00\x00\x00\x00\x00\x00\x0e\x00\x7f\x02\x00\x00\x00\x00\x0e\x80\x00\x03\x00\x00\x00\x01\xff\x00",
  )
}

///|
test "Apache seeded CompactProtocol fixture 159" {
  let original = @thrift.Struct([
    (14, @thrift.Double(0.0)),
    (127, @thrift.SetValue(@thrift.BoolKind, [])),
    (-32768, @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(-1)])),
  ])
  let wire = b"\xe7\x00\x00\x00\x00\x00\x00\x00\x00\x0a\xfe\x01\x01\x0a\xff\xff\x03\x13\xff\x00"
  let protocol = @thrift.CompactProtocol
  assert_eq(@thrift.encode(original, protocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, protocol),
    @thrift.Struct([
      (14, @thrift.Double(0.0)),
      (127, @thrift.SetValue(@thrift.BoolKind, [])),
      (-32768, @thrift.SetValue(@thrift.ByteKind, [@thrift.Byte(-1)])),
    ]),
  )
  assert_eq(
    @thrift.skip_prefix(wire, @thrift.StructKind, protocol),
    wire.length(),
  )
  assert_eq(@thrift.decode_selected(wire, [], protocol), @thrift.Struct([]))
  assert_eq(
    @thrift.frame(wire),
    b"\x00\x00\x00\x14\xe7\x00\x00\x00\x00\x00\x00\x00\x00\x0a\xfe\x01\x01\x0a\xff\xff\x03\x13\xff\x00",
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq -2147483648 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x01\x80\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq -2147483648 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x02\x80\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq -2147483648 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x03\x80\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq -2147483648 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x04\x80\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq -1 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x01\xff\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq -1 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x02\xff\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq -1 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x03\xff\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq -1 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x04\xff\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq 0 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x01\x00\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq 0 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x02\x00\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq 0 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x03\x00\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq 0 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x04\x00\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq 2147483647 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x01\x7f\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq 2147483647 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x02\x7f\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq 2147483647 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x03\x7f\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict False seq 2147483647 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x04\x7f\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=false),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=false),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq -2147483648 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x01\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x80\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq -2147483648 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x02\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x80\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq -2147483648 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x03\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x80\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq -2147483648 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x04\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x80\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq -1 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x01\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\xff\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq -1 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x02\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\xff\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq -1 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x03\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\xff\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq -1 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x04\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\xff\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq 0 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x01\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x00\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq 0 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x02\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x00\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq 0 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x03\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x00\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq 0 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x04\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x00\x00\x00\x00\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq 2147483647 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x01\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x7f\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq 2147483647 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x02\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x7f\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq 2147483647 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x03\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x7f\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope BinaryProtocol strict True seq 2147483647 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x80\x01\x00\x04\x00\x00\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x7f\xff\xff\xff\x08\x00\x01\x00\x00\x00\x2a\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.BinaryProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.BinaryProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq -2147483648 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x21\x80\x80\x80\x80\x08\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq -2147483648 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x41\x80\x80\x80\x80\x08\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq -2147483648 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x61\x80\x80\x80\x80\x08\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq -2147483648 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: -2147483648,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x81\x80\x80\x80\x80\x08\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq -1 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x21\xff\xff\xff\xff\x0f\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq -1 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x41\xff\xff\xff\xff\x0f\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq -1 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x61\xff\xff\xff\xff\x0f\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq -1 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: -1,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x81\xff\xff\xff\xff\x0f\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq 0 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x21\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq 0 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x41\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq 0 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x61\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq 0 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: 0,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x81\x00\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq 2147483647 type 1" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 1,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x21\xff\xff\xff\xff\x07\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq 2147483647 type 2" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 2,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x41\xff\xff\xff\xff\x07\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq 2147483647 type 3" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 3,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x61\xff\xff\xff\xff\x07\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}

///|
test "Apache envelope CompactProtocol strict True seq 2147483647 type 4" {
  let m : @thrift.Message = {
    name: "查询",
    message_type: 4,
    sequence_id: 2147483647,
    body: @thrift.Struct([(1, @thrift.I32(42))]),
  }
  let wire = b"\x82\x81\xff\xff\xff\xff\x07\x06\xe6\x9f\xa5\xe8\xaf\xa2\x15\x54\x00"
  assert_eq(
    @thrift.encode_message(m, @thrift.CompactProtocol, strict_write=true),
    wire,
  )
  assert_eq(
    @thrift.decode_message(wire, @thrift.CompactProtocol, strict_read=true),
    m,
  )
}
