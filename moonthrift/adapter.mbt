///|
fn fail(message : String) -> @runtime.CodecError {
  @runtime.Invalid("Xpeng/moonthrift adapter: " + message)
}

///|
fn range(
  value : Int,
  minimum : Int,
  maximum : Int,
) -> Unit raise @runtime.CodecError {
  if value < minimum || value > maximum {
    raise fail("integer or field ID out of range")
  }
}

///|
fn to_wire(
  kind : @runtime.Kind,
) -> @upstream.WireType raise @runtime.CodecError {
  match kind {
    BoolKind => @upstream.Bool
    ByteKind => @upstream.Byte
    I16Kind => @upstream.I16
    I32Kind => @upstream.I32
    I64Kind => @upstream.I64
    DoubleKind => @upstream.Double
    BinaryKind => @upstream.Binary
    StructKind => @upstream.Struct
    ListKind => @upstream.List
    SetKind => @upstream.Set
    MapKind => @upstream.Map
    UuidKind => raise fail("UUID is not supported by upstream 0.2.0")
  }
}

///|
fn from_wire(
  kind : @upstream.WireType,
) -> @runtime.Kind raise @runtime.CodecError {
  match kind {
    Bool => @runtime.BoolKind
    Byte => @runtime.ByteKind
    I16 => @runtime.I16Kind
    I32 => @runtime.I32Kind
    I64 => @runtime.I64Kind
    Double => @runtime.DoubleKind
    Binary => @runtime.BinaryKind
    Struct => @runtime.StructKind
    List => @runtime.ListKind
    Set => @runtime.SetKind
    Map => @runtime.MapKind
    Stop => raise fail("Stop is not a value type")
  }
}

///|
fn budget(nodes : Ref[Int], depth : Int) -> Unit raise @runtime.CodecError {
  nodes.val += 1
  if nodes.val > 100000 || depth > 64 {
    raise fail("value conversion depth/node limit")
  }
}

///|
fn to_value(
  value : @runtime.Value,
  nodes : Ref[Int],
  depth : Int,
  allow_typeless : Bool,
) -> @upstream.Value raise @runtime.CodecError {
  budget(nodes, depth)
  match value {
    Bool(v) => @upstream.BoolValue(v)
    Byte(v) => {
      range(v, -128, 127)
      @upstream.ByteValue(v)
    }
    I16(v) => {
      range(v, -32768, 32767)
      @upstream.I16Value(v)
    }
    I32(v) => @upstream.I32Value(v)
    I64(v) => @upstream.I64Value(v)
    Double(v) => @upstream.DoubleValue(v)
    Binary(v) => {
      if v.length() > 1048576 {
        raise fail("binary size limit")
      }
      @upstream.BinaryValue(v)
    }
    Struct(fields) =>
      @upstream.StructValue(
        fields.map(pair => {
          range(pair.0, -32768, 32767)
          {
            id: pair.0,
            value: to_value(pair.1, nodes, depth + 1, allow_typeless),
          }
        }),
      )
    List(kind, values) =>
      @upstream.ListValue(
        element_type=to_wire(kind),
        values=values.map(value => {
          to_value(value, nodes, depth + 1, allow_typeless)
        }),
      )
    SetValue(kind, values) =>
      @upstream.SetValue(
        element_type=to_wire(kind),
        values=values.map(value => {
          to_value(value, nodes, depth + 1, allow_typeless)
        }),
      )
    MapValue(key, value, entries) => {
      let (key_type, value_type) = match (key, value) {
        (Some(k), Some(v)) => (to_wire(k), to_wire(v))
        (None, None) if entries.is_empty() && allow_typeless =>
          (@upstream.Stop, @upstream.Stop)
        _ =>
          raise fail(
            "map needs both types unless it is an untyped empty Compact map",
          )
      }
      @upstream.MapValue(
        key_type~,
        value_type~,
        entries=entries.map(pair => {
          (
            to_value(pair.0, nodes, depth + 1, allow_typeless),
            to_value(pair.1, nodes, depth + 1, allow_typeless),
          )
        }),
      )
    }
    Uuid(_) => raise fail("UUID is not supported by upstream 0.2.0")
  }
}

///|
fn from_value(
  value : @upstream.Value,
  nodes : Ref[Int],
  depth : Int,
) -> @runtime.Value raise @runtime.CodecError {
  budget(nodes, depth)
  match value {
    BoolValue(v) => @runtime.Bool(v)
    ByteValue(v) => @runtime.Byte(v)
    I16Value(v) => @runtime.I16(v)
    I32Value(v) => @runtime.I32(v)
    I64Value(v) => @runtime.I64(v)
    DoubleValue(v) => @runtime.Double(v)
    BinaryValue(v) => {
      if v.length() > 1048576 {
        raise fail("binary size limit")
      }
      @runtime.Binary(v)
    }
    StructValue(fields) =>
      @runtime.Struct(
        fields.map(field => {
          (field.id, from_value(field.value, nodes, depth + 1))
        }),
      )
    ListValue(element_type~, values~) =>
      @runtime.List(
        from_wire(element_type),
        values.map(value => from_value(value, nodes, depth + 1)),
      )
    SetValue(element_type~, values~) =>
      @runtime.SetValue(
        from_wire(element_type),
        values.map(value => from_value(value, nodes, depth + 1)),
      )
    MapValue(key_type~, value_type~, entries~) => {
      let (key, value) = if key_type == @upstream.Stop &&
        value_type == @upstream.Stop &&
        entries.is_empty() {
        (None, None)
      } else {
        (Some(from_wire(key_type)), Some(from_wire(value_type)))
      }
      @runtime.MapValue(
        key,
        value,
        entries.map(pair => {
          (
            from_value(pair.0, nodes, depth + 1),
            from_value(pair.1, nodes, depth + 1),
          )
        }),
      )
    }
  }
}

///|
/// Convert generated-model to_thrift_value() output without JSON or floating
/// point intermediates. Retains Int64, raw Bytes, list and field order.
pub fn from_upstream(
  value : @upstream.Value,
) -> @runtime.Value raise @runtime.CodecError {
  from_value(value, Ref(0), 0)
}

///|
/// Convert an RPC body for a generated model's from_thrift_value().
pub fn to_upstream(
  value : @runtime.Value,
) -> @upstream.Value raise @runtime.CodecError {
  to_value(value, Ref(0), 0, true)
}

///|
/// Binary strict-write / Compact message serialization is performed entirely
/// by the pinned upstream package. UUID and legacy-write are not provided.
pub fn message_codec(protocol : @runtime.Protocol) -> @runtime.MessageCodec {
  @runtime.MessageCodec::new(
    encode=message => {
      try {
        let upstream : @upstream.Message = {
          name: message.name,
          kind: @upstream.MessageType::from_id(message.message_type),
          sequence_id: message.sequence_id,
          body: to_value(
            message.body,
            Ref(0),
            0,
            protocol == @runtime.CompactProtocol,
          ),
        }
        match protocol {
          BinaryProtocol => @upstream.encode_binary_message(upstream)
          CompactProtocol => @upstream.encode_compact_message(upstream)
        }
      } catch {
        error => raise fail(Repr(error).to_string())
      }
    },
    decode=data => {
      try {
        let message = match protocol {
          BinaryProtocol =>
            @upstream.decode_binary_message(
              data,
              max_depth=64,
              max_container_size=100000,
              max_binary_size=1048576,
            )
          CompactProtocol =>
            @upstream.decode_compact_message(
              data,
              max_depth=64,
              max_container_size=100000,
              max_binary_size=1048576,
            )
        }
        {
          name: message.name,
          message_type: message.kind.id(),
          sequence_id: message.sequence_id,
          body: from_upstream(message.body),
        }
      } catch {
        error => raise fail(Repr(error).to_string())
      }
    },
  )
}
