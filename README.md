# MoonBit Thrift

## 获取与验证入口

公开源码：[github.com/zhaojun-coding/moonbit-thrift](https://github.com/zhaojun-coding/moonbit-thrift)；MoonBit 模块名为 `zhaojun-coding/thrift`。

从源码运行：`git clone https://github.com/zhaojun-coding/moonbit-thrift.git` 后进入该目录，按下文和 [TESTING.md](TESTING.md) 安装所需工具。仓库公开不等于已在 Mooncakes 发布，不承诺 `moon add` 当前可用。

查看 [GitHub Actions](https://github.com/zhaojun-coding/moonbit-thrift/actions) 时请核对 run 的 commit SHA；历史 evidence、旧 ZIP 与本地测试不能替代当前提交的 CI 结果。下文保留各版本的验证范围和兼容性限制。

> 历史开发记录（以下发布/归档状态不代表当前仓库；当前入口见文首）：Thrift IDL、类型绑定、Binary/Compact 编解码与分帧 RPC，0.5.0。实现位于独立的 MoonBit 仓库；Node.js 提供文件、TCP 和 TLS I/O。本地交付，无 remote，未上传或发布。完整 Apache Thrift 兼容仍未完成。

## 能力

- MoonBit IDL 词法/语法树、位置诊断、include 搜索路径、typedef、enum、const、struct/union/exception、服务继承、oneway、throws、字段与定义注解。
- Schema 类型解析、递归结构、required/default/optional、整数宽度、UUID、未知字段和错误线路类型跳过；类型化 RPC 成功、声明异常与应用异常。
- 所有传统标量和 UUID、Struct/List/Set/Map；Binary/Compact v1，严格或旧式 Binary 消息头。
- 增量分帧、乱序响应关联、multiplex 服务路由；Node TCP/TLS/mTLS 客户端与并发服务端、超时、取消、队列/连接上限、关闭清理。
- 生成可编译的 MoonBit 类型、JSON/Value/线路转换以及类型化 RPC 请求、响应函数。生成器由 Node 驱动，解析和验证仍由编译后的 MoonBit 实现执行。

## 直接使用

附带已编译的 `web/engine.mjs`，运行以下命令只需要 Node.js 24：

```powershell
node tools/thrift-cli.mjs inspect examples/demo.thrift
node tools/thrift-cli.mjs encode examples/demo.thrift --type common.Record --json '{"id":"9223372036854775807"}' --protocol compact --out record.bin
node tools/thrift-cli.mjs decode examples/demo.thrift --type common.Record --protocol compact --input record.bin
node tools/thrift-cli.mjs gen examples/demo.thrift --out generated
node tools/thrift-cli.mjs serve examples/demo.thrift --service Records --handlers examples/handlers.mjs --port 9090
# 另一个终端
node tools/thrift-cli.mjs call examples/demo.thrift --service Records --method add --port 9090 --json '{"a":"9223372036854775807","b":"-1"}'
```

`--include DIR` 可重复；encode/call 支持 JSON stdin、`--json`、`--input`，decode 读取二进制。输出文件用 `--out`。生成目录中的已有文件只有明确传入 `--force` 才会覆盖。`--help` 列出全部选项。旧网页和原始值树 CLI 保留：`./start-review.ps1`、`node tools/cli.mjs --file sample.txt --json`。

```javascript
import {loadSchema, connect, serve, DeclaredException} from './tools/thrift.mjs';
const schema = await loadSchema('examples/demo.thrift');
const client = await connect({schema, service: 'Records', port: 9090, protocol: 'compact'});
try {
  console.log(await client.call('add', {a: '9223372036854775807', b: '-1'}));
} finally {
  await client.close();
  schema.close();
}
```

服务端 `serve({schema, service, handlers})` 的 handler 收到 `(arguments, context)`，可返回 Promise。声明异常用 `throw new DeclaredException('problem', {code: 42, message: 'failed'})`。multiplex 服务端传 `services: {records: 'Records'}` 和 `handlers: {records: handlerObject}`，客户端传 `multiplex: 'records'`；CLI 对应用 `--route records=Records` 和 `--multiplex records`。Schema 应保持打开，直到客户端和服务端全部关闭。

TLS 客户端传 `tls: {ca, servername}`，默认验证信任链和主机名；服务端传 `{cert,key}`，mTLS 再传 `{ca,requestCert:true,rejectUnauthorized:true}`。这些值为 Node TLS 选项与证书字节。CLI 使用 `--tls --ca ca.pem --servername localhost`、服务端 `--cert server.pem --key server.key`，mTLS 服务端再加 `--require-client-cert --ca ca.pem`，客户端加自己的 `--cert/--key`。

## JSON 与生成绑定

| Thrift 类型 | JSON / MoonBit 绑定 |
|---|---|
| i64 | 十进制字符串 / Int64；Node 输入也接受 BigInt |
| binary | `{"$binary":"00ff"}` / Bytes |
| uuid | 带连字符 UUID 字符串 / String |
| enum | 数值或成员名输入 / 保留未知数值的 `{value:Int}` 包装类型 |
| struct / exception | 字段名对象 / 类型化 struct |
| union | 最多一个字段 / Unset 或字段构造器 |
| list / set | 数组 / Array |
| map | `[ [key,value], ... ]` / Array[(K,V)]，支持非字符串键 |
| double 特殊值 | `"NaN"`、`"Infinity"`、`"-Infinity"` / Double |

缺省字段应用 IDL 显式默认值；`null` 表示明确不设置非 required 字段。required 字段输入缺失且没有默认值时拒绝，在线路解码时必须实际出现，不能由默认值掩盖。未知 JSON 字段拒绝；未知线路字段或线路类型不匹配的字段跳过。重复已识别线路字段取最后一个。Set/Map 的原始序列保留输入顺序及重复项；不同语言的集合会去重，独立比较对此按集合/映射语义归一化，不将其当作字节顺序一致。

生成器输出 `bindings.mbt`、`moon.pkg`、`bindings.symbols.json`，放入依赖 `zhaojun-coding/thrift` 的 MoonBit 项目包目录，再运行 `moon fmt` 和 `moon check`。模块序号按逻辑文件路径排序，字段名形如 `f_1_id`；符号映射文件记录 IDL 名与生成名。非 required 字段是 Option，typedef 为显式包装结构。类型提供 `from_json/to_json/from_value/to_value/encode/decode`；RPC 提供类型化 args/result 和 call/read_call/reply/read_reply 函数，socket I/O 仍由宿主承担。常量 getter 返回规范 Json，以保留编译器允许但超出线路整数宽度的常量。嵌入的 IDL 与逻辑路径用于内存编译，运行时不再读取原文件。

生成器不承诺 Apache 其他语言生成器的 API 外形；存在无法唯一解析的 include 同名文件 stem 时明确拒绝。类型/枚举成员注解、文档注释和 XSD 元数据尚未完整保留。生成器与 schema 不是完整上游编译器替代。

## 验证

```powershell
./verify.ps1 -MoonPath C:/path/to/moon/bin/moon.exe
# 默认执行 MoonBit 两个后端、真实 CLI、生成绑定和已保存独立向量重放。
```

新参考使用未修改的 Apache Thrift **0.24.0** 官方编译器与 Python 运行时：IDL 108 项中 106 项可比较并一致，2 项官方进程超时单独记录；106 项中 5 项因官方 JSON 生成器失败，只以 Python 生成器比较接受/拒绝。26 项类型编解码双向比较包含 UUID。真实网络涵盖 12 种协议/连接/路由组合、两个方向的 192 项 RPC 检查，另有主机生命周期与错误路径检查。原有 368 组 Python 0.22.0 核心向量仍保留，版本不混用。

> 历史开发记录（以下发布/归档状态不代表当前仓库；当前入口见文首）：完整环境、独立性边界与命令见 [TESTING.md](TESTING.md)。当前源码/API/引擎指纹见 [evidence/schema-upgrade.json](evidence/schema-upgrade.json)。CI 配置已更新，但远端 CI 未运行。

## 限制与后续

核心默认消息 1 MiB、值深度 64、节点 100000，最多 1024 个待响应 RPC。IDL 单文件 1000000 UTF-16 单元、合计 4000000、最多 128 模块；语法类型、常量和 XSD 字段嵌套受限。Node 默认最多 128 个待响应调用、每连接 64 个并发 handler、64 个连接、4 MiB 写队列，RPC/连接超时 5 秒，服务空闲超时 30 秒。取消或 RPC 超时关闭整个连接并拒绝所有待响应调用；这保证不会把迟到响应误配给后续调用。资源上限不等于吞吐量或长期运行验证。

仍缺 JSON/Header 等协议、unframed/HTTP transport、SASL、其他生成语言、完整上游套件、所有编译器诊断/元数据和代表性性能对照。详见 [FEATURES.md](FEATURES.md) 与 [ROADMAP.md](ROADMAP.md)。

按 [Apache IDL](https://thrift.apache.org/docs/idl)、[Binary](https://github.com/apache/thrift/blob/master/doc/specs/thrift-binary-protocol.md) 和 [Compact](https://github.com/apache/thrift/blob/master/doc/specs/thrift-compact-protocol.md) 规格及独立执行结果重新实现，未复制参考实现源码。官方生成的 Python 代码仅在临时测试目录使用，不随产物打包。原创代码 MIT；生产运行不依赖 Apache 编译器或 Python。
