///|
/// Consume an unknown wire value without constructing its container/value tree.
fn Reader::skip(
  self : Reader,
  tag : Kind,
  depth : Int,
) -> Unit raise CodecError {
  if depth > 64 {
    raise Invalid("skip depth limit")
  }
  match tag {
    BinaryKind => {
      self.nodes += 1
      let size = if self.compact { self.varint() } else { self.fixed(4, false) }
      if size > 1048576UL || size > (self.data.length() - self.pos).to_uint64() {
        raise Invalid("invalid skipped binary length")
      }
      self.pos += size.to_int()
    }
    StructKind => {
      self.nodes += 1
      let mut previous = 0
      while true {
        let header = self.byte()
        if header == 0 {
          break
        }
        let raw = if self.compact { header & 15 } else { header }
        let field_kind = kind(raw, self.compact)
        let id = self.field_id(header, previous)
        previous = id
        if self.compact && field_kind == BoolKind {
          self.nodes += 1
        } else {
          self.skip(field_kind, depth + 1)
        }
        if self.nodes > 100000 {
          raise Invalid("skip node limit")
        }
      }
    }
    ListKind | SetKind => {
      self.nodes += 1
      let header = self.byte()
      let element = kind(
        if self.compact {
          header & 15
        } else {
          header
        },
        self.compact,
      )
      let size = if self.compact {
        if header >> 4 == 15 {
          self.varint()
        } else {
          (header >> 4).to_uint64()
        }
      } else {
        self.fixed(4, false)
      }
      if size > 100000UL {
        raise Invalid("skip container limit")
      }
      for _ in 0..<size.to_int() {
        self.skip(element, depth + 1)
      }
    }
    MapKind => {
      self.nodes += 1
      let (key, value, size) = if self.compact {
        let size = self.varint()
        if size == 0UL {
          (0, 0, size)
        } else {
          let types = self.byte()
          (types >> 4, types & 15, size)
        }
      } else {
        let key = self.byte()
        let value = self.byte()
        (key, value, self.fixed(4, false))
      }
      if size > 100000UL {
        raise Invalid("skip map limit")
      }
      if size > 0UL {
        let key_kind = kind(key, self.compact)
        let value_kind = kind(value, self.compact)
        for _ in 0..<size.to_int() {
          self.skip(key_kind, depth + 1)
          self.skip(value_kind, depth + 1)
        }
      } else {
        if key != 0 {
          ignore(kind(key, self.compact))
        }
        if value != 0 {
          ignore(kind(value, self.compact))
        }
      }
    }
    _ => ignore(self.value(tag, depth))
  }
  if self.nodes > 100000 {
    raise Invalid("skip node limit")
  }
}

///|
fn Reader::field_id(
  self : Reader,
  header : Int,
  previous : Int,
) -> Int raise CodecError {
  let id = if self.compact {
    if header >> 4 > 0 {
      (previous + (header >> 4)).to_int64()
    } else {
      unzigzag(self.varint())
    }
  } else {
    self.signed(2)
  }
  if id < -32768L || id > 32767L {
    raise Invalid("field id overflow")
  }
  id.to_int()
}

///|
/// Read one value from a byte stream; returns the consumed byte count.
pub fn decode_prefix(
  data : Bytes,
  root : Kind,
  protocol : Protocol,
) -> (Value, Int) raise CodecError {
  if data.length() > 1048576 {
    raise Invalid("input exceeds one MiB")
  }
  let reader : Reader = {
    data,
    pos: 0,
    nodes: 0,
    compact: protocol == CompactProtocol,
  }
  let value = reader.value(root, 0)
  (value, reader.pos)
}

///|
/// Return the byte length of the first wire value, validating skipped data.
pub fn skip_prefix(
  data : Bytes,
  root : Kind,
  protocol : Protocol,
) -> Int raise CodecError {
  if data.length() > 1048576 {
    raise Invalid("input exceeds one MiB")
  }
  let reader : Reader = {
    data,
    pos: 0,
    nodes: 0,
    compact: protocol == CompactProtocol,
  }
  reader.skip(root, 0)
  reader.pos
}

///|
/// Decode only requested fields of a struct. Unknown and mismatched fields are
/// skipped on the wire. Duplicates retain wire order, as in the generic decoder.
pub fn decode_selected(
  data : Bytes,
  fields : Array[(Int, Kind)],
  protocol : Protocol,
) -> Value raise CodecError {
  if data.length() > 1048576 || fields.length() > 100000 {
    raise Invalid("selection resource limit")
  }
  let wanted : Map[Int, Kind] = Map([])
  for (id, tag) in fields {
    if id < -32768 || id > 32767 || wanted.contains(id) {
      raise Invalid("invalid or duplicate selection id")
    }
    wanted[id] = tag
  }
  let reader : Reader = {
    data,
    pos: 0,
    nodes: 1,
    compact: protocol == CompactProtocol,
  }
  let out : Array[(Int, Value)] = []
  let mut previous = 0
  while true {
    let header = reader.byte()
    if header == 0 {
      break
    }
    let raw = if reader.compact { header & 15 } else { header }
    let tag = kind(raw, reader.compact)
    let id = reader.field_id(header, previous)
    previous = id
    if wanted.get(id) == Some(tag) {
      let value = if reader.compact && tag == BoolKind {
        reader.nodes += 1
        Bool(raw == 1)
      } else {
        reader.value(tag, 1)
      }
      out.push((id, value))
    } else if reader.compact && tag == BoolKind {
      reader.nodes += 1
    } else {
      reader.skip(tag, 1)
    }
    if reader.nodes > 100000 {
      raise Invalid("selection node limit")
    }
  }
  if reader.pos != data.length() {
    raise Invalid("trailing struct bytes")
  }
  Struct(out)
}
