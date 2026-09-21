# 可执行 API 示例

增加 Binary/Compact Map/Set，12 组 Apache Thrift 独立向量对照。这些例子调用公开 API，并随 `moon test` 执行。

```mbt check
///|
test "documented map container" {
  let value = @thrift.MapValue(
    Some(@thrift.BinaryKind),
    Some(@thrift.I32Kind),
    [(@thrift.Binary(b"answer"), @thrift.I32(42))],
  )
  let wire = @thrift.encode(value, @thrift.BinaryProtocol)
  assert_eq(
    @thrift.decode(wire, @thrift.MapKind, @thrift.BinaryProtocol),
    value,
  )
}
```

另有 MoonBit IDL 解析、schema 校验和类型绑定生成，以及 Node TCP/TLS/mTLS 宿主，见 [README.md](README.md)。仍不声称完整 Apache Thrift 兼容；本例所用通用值 API 解码 Compact 空 Map 时，线路不含键值类型信息，类型字段为 `None/None`。

## 分帧 RPC 客户端

```mbt check
///|
test "documented framed RPC exchange" {
  let client = @thrift.Client::new(@thrift.CompactProtocol)
  let request = client.call("ping", @thrift.Struct([]))
  let frames = @thrift.FrameDecoder::new()
  let message = @thrift.decode_message(
    frames.feed(request)[0],
    @thrift.CompactProtocol,
  )
  let reply : @thrift.Message = {
    name: message.name,
    sequence_id: message.sequence_id,
    message_type: 2,
    body: @thrift.Struct([(0, @thrift.I32(42))]),
  }
  assert_eq(
    client.feed(@thrift.encode_framed_message(reply, @thrift.CompactProtocol)),
    [reply],
  )
  client.finish()
}
```
