# Thrift RPC 会话与 TCP/TLS 宿主

**本项目仓库：[https://github.com/zhaojun-coding/moonbit-thrift](https://github.com/zhaojun-coding/moonbit-thrift)**

模块 `zhaojun-coding/thrift`，本地版本 **0.5.1**，MIT。当前评审状态：**条件复审**。本文件是当前入口，旧轮次说明与详细用法保存在 [历史/完整使用说明](README-BEFORE-VALUE-REWORK.md)。

## 解决什么任务

将既有 Thrift IDL 接到可运行的跨语言 RPC 服务，处理 i64、二进制、异常、oneway、乱序响应、TLS/mTLS 与多服务路由。

已有 Thrift IDL 与跨语言 RPC 互操作时评估；网络生命周期能力是与 Xpeng/moonthrift 重叠基础之上的候选增量。

## 直接复现

安装 MoonBit 和 Node.js 24，在本仓库根目录运行：

```sh
moon build --target js
node -e "require('node:fs').copyFileSync('_build/js/debug/build/cmd/web/web.js','web/engine.mjs')"
node examples/run-rpc-runtime.mjs
```

流程：**本机真实 TCP/Compact RPC**。同一进程启动临时服务端，再连接客户端；文字调用与精确 i64 结果断言通过后关闭连接。它只使用本机 loopback，不连接外部服务。

输入性质：仓库内原创 IDL/handler 与合成请求；独立 Apache Thrift 双向互通另有历史参考报告。

应观察：返回 `MoonBit RPC` 和精确整数文本 `9007199254740994`；失败时非零退出。原来的离线文件往返仍可运行 `node examples/run-use-case.mjs`。

具体范围和既有项目分工见 [使用任务](USE-CASE.md) 与 [上游关系](UPSTREAM-RELATION.md)。

## 实现与已有项目的关系

MoonBit 提供 Schema.make_call/read_call/make_reply/read_reply、Client 的待响应 ID 关联与 FrameDecoder；Node 负责网络、证书、Promise、并发调度和超时关闭。

[Xpeng/moonthrift 0.2.0](https://github.com/pxgt/moonthrift) 已有 IDL、跨文件生成、Binary/Compact 与 Python 互通，均非本项目独有。它当前公开说明未包含 socket/server dispatch/TLS/pool；本项目交付可运行网络 RPC 及失败生命周期。两套核心目前独立，未直接依赖对方包，具体可组合之处和待适配处见 [上游关系](UPSTREAM-RELATION.md)。

同类项目和检索边界见 [DUPLICATION](DUPLICATION.md)。查重用于避免错误的首创表述；关键词零结果不能证明生态空白，Node 宿主能力也不计为 MoonBit 原生 I/O。

库使用从 [公共 API](pkg.generated.mbti) 和根包源码开始；可在本 checkout 的消费包中导入 `"zhaojun-coding/thrift"`。源码中的网络/文件宿主入口及完整参数仍见 [完整使用说明](README-BEFORE-VALUE-REWORK.md)。是否已发布到 Mooncakes 需另核实，本文不把 `moon add` 的下载成功作为已完成事项。

## 验证与边界

本轮新增本机 TCP RPC 示例，验证文字与精确 i64 响应。CLI 文件保护和 Apache Thrift0.24 双向网络互通报告保留原日期；没有把对方包作为本次直接互通参考。

[上一轮工程验证](evidence/innovation-review-20260922/results.json) 与 [本轮最小任务回执](evidence/value-rework-20260922/use-case.json) 分开。历史参考版本、golden 重放、本机 peer、真实第三方服务端和本次样例是不同证据，不能合并成“全部生产验证”。

常规核心检查可运行 `moon check --target js`、`moon test --target js`、`moon test --target wasm-gc`。专项命令：

```sh
node tools/test-output-file.mjs
node tools/test-network-reference.mjs
```

专项所需的参考环境和历史版本见原使用说明及 TESTING 文档；本轮回执只记录实际执行项，不声称上面所有参考服务在任意环境即装即跑。

无 HTTP/unframed/Header/JSON transport、SASL 或所有生成语言；取消/超时会关闭整条连接。独立网络检查不等于生产规模压测。

## 复审材料状态

主要 I/O 差异在 Node，不能将其写成 MoonBit 原生 TLS；生产规模未验证。

2026-09-22 匿名新克隆成功；默认分支 `main`，核验公开提交 `0483fd7e78e0fd6094db13e4a4b9848bc00d2a8b`。本轮源码修订仅在本地，尚未推送；此记录不证明当时报名表中的地址正确，也不证明新修订已上线。

[申报草稿](PROPOSAL.md) 已压缩为 30 行以内，并单独标明本项目仓库；[复核说明](REVIEW-RESPONSE.md) 区分材料错误、功能变化及尚未解决的问题。没有编造用户、设备接入、生产部署或评审认可。
