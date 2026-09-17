# Thrift 兼容矩阵 · 0.5.0

| 能力 | 当前范围 | 证据 |
|---|---|---|
| Binary/Compact v1 与全部传统值、UUID | 已实现；Compact 空 Map 无线路类型，保留 None/None | 原有 368 组 Apache 0.22 向量；新增 0.24 生成结构含 UUID 的双向比较 |
| strict/legacy Binary 消息、增量 framed transport | 分片、连续帧、EOF、节点/深度/字节上限 | 核心后端回归与真实 TCP |
| IDL AST 与 schema | include/路径、typedef/enum/const/record、union/exception、继承/oneway/throws、常量/默认值/required | 106/106 可比较独立编译器案例；另有 2 超时，其中 5 例仅接受/拒绝比较 |
| 类型化 JSON/Value/线路转换 | 所有支持类型、精确 i64、显式 null、未知字段跳过、宽度与 union 校验 | 26/26 独立生成绑定案例；公共 API 回归 |
| MoonBit 代码生成 | 类型、转换、RPC args/result、继承和声明异常；常量为规范 Json getter | 生成产物 JS/Wasm-GC 各 3 组行为测试、5 个最小/名称冲突 schema 编译 |
| Node 通用 TCP/TLS/mTLS | 客户端、异步服务端、multiplex、超时/取消、限流与关闭 | 12 组合 × 双向 × 8 RPC = 192 独立检查；负向证书及连接生命周期测试 |
| Schema CLI | 真实文件/搜索路径、stdin、二进制输出、生成、call/serve | 6 组独立进程集成检查 |
| 全 IDL 诊断/元数据兼容 | 未完成；文档、类型/枚举成员注解及 XSD 元数据未完整保留 | 已知边界与参考超时单独记录，不计通过 |
| 其他语言生成器、JSON/Header 协议、HTTP/unframed、SASL | 未完成 | 保持差距 |
| 上游全套、跨主机及生产负载/长期稳定性 | 未完成 | 当前仅本机 loopback 和样例计时 |

输入整数和字段 ID 的编译器接受范围不等于可序列化范围；超出线路宽度在实际编码时拒绝。Set/Map 使用保序条目数组，跨语言集合比较做语义归一化。required 在线路上必须存在，union 最多一个字段，这比部分语言生成器的宽松行为更严格。没有把局部通过等同于完整 Apache Thrift 替代，也没有缩减 20 项追平目标。
