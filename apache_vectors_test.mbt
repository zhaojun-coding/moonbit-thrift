// Generated against Apache Thrift Python 0.22.0; original seeded inputs.
// Regenerator: ../../tools/thrift_vectors.py (requires thrift==0.22.0).

///|
test "Apache Python 0.22.0 BinaryProtocol vector 0" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-17250)),
    (2, @thrift.I32(-1058706730)),
    (3, @thrift.I64(3993643125207200000L)),
    (4, @thrift.Double(1072.25)),
    (5, @thrift.Binary(b"\x82")),
    (6, @thrift.Bool(true)),
    (20, @thrift.List(@thrift.I32Kind, [@thrift.I32(-9511)])),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\xbc\x9e\x08\x00\x02\xc0\xe5\x6a\xd6\x0a\x00\x03\x37\x6c\x45\x43\x5d\xa7\xf1\x00\x04\x00\x04\x40\x90\xc1\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x01\x82\x02\x00\x06\x01\x0f\x00\x14\x08\x00\x00\x00\x01\xff\xff\xda\xd9\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 0" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-17250)),
    (2, @thrift.I32(-1058706730)),
    (3, @thrift.I64(3993643125207200000L)),
    (4, @thrift.Double(1072.25)),
    (5, @thrift.Binary(b"\x82")),
    (6, @thrift.Bool(true)),
    (20, @thrift.List(@thrift.I32Kind, [@thrift.I32(-9511)])),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\xc3\x8d\x02\x15\xd3\xd4\xd4\xf1\x07\x16\x80\xc4\xbf\xda\xeb\xd0\xa2\xec\x6e\x17\x00\x00\x00\x00\x00\xc1\x90\x40\x18\x01\x82\x11\xe9\x15\xcd\x94\x01\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 1" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-20738)),
    (2, @thrift.I32(-1397604525)),
    (3, @thrift.I64(-6839271713949829859L)),
    (4, @thrift.Double(956.875)),
    (5, @thrift.Binary(b"\xba\x2f")),
    (6, @thrift.Bool(false)),
    (20, @thrift.List(@thrift.I32Kind, [@thrift.I32(5959), @thrift.I32(-1745)])),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\xae\xfe\x08\x00\x02\xac\xb2\x3f\x53\x0a\x00\x03\xa1\x16\x06\x9c\xb7\xa4\xb5\x1d\x04\x00\x04\x40\x8d\xe7\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x02\xba\x2f\x02\x00\x06\x00\x0f\x00\x14\x08\x00\x00\x00\x02\x00\x00\x17\x47\xff\xff\xf9\x2f\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 1" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-20738)),
    (2, @thrift.I32(-1397604525)),
    (3, @thrift.I64(-6839271713949829859L)),
    (4, @thrift.Double(956.875)),
    (5, @thrift.Binary(b"\xba\x2f")),
    (6, @thrift.Bool(false)),
    (20, @thrift.List(@thrift.I32Kind, [@thrift.I32(5959), @thrift.I32(-1745)])),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\x83\xc4\x02\x15\xd9\x82\xee\xb4\x0a\x16\xc5\xab\xda\x85\xe9\xd8\xfc\xe9\xbd\x01\x17\x00\x00\x00\x00\x00\xe7\x8d\x40\x18\x02\xba\x2f\x12\xe9\x25\x8e\x5d\xa1\x1b\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 2" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-14247)),
    (2, @thrift.I32(547431207)),
    (3, @thrift.I64(-5134428750976596707L)),
    (4, @thrift.Double(540.25)),
    (5, @thrift.Binary(b"\x6c\xfc\xf6")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(6577),
        @thrift.I32(8575),
        @thrift.I32(-4444),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\xc8\x59\x08\x00\x02\x20\xa1\x23\x27\x0a\x00\x03\xb8\xbe\xd8\x41\x1d\x7c\xc5\x1d\x04\x00\x04\x40\x80\xe2\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x03\x6c\xfc\xf6\x02\x00\x06\x01\x0f\x00\x14\x08\x00\x00\x00\x03\x00\x00\x19\xb1\x00\x00\x21\x7f\xff\xff\xee\xa4\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 2" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-14247)),
    (2, @thrift.I32(547431207)),
    (3, @thrift.I64(-5134428750976596707L)),
    (4, @thrift.Double(540.25)),
    (5, @thrift.Binary(b"\x6c\xfc\xf6")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(6577),
        @thrift.I32(8575),
        @thrift.I32(-4444),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\xcd\xde\x01\x15\xce\x8c\x89\x8a\x04\x16\xc5\xeb\x99\xa8\xdc\xef\x93\xc1\x8e\x01\x17\x00\x00\x00\x00\x00\xe2\x80\x40\x18\x03\x6c\xfc\xf6\x11\xe9\x35\xe2\x66\xfe\x85\x01\xb7\x45\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 3" {
  let value = @thrift.Struct([
    (1, @thrift.I16(25404)),
    (2, @thrift.I32(409122119)),
    (3, @thrift.I64(-3262005022634945830L)),
    (4, @thrift.Double(-998.25)),
    (5, @thrift.Binary(b"\xc1\x84\xdc\x6f")),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-4993),
        @thrift.I32(5095),
        @thrift.I32(-7878),
        @thrift.I32(6473),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\x63\x3c\x08\x00\x02\x18\x62\xb5\x47\x0a\x00\x03\xd2\xbb\x07\xb6\xfa\x4d\xd2\xda\x04\x00\x04\xc0\x8f\x32\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x04\xc1\x84\xdc\x6f\x02\x00\x06\x00\x0f\x00\x14\x08\x00\x00\x00\x04\xff\xff\xec\x7f\x00\x00\x13\xe7\xff\xff\xe1\x3a\x00\x00\x19\x49\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 3" {
  let value = @thrift.Struct([
    (1, @thrift.I16(25404)),
    (2, @thrift.I32(409122119)),
    (3, @thrift.I64(-3262005022634945830L)),
    (4, @thrift.Double(-998.25)),
    (5, @thrift.Binary(b"\xc1\x84\xdc\x6f")),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-4993),
        @thrift.I32(5095),
        @thrift.I32(-7878),
        @thrift.I32(6473),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\xf8\x8c\x03\x15\x8e\xd5\x95\x86\x03\x16\xcb\xb4\x91\xdb\xa0\x92\xfc\xc4\x5a\x17\x00\x00\x00\x00\x00\x32\x8f\xc0\x18\x04\xc1\x84\xdc\x6f\x12\xe9\x45\x81\x4e\xce\x4f\x8b\x7b\x92\x65\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 4" {
  let value = @thrift.Struct([
    (1, @thrift.I16(11095)),
    (2, @thrift.I32(108270572)),
    (3, @thrift.I64(-8661966737235244120L)),
    (4, @thrift.Double(516.625)),
    (5, @thrift.Binary(b"\x76\x7a\xa1\x3d\xe5")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(7141),
        @thrift.I32(7133),
        @thrift.I32(-2676),
        @thrift.I32(719),
        @thrift.I32(-540),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\x2b\x57\x08\x00\x02\x06\x74\x13\xec\x0a\x00\x03\x87\xca\x83\x25\x42\xd8\x0b\xa8\x04\x00\x04\x40\x80\x25\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x05\x76\x7a\xa1\x3d\xe5\x02\x00\x06\x01\x0f\x00\x14\x08\x00\x00\x00\x05\x00\x00\x1b\xe5\x00\x00\x1b\xdd\xff\xff\xf5\x8c\x00\x00\x02\xcf\xff\xff\xfd\xe4\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 4" {
  let value = @thrift.Struct([
    (1, @thrift.I16(11095)),
    (2, @thrift.I32(108270572)),
    (3, @thrift.I64(-8661966737235244120L)),
    (4, @thrift.Double(516.625)),
    (5, @thrift.Binary(b"\x76\x7a\xa1\x3d\xe5")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(7141),
        @thrift.I32(7133),
        @thrift.I32(-2676),
        @thrift.I32(719),
        @thrift.I32(-540),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\xae\xad\x01\x15\xd8\xcf\xa0\x67\x16\xaf\xd1\xbf\xd2\xd7\xb6\xbe\xb5\xf0\x01\x17\x00\x00\x00\x00\x00\x25\x80\x40\x18\x05\x76\x7a\xa1\x3d\xe5\x11\xe9\x55\xca\x6f\xba\x6f\xe7\x29\x9e\x0b\xb7\x08\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 5" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-3277)),
    (2, @thrift.I32(-1346928150)),
    (3, @thrift.I64(-4088744970869230663L)),
    (4, @thrift.Double(-719.25)),
    (5, @thrift.Binary(b"\x13\x8f\x7e\x78\xaa\x22")),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(5945),
        @thrift.I32(7909),
        @thrift.I32(5162),
        @thrift.I32(246),
        @thrift.I32(661),
        @thrift.I32(-4679),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\xf3\x33\x08\x00\x02\xaf\xb7\x81\xea\x0a\x00\x03\xc7\x41\xdc\x1c\xb2\x2c\xb3\xb9\x04\x00\x04\xc0\x86\x7a\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x06\x13\x8f\x7e\x78\xaa\x22\x02\x00\x06\x00\x0f\x00\x14\x08\x00\x00\x00\x06\x00\x00\x17\x39\x00\x00\x1e\xe5\x00\x00\x14\x2a\x00\x00\x00\xf6\x00\x00\x02\x95\xff\xff\xed\xb9\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 5" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-3277)),
    (2, @thrift.I32(-1346928150)),
    (3, @thrift.I64(-4088744970869230663L)),
    (4, @thrift.Double(-719.25)),
    (5, @thrift.Binary(b"\x13\x8f\x7e\x78\xaa\x22")),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(5945),
        @thrift.I32(7909),
        @thrift.I32(5162),
        @thrift.I32(246),
        @thrift.I32(661),
        @thrift.I32(-4679),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\x99\x33\x15\xab\xf8\xc3\x84\x0a\x16\x8d\xb1\x9a\xdd\xe9\xf8\x91\xbe\x71\x17\x00\x00\x00\x00\x00\x7a\x86\xc0\x18\x06\x13\x8f\x7e\x78\xaa\x22\x12\xe9\x65\xf2\x5c\xca\x7b\xd4\x50\xec\x03\xaa\x0a\x8d\x49\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 6" {
  let value = @thrift.Struct([
    (1, @thrift.I16(31146)),
    (2, @thrift.I32(1660693064)),
    (3, @thrift.I64(2716291284105689278L)),
    (4, @thrift.Double(-1053.0)),
    (5, @thrift.Binary(b"\xbd\x68\x71\xa7\xf7\x65\x37")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(5538),
        @thrift.I32(-1981),
        @thrift.I32(9387),
        @thrift.I32(1542),
        @thrift.I32(-2745),
        @thrift.I32(-2182),
        @thrift.I32(-5611),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\x79\xaa\x08\x00\x02\x62\xfc\x2a\x48\x0a\x00\x03\x25\xb2\x34\x88\x07\x9b\xf8\xbe\x04\x00\x04\xc0\x90\x74\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x07\xbd\x68\x71\xa7\xf7\x65\x37\x02\x00\x06\x01\x0f\x00\x14\x08\x00\x00\x00\x07\x00\x00\x15\xa2\xff\xff\xf8\x43\x00\x00\x24\xab\x00\x00\x06\x06\xff\xff\xf5\x47\xff\xff\xf7\x7a\xff\xff\xea\x15\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 6" {
  let value = @thrift.Struct([
    (1, @thrift.I16(31146)),
    (2, @thrift.I32(1660693064)),
    (3, @thrift.I64(2716291284105689278L)),
    (4, @thrift.Double(-1053.0)),
    (5, @thrift.Binary(b"\xbd\x68\x71\xa7\xf7\x65\x37")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(5538),
        @thrift.I32(-1981),
        @thrift.I32(9387),
        @thrift.I32(1542),
        @thrift.I32(-2745),
        @thrift.I32(-2182),
        @thrift.I32(-5611),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\xd4\xe6\x03\x15\x90\xa9\xe1\xaf\x0c\x16\xfc\xe2\xdf\xf9\x80\xa2\x9a\xb2\x4b\x17\x00\x00\x00\x00\x00\x74\x90\xc0\x18\x07\xbd\x68\x71\xa7\xf7\x65\x37\x11\xe9\x75\xc4\x56\xf9\x1e\xd6\x92\x01\x8c\x18\xf1\x2a\x8b\x22\xd5\x57\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 7" {
  let value = @thrift.Struct([
    (1, @thrift.I16(13952)),
    (2, @thrift.I32(697829504)),
    (3, @thrift.I64(1644111032061531543L)),
    (4, @thrift.Double(-640.5)),
    (5, @thrift.Binary(b"\xc3\x9d\x5e\x9b\x17\x05\xa1\xd9")),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-8698),
        @thrift.I32(-7126),
        @thrift.I32(5609),
        @thrift.I32(-196),
        @thrift.I32(-7923),
        @thrift.I32(-4654),
        @thrift.I32(8497),
        @thrift.I32(1143),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\x36\x80\x08\x00\x02\x29\x98\x08\x80\x0a\x00\x03\x16\xd1\x0e\x45\xd5\x54\x15\x97\x04\x00\x04\xc0\x84\x04\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x08\xc3\x9d\x5e\x9b\x17\x05\xa1\xd9\x02\x00\x06\x00\x0f\x00\x14\x08\x00\x00\x00\x08\xff\xff\xde\x06\xff\xff\xe4\x2a\x00\x00\x15\xe9\xff\xff\xff\x3c\xff\xff\xe1\x0d\xff\xff\xed\xd2\x00\x00\x21\x31\x00\x00\x04\x77\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 7" {
  let value = @thrift.Struct([
    (1, @thrift.I16(13952)),
    (2, @thrift.I32(697829504)),
    (3, @thrift.I64(1644111032061531543L)),
    (4, @thrift.Double(-640.5)),
    (5, @thrift.Binary(b"\xc3\x9d\x5e\x9b\x17\x05\xa1\xd9")),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-8698),
        @thrift.I32(-7126),
        @thrift.I32(5609),
        @thrift.I32(-196),
        @thrift.I32(-7923),
        @thrift.I32(-4654),
        @thrift.I32(8497),
        @thrift.I32(1143),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\x80\xda\x01\x15\x80\xa2\xc0\x99\x05\x16\xae\xd6\xa0\xd5\xba\x91\x87\xd1\x2d\x17\x00\x00\x00\x00\x00\x04\x84\xc0\x18\x08\xc3\x9d\x5e\x9b\x17\x05\xa1\xd9\x12\xe9\x85\xf3\x87\x01\xab\x6f\xd2\x57\x87\x03\xe5\x7b\xdb\x48\xe2\x84\x01\xee\x11\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 8" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-3359)),
    (2, @thrift.I32(1623789717)),
    (3, @thrift.I64(-4068572512496148769L)),
    (4, @thrift.Double(-108.5)),
    (5, @thrift.Binary(b"\x9b\xbc\x8d\x9b\x28\x9a\x99\x3d\x01")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-2326),
        @thrift.I32(425),
        @thrift.I32(-9986),
        @thrift.I32(3868),
        @thrift.I32(-5811),
        @thrift.I32(-4110),
        @thrift.I32(8053),
        @thrift.I32(-9683),
        @thrift.I32(-5829),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\xf2\xe1\x08\x00\x02\x60\xc9\x10\x95\x0a\x00\x03\xc7\x89\x86\xdb\x29\xbf\x9e\xdf\x04\x00\x04\xc0\x5b\x20\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x09\x9b\xbc\x8d\x9b\x28\x9a\x99\x3d\x01\x02\x00\x06\x01\x0f\x00\x14\x08\x00\x00\x00\x09\xff\xff\xf6\xea\x00\x00\x01\xa9\xff\xff\xd8\xfe\x00\x00\x0f\x1c\xff\xff\xe9\x4d\xff\xff\xef\xf2\x00\x00\x1f\x75\xff\xff\xda\x2d\xff\xff\xe9\x3b\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 8" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-3359)),
    (2, @thrift.I32(1623789717)),
    (3, @thrift.I64(-4068572512496148769L)),
    (4, @thrift.Double(-108.5)),
    (5, @thrift.Binary(b"\x9b\xbc\x8d\x9b\x28\x9a\x99\x3d\x01")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-2326),
        @thrift.I32(425),
        @thrift.I32(-9986),
        @thrift.I32(3868),
        @thrift.I32(-5811),
        @thrift.I32(-4110),
        @thrift.I32(8053),
        @thrift.I32(-9683),
        @thrift.I32(-5829),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\xbd\x34\x15\xaa\xc2\xc8\x8c\x0c\x16\xc1\x84\x83\xe4\x9a\xc9\xbc\xf6\x70\x17\x00\x00\x00\x00\x00\x20\x5b\xc0\x18\x09\x9b\xbc\x8d\x9b\x28\x9a\x99\x3d\x01\x11\xe9\x95\xab\x24\xd2\x06\x83\x9c\x01\xb8\x3c\xe5\x5a\x9b\x40\xea\x7d\xa5\x97\x01\x89\x5b\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 9" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-21867)),
    (2, @thrift.I32(-386767403)),
    (3, @thrift.I64(7450646452227644409L)),
    (4, @thrift.Double(814.0)),
    (5, @thrift.Binary(b"\x7e\x46\xb1\x8d\xab\x1b\xfd\x27\xd4\x4b")),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-5201),
        @thrift.I32(4979),
        @thrift.I32(2038),
        @thrift.I32(57),
        @thrift.I32(3403),
        @thrift.I32(7741),
        @thrift.I32(1498),
        @thrift.I32(-8698),
        @thrift.I32(-5889),
        @thrift.I32(-1318),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\xaa\x95\x08\x00\x02\xe8\xf2\x65\xd5\x0a\x00\x03\x67\x66\x03\x79\x1c\x0d\x9b\xf9\x04\x00\x04\x40\x89\x70\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x0a\x7e\x46\xb1\x8d\xab\x1b\xfd\x27\xd4\x4b\x02\x00\x06\x00\x0f\x00\x14\x08\x00\x00\x00\x0a\xff\xff\xeb\xaf\x00\x00\x13\x73\x00\x00\x07\xf6\x00\x00\x00\x39\x00\x00\x0d\x4b\x00\x00\x1e\x3d\x00\x00\x05\xda\xff\xff\xde\x06\xff\xff\xe8\xff\xff\xff\xfa\xda\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 9" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-21867)),
    (2, @thrift.I32(-386767403)),
    (3, @thrift.I64(7450646452227644409L)),
    (4, @thrift.Double(814.0)),
    (5, @thrift.Binary(b"\x7e\x46\xb1\x8d\xab\x1b\xfd\x27\xd4\x4b")),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-5201),
        @thrift.I32(4979),
        @thrift.I32(2038),
        @thrift.I32(57),
        @thrift.I32(3403),
        @thrift.I32(7741),
        @thrift.I32(1498),
        @thrift.I32(-8698),
        @thrift.I32(-5889),
        @thrift.I32(-1318),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\xd5\xd5\x02\x15\xd5\xe8\xec\xf0\x02\x16\xf2\xef\xec\xc0\xa3\xde\x81\xe6\xce\x01\x17\x00\x00\x00\x00\x00\x70\x89\x40\x18\x0a\x7e\x46\xb1\x8d\xab\x1b\xfd\x27\xd4\x4b\x12\xe9\xa5\xa1\x51\xe6\x4d\xec\x1f\x72\x96\x35\xfa\x78\xb4\x17\xf3\x87\x01\x81\x5c\xcb\x14\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 10" {
  let value = @thrift.Struct([
    (1, @thrift.I16(10370)),
    (2, @thrift.I32(-1300536432)),
    (3, @thrift.I64(-2220122481722391833L)),
    (4, @thrift.Double(-560.25)),
    (5, @thrift.Binary(b"\x1d\xdb\xe5\x1b\x54\x87\xa5\x75\x17\xdb\xbe")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-9808),
        @thrift.I32(-2219),
        @thrift.I32(1993),
        @thrift.I32(9164),
        @thrift.I32(3408),
        @thrift.I32(4351),
        @thrift.I32(-977),
        @thrift.I32(-5746),
        @thrift.I32(819),
        @thrift.I32(-989),
        @thrift.I32(-967),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\x28\x82\x08\x00\x02\xb2\x7b\x63\x90\x0a\x00\x03\xe1\x30\x8a\x5d\x97\x14\x02\xe7\x04\x00\x04\xc0\x81\x82\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x0b\x1d\xdb\xe5\x1b\x54\x87\xa5\x75\x17\xdb\xbe\x02\x00\x06\x01\x0f\x00\x14\x08\x00\x00\x00\x0b\xff\xff\xd9\xb0\xff\xff\xf7\x55\x00\x00\x07\xc9\x00\x00\x23\xcc\x00\x00\x0d\x50\x00\x00\x10\xff\xff\xff\xfc\x2f\xff\xff\xe9\x8e\x00\x00\x03\x33\xff\xff\xfc\x23\xff\xff\xfc\x39\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 10" {
  let value = @thrift.Struct([
    (1, @thrift.I16(10370)),
    (2, @thrift.I32(-1300536432)),
    (3, @thrift.I64(-2220122481722391833L)),
    (4, @thrift.Double(-560.25)),
    (5, @thrift.Binary(b"\x1d\xdb\xe5\x1b\x54\x87\xa5\x75\x17\xdb\xbe")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-9808),
        @thrift.I32(-2219),
        @thrift.I32(1993),
        @thrift.I32(9164),
        @thrift.I32(3408),
        @thrift.I32(4351),
        @thrift.I32(-977),
        @thrift.I32(-5746),
        @thrift.I32(819),
        @thrift.I32(-989),
        @thrift.I32(-967),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\x84\xa2\x01\x15\xdf\xf1\xa4\xd8\x09\x16\xb1\xf4\xdf\x8e\xcd\xe8\xba\xcf\x3d\x17\x00\x00\x00\x00\x00\x82\x81\xc0\x18\x0b\x1d\xdb\xe5\x1b\x54\x87\xa5\x75\x17\xdb\xbe\x11\xe9\xb5\x9f\x99\x01\xd5\x22\x92\x1f\x98\x8f\x01\xa0\x35\xfe\x43\xa1\x0f\xe3\x59\xe6\x0c\xb9\x0f\x8d\x0f\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 11" {
  let value = @thrift.Struct([
    (1, @thrift.I16(5057)),
    (2, @thrift.I32(-1528820167)),
    (3, @thrift.I64(3558679416242044477L)),
    (4, @thrift.Double(-142.0)),
    (5, @thrift.Binary(b"\x57\x42\x5a\xa9\xd4\x03\x13\x5f\xf7\x34\xc2\xd1")),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(3116),
        @thrift.I32(-2757),
        @thrift.I32(4327),
        @thrift.I32(-7139),
        @thrift.I32(-8547),
        @thrift.I32(948),
        @thrift.I32(-2551),
        @thrift.I32(1543),
        @thrift.I32(-8532),
        @thrift.I32(-7732),
        @thrift.I32(4104),
        @thrift.I32(-2198),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\x13\xc1\x08\x00\x02\xa4\xe0\x0e\x39\x0a\x00\x03\x31\x62\xf8\x13\x0a\x99\xfe\x3d\x04\x00\x04\xc0\x61\xc0\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x0c\x57\x42\x5a\xa9\xd4\x03\x13\x5f\xf7\x34\xc2\xd1\x02\x00\x06\x00\x0f\x00\x14\x08\x00\x00\x00\x0c\x00\x00\x0c\x2c\xff\xff\xf5\x3b\x00\x00\x10\xe7\xff\xff\xe4\x1d\xff\xff\xde\x9d\x00\x00\x03\xb4\xff\xff\xf6\x09\x00\x00\x06\x07\xff\xff\xde\xac\xff\xff\xe1\xcc\x00\x00\x10\x08\xff\xff\xf7\x6a\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 11" {
  let value = @thrift.Struct([
    (1, @thrift.I16(5057)),
    (2, @thrift.I32(-1528820167)),
    (3, @thrift.I64(3558679416242044477L)),
    (4, @thrift.Double(-142.0)),
    (5, @thrift.Binary(b"\x57\x42\x5a\xa9\xd4\x03\x13\x5f\xf7\x34\xc2\xd1")),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(3116),
        @thrift.I32(-2757),
        @thrift.I32(4327),
        @thrift.I32(-7139),
        @thrift.I32(-8547),
        @thrift.I32(948),
        @thrift.I32(-2551),
        @thrift.I32(1543),
        @thrift.I32(-8532),
        @thrift.I32(-7732),
        @thrift.I32(4104),
        @thrift.I32(-2198),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\x82\x4f\x15\x8d\xc7\xff\xb1\x0b\x16\xfa\xf8\xcf\xa9\xe1\x84\xfc\xe2\x62\x17\x00\x00\x00\x00\x00\xc0\x61\xc0\x18\x0c\x57\x42\x5a\xa9\xd4\x03\x13\x5f\xf7\x34\xc2\xd1\x12\xe9\xc5\xd8\x30\x89\x2b\xce\x43\xc5\x6f\xc5\x85\x01\xe8\x0e\xed\x27\x8e\x18\xa7\x85\x01\xe7\x78\x90\x40\xab\x22\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 12" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-23773)),
    (2, @thrift.I32(825753528)),
    (3, @thrift.I64(5731411245219777279L)),
    (4, @thrift.Double(-195.5)),
    (5, @thrift.Binary(b"\x46\xd3\x9c\xc1\x2c\x11\xcc\xba\x8e\x12\xf3\xdf\xac")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-4870),
        @thrift.I32(2112),
        @thrift.I32(6398),
        @thrift.I32(-72),
        @thrift.I32(-3830),
        @thrift.I32(-6242),
        @thrift.I32(-9207),
        @thrift.I32(-8148),
        @thrift.I32(-6384),
        @thrift.I32(9395),
        @thrift.I32(5851),
        @thrift.I32(-8926),
        @thrift.I32(-471),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\xa3\x23\x08\x00\x02\x31\x37\xff\xb8\x0a\x00\x03\x4f\x8a\x10\x29\x45\x01\x0a\xff\x04\x00\x04\xc0\x68\x70\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x0d\x46\xd3\x9c\xc1\x2c\x11\xcc\xba\x8e\x12\xf3\xdf\xac\x02\x00\x06\x01\x0f\x00\x14\x08\x00\x00\x00\x0d\xff\xff\xec\xfa\x00\x00\x08\x40\x00\x00\x18\xfe\xff\xff\xff\xb8\xff\xff\xf1\x0a\xff\xff\xe7\x9e\xff\xff\xdc\x09\xff\xff\xe0\x2c\xff\xff\xe7\x10\x00\x00\x24\xb3\x00\x00\x16\xdb\xff\xff\xdd\x22\xff\xff\xfe\x29\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 12" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-23773)),
    (2, @thrift.I32(825753528)),
    (3, @thrift.I64(5731411245219777279L)),
    (4, @thrift.Double(-195.5)),
    (5, @thrift.Binary(b"\x46\xd3\x9c\xc1\x2c\x11\xcc\xba\x8e\x12\xf3\xdf\xac")),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(-4870),
        @thrift.I32(2112),
        @thrift.I32(6398),
        @thrift.I32(-72),
        @thrift.I32(-3830),
        @thrift.I32(-6242),
        @thrift.I32(-9207),
        @thrift.I32(-8148),
        @thrift.I32(-6384),
        @thrift.I32(9395),
        @thrift.I32(5851),
        @thrift.I32(-8926),
        @thrift.I32(-471),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\xb9\xf3\x02\x15\xf0\xfe\xbf\x93\x06\x16\xfe\xab\x88\xd0\xa8\x8a\x88\x8a\x9f\x01\x17\x00\x00\x00\x00\x00\x70\x68\xc0\x18\x0d\x46\xd3\x9c\xc1\x2c\x11\xcc\xba\x8e\x12\xf3\xdf\xac\x11\xe9\xd5\x8b\x4c\x80\x21\xfc\x63\x8f\x01\xeb\x3b\xc3\x61\xed\x8f\x01\xa7\x7f\xdf\x63\xe6\x92\x01\xb6\x5b\xbb\x8b\x01\xad\x07\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 13" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-1620)),
    (2, @thrift.I32(-534066182)),
    (3, @thrift.I64(2255879000942950461L)),
    (4, @thrift.Double(-196.5)),
    (
      5,
      @thrift.Binary(
        b"\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4",
      ),
    ),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(9640),
        @thrift.I32(1896),
        @thrift.I32(-1750),
        @thrift.I32(-1447),
        @thrift.I32(9688),
        @thrift.I32(-7133),
        @thrift.I32(-4805),
        @thrift.I32(-5149),
        @thrift.I32(-1344),
        @thrift.I32(4921),
        @thrift.I32(1258),
        @thrift.I32(9484),
        @thrift.I32(2543),
        @thrift.I32(-4707),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\xf9\xac\x08\x00\x02\xe0\x2a\xcb\xfa\x0a\x00\x03\x1f\x4e\x7d\xff\xcb\x77\xb8\x3d\x04\x00\x04\xc0\x68\x90\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x0e\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4\x02\x00\x06\x00\x0f\x00\x14\x08\x00\x00\x00\x0e\x00\x00\x25\xa8\x00\x00\x07\x68\xff\xff\xf9\x2a\xff\xff\xfa\x59\x00\x00\x25\xd8\xff\xff\xe4\x23\xff\xff\xed\x3b\xff\xff\xeb\xe3\xff\xff\xfa\xc0\x00\x00\x13\x39\x00\x00\x04\xea\x00\x00\x25\x0c\x00\x00\x09\xef\xff\xff\xed\x9d\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 13" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-1620)),
    (2, @thrift.I32(-534066182)),
    (3, @thrift.I64(2255879000942950461L)),
    (4, @thrift.Double(-196.5)),
    (
      5,
      @thrift.Binary(
        b"\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4",
      ),
    ),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(9640),
        @thrift.I32(1896),
        @thrift.I32(-1750),
        @thrift.I32(-1447),
        @thrift.I32(9688),
        @thrift.I32(-7133),
        @thrift.I32(-4805),
        @thrift.I32(-5149),
        @thrift.I32(-1344),
        @thrift.I32(4921),
        @thrift.I32(1258),
        @thrift.I32(9484),
        @thrift.I32(2543),
        @thrift.I32(-4707),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\xa7\x19\x15\x8b\xd0\xa9\xfd\x03\x16\xfa\xe0\xbd\xb7\xf9\xff\xbe\xce\x3e\x17\x00\x00\x00\x00\x00\x90\x68\xc0\x18\x0e\x32\x22\x49\xc7\x3f\x89\x3d\x4e\xe9\xf2\x09\x23\xf2\xf4\x12\xe9\xe5\xd0\x96\x01\xd0\x1d\xab\x1b\xcd\x16\xb0\x97\x01\xb9\x6f\x89\x4b\xb9\x50\xff\x14\xf2\x4c\xd4\x13\x98\x94\x01\xde\x27\xc5\x49\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 14" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-17009)),
    (2, @thrift.I32(1888156207)),
    (3, @thrift.I64(-1723367982038224520L)),
    (4, @thrift.Double(269.0)),
    (
      5,
      @thrift.Binary(
        b"\xe1\x53\x4a\x03\x0b\x77\x91\x37\x1b\x2d\x37\x4a\xef\xb9\x39",
      ),
    ),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(6784),
        @thrift.I32(-5171),
        @thrift.I32(-9357),
        @thrift.I32(-5073),
        @thrift.I32(2639),
        @thrift.I32(-1707),
        @thrift.I32(-5630),
        @thrift.I32(5813),
        @thrift.I32(-6578),
        @thrift.I32(-2394),
        @thrift.I32(-7666),
        @thrift.I32(3948),
        @thrift.I32(829),
        @thrift.I32(9734),
        @thrift.I32(559),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\xbd\x8f\x08\x00\x02\x70\x8a\xfa\x2f\x0a\x00\x03\xe8\x15\x5d\xf3\x7d\x54\x71\x78\x04\x00\x04\x40\x70\xd0\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x0f\xe1\x53\x4a\x03\x0b\x77\x91\x37\x1b\x2d\x37\x4a\xef\xb9\x39\x02\x00\x06\x01\x0f\x00\x14\x08\x00\x00\x00\x0f\x00\x00\x1a\x80\xff\xff\xeb\xcd\xff\xff\xdb\x73\xff\xff\xec\x2f\x00\x00\x0a\x4f\xff\xff\xf9\x55\xff\xff\xea\x02\x00\x00\x16\xb5\xff\xff\xe6\x4e\xff\xff\xf6\xa6\xff\xff\xe2\x0e\x00\x00\x0f\x6c\x00\x00\x03\x3d\x00\x00\x26\x06\x00\x00\x02\x2f\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 14" {
  let value = @thrift.Struct([
    (1, @thrift.I16(-17009)),
    (2, @thrift.I32(1888156207)),
    (3, @thrift.I64(-1723367982038224520L)),
    (4, @thrift.Double(269.0)),
    (
      5,
      @thrift.Binary(
        b"\xe1\x53\x4a\x03\x0b\x77\x91\x37\x1b\x2d\x37\x4a\xef\xb9\x39",
      ),
    ),
    (6, @thrift.Bool(true)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(6784),
        @thrift.I32(-5171),
        @thrift.I32(-9357),
        @thrift.I32(-5073),
        @thrift.I32(2639),
        @thrift.I32(-1707),
        @thrift.I32(-5630),
        @thrift.I32(5813),
        @thrift.I32(-6578),
        @thrift.I32(-2394),
        @thrift.I32(-7666),
        @thrift.I32(3948),
        @thrift.I32(829),
        @thrift.I32(9734),
        @thrift.I32(559),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\xe1\x89\x02\x15\xde\xe8\xd7\x88\x0e\x16\x8f\xba\xdc\xaa\x90\x83\xd1\xea\x2f\x17\x00\x00\x00\x00\x00\xd0\x70\x40\x18\x0f\xe1\x53\x4a\x03\x0b\x77\x91\x37\x1b\x2d\x37\x4a\xef\xb9\x39\x11\xe9\xf5\x0f\x80\x6a\xe5\x50\x99\x92\x01\xa1\x4f\x9e\x29\xd5\x1a\xfb\x57\xea\x5a\xe3\x66\xb3\x25\xe3\x77\xd8\x3d\xfa\x0c\x8c\x98\x01\xde\x08\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 BinaryProtocol vector 15" {
  let value = @thrift.Struct([
    (1, @thrift.I16(6318)),
    (2, @thrift.I32(-65772765)),
    (3, @thrift.I64(-388284814728594020L)),
    (4, @thrift.Double(-1020.0)),
    (
      5,
      @thrift.Binary(
        b"\x0c\x9d\x5b\xe8\x16\xda\x02\x45\x84\xd4\xea\x3d\x1d\xa4\x21\x17",
      ),
    ),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(7085),
        @thrift.I32(4067),
        @thrift.I32(-7699),
        @thrift.I32(2422),
        @thrift.I32(-79),
        @thrift.I32(4551),
        @thrift.I32(-601),
        @thrift.I32(-2701),
        @thrift.I32(7391),
        @thrift.I32(-5018),
        @thrift.I32(-5391),
        @thrift.I32(4981),
        @thrift.I32(-9020),
        @thrift.I32(-4198),
        @thrift.I32(-690),
        @thrift.I32(-8932),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x06\x00\x01\x18\xae\x08\x00\x02\xfc\x14\x63\x23\x0a\x00\x03\xfa\x9c\x89\x04\xaa\x6c\x7d\x9c\x04\x00\x04\xc0\x8f\xe0\x00\x00\x00\x00\x00\x0b\x00\x05\x00\x00\x00\x10\x0c\x9d\x5b\xe8\x16\xda\x02\x45\x84\xd4\xea\x3d\x1d\xa4\x21\x17\x02\x00\x06\x00\x0f\x00\x14\x08\x00\x00\x00\x10\x00\x00\x1b\xad\x00\x00\x0f\xe3\xff\xff\xe1\xed\x00\x00\x09\x76\xff\xff\xff\xb1\x00\x00\x11\xc7\xff\xff\xfd\xa7\xff\xff\xf5\x73\x00\x00\x1c\xdf\xff\xff\xec\x66\xff\xff\xea\xf1\x00\x00\x13\x75\xff\xff\xdc\xc4\xff\xff\xef\x9a\xff\xff\xfd\x4e\xff\xff\xdd\x1c\x0c\xff\xfd\x02\x00\x01\x00\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.BinaryProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.BinaryProtocol),
    value,
  )
}

///|
test "Apache Python 0.22.0 CompactProtocol vector 15" {
  let value = @thrift.Struct([
    (1, @thrift.I16(6318)),
    (2, @thrift.I32(-65772765)),
    (3, @thrift.I64(-388284814728594020L)),
    (4, @thrift.Double(-1020.0)),
    (
      5,
      @thrift.Binary(
        b"\x0c\x9d\x5b\xe8\x16\xda\x02\x45\x84\xd4\xea\x3d\x1d\xa4\x21\x17",
      ),
    ),
    (6, @thrift.Bool(false)),
    (
      20,
      @thrift.List(@thrift.I32Kind, [
        @thrift.I32(7085),
        @thrift.I32(4067),
        @thrift.I32(-7699),
        @thrift.I32(2422),
        @thrift.I32(-79),
        @thrift.I32(4551),
        @thrift.I32(-601),
        @thrift.I32(-2701),
        @thrift.I32(7391),
        @thrift.I32(-5018),
        @thrift.I32(-5391),
        @thrift.I32(4981),
        @thrift.I32(-9020),
        @thrift.I32(-4198),
        @thrift.I32(-690),
        @thrift.I32(-8932),
      ]),
    ),
    (-3, @thrift.Struct([(1, @thrift.Bool(false))])),
  ])
  let wire = b"\x14\xdc\x62\x15\xb9\xf3\xdc\x3e\x16\xc7\x89\x9c\xd9\xea\xbe\xbb\xe3\x0a\x17\x00\x00\x00\x00\x00\xe0\x8f\xc0\x18\x10\x0c\x9d\x5b\xe8\x16\xda\x02\x45\x84\xd4\xea\x3d\x1d\xa4\x21\x17\x12\xe9\xf5\x10\xda\x6e\xc6\x3f\xa5\x78\xec\x25\x9d\x01\x8e\x47\xb1\x09\x99\x2a\xbe\x73\xb3\x4e\x9d\x54\xea\x4d\xf7\x8c\x01\xcb\x41\xe3\x0a\xc7\x8b\x01\x0c\x05\x12\x00\x00"
  assert_eq(@thrift.encode(value, @thrift.CompactProtocol), wire)
  assert_eq(
    @thrift.decode(wire, @thrift.StructKind, @thrift.CompactProtocol),
    value,
  )
}
