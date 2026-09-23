# 已有上游生成模型怎样参加网络 RPC

适用条件：已有 Thrift 数据模型，且需要有状态 framed RPC 的请求关联、错误和连接生命周期处理。仅处理静态编解码无需采用此运行时。

输入是本仓库原创 examples/moonthrift.thrift 与合成请求。未提供真实客户脚本或第三方部署；不能把示例当作采用案例。

按 README 构建后运行 `node examples/run-upstream-model.mjs`，使用未修改的 Xpeng/moonthrift 生成模型，经 `/moonthrift` 适配和既有 Client，在临时 loopback 服务上完成 Binary 与 Compact 请求；两次结果为 `9007199254740994`。

源码职责：cmd/moonthrift_codegen 调用上游编译/生成；examples/moonthrift_model/model.mbt 是生成结果；cmd/moonthrift_model 是单会话宿主演示；examples/run-upstream-model.mjs 提供实际 socket；服务端的通用 Node Schema 仍来自本项目。上游消息序列化在两个方向都使用真实依赖包。

`tools/test-moonthrift.mjs` 扩展至 TLS、多服务路由、双向混用codec、异常、oneway、乱序、超时和取消。所需临时证书依赖见 TESTING。无外部网络服务、生产规模、用户采用或上游共同维护主张。
