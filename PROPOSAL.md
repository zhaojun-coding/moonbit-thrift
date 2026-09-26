# 基于 Xpeng/moonthrift 的 RPC 会话与 Node TCP/TLS 适配

本项目仓库：https://github.com/zhaojun-coding/moonbit-thrift
模块/本地版本：`zhaojun-coding/thrift` / `0.7.0`；交付许可证 MIT AND Apache-2.0。
本地修订未推送、发布或提交表单；旧版独立核心表述已纠正。

## 已有项目与实际扩展
[Xpeng/moonthrift 0.3.0](https://github.com/pxgt/moonthrift) 已有 IDL、跨文件工作区、生成模型、Binary/Compact 编解码、typed 单次RPC及增量分帧，不能将这些作为本项目新增贡献。
本版直接依赖该包，`/moonthrift` 将其 Value/消息 codec 接入多请求 Client，并直接使用其 rpc.FrameDecoder/encode_frame，并演示未修改的上游生成类型参加网络 RPC。
上游负责分帧；本地MoonBit负责多请求pending序号、乱序、整批交付、未决身份与失败状态；Node 负责 TCP/TLS、调度、队列、超时/取消和关闭。不是 MoonBit 原生网络 I/O。
Node 动态 Schema 和旧 builtin codec 保留兼容，明确承认与上游重叠；不把已有解析/生成能力重复申报为创新。

## 可运行任务
`moon build --target js` → `node tools/refresh-engines.mjs` → `node examples/run-upstream-model.mjs`。
上游从原创 IDL 生成 SharedAddArgs/SharedAddResult，通过本机真实 TCP 与两种上游协议返回精确 i64 文本 `9007199254740994`。
需要上游模型参加有状态 framed RPC 的项目可评估此适配；只需 IDL/序列化应优先评估已有上游。当前没有确认使用方。

## 验证与边界
JS/Wasm-GC 核心、5组新适配测试、上游模型生成确定性与实际网络示例通过；14组上游/builtin TCP/TLS、取消/超时检查通过。
共享运行时改动后重跑 Apache Thrift0.24.0 双向回归：37组、192项 RPC；该旧路径的 UUID/legacy/mTLS 不等于上游路径也支持。
上游接入不支持 UUID/legacy Binary；取消或超时关闭整条连接，无连接池、HTTP/Header/JSON transport、SASL 或生产规模验证。
完整证据、接口和限制见 UPSTREAM-RELATION.md、TESTING.md；请求依据代码扩展关系重新审核，不保证认定通过。

0.7.0新增 `pending_calls/abort`、混合响应整批提交、序号用尽保护与EOF封闭；不是自动重试或exactly-once。当前验证见 evidence/session-20260927，旧数字属于0.6.0历史检查。
