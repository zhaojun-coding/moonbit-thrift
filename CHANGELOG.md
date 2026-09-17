# 0.5.0 本地增量 · 2026-09-17

新增原创 MoonBit IDL AST/schema、类型化 JSON/RPC、include/继承/默认值校验、MoonBit 绑定生成和完整文件 CLI。Node 宿主增加 framed TCP/TLS/mTLS、multiplex、异步分派、取消/超时/背压与关闭管理。修复 TLS 握手前连接不能随服务关闭清理的问题，并限制 XSD 字段元数据嵌套。

新增 Apache 0.24.0 官方编译器/生成 Python 绑定对照：106 个可比较 IDL 案例、26 个类型 codec 案例、192 个双向真实网络 RPC 检查；参考超时和接受/拒绝比较明确分开。保留原有 0.22.0 核心向量。完整兼容仍有差距，未发布。

# 0.2.0 本地审查更新

增加严格 Binary v1 / Compact v1 RPC 消息 envelope，支持 call/reply/exception/oneway、UTF-8 方法名和完整有符号 32 位序列号。新增 8 组 Apache Python RPC 黄金字节向量及截断/非法头测试。
