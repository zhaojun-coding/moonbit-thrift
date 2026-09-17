# 验证与复现

默认验证无需下载 Apache 编译器，使用已提交独立向量：

```powershell
./verify.ps1 -MoonPath C:/path/to/moon/bin/moon.exe
```

执行显式 JS/Wasm-GC 核心测试、deny-warn、fmt/info、重建真实引擎、旧 CLI 与新 schema CLI、生成 MoonBit 绑定、106 项 IDL/26 项 codec 向量重放、307 条原始引擎异常输入和样例基准。生成测试在本仓库临时包中调用公开库，退出时只移除自己创建的包。

## 最新独立参考

参考为官方 Apache Thrift 0.24.0 编译器与 Python 0.24.0，生产代码不依赖它们。Windows 编译器来自官方 https://dlcdn.apache.org/thrift/0.24.0/thrift-0.24.0.exe，SHA256 为 `1663a374ba2960151445811b30273cd75c574108c12c2ea55bc7fbce6d77e5ed`，与官方校验文件核对。其他系统可使用同版本官方构建；二进制散列自然不同。

```powershell
# 独立 Python 环境/目录，避免覆盖历史 0.22.0 参考
python -m pip install --target C:/testdeps/thrift024 -r tools/reference-requirements.txt
$env:THRIFT_COMPILER='C:/tools/thrift-0.24.0.exe'
$env:THRIFT_REFERENCE_PYTHONPATH='C:/testdeps/thrift024'
./verify.ps1 -MoonPath C:/path/to/moon/bin/moon.exe -WithReference
```

- `test-idl-reference.mjs` / `idl_oracle.py`：108 个本项目编写的 IDL 输入，调用官方 JSON 生成器对比规范 AST 或拒绝。106 个可比较案例一致；5 个官方 JSON 生成器失败、Python 生成器接受的常量容器引用案例仅比较接受/拒绝。2 个未终止字符串/注释案例官方编译器超过每例 8 秒，被子进程超时终止；不计为比较通过。本实现有界拒绝。`--golden` 只重放，不冒充当前新跑参考。
- `test-schema-reference.mjs` / `schema_oracle.py`：由官方编译器临时生成 Python 数据类型，执行其原生 read/write/validate。26 项包含精确 i64、递归记录、默认值、UUID、binary、集合、错误拒绝和两方向编解码。无集合顺序歧义时比较字节；Set/Map 按集合/映射语义比较。
- `test-network-reference.mjs` / `network_oracle.py`：官方生成的 Python Client/Processor 与真实 Node/MoonBit 客户端/服务端双向连接。Binary/Compact/legacy × TCP/TLS × 普通/multiplex，共 12 组合，每方向 8 项、合计 192 RPC 检查；TLS multiplex 采用 mTLS。覆盖继承、Unicode、递归结构、UUID、二进制、精确 i64、声明/应用异常、oneway、错误后复用。另有 13 个生命周期/错误路径组，包括双方证书信任和主机名拒绝、无客户端证书拒绝、乱序、背压、超时、取消、坏帧、错误响应关联、正常关闭。证书由临时测试 CA 签发，不安装到系统信任库；正常退出清理证书与生成 Python 目录。
- `test-generated.mjs`：实际生成的 MoonBit 类型和 RPC 函数在 JS 与 Wasm-GC 分别运行 3 个行为组，另检查 5 个最小/名称冲突 schema 与生成确定性。不是 Apache 其他语言生成 API 等价声明。
- `test-schema-cli.mjs`：6 组真实进程/文件用例，包含两个 CLI 进程间的 compact multiplex 调用。Windows 结束测试服务使用进程终止；优雅关闭单独由公共 Node API 网络测试验证。

证据保存在 `evidence/*-reference-validation.json`、对应 vectors、`generated-validation.json`、`schema-cli-validation.json`。最终源码/API/引擎与证据绑定见 `schema-upgrade.json`；历史报告只代表其记录日期。

## 历史核心参考

`tools/oracle-requirements.txt` 固定 Python thrift 0.22.0，仍用于再生 320 个结构/分帧与 48 个消息向量，以及 `test-interop.py` 的三模式历史 loopback 测试。新旧环境分离：

```powershell
$env:PYTHONPATH='C:/testdeps/thrift022'
./verify.ps1 -WithInterop -WithReference
```

新测试优先读取 `THRIFT_REFERENCE_PYTHONPATH`；旧测试读取 `PYTHONPATH`。同一次完整验证可分别使用两个版本。原 UUID 规格测试现在已有新增 0.24 生成绑定和真实网络对照，不追溯修改旧参考结果。

基准为 5 次预热、30 次样例执行，仅记录本机运行情况。历史覆盖率不代表新增代码覆盖率；本轮未重新测量覆盖率或上游性能。CI 增加了离线重放、生成绑定和 CLI，未在远端运行；在线官方编译器/TLS参考通过 `-WithReference` 显式运行。
