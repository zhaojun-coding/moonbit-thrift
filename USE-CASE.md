# 交换超过 JS 精度范围的 IDL 记录

将既有 Thrift IDL 接到可运行的跨语言 RPC 服务，处理 i64、二进制、异常、oneway、乱序响应、TLS/mTLS 与多服务路由。

## 输入、操作、输出

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

Xpeng/moonthrift 已有 IDL、生成器、Binary/Compact 与 Python 互通；这些不是独有。对照固定提交的说明，它未提供 socket/server dispatch/TLS/pool。本项目主张可运行网络 RPC 和失败生命周期的组合贡献，同时明确编解码/IDL 重叠。没有声称目前已复用对方实现。

## 不能由样例推出的结论

无 HTTP/unframed/Header/JSON transport、SASL 或所有生成语言；取消/超时会关闭整条连接。独立网络检查不等于生产规模压测。

该样例是可修改的使用入口，不能证明存在真实用户、全部兼容或性能领先。继续投入的依据应是明确的输入或接入需求；若对接任务用既有成熟库即可完成，应优先复用而不是为保留参赛数量扩张本项目。
