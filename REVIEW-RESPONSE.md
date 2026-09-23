# Thrift 初审意见回复草稿 · 2026-09-23

组委会指出与 [Xpeng/moonthrift](https://github.com/pxgt/moonthrift) 核心功能重叠，属实。对方当前 0.2.0 已有 IDL、跨文件 Schema、生成模型、Binary/Compact 值和 RPC message 编解码及 Python 互通；原申报若把这些写成主要创新，会误导评审。

本项目目前的可验证增量是上层 RPC 会话/网络宿主：MoonBit 分帧、序号关联及应答状态，Node 承担 TCP/TLS/mTLS、队列限额、超时和关闭。`node examples/run-rpc-runtime.mjs` 实际启动本机 TCP 服务端并完成 Compact RPC，断言中文以外的文字和超出 JS 精确整数上限的 i64 回复。已有 Apache Thrift 0.24.0 双向互通证据单列于 TESTING.md；它不是对 Xpeng 包的直接测试。

[UPSTREAM-RELATION.md](UPSTREAM-RELATION.md) 明确项目关系与尚未实现的依赖：当前并未直接导入 Xpeng 包，也不能声称是其代码分支、已复用编解码器或生成模型可无缝接入。如要求代码层复用作为复审条件，需要先完成适配。这份材料请求评估“现有协议核心之上的会话/网络运行能力”，不请求把重叠部分重新算作贡献。

本地源码和表单草稿已改，尚未推送或代填。真实使用方、生产压测和最终评审认可均未获得。
