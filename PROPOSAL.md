# Thrift 类型化 RPC 与 TCP/TLS 运行时

本地申报候选材料，2026-09-22；模块 `zhaojun-coding/thrift`，版本 `0.5.0`。团队的公开仓库可能还是先前提交，本次没有推送；最终表单必须指向团队实际上传版本。

## 要解决的任务

将既有 Thrift IDL 接到可运行的跨语言 RPC 服务，处理 i64、二进制、异常、oneway、乱序响应、TLS/mTLS 与多服务路由。

以下是目标任务和可复现工程证据，不虚构客户、存量部署或采用人数。

## 现有工作与新增贡献

[Xpeng/moonthrift](https://github.com/pxgt/moonthrift)。Xpeng/moonthrift 已有 IDL、生成器、Binary/Compact 与 Python 互通；这些不是独有。对照固定提交的说明，它未提供 socket/server dispatch/TLS/pool。本项目主张可运行网络 RPC 和失败生命周期的组合贡献，同时明确编解码/IDL 重叠。没有声称目前已复用对方实现。

MoonBit 提供 Schema.make_call/read_call/make_reply/read_reply、Client 的待响应 ID 关联与 FrameDecoder；Node 负责网络、证书、Promise、并发调度和超时关闭。

- [pxgt/moonthrift 固定提交](https://github.com/pxgt/moonthrift/tree/322368221eb911d32199e9a1d349903093b7ec18)：依据该版本的公开说明对照，不冒充本轮运行了对方全部实现。

## 可复现路径

仓库附编译引擎；修改源码后先构建。参考工具的额外依赖与环境变量见 TESTING.md；测试创建的网络服务仅在本机。

```sh
node tools/test-network-reference.mjs
```

本轮实际 Apache Thrift0.24.0 双向网络互通通过：12 个协议/连接/路由组合、192 项 RPC、37 组网络/生命周期检查。参考编译器、Python依赖路径见 TESTING.md。 本轮 JS/WasmGC 核心测试及 JS 构建通过，原始日志见 [本轮验证](evidence/innovation-review-20260922/results.json)。测试数量证明所列范围，不能代替创新性论证或推断正式审核通过。

## 边界与来源

无 HTTP/unframed/Header/JSON transport、SASL 或所有生成语言；取消/超时会关闭整条连接。独立网络检查不等于生产规模压测。

许可证与来源沿用仓库现有 LICENSE/第三方说明，不将标准、算法、词库或参考软件写成本项目发明。查重不是对全生态不存在的证明，日期、相邻项与未覆盖范围见 [DUPLICATION.md](DUPLICATION.md)。
