// Independent Apache Thrift Python 0.22.0 container fixtures.

///|
test "Apache BinaryProtocol map and set length 0" {
  let value = @thrift.Struct([
    (1, @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [])),
    (2, @thrift.SetValue(@thrift.I64Kind, [])),
  ])
  let wire = b"\x0d\x00\x01\x0b\x08\x00\x00\x00\x00\x0e\x00\x02\x0a\x00\x00\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    @thrift.Struct([
      (1, @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [])),
      (2, @thrift.SetValue(@thrift.I64Kind, [])),
    ]),
  )
}

///|
test "Apache CompactProtocol map and set length 0" {
  let value = @thrift.Struct([
    (1, @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [])),
    (2, @thrift.SetValue(@thrift.I64Kind, [])),
  ])
  let wire = b"\x1b\x00\x1a\x06\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    @thrift.Struct([
      (1, @thrift.MapValue(None, None, [])),
      (2, @thrift.SetValue(@thrift.I64Kind, [])),
    ]),
  )
}

///|
test "Apache BinaryProtocol map and set length 1" {
  let value = @thrift.Struct([
    (
      1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
      ]),
    ),
    (2, @thrift.SetValue(@thrift.I64Kind, [@thrift.I64(-50L)])),
  ])
  let wire = b"\x0d\x00\x01\x0b\x08\x00\x00\x00\x01\x00\x00\x00\x02\x6b\x30\xff\xff\xff\xe2\x0e\x00\x02\x0a\x00\x00\x00\x01\xff\xff\xff\xff\xff\xff\xff\xce\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    @thrift.Struct([
      (
        1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
        ]),
      ),
      (2, @thrift.SetValue(@thrift.I64Kind, [@thrift.I64(-50L)])),
    ]),
  )
}

///|
test "Apache CompactProtocol map and set length 1" {
  let value = @thrift.Struct([
    (
      1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
      ]),
    ),
    (2, @thrift.SetValue(@thrift.I64Kind, [@thrift.I64(-50L)])),
  ])
  let wire = b"\x1b\x01\x85\x02\x6b\x30\x3b\x1a\x16\x63\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    @thrift.Struct([
      (
        1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
        ]),
      ),
      (2, @thrift.SetValue(@thrift.I64Kind, [@thrift.I64(-50L)])),
    ]),
  )
}

///|
test "Apache BinaryProtocol map and set length 2" {
  let value = @thrift.Struct([
    (
      1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
        (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
      ]),
    ),
    (
      2,
      @thrift.SetValue(@thrift.I64Kind, [@thrift.I64(-50L), @thrift.I64(950L)]),
    ),
  ])
  let wire = b"\x0d\x00\x01\x0b\x08\x00\x00\x00\x02\x00\x00\x00\x02\x6b\x30\xff\xff\xff\xe2\x00\x00\x00\x02\x6b\x31\xff\xff\xff\xf3\x0e\x00\x02\x0a\x00\x00\x00\x02\xff\xff\xff\xff\xff\xff\xff\xce\x00\x00\x00\x00\x00\x00\x03\xb6\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    @thrift.Struct([
      (
        1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
          (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
        ]),
      ),
      (
        2,
        @thrift.SetValue(@thrift.I64Kind, [@thrift.I64(-50L), @thrift.I64(950L)]),
      ),
    ]),
  )
}

///|
test "Apache CompactProtocol map and set length 2" {
  let value = @thrift.Struct([
    (
      1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
        (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
      ]),
    ),
    (
      2,
      @thrift.SetValue(@thrift.I64Kind, [@thrift.I64(-50L), @thrift.I64(950L)]),
    ),
  ])
  let wire = b"\x1b\x02\x85\x02\x6b\x30\x3b\x02\x6b\x31\x19\x1a\x26\x63\xec\x0e\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    @thrift.Struct([
      (
        1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
          (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
        ]),
      ),
      (
        2,
        @thrift.SetValue(@thrift.I64Kind, [@thrift.I64(-50L), @thrift.I64(950L)]),
      ),
    ]),
  )
}

///|
test "Apache BinaryProtocol map and set length 14" {
  let value = @thrift.Struct([
    (
      1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
        (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
        (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
        (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
        (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
        (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
        (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
        (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
        (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
        (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
        (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
        (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
        (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
        (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
      ]),
    ),
    (
      2,
      @thrift.SetValue(@thrift.I64Kind, [
        @thrift.I64(-50L),
        @thrift.I64(950L),
        @thrift.I64(1950L),
        @thrift.I64(2950L),
        @thrift.I64(3950L),
        @thrift.I64(4950L),
        @thrift.I64(5950L),
        @thrift.I64(6950L),
        @thrift.I64(7950L),
        @thrift.I64(8950L),
        @thrift.I64(9950L),
        @thrift.I64(10950L),
        @thrift.I64(11950L),
        @thrift.I64(12950L),
      ]),
    ),
  ])
  let wire = b"\x0d\x00\x01\x0b\x08\x00\x00\x00\x0e\x00\x00\x00\x02\x6b\x30\xff\xff\xff\xe2\x00\x00\x00\x02\x6b\x31\xff\xff\xff\xf3\x00\x00\x00\x02\x6b\x32\x00\x00\x00\x04\x00\x00\x00\x02\x6b\x33\x00\x00\x00\x15\x00\x00\x00\x02\x6b\x34\x00\x00\x00\x26\x00\x00\x00\x02\x6b\x35\x00\x00\x00\x37\x00\x00\x00\x02\x6b\x36\x00\x00\x00\x48\x00\x00\x00\x02\x6b\x37\x00\x00\x00\x59\x00\x00\x00\x02\x6b\x38\x00\x00\x00\x6a\x00\x00\x00\x02\x6b\x39\x00\x00\x00\x7b\x00\x00\x00\x03\x6b\x31\x30\x00\x00\x00\x8c\x00\x00\x00\x03\x6b\x31\x31\x00\x00\x00\x9d\x00\x00\x00\x03\x6b\x31\x32\x00\x00\x00\xae\x00\x00\x00\x03\x6b\x31\x33\x00\x00\x00\xbf\x0e\x00\x02\x0a\x00\x00\x00\x0e\xff\xff\xff\xff\xff\xff\xff\xce\x00\x00\x00\x00\x00\x00\x03\xb6\x00\x00\x00\x00\x00\x00\x07\x9e\x00\x00\x00\x00\x00\x00\x0b\x86\x00\x00\x00\x00\x00\x00\x0f\x6e\x00\x00\x00\x00\x00\x00\x13\x56\x00\x00\x00\x00\x00\x00\x17\x3e\x00\x00\x00\x00\x00\x00\x1b\x26\x00\x00\x00\x00\x00\x00\x1f\x0e\x00\x00\x00\x00\x00\x00\x22\xf6\x00\x00\x00\x00\x00\x00\x26\xde\x00\x00\x00\x00\x00\x00\x2a\xc6\x00\x00\x00\x00\x00\x00\x2e\xae\x00\x00\x00\x00\x00\x00\x32\x96\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    @thrift.Struct([
      (
        1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
          (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
          (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
          (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
          (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
          (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
          (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
          (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
          (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
          (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
          (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
          (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
          (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
          (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
        ]),
      ),
      (
        2,
        @thrift.SetValue(@thrift.I64Kind, [
          @thrift.I64(-50L),
          @thrift.I64(950L),
          @thrift.I64(1950L),
          @thrift.I64(2950L),
          @thrift.I64(3950L),
          @thrift.I64(4950L),
          @thrift.I64(5950L),
          @thrift.I64(6950L),
          @thrift.I64(7950L),
          @thrift.I64(8950L),
          @thrift.I64(9950L),
          @thrift.I64(10950L),
          @thrift.I64(11950L),
          @thrift.I64(12950L),
        ]),
      ),
    ]),
  )
}

///|
test "Apache CompactProtocol map and set length 14" {
  let value = @thrift.Struct([
    (
      1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
        (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
        (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
        (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
        (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
        (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
        (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
        (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
        (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
        (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
        (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
        (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
        (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
        (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
      ]),
    ),
    (
      2,
      @thrift.SetValue(@thrift.I64Kind, [
        @thrift.I64(-50L),
        @thrift.I64(950L),
        @thrift.I64(1950L),
        @thrift.I64(2950L),
        @thrift.I64(3950L),
        @thrift.I64(4950L),
        @thrift.I64(5950L),
        @thrift.I64(6950L),
        @thrift.I64(7950L),
        @thrift.I64(8950L),
        @thrift.I64(9950L),
        @thrift.I64(10950L),
        @thrift.I64(11950L),
        @thrift.I64(12950L),
      ]),
    ),
  ])
  let wire = b"\x1b\x0e\x85\x02\x6b\x30\x3b\x02\x6b\x31\x19\x02\x6b\x32\x08\x02\x6b\x33\x2a\x02\x6b\x34\x4c\x02\x6b\x35\x6e\x02\x6b\x36\x90\x01\x02\x6b\x37\xb2\x01\x02\x6b\x38\xd4\x01\x02\x6b\x39\xf6\x01\x03\x6b\x31\x30\x98\x02\x03\x6b\x31\x31\xba\x02\x03\x6b\x31\x32\xdc\x02\x03\x6b\x31\x33\xfe\x02\x1a\xe6\x63\xec\x0e\xbc\x1e\x8c\x2e\xdc\x3d\xac\x4d\xfc\x5c\xcc\x6c\x9c\x7c\xec\x8b\x01\xbc\x9b\x01\x8c\xab\x01\xdc\xba\x01\xac\xca\x01\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    @thrift.Struct([
      (
        1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
          (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
          (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
          (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
          (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
          (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
          (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
          (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
          (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
          (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
          (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
          (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
          (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
          (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
        ]),
      ),
      (
        2,
        @thrift.SetValue(@thrift.I64Kind, [
          @thrift.I64(-50L),
          @thrift.I64(950L),
          @thrift.I64(1950L),
          @thrift.I64(2950L),
          @thrift.I64(3950L),
          @thrift.I64(4950L),
          @thrift.I64(5950L),
          @thrift.I64(6950L),
          @thrift.I64(7950L),
          @thrift.I64(8950L),
          @thrift.I64(9950L),
          @thrift.I64(10950L),
          @thrift.I64(11950L),
          @thrift.I64(12950L),
        ]),
      ),
    ]),
  )
}

///|
test "Apache BinaryProtocol map and set length 15" {
  let value = @thrift.Struct([
    (
      1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
        (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
        (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
        (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
        (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
        (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
        (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
        (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
        (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
        (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
        (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
        (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
        (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
        (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
        (@thrift.Binary(b"\x6b\x31\x34"), @thrift.I32(208)),
      ]),
    ),
    (
      2,
      @thrift.SetValue(@thrift.I64Kind, [
        @thrift.I64(-50L),
        @thrift.I64(950L),
        @thrift.I64(1950L),
        @thrift.I64(2950L),
        @thrift.I64(3950L),
        @thrift.I64(4950L),
        @thrift.I64(5950L),
        @thrift.I64(6950L),
        @thrift.I64(7950L),
        @thrift.I64(8950L),
        @thrift.I64(9950L),
        @thrift.I64(10950L),
        @thrift.I64(11950L),
        @thrift.I64(12950L),
        @thrift.I64(13950L),
      ]),
    ),
  ])
  let wire = b"\x0d\x00\x01\x0b\x08\x00\x00\x00\x0f\x00\x00\x00\x02\x6b\x30\xff\xff\xff\xe2\x00\x00\x00\x02\x6b\x31\xff\xff\xff\xf3\x00\x00\x00\x02\x6b\x32\x00\x00\x00\x04\x00\x00\x00\x02\x6b\x33\x00\x00\x00\x15\x00\x00\x00\x02\x6b\x34\x00\x00\x00\x26\x00\x00\x00\x02\x6b\x35\x00\x00\x00\x37\x00\x00\x00\x02\x6b\x36\x00\x00\x00\x48\x00\x00\x00\x02\x6b\x37\x00\x00\x00\x59\x00\x00\x00\x02\x6b\x38\x00\x00\x00\x6a\x00\x00\x00\x02\x6b\x39\x00\x00\x00\x7b\x00\x00\x00\x03\x6b\x31\x30\x00\x00\x00\x8c\x00\x00\x00\x03\x6b\x31\x31\x00\x00\x00\x9d\x00\x00\x00\x03\x6b\x31\x32\x00\x00\x00\xae\x00\x00\x00\x03\x6b\x31\x33\x00\x00\x00\xbf\x00\x00\x00\x03\x6b\x31\x34\x00\x00\x00\xd0\x0e\x00\x02\x0a\x00\x00\x00\x0f\xff\xff\xff\xff\xff\xff\xff\xce\x00\x00\x00\x00\x00\x00\x03\xb6\x00\x00\x00\x00\x00\x00\x07\x9e\x00\x00\x00\x00\x00\x00\x0b\x86\x00\x00\x00\x00\x00\x00\x0f\x6e\x00\x00\x00\x00\x00\x00\x13\x56\x00\x00\x00\x00\x00\x00\x17\x3e\x00\x00\x00\x00\x00\x00\x1b\x26\x00\x00\x00\x00\x00\x00\x1f\x0e\x00\x00\x00\x00\x00\x00\x22\xf6\x00\x00\x00\x00\x00\x00\x26\xde\x00\x00\x00\x00\x00\x00\x2a\xc6\x00\x00\x00\x00\x00\x00\x2e\xae\x00\x00\x00\x00\x00\x00\x32\x96\x00\x00\x00\x00\x00\x00\x36\x7e\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    @thrift.Struct([
      (
        1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
          (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
          (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
          (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
          (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
          (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
          (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
          (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
          (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
          (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
          (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
          (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
          (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
          (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
          (@thrift.Binary(b"\x6b\x31\x34"), @thrift.I32(208)),
        ]),
      ),
      (
        2,
        @thrift.SetValue(@thrift.I64Kind, [
          @thrift.I64(-50L),
          @thrift.I64(950L),
          @thrift.I64(1950L),
          @thrift.I64(2950L),
          @thrift.I64(3950L),
          @thrift.I64(4950L),
          @thrift.I64(5950L),
          @thrift.I64(6950L),
          @thrift.I64(7950L),
          @thrift.I64(8950L),
          @thrift.I64(9950L),
          @thrift.I64(10950L),
          @thrift.I64(11950L),
          @thrift.I64(12950L),
          @thrift.I64(13950L),
        ]),
      ),
    ]),
  )
}

///|
test "Apache CompactProtocol map and set length 15" {
  let value = @thrift.Struct([
    (
      1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
        (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
        (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
        (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
        (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
        (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
        (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
        (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
        (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
        (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
        (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
        (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
        (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
        (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
        (@thrift.Binary(b"\x6b\x31\x34"), @thrift.I32(208)),
      ]),
    ),
    (
      2,
      @thrift.SetValue(@thrift.I64Kind, [
        @thrift.I64(-50L),
        @thrift.I64(950L),
        @thrift.I64(1950L),
        @thrift.I64(2950L),
        @thrift.I64(3950L),
        @thrift.I64(4950L),
        @thrift.I64(5950L),
        @thrift.I64(6950L),
        @thrift.I64(7950L),
        @thrift.I64(8950L),
        @thrift.I64(9950L),
        @thrift.I64(10950L),
        @thrift.I64(11950L),
        @thrift.I64(12950L),
        @thrift.I64(13950L),
      ]),
    ),
  ])
  let wire = b"\x1b\x0f\x85\x02\x6b\x30\x3b\x02\x6b\x31\x19\x02\x6b\x32\x08\x02\x6b\x33\x2a\x02\x6b\x34\x4c\x02\x6b\x35\x6e\x02\x6b\x36\x90\x01\x02\x6b\x37\xb2\x01\x02\x6b\x38\xd4\x01\x02\x6b\x39\xf6\x01\x03\x6b\x31\x30\x98\x02\x03\x6b\x31\x31\xba\x02\x03\x6b\x31\x32\xdc\x02\x03\x6b\x31\x33\xfe\x02\x03\x6b\x31\x34\xa0\x03\x1a\xf6\x0f\x63\xec\x0e\xbc\x1e\x8c\x2e\xdc\x3d\xac\x4d\xfc\x5c\xcc\x6c\x9c\x7c\xec\x8b\x01\xbc\x9b\x01\x8c\xab\x01\xdc\xba\x01\xac\xca\x01\xfc\xd9\x01\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    @thrift.Struct([
      (
        1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
          (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
          (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
          (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
          (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
          (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
          (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
          (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
          (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
          (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
          (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
          (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
          (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
          (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
          (@thrift.Binary(b"\x6b\x31\x34"), @thrift.I32(208)),
        ]),
      ),
      (
        2,
        @thrift.SetValue(@thrift.I64Kind, [
          @thrift.I64(-50L),
          @thrift.I64(950L),
          @thrift.I64(1950L),
          @thrift.I64(2950L),
          @thrift.I64(3950L),
          @thrift.I64(4950L),
          @thrift.I64(5950L),
          @thrift.I64(6950L),
          @thrift.I64(7950L),
          @thrift.I64(8950L),
          @thrift.I64(9950L),
          @thrift.I64(10950L),
          @thrift.I64(11950L),
          @thrift.I64(12950L),
          @thrift.I64(13950L),
        ]),
      ),
    ]),
  )
}

///|
test "Apache BinaryProtocol map and set length 25" {
  let value = @thrift.Struct([
    (
      1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
        (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
        (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
        (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
        (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
        (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
        (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
        (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
        (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
        (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
        (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
        (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
        (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
        (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
        (@thrift.Binary(b"\x6b\x31\x34"), @thrift.I32(208)),
        (@thrift.Binary(b"\x6b\x31\x35"), @thrift.I32(225)),
        (@thrift.Binary(b"\x6b\x31\x36"), @thrift.I32(242)),
        (@thrift.Binary(b"\x6b\x31\x37"), @thrift.I32(259)),
        (@thrift.Binary(b"\x6b\x31\x38"), @thrift.I32(276)),
        (@thrift.Binary(b"\x6b\x31\x39"), @thrift.I32(293)),
        (@thrift.Binary(b"\x6b\x32\x30"), @thrift.I32(310)),
        (@thrift.Binary(b"\x6b\x32\x31"), @thrift.I32(327)),
        (@thrift.Binary(b"\x6b\x32\x32"), @thrift.I32(344)),
        (@thrift.Binary(b"\x6b\x32\x33"), @thrift.I32(361)),
        (@thrift.Binary(b"\x6b\x32\x34"), @thrift.I32(378)),
      ]),
    ),
    (
      2,
      @thrift.SetValue(@thrift.I64Kind, [
        @thrift.I64(-50L),
        @thrift.I64(950L),
        @thrift.I64(1950L),
        @thrift.I64(2950L),
        @thrift.I64(3950L),
        @thrift.I64(4950L),
        @thrift.I64(5950L),
        @thrift.I64(6950L),
        @thrift.I64(7950L),
        @thrift.I64(8950L),
        @thrift.I64(9950L),
        @thrift.I64(10950L),
        @thrift.I64(11950L),
        @thrift.I64(12950L),
        @thrift.I64(13950L),
        @thrift.I64(14950L),
        @thrift.I64(15950L),
        @thrift.I64(16950L),
        @thrift.I64(17950L),
        @thrift.I64(18950L),
        @thrift.I64(19950L),
        @thrift.I64(20950L),
        @thrift.I64(21950L),
        @thrift.I64(22950L),
        @thrift.I64(23950L),
      ]),
    ),
  ])
  let wire = b"\x0d\x00\x01\x0b\x08\x00\x00\x00\x19\x00\x00\x00\x02\x6b\x30\xff\xff\xff\xe2\x00\x00\x00\x02\x6b\x31\xff\xff\xff\xf3\x00\x00\x00\x02\x6b\x32\x00\x00\x00\x04\x00\x00\x00\x02\x6b\x33\x00\x00\x00\x15\x00\x00\x00\x02\x6b\x34\x00\x00\x00\x26\x00\x00\x00\x02\x6b\x35\x00\x00\x00\x37\x00\x00\x00\x02\x6b\x36\x00\x00\x00\x48\x00\x00\x00\x02\x6b\x37\x00\x00\x00\x59\x00\x00\x00\x02\x6b\x38\x00\x00\x00\x6a\x00\x00\x00\x02\x6b\x39\x00\x00\x00\x7b\x00\x00\x00\x03\x6b\x31\x30\x00\x00\x00\x8c\x00\x00\x00\x03\x6b\x31\x31\x00\x00\x00\x9d\x00\x00\x00\x03\x6b\x31\x32\x00\x00\x00\xae\x00\x00\x00\x03\x6b\x31\x33\x00\x00\x00\xbf\x00\x00\x00\x03\x6b\x31\x34\x00\x00\x00\xd0\x00\x00\x00\x03\x6b\x31\x35\x00\x00\x00\xe1\x00\x00\x00\x03\x6b\x31\x36\x00\x00\x00\xf2\x00\x00\x00\x03\x6b\x31\x37\x00\x00\x01\x03\x00\x00\x00\x03\x6b\x31\x38\x00\x00\x01\x14\x00\x00\x00\x03\x6b\x31\x39\x00\x00\x01\x25\x00\x00\x00\x03\x6b\x32\x30\x00\x00\x01\x36\x00\x00\x00\x03\x6b\x32\x31\x00\x00\x01\x47\x00\x00\x00\x03\x6b\x32\x32\x00\x00\x01\x58\x00\x00\x00\x03\x6b\x32\x33\x00\x00\x01\x69\x00\x00\x00\x03\x6b\x32\x34\x00\x00\x01\x7a\x0e\x00\x02\x0a\x00\x00\x00\x19\xff\xff\xff\xff\xff\xff\xff\xce\x00\x00\x00\x00\x00\x00\x03\xb6\x00\x00\x00\x00\x00\x00\x07\x9e\x00\x00\x00\x00\x00\x00\x0b\x86\x00\x00\x00\x00\x00\x00\x0f\x6e\x00\x00\x00\x00\x00\x00\x13\x56\x00\x00\x00\x00\x00\x00\x17\x3e\x00\x00\x00\x00\x00\x00\x1b\x26\x00\x00\x00\x00\x00\x00\x1f\x0e\x00\x00\x00\x00\x00\x00\x22\xf6\x00\x00\x00\x00\x00\x00\x26\xde\x00\x00\x00\x00\x00\x00\x2a\xc6\x00\x00\x00\x00\x00\x00\x2e\xae\x00\x00\x00\x00\x00\x00\x32\x96\x00\x00\x00\x00\x00\x00\x36\x7e\x00\x00\x00\x00\x00\x00\x3a\x66\x00\x00\x00\x00\x00\x00\x3e\x4e\x00\x00\x00\x00\x00\x00\x42\x36\x00\x00\x00\x00\x00\x00\x46\x1e\x00\x00\x00\x00\x00\x00\x4a\x06\x00\x00\x00\x00\x00\x00\x4d\xee\x00\x00\x00\x00\x00\x00\x51\xd6\x00\x00\x00\x00\x00\x00\x55\xbe\x00\x00\x00\x00\x00\x00\x59\xa6\x00\x00\x00\x00\x00\x00\x5d\x8e\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    @thrift.Struct([
      (
        1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
          (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
          (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
          (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
          (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
          (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
          (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
          (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
          (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
          (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
          (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
          (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
          (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
          (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
          (@thrift.Binary(b"\x6b\x31\x34"), @thrift.I32(208)),
          (@thrift.Binary(b"\x6b\x31\x35"), @thrift.I32(225)),
          (@thrift.Binary(b"\x6b\x31\x36"), @thrift.I32(242)),
          (@thrift.Binary(b"\x6b\x31\x37"), @thrift.I32(259)),
          (@thrift.Binary(b"\x6b\x31\x38"), @thrift.I32(276)),
          (@thrift.Binary(b"\x6b\x31\x39"), @thrift.I32(293)),
          (@thrift.Binary(b"\x6b\x32\x30"), @thrift.I32(310)),
          (@thrift.Binary(b"\x6b\x32\x31"), @thrift.I32(327)),
          (@thrift.Binary(b"\x6b\x32\x32"), @thrift.I32(344)),
          (@thrift.Binary(b"\x6b\x32\x33"), @thrift.I32(361)),
          (@thrift.Binary(b"\x6b\x32\x34"), @thrift.I32(378)),
        ]),
      ),
      (
        2,
        @thrift.SetValue(@thrift.I64Kind, [
          @thrift.I64(-50L),
          @thrift.I64(950L),
          @thrift.I64(1950L),
          @thrift.I64(2950L),
          @thrift.I64(3950L),
          @thrift.I64(4950L),
          @thrift.I64(5950L),
          @thrift.I64(6950L),
          @thrift.I64(7950L),
          @thrift.I64(8950L),
          @thrift.I64(9950L),
          @thrift.I64(10950L),
          @thrift.I64(11950L),
          @thrift.I64(12950L),
          @thrift.I64(13950L),
          @thrift.I64(14950L),
          @thrift.I64(15950L),
          @thrift.I64(16950L),
          @thrift.I64(17950L),
          @thrift.I64(18950L),
          @thrift.I64(19950L),
          @thrift.I64(20950L),
          @thrift.I64(21950L),
          @thrift.I64(22950L),
          @thrift.I64(23950L),
        ]),
      ),
    ]),
  )
}

///|
test "Apache CompactProtocol map and set length 25" {
  let value = @thrift.Struct([
    (
      1,
      @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
        (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
        (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
        (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
        (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
        (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
        (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
        (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
        (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
        (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
        (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
        (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
        (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
        (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
        (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
        (@thrift.Binary(b"\x6b\x31\x34"), @thrift.I32(208)),
        (@thrift.Binary(b"\x6b\x31\x35"), @thrift.I32(225)),
        (@thrift.Binary(b"\x6b\x31\x36"), @thrift.I32(242)),
        (@thrift.Binary(b"\x6b\x31\x37"), @thrift.I32(259)),
        (@thrift.Binary(b"\x6b\x31\x38"), @thrift.I32(276)),
        (@thrift.Binary(b"\x6b\x31\x39"), @thrift.I32(293)),
        (@thrift.Binary(b"\x6b\x32\x30"), @thrift.I32(310)),
        (@thrift.Binary(b"\x6b\x32\x31"), @thrift.I32(327)),
        (@thrift.Binary(b"\x6b\x32\x32"), @thrift.I32(344)),
        (@thrift.Binary(b"\x6b\x32\x33"), @thrift.I32(361)),
        (@thrift.Binary(b"\x6b\x32\x34"), @thrift.I32(378)),
      ]),
    ),
    (
      2,
      @thrift.SetValue(@thrift.I64Kind, [
        @thrift.I64(-50L),
        @thrift.I64(950L),
        @thrift.I64(1950L),
        @thrift.I64(2950L),
        @thrift.I64(3950L),
        @thrift.I64(4950L),
        @thrift.I64(5950L),
        @thrift.I64(6950L),
        @thrift.I64(7950L),
        @thrift.I64(8950L),
        @thrift.I64(9950L),
        @thrift.I64(10950L),
        @thrift.I64(11950L),
        @thrift.I64(12950L),
        @thrift.I64(13950L),
        @thrift.I64(14950L),
        @thrift.I64(15950L),
        @thrift.I64(16950L),
        @thrift.I64(17950L),
        @thrift.I64(18950L),
        @thrift.I64(19950L),
        @thrift.I64(20950L),
        @thrift.I64(21950L),
        @thrift.I64(22950L),
        @thrift.I64(23950L),
      ]),
    ),
  ])
  let wire = b"\x1b\x19\x85\x02\x6b\x30\x3b\x02\x6b\x31\x19\x02\x6b\x32\x08\x02\x6b\x33\x2a\x02\x6b\x34\x4c\x02\x6b\x35\x6e\x02\x6b\x36\x90\x01\x02\x6b\x37\xb2\x01\x02\x6b\x38\xd4\x01\x02\x6b\x39\xf6\x01\x03\x6b\x31\x30\x98\x02\x03\x6b\x31\x31\xba\x02\x03\x6b\x31\x32\xdc\x02\x03\x6b\x31\x33\xfe\x02\x03\x6b\x31\x34\xa0\x03\x03\x6b\x31\x35\xc2\x03\x03\x6b\x31\x36\xe4\x03\x03\x6b\x31\x37\x86\x04\x03\x6b\x31\x38\xa8\x04\x03\x6b\x31\x39\xca\x04\x03\x6b\x32\x30\xec\x04\x03\x6b\x32\x31\x8e\x05\x03\x6b\x32\x32\xb0\x05\x03\x6b\x32\x33\xd2\x05\x03\x6b\x32\x34\xf4\x05\x1a\xf6\x19\x63\xec\x0e\xbc\x1e\x8c\x2e\xdc\x3d\xac\x4d\xfc\x5c\xcc\x6c\x9c\x7c\xec\x8b\x01\xbc\x9b\x01\x8c\xab\x01\xdc\xba\x01\xac\xca\x01\xfc\xd9\x01\xcc\xe9\x01\x9c\xf9\x01\xec\x88\x02\xbc\x98\x02\x8c\xa8\x02\xdc\xb7\x02\xac\xc7\x02\xfc\xd6\x02\xcc\xe6\x02\x9c\xf6\x02\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    @thrift.Struct([
      (
        1,
        @thrift.MapValue(Some(@thrift.BinaryKind), Some(@thrift.I32Kind), [
          (@thrift.Binary(b"\x6b\x30"), @thrift.I32(-30)),
          (@thrift.Binary(b"\x6b\x31"), @thrift.I32(-13)),
          (@thrift.Binary(b"\x6b\x32"), @thrift.I32(4)),
          (@thrift.Binary(b"\x6b\x33"), @thrift.I32(21)),
          (@thrift.Binary(b"\x6b\x34"), @thrift.I32(38)),
          (@thrift.Binary(b"\x6b\x35"), @thrift.I32(55)),
          (@thrift.Binary(b"\x6b\x36"), @thrift.I32(72)),
          (@thrift.Binary(b"\x6b\x37"), @thrift.I32(89)),
          (@thrift.Binary(b"\x6b\x38"), @thrift.I32(106)),
          (@thrift.Binary(b"\x6b\x39"), @thrift.I32(123)),
          (@thrift.Binary(b"\x6b\x31\x30"), @thrift.I32(140)),
          (@thrift.Binary(b"\x6b\x31\x31"), @thrift.I32(157)),
          (@thrift.Binary(b"\x6b\x31\x32"), @thrift.I32(174)),
          (@thrift.Binary(b"\x6b\x31\x33"), @thrift.I32(191)),
          (@thrift.Binary(b"\x6b\x31\x34"), @thrift.I32(208)),
          (@thrift.Binary(b"\x6b\x31\x35"), @thrift.I32(225)),
          (@thrift.Binary(b"\x6b\x31\x36"), @thrift.I32(242)),
          (@thrift.Binary(b"\x6b\x31\x37"), @thrift.I32(259)),
          (@thrift.Binary(b"\x6b\x31\x38"), @thrift.I32(276)),
          (@thrift.Binary(b"\x6b\x31\x39"), @thrift.I32(293)),
          (@thrift.Binary(b"\x6b\x32\x30"), @thrift.I32(310)),
          (@thrift.Binary(b"\x6b\x32\x31"), @thrift.I32(327)),
          (@thrift.Binary(b"\x6b\x32\x32"), @thrift.I32(344)),
          (@thrift.Binary(b"\x6b\x32\x33"), @thrift.I32(361)),
          (@thrift.Binary(b"\x6b\x32\x34"), @thrift.I32(378)),
        ]),
      ),
      (
        2,
        @thrift.SetValue(@thrift.I64Kind, [
          @thrift.I64(-50L),
          @thrift.I64(950L),
          @thrift.I64(1950L),
          @thrift.I64(2950L),
          @thrift.I64(3950L),
          @thrift.I64(4950L),
          @thrift.I64(5950L),
          @thrift.I64(6950L),
          @thrift.I64(7950L),
          @thrift.I64(8950L),
          @thrift.I64(9950L),
          @thrift.I64(10950L),
          @thrift.I64(11950L),
          @thrift.I64(12950L),
          @thrift.I64(13950L),
          @thrift.I64(14950L),
          @thrift.I64(15950L),
          @thrift.I64(16950L),
          @thrift.I64(17950L),
          @thrift.I64(18950L),
          @thrift.I64(19950L),
          @thrift.I64(20950L),
          @thrift.I64(21950L),
          @thrift.I64(22950L),
          @thrift.I64(23950L),
        ]),
      ),
    ]),
  )
}
