///|
fn fixed(out : Array[Byte], value : UInt64, width : Int, little : Bool) -> Unit {
  for i in 0..<width {
    out.push(
      (value >> ((if little { i } else { width - 1 - i }) * 8)).to_byte(),
    )
  }
}

///|
fn varint(out : Array[Byte], value : UInt64) -> Unit {
  let mut n = value
  while n >= 128UL {
    out.push(((n & 127UL) | 128UL).to_byte())
    n = n >> 7
  }
  out.push(n.to_byte())
}

///|
fn write_value(
  out : Array[Byte],
  value : Value,
  compact : Bool,
  depth : Int,
) -> Unit raise CodecError {
  if depth > 64 || out.length() > 1048576 {
    raise Invalid("serialization resource limit")
  }
  match value {
    Bool(b) => out.push(if b { 1 } else if compact { 2 } else { 0 })
    Byte(n) => {
      if n < -128 || n > 127 {
        raise Invalid("byte out of range")
      }
      out.push(n.to_byte())
    }
    I16(n) => {
      if n < -32768 || n > 32767 {
        raise Invalid("i16 out of range")
      }
      if compact {
        varint(out, zigzag(n.to_int64()))
      } else {
        fixed(out, n.to_int64().reinterpret_as_uint64(), 2, false)
      }
    }
    I32(n) =>
      if compact {
        varint(out, zigzag(n.to_int64()))
      } else {
        fixed(out, n.to_int64().reinterpret_as_uint64(), 4, false)
      }
    I64(n) =>
      if compact {
        varint(out, zigzag(n))
      } else {
        fixed(out, n.reinterpret_as_uint64(), 8, false)
      }
    Double(n) => fixed(out, n.reinterpret_as_uint64(), 8, compact)
    Binary(data) => {
      if data.length() > 1048576 {
        raise Invalid("binary too large")
      }
      if compact {
        varint(out, data.length().to_uint64())
      } else {
        fixed(out, data.length().to_uint64(), 4, false)
      }
      for b in data {
        out.push(b)
      }
    }
    List(element, items) | SetValue(element, items) => {
      if items.length() > 100000 {
        raise Invalid("list too long")
      }
      let t = code(element, compact)
      if compact {
        if items.length() < 15 {
          out.push(((items.length() << 4) | t).to_byte())
        } else {
          out.push((240 | t).to_byte())
          varint(out, items.length().to_uint64())
        }
      } else {
        out.push(t.to_byte())
        fixed(out, items.length().to_uint64(), 4, false)
      }
      for item in items {
        if item.kind() != element {
          raise Invalid("heterogeneous list")
        }
        write_value(out, item, compact, depth + 1)
      }
    }
    MapValue(key_kind, value_kind, entries) => {
      if entries.length() > 100000 {
        raise Invalid("map length limit")
      }
      if compact && entries.is_empty() {
        out.push(0)
      } else {
        let kt = match key_kind {
          Some(k) => code(k, compact)
          None =>
            if entries.is_empty() {
              0
            } else {
              raise Invalid("missing map key type")
            }
        }
        let vt = match value_kind {
          Some(k) => code(k, compact)
          None =>
            if entries.is_empty() {
              0
            } else {
              raise Invalid("missing map value type")
            }
        }
        if compact {
          varint(out, entries.length().to_uint64())
          out.push(((kt << 4) | vt).to_byte())
        } else {
          out.push(kt.to_byte())
          out.push(vt.to_byte())
          fixed(out, entries.length().to_uint64(), 4, false)
        }
        for (key, value) in entries {
          if Some(key.kind()) != key_kind || Some(value.kind()) != value_kind {
            raise Invalid("heterogeneous map")
          }
          write_value(out, key, compact, depth + 1)
          write_value(out, value, compact, depth + 1)
        }
      }
    }
    Struct(fields) => {
      if fields.length() > 100000 {
        raise Invalid("too many fields")
      }
      let mut previous = 0
      for field in fields {
        let (id, item) = field
        if id < -32768 || id > 32767 {
          raise Invalid("field id out of range")
        }
        let t = if compact && item == Bool(false) {
          2
        } else {
          code(item.kind(), compact)
        }
        if compact {
          let delta = id - previous
          if delta > 0 && delta <= 15 {
            out.push(((delta << 4) | t).to_byte())
          } else {
            out.push(t.to_byte())
            varint(out, zigzag(id.to_int64()))
          }
        } else {
          out.push(t.to_byte())
          fixed(out, id.to_int64().reinterpret_as_uint64(), 2, false)
        }
        if !compact || item.kind() != BoolKind {
          write_value(out, item, compact, depth + 1)
        }
        previous = id
      }
      out.push(0)
    }
  }
}

///|
pub fn encode(value : Value, protocol : Protocol) -> Bytes raise CodecError {
  let out = []
  write_value(out, value, protocol == CompactProtocol, 0)
  if out.length() > 1048576 {
    raise Invalid("encoded output exceeds one MiB")
  }
  Bytes::from_array(out)
}
