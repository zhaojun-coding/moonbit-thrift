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

限制：无 IDL 编译器、schema 校验与 RPC transport；Compact 空 Map 无法从线路恢复类型，解码为 None/None。
