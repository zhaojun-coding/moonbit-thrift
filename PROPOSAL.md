# Thrift 类型化 RPC 与 TCP/TLS 运行时 · 修订申报草稿

本项目仓库：https://github.com/zhaojun-coding/moonbit-thrift
模块 / 本地版本：`zhaojun-coding/thrift` / `0.5.1`；许可证：MIT。
修订状态：条件复审；本轮仅本地修订，未推送或提交表单。

## 任务与选择依据
将既有 Thrift IDL 接到可运行的跨语言 RPC 服务，处理 i64、二进制、异常、oneway、乱序响应、TLS/mTLS 与多服务路由。
已有 Thrift IDL 与跨语言 RPC 互操作时评估；网络生命周期能力是与 Xpeng/moonthrift 重叠基础之上的候选增量。

## 已实现内容
MoonBit 提供 Schema.make_call/read_call/make_reply/read_reply、Client 的待响应 ID 关联与 FrameDecoder；Node 负责网络、证书、Promise、并发调度和超时关闭。
可复现任务：交换超过 JS 精度范围的 IDL 记录；按 README 构建后运行 `node examples/run-use-case.mjs`，输入与输出见 USE-CASE.md。
本轮修复 CLI 默认覆盖文件，检查显式 --force 和 Compact i64 交换。先前 Apache Thrift0.24 双向网络互通报告保留；本轮未重跑该完整服务器矩阵。

## 原创、复用与差异
原创实现/参考来源/第三方材料许可按 README、DUPLICATION 与仓库来源说明披露；不将既有协议、算法、词库或规范发明归于本项目。
Xpeng/moonthrift 已有 IDL、生成器、Binary/Compact 与 Python 互通；这些不是独有。对照固定提交的说明，它未提供 socket/server dispatch/TLS/pool。本项目主张可运行网络 RPC 和失败生命周期的组合贡献，同时明确编解码/IDL 重叠。没有声称目前已复用对方实现。
比较项目链接单列于 DUPLICATION.md，不作为本项目提交地址。检索范围不含完整未公开报名表，不能保证无重叠。

## 边界与剩余计划
无 HTTP/unframed/Header/JSON transport、SASL 或所有生成语言；取消/超时会关闭整条连接。独立网络检查不等于生产规模压测。
主要 I/O 差异在 Node，不能将其写成 MoonBit 原生 TLS；生产规模未验证。
剩余计划：由对接团队核对真实表单链接、公开本轮对应提交及确认选题/换题流程；按实际接入输入补验证，避免以更多规则、测试数量或改名替代用途证据。
交付：MoonBit 库、限定宿主入口、可运行任务、源码/来源说明及分层验证证据；不承诺自动通过初审。
