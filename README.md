# MoonBit Thrift

Binary/Compact 序列化与分帧 RPC 核心，0.4.0。本地独立仓库，无 remote，未上传或发布。

## 已实现

- 所有传统 Thrift 标量、UUID、Struct、List、Set、Map；Binary 和 Compact v1。
- 严格 Binary、可选旧式 Binary 消息头，4 种 RPC 消息类型、完整有符号序列号范围。
- TFramedTransport 增量分帧：任意分片、多个连续帧、空帧、长度限制、截断检测和失败后重置。
- Client 负责序列号、待响应请求、乱序回复、异常响应与单向调用；主机负责 socket I/O。
- decode_prefix / skip_prefix 返回消费字节数；decode_selected 跳过未知或类型不匹配字段，不构造被跳过的容器树。

## 快速运行

已附真实 MoonBit 编译的浏览器引擎，需要 Python 3 与 Node.js：

```powershell
./start-review.ps1
node tools/cli.mjs --file sample.txt --json
```

网页也支持 `framed-compact:`、`framed-binary:` 加十六进制连续 RPC 帧，以及原有 `rpc-compact:` / `rpc-binary:`、裸 Struct `compact:` / `binary:`。

## 从源码验证

安装 MoonBit 后运行：

```powershell
./verify.ps1
# 编译器未加入 PATH 时
./verify.ps1 -MoonPath C:/path/to/moon/bin/moon.exe
```

脚本实际测试 Wasm-GC 和 JS，运行示例、CLI、边界检查与基准。公开 API 见 pkg.generated.mbti；[可执行例子](README.mbt.md)随测试运行。

## Apache Thrift 独立对照和真实互通

```powershell
python -m pip install -r tools/oracle-requirements.txt
python tools/generate_oracles.py
moon fmt
./verify.ps1 -WithInterop
```

原始种子输入由本项目编写，Apache Thrift Python 0.22.0 独立计算 320 组嵌套结构/分帧向量和 48 组 RPC 消息向量。固定种子可再生，覆盖整数边界、Unicode、空容器、多层 Map/List/Set、非递增字段编号和 4 种消息类型。已有手写/独立容器向量继续保留。UUID 按当前公开 Binary/Compact 规格验证固定 16 字节和类型标签；Python 0.22.0 不支持 UUID，未将它计入 Apache 运行时对照。

互通脚本只连接临时 127.0.0.1 端口，以 Apache 的 TSocket/TFramedTransport/TBinaryProtocol/TCompactProtocol 接收实际 MoonBit 客户端字节，返回乱序成功与应用异常响应，并验证单向调用和逐字节接收。原始证据见 evidence/interop.json。不是 TLS、公网或其他 Thrift 语言实现的互通证明。

## 兼容性与资源边界

Compact 空 Map 的线路不携带键值类型，解码为 MapValue(None,None,[])。泛型值树保留字段顺序与重复字段；选择解码同样保留已选字段的线路顺序。默认最大消息 1 MiB，嵌套深度 64、节点 100000，最多 1024 个待响应 RPC；单帧上限可配置至 16 MiB，单次 feed 最大 16 MiB 加头部。帧错误或非法 RPC 回复后实例进入失败状态，避免继续使用已丢失同步的连接。

当前未实现 IDL 编译器、schema required/default 校验、TLS/认证和通用 socket 适配器；仍不能称为完整 Apache Thrift 替代。详见 [FEATURES.md](FEATURES.md)。

## 来源与开发

按 [Apache Binary 规格](https://github.com/apache/thrift/blob/master/doc/specs/thrift-binary-protocol.md)、[Compact 规格](https://github.com/apache/thrift/blob/master/doc/specs/thrift-compact-protocol.md) 和 [Python TFramedTransport](https://github.com/apache/thrift/blob/master/lib/py/src/transport/TTransport.py) 行为重新实现。没有复制上游源码；本项目原创代码为 MIT。Apache Thrift 仅作为固定版本的开发测试依赖，不打包它的源码。

独立 Git 历史和构建目录；不依赖其他候选项目。CI 配置已包含独立向量再生与本地互通，但远端 CI 尚未运行。历史证据保留原日期，最新结果见 evidence/current-validation.json 与 evidence/quality-review.json。查重见 DUPLICATION.md，后续发布仍需重新核实生态和许可证。
