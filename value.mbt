///|
pub suberror CodecError {
  Invalid(String)
} derive(Debug)

///|
pub(all) enum Protocol {
  BinaryProtocol
  CompactProtocol
} derive(Debug, Eq)

///|
pub(all) enum Kind {
  BoolKind
  ByteKind
  I16Kind
  I32Kind
  I64Kind
  DoubleKind
  BinaryKind
  StructKind
  ListKind
} derive(Debug, Eq)

///|
pub(all) enum Value {
  Bool(Bool)
  Byte(Int)
  I16(Int)
  I32(Int)
  I64(Int64)
  Double(Double)
  Binary(Bytes)
  Struct(Array[(Int, Value)])
  List(Kind, Array[Value])
} derive(Debug, Eq)

///|
pub fn Value::kind(self : Value) -> Kind {
  match self {
    Bool(_) => BoolKind
    Byte(_) => ByteKind
    I16(_) => I16Kind
    I32(_) => I32Kind
    I64(_) => I64Kind
    Double(_) => DoubleKind
    Binary(_) => BinaryKind
    Struct(_) => StructKind
    List(_, _) => ListKind
  }
}

///|
fn code(kind : Kind, compact : Bool) -> Int {
  if compact {
    match kind {
      BoolKind => 1
      ByteKind => 3
      I16Kind => 4
      I32Kind => 5
      I64Kind => 6
      DoubleKind => 7
      BinaryKind => 8
      ListKind => 9
      StructKind => 12
    }
  } else {
    match kind {
      BoolKind => 2
      ByteKind => 3
      I16Kind => 6
      I32Kind => 8
      I64Kind => 10
      DoubleKind => 4
      BinaryKind => 11
      ListKind => 15
      StructKind => 12
    }
  }
}

///|
fn kind(raw : Int, compact : Bool) -> Kind raise CodecError {
  for
    k in [
      BoolKind,
      ByteKind,
      I16Kind,
      I32Kind,
      I64Kind,
      DoubleKind,
      BinaryKind,
      ListKind,
      StructKind,
    ] {
    if code(k, compact) == raw {
      return k
    }
  }
  if compact && raw == 2 {
    return BoolKind
  }
  raise Invalid("unsupported type tag")
}

///|
fn zigzag(n : Int64) -> UInt64 {
  ((n << 1) ^ (n >> 63)).reinterpret_as_uint64()
}

///|
fn unzigzag(n : UInt64) -> Int64 {
  (n >> 1).reinterpret_as_int64() ^ -(n & 1UL).reinterpret_as_int64()
}
