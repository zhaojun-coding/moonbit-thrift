# MoonBit Thrift IDL、编解码与 RPC 实现 · 项目申报书

## 一、项目名称

MoonBit Thrift IDL、编解码与 RPC 实现

## 二、项目说明

MoonBit 实现列明的 IDL/Schema、Binary/Compact、分帧及响应关联；Node 提供代码生成驱动、TCP/TLS/mTLS 客户端和服务端。并非完整 Apache Thrift 编译器或全部传输替代。

## 三、方向与通用性

基础软件与 RPC。已有 Xpeng/moonthrift（https://github.com/pxgt/moonthrift）覆盖 IDL、代码生成和协议，存在明显重叠；本项目候选差异为 Node TCP/TLS/mTLS 运行时、multiplex 和真实网络互通，需要固定提交证据支持。

## 四、应用场景

inspect 检查 IDL；gen 生成 bindings.mbt/moon.pkg；decode 检视线路值；multiplex 在一个连接路由多个服务。生成项目应依赖 zhaojun-coding/thrift，保留队友已修正的默认导入。

## 五、功能与验证边界

已有 IDL、类型编解码、生成代码实际编译及网络 RPC 对照记录；本轮另外复验生成消费项目的 JS/Wasm-GC 路径。仍缺 JSON/Header、HTTP/unframed、SASL、其他语言生成器和完整上游套件。

## 六、原创性与参考材料

原创代码 MIT。以 Apache Thrift 0.24.0 编译器和 Python runtime（Apache-2.0，https://github.com/apache/thrift）独立对照，未复制上游实现；官方生成的 Python 代码仅用于临时测试，不能把有限比较称为完整 IDL 兼容。

## 七、仓库链接

https://github.com/zhaojun-coding/moonbit-thrift
