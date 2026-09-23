# 与 Xpeng/moonthrift 的扩展关系

组委会指出核心功能重叠，这个判断成立。[Xpeng/moonthrift 0.2.0](https://github.com/pxgt/moonthrift) 已提供 IDL 解析、跨文件工作区、MoonBit 类型生成、Binary/Compact 协议和值/RPC 消息编解码，并与 Apache Thrift Python 比较。我们的 IDL、编解码、生成代码同样覆盖这些领域，不能作为独有贡献申报。

对方当前公开说明把 socket transport、服务端调度、TLS、连接池列在未完成范围，并明确这些能力可由独立包在 AST、生成器和 codec 之上实现。本项目的候选增量正是可运行的 RPC 会话：MoonBit 负责分帧、调用/回复及序号关联，Node 宿主负责 TCP/TLS/mTLS、超时、队列限额和连接关闭。它不是对方仓库的代码分支，目前也没有把对方包作为依赖；“扩展”指功能层面的上层运行时补足，不是假称已经复用其内部 API。

可运行最小任务：先构建 JS 引擎，运行 `node examples/run-rpc-runtime.mjs`。它在 loopback TCP 上发起 Compact RPC，验证返回文字及超过 JS 精确整数上限的结果。`tools/test-network-reference.mjs` 的历史记录使用 Apache Thrift 0.24.0 生成的 Python 客户端/服务端做双向互通：12 种协议/连接/路由组合、192 个 RPC，以及证书、乱序、取消和背压。该证据是与 Apache 的互通，**不是**与 Xpeng/moonthrift 的直接组合测试。

面向用户的合理分工是：已有 Xpeng/moonthrift 用于 IDL/静态数据模型的项目，若还需要可运行网络 RPC，可评估本项目提供的会话/宿主能力。不过目前两套 Schema/codec 独立，直接拿对方生成类型接入本运行时仍需适配工作；没有真实使用方，不能宣称无缝叠加或共同维护。若赛事要求必须直接依赖现有包，本项目当前代码尚不满足，应先完成真实适配再复申。
