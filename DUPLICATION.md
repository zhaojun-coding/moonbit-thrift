# thrift 查重与定位 · 2026-09-22

[Xpeng/moonthrift](https://github.com/pxgt/moonthrift)。Xpeng/moonthrift 已有 IDL、生成器、Binary/Compact 与 Python 互通；这些不是独有。对照固定提交的说明，它未提供 socket/server dispatch/TLS/pool。本项目主张可运行网络 RPC 和失败生命周期的组合贡献，同时明确编解码/IDL 重叠。没有声称目前已复用对方实现。

- [pxgt/moonthrift 固定提交](https://github.com/pxgt/moonthrift/tree/322368221eb911d32199e9a1d349903093b7ec18)：依据该版本的公开说明对照，不冒充本轮运行了对方全部实现。

本轮材料采用定位：**Thrift 类型化 RPC 与 TCP/TLS 运行时**。

MoonBit 与宿主分工：MoonBit 提供 Schema.make_call/read_call/make_reply/read_reply、Client 的待响应 ID 关联与 FrameDecoder；Node 负责网络、证书、Promise、并发调度和超时关闭。

本轮证据：本轮实际 Apache Thrift0.24.0 双向网络互通通过：12 个协议/连接/路由组合、192 项 RPC、37 组网络/生命周期检查。参考编译器、Python依赖路径见 TESTING.md。 具体输入、脚本、已执行与历史对照分开记录在 [PROPOSAL.md](PROPOSAL.md) 和 evidence/innovation-review-20260922/。

边界：无 HTTP/unframed/Header/JSON transport、SASL 或所有生成语言；取消/超时会关闭整条连接。独立网络检查不等于生产规模压测。

检索覆盖 Mooncakes 官方关键词/别名、GitHub 仓库查询、GitLink 公开索引、直接来源文档；没有完整赛事报名表、私有仓库、未公开分支或 GitHub 全代码索引。GitLink 索引也不完整。未找到同范围项目不等于生态空白；已有相关项目不自动等于无独立贡献。完整查询和固定提交快照在总交付目录 innovation-review-20260922/。

初次复核风险为“高”。本次补足差异和可复现工作流，没有自行将重叠归零，也不替评委作创新性认定。最终公开代码与表单附件须使用一致版本。
