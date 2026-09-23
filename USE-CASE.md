# 本机 RPC 会话及精确 i64 结果

将既有 Thrift IDL 接到可运行的跨语言 RPC 服务，处理 i64、二进制、异常、oneway、乱序响应、TLS/mTLS 与多服务路由。

## 当前复审最小任务

先按 README 构建，再运行 `node examples/run-rpc-runtime.mjs`。它以仓库原创 IDL 启动本机临时 TCP 服务端，用 Compact 协议发起文字与 i64 RPC，断言返回 `MoonBit RPC` 和 `9007199254740994` 后关闭连接；不是外网或客户部署。此流程针对 Xpeng/moonthrift 已有 IDL/编解码之外的会话与宿主能力。扩展关系与未完成适配见 [UPSTREAM-RELATION.md](UPSTREAM-RELATION.md)。

## 既有离线数据任务

原创 JSON 记录；本例是 Compact 数据交换，网络双向互通另有 Apache Thrift 参考报告。

最简运行：先按 README 构建，然后 `node examples/run-use-case.mjs`。它自动创建输出目录并执行下面命令。下列 `{out}` 是运行器替换的实际目录，不是直接输入 shell 的变量；stdin 文件由运行器传递，以避免 Windows 与 POSIX 重定向差异。

```text
node tools/thrift-cli.mjs encode examples/demo.thrift --type common.Record --protocol compact --input examples/use-case/record.json --out {out}/record.bin
node tools/thrift-cli.mjs decode examples/demo.thrift --type common.Record --protocol compact --input {out}/record.bin --out {out}/record.json
```

观察：回读 id 字符串仍为 9007199254740993，不经 Number 丢失精度。

每一步输出见实际目录下 `step-N.stdout.txt` / `step-N.stderr.txt`；本轮已保存回执见 `evidence/value-rework-20260922/use-case.json`。

## 为什么保留这个实现

已有 Thrift IDL 与跨语言 RPC 互操作时评估；网络生命周期能力是与 Xpeng/moonthrift 重叠基础之上的候选增量。

Xpeng/moonthrift 0.2.0 已有 IDL、生成器、Binary/Compact 与 Python 互通；本项目的相应功能重叠。新示例实际验证网络 RPC；两者目前没有代码层依赖或直接模型适配。

## 不能由样例推出的结论

无 HTTP/unframed/Header/JSON transport、SASL 或所有生成语言；取消/超时会关闭整条连接。独立网络检查不等于生产规模压测。

该样例是可修改的使用入口，不能证明存在真实用户、全部兼容或性能领先。继续投入的依据应是明确的输入或接入需求；若对接任务用既有成熟库即可完成，应优先复用而不是为保留参赛数量扩张本项目。
