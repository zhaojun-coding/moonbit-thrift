# 基于 Xpeng/moonthrift 的 RPC 会话与 Node TCP/TLS 适配

本项目仓库：https://github.com/zhaojun-coding/moonbit-thrift

模块 `zhaojun-coding/thrift`，本地版本 **0.7.0**。依赖 `Xpeng/moonthrift@0.3.0`；本项目代码 MIT，上游代码 Apache-2.0，包含上游的交付物标注 `MIT AND Apache-2.0`。尚未推送或发布。

本版回应“核心能力与 Xpeng/moonthrift 重叠、未说明扩展关系”：承认 IDL、生成器、Binary/Compact 编解码重叠，新增真实上游接入。上游生成模型和协议包处理数据与消息序列化，上游 0.3.0 已提供单次 typed RPC 和增量分帧，本项目的 MoonBit `Client` 只增加多请求序号关联和失败生命周期，`FrameStream` 直接接入上游分帧；Node 宿主处理 TCP/TLS、调度、超时与关闭。

## 运行上游生成模型的真实网络调用

安装 MoonBit 与 Node.js 24，在仓库根目录执行：

```sh
moon build --target js
node tools/refresh-engines.mjs
node examples/run-upstream-model.mjs
```

示例的 `SharedAddArgs` 和 `SharedAddResult` 由**未修改的上游生成器**从 [IDL](examples/moonthrift.thrift) 生成。请求经过上游 Value → `/moonthrift` 适配 → 本项目 Client → 上游消息编解码 → 本机 TCP；回复按相反路径进入生成结果类型。Binary 和 Compact 分别返回精确文本 `9007199254740994`，失败非零退出。它使用临时 loopback 服务、原创 IDL 和合成请求，不代表实际生产用户。

重新生成模型：`node tools/generate-upstream-model.mjs && moon fmt`。示例桥 `cmd/moonthrift_model` 仅演示单会话，不宣称提供通用的生成 JavaScript 客户端 API。

## 两种接入

- MoonBit 生成模型：调用 `/moonthrift.from_upstream(model.to_thrift_value())`，用 `Client::new(protocol, codec=Some(message_codec(protocol)), frame_stream=Some(frame_stream()))` 发送；回复通过 `to_upstream` 进入上游生成模型的 `from_thrift_value`。
- 已有 Node RPC 宿主：`connect` 和 `serve` 增加 `codec: 'moonthrift'`，协议选择 `binary` 或 `compact`。`tools/thrift.mjs` 的动态 `Schema` 与 JSON 参数映射仍是本项目原实现；该路径复用上游消息编解码和分帧，不冒充全面复用了上游 Schema。

默认 `codec: 'builtin'` 保留已有行为，便于已有调用者迁移。选择上游后不会因不支持某项而偷偷切回 builtin。旧说明与完整宿主参数见 [历史完整文档](README-BEFORE-VALUE-REWORK.md)，当前差异与限制以 [接入关系](UPSTREAM-RELATION.md) 为准。

## 检查与限制

[上一轮 0.6.0 证据](evidence/moonthrift-integration-20260923/LOCAL-CHECKS.json) 记录 JS/Wasm-GC 核心、5组新适配边界测试、上游生成确定性、真实模型网络示例、14组上游/原编解码器 TCP/TLS 与取消/超时检查。共享运行时修改后重新运行 Apache Thrift 0.24.0 双向网络参考：37组、192项 RPC。新上游组合检查与 Apache builtin 回归分别记录，不混称为上游全规格认证。

上游 0.3.0 接入支持 strict Binary 与 Compact；**不支持 UUID 和 legacy Binary**。拒绝超范围 byte/i16/field ID；有转换节点/深度、二进制与消息大小限制。取消或超时关闭整条连接。无 HTTP/Header/JSON transport、SASL、连接池、MoonBit 原生网络 I/O 或生产规模验证。

只需要 IDL/编解码时，优先评估 [Xpeng/moonthrift](https://github.com/pxgt/moonthrift)。需要其生成模型参加 framed RPC、处理会话和宿主失败生命周期时，才有评估本扩展的理由。没有确认使用方，也没有上游认可或共同维护的证明。

本地材料：[申报书](PROPOSAL.md)、[复核说明](REVIEW-RESPONSE.md)、[使用任务](USE-CASE.md)、[查重与关系](DUPLICATION.md)、[测试方法](TESTING.md)、[许可证说明](THIRD-PARTY-NOTICES.md)。最终报名表与公开代码需由对接团队同步，本地完成不等于通过初审。

CI固定的编译器与标准库版本见 [TOOLCHAIN.md](TOOLCHAIN.md)；升级时需同时核对生成产物。

## 0.7.0 会话增量（2026-09-27）

上游已有 typed 单次 exchange、生成 client/handler、CALL/ONEWAY、应用异常与 FrameDecoder。这里新增的是同一连接多请求在途、乱序关联与失败后的未决身份，不申报上述已有能力。`pending_calls()` 给出已发出但尚未交付的请求；`abort()` 封闭会话并交出这些身份。它们的远端执行结果未知，不能据此自动重试。

一个 feed 中所有响应验证成功后才移除 pending；合法回复后跟错误回复不会导致半批交付。完整 32 位序号空间用尽后禁止新请求，仍可排空回复。每次 feed 至多16 MiB+4字节、4096帧，单上游帧1 MiB。EOF 封闭 Client；FrameStream 的输入 EOF 仍允许服务端发送已受理请求的回复，错误则封闭双向。网络取消仍由 Node 负责。

当前验证见 [session-20260927](evidence/session-20260927/LOCAL-CHECKS.json)，核心455项/后端，新增状态边界、上游增量分帧、4种延迟半关闭回复以及旧 Apache 互通回归。边界和失败证据是可复核的基础，不表示已获上游认可或赛事通过。

## 本地验收与公开交付（2026-09-28）

核心实现使用 MoonBit；[固定编译器](.moonbit-version)为 `moonc 0.10.14+7d59c7ec9`。先按本文安装宿主依赖、运行 `moon update`，再从仓库根目录执行以下与 [CI](.github/workflows/ci.yml) 对齐的检查；可运行任务和适用边界见本文前面的示例与说明。

```sh
moon check
moon test --target wasm-gc
moon test --target js
moon build --target js
moon package
```

本地核验：JS/Wasm-GC 测试、上游生成模型、106 份可用 IDL 与 26 项 schema 参考检查通过；另有 2 项参考输入不可用。 `moon package` 已完成离线打包预检，它不等于已发布到 Mooncakes。

公开交付（2026-09-28 核对）：当日 [https://github.com/zhaojun-coding/moonbit-thrift](https://github.com/zhaojun-coding/moonbit-thrift) 可匿名读取 Git HEAD，Mooncakes 在线版本为 `0.5.0`；此处源码版本 `0.7.0` 仍需由团队同步到公开仓库，检查新提交的 GitHub Actions，再由对应账号发布 Mooncakes 新版。相关远端 CI 与赛事结果仍需以实际记录核对。项目许可见 [LICENSE](LICENSE)；如使用第三方材料，其来源和许可见仓内相应说明。
