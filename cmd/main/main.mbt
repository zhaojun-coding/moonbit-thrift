///|
fn main raise {
  let value = @lib.Struct([
    (1, @lib.I32(150)),
    (2, @lib.Bool(true)),
    (3, @lib.Binary(b"MoonBit")),
  ])
  for protocol in [@lib.BinaryProtocol, @lib.CompactProtocol] {
    let wire = @lib.encode(value, protocol)
    let decoded = @lib.decode(wire, @lib.StructKind, protocol)
    println("encoded bytes=\{wire.length()}, roundtrip=\{decoded==value}")
  }
}
