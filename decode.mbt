///|
priv struct Reader {
  data : Bytes
  mut pos : Int
  mut nodes : Int
  compact : Bool
}

///|
fn Reader::byte(self : Reader) -> Int raise CodecError {
  if self.pos >= self.data.length() {
    raise Invalid("truncated value")
  }
  let b = self.data[self.pos].to_int()
  self.pos += 1
  b
}

///|
fn Reader::fixed(
  self : Reader,
  width : Int,
  little : Bool,
) -> UInt64 raise CodecError {
  let mut n = 0UL
  for i in 0..<width {
    n = n |
      (
        self.byte().to_uint64() <<
        ((if little { i } else { width - 1 - i }) * 8)
      )
  }
  n
}

///|
fn Reader::varint(self : Reader) -> UInt64 raise CodecError {
  let mut n = 0UL
  for i in 0..<10 {
    let b = self.byte()
    if i == 9 && b > 1 {
      raise Invalid("varint overflow")
    }
    n = n | ((b & 127).to_uint64() << (i * 7))
    if b < 128 {
      return n
    }
  }
  raise Invalid("unterminated varint")
}

///|
fn Reader::signed(self : Reader, width : Int) -> Int64 raise CodecError {
  if self.compact {
    return unzigzag(self.varint())
  }
  let n = self.fixed(width, false)
  if width == 8 {
    return n.reinterpret_as_int64()
  }
  let shift = 64 - width * 8
  (n << shift).reinterpret_as_int64() >> shift
}

///|
fn Reader::value(
  self : Reader,
  tag : Kind,
  depth : Int,
) -> Value raise CodecError {
  self.nodes += 1
  if depth > 64 || self.nodes > 100000 {
    raise Invalid("decoding resource limit")
  }
  match tag {
    UuidKind => {
      if self.data.length() - self.pos < 16 {
        raise Invalid("truncated UUID")
      }
      let data = self.data[self.pos:self.pos + 16].to_owned()
      self.pos += 16
      Uuid(data)
    }
    BoolKind => {
      let b = self.byte()
      if b == 1 {
        Bool(true)
      } else if b == (if self.compact { 2 } else { 0 }) {
        Bool(false)
      } else {
        raise Invalid("invalid boolean")
      }
    }
    ByteKind => {
      let n = self.byte()
      Byte(if n > 127 { n - 256 } else { n })
    }
    I16Kind => {
      let n = self.signed(2)
      if n < -32768L || n > 32767L {
        raise Invalid("i16 overflow")
      }
      I16(n.to_int())
    }
    I32Kind => {
      let n = self.signed(4)
      if n < -2147483648L || n > 2147483647L {
        raise Invalid("i32 overflow")
      }
      I32(n.to_int())
    }
    I64Kind => I64(self.signed(8))
    DoubleKind => Double(self.fixed(8, self.compact).reinterpret_as_double())
    BinaryKind => {
      let n = if self.compact { self.varint() } else { self.fixed(4, false) }
      if n > 1048576UL || n > (self.data.length() - self.pos).to_uint64() {
        raise Invalid("invalid binary length")
      }
      let value = self.data[self.pos:self.pos + n.to_int()].to_owned()
      self.pos += n.to_int()
      Binary(value)
    }
    ListKind | SetKind => {
      let is_set = tag == SetKind
      let header = self.byte()
      let tag = kind(
        if self.compact {
          header & 15
        } else {
          header
        },
        self.compact,
      )
      let n = if self.compact {
        if header >> 4 == 15 {
          self.varint()
        } else {
          (header >> 4).to_uint64()
        }
      } else {
        self.fixed(4, false)
      }
      if n > 100000UL {
        raise Invalid("list length exceeds limit")
      }
      let items = []
      for _ in 0..<n.to_int() {
        items.push(self.value(tag, depth + 1))
      }
      if is_set {
        SetValue(tag, items)
      } else {
        List(tag, items)
      }
    }
    MapKind => {
      let (kt, vt, n) = if self.compact {
        let n = self.varint()
        if n == 0UL {
          (0, 0, n)
        } else {
          let types = self.byte()
          (types >> 4, types & 15, n)
        }
      } else {
        let k = self.byte()
        let v = self.byte()
        (k, v, self.fixed(4, false))
      }
      if n > 100000UL {
        raise Invalid("map length limit")
      }
      let key_kind = if n == 0UL && kt == 0 {
        None
      } else {
        Some(kind(kt, self.compact))
      }
      let value_kind = if n == 0UL && vt == 0 {
        None
      } else {
        Some(kind(vt, self.compact))
      }
      let entries = []
      for _ in 0..<n.to_int() {
        match (key_kind, value_kind) {
          (Some(k), Some(v)) =>
            entries.push((self.value(k, depth + 1), self.value(v, depth + 1)))
          _ => raise Invalid("missing map types")
        }
      }
      MapValue(key_kind, value_kind, entries)
    }
    StructKind => {
      let fields = []
      let mut previous = 0
      while true {
        let header = self.byte()
        if header == 0 {
          break
        }
        let raw = if self.compact { header & 15 } else { header }
        let tag = kind(raw, self.compact)
        let id = if self.compact {
          if header >> 4 > 0 {
            previous + (header >> 4)
          } else {
            let n = unzigzag(self.varint())
            if n < -32768L || n > 32767L {
              raise Invalid("field id overflow")
            }
            n.to_int()
          }
        } else {
          self.signed(2).to_int()
        }
        if id < -32768 || id > 32767 {
          raise Invalid("field id overflow")
        }
        let item = if self.compact && tag == BoolKind {
          Bool(raw == 1)
        } else {
          self.value(tag, depth + 1)
        }
        fields.push((id, item))
        previous = id
        if fields.length() > 100000 {
          raise Invalid("field count limit")
        }
      }
      Struct(fields)
    }
  }
}

///|
/// Root type is supplied by caller, as in Thrift IDL. Trailing bytes are rejected.
pub fn decode(
  data : Bytes,
  root : Kind,
  protocol : Protocol,
) -> Value raise CodecError {
  if data.length() > 1048576 {
    raise Invalid("input exceeds one MiB")
  }
  let reader : Reader = {
    data,
    pos: 0,
    nodes: 0,
    compact: protocol == CompactProtocol,
  }
  let result = reader.value(root, 0)
  if reader.pos != data.length() {
    raise Invalid("trailing bytes")
  }
  result
}
