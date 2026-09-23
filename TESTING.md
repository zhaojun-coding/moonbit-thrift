# 0.6.0 上游适配验证

本轮证据入口：[LOCAL-CHECKS.json](evidence/moonthrift-integration-20260923/LOCAL-CHECKS.json)。保存命令、退出码和逐项日志。旧 evidence 文件保留原日期；[旧测试方法](TESTING-BEFORE-MOONTHRIFT.md) 不自动代表本轮重跑。

```sh
moon fmt
moon info
moon check --target js
moon test --target js
moon test --target wasm-gc
moon build --target js
node tools/refresh-engines.mjs
node tools/generate-upstream-model.mjs
moon fmt
git diff --exit-code -- examples/moonthrift_model/model.mbt
node examples/run-upstream-model.mjs
python -m pip install -r tools/adapter-requirements.txt
node tools/test-moonthrift.mjs
```

5组新 MoonBit 测试覆盖：上游/builtin 共用线格式与精确值、碎片/逆序/oneway及重复回复、UUID/窄整数/field ID拒绝与未发送状态、Compact typeless空map转Binary拒绝、深度/大小限制与错误关联后失效。

[NETWORK.json](evidence/moonthrift-integration-20260923/NETWORK.json)：12组 Binary/Compact × 三种codec配对 × TCP/TLS，均为multiplex，另2组取消/超时；legacy组合在连接前拒绝。临时测试证书不写入系统信任库；测试自己清理临时目录。生成模型例子另运行两种协议的真实TCP，并按单字节向Client喂入响应。

本轮还运行共享运行时回归 `node tools/test-network-reference.mjs`，使用 Apache compiler/Python 0.24.0，37组、192项 RPC，包括原builtin legacy/UUID/mTLS。报告另存 [APACHE-NETWORK.json](evidence/moonthrift-integration-20260923/APACHE-NETWORK.json)。通过环境变量 THRIFT_COMPILER、THRIFT_REFERENCE_PYTHONPATH 指向独立参考环境，安装 tools/reference-requirements.txt；命令详见旧测试方法。它不是对新增上游codec的独立Apache全组合测试。

原 demo/CLI/输出文件保护/schema CLI/生成绑定和IDL/schema golden重放重新通过。golden仅重放；本轮未重跑在线IDL全量比较、基准、覆盖率或全部浏览器。CI工作流增加生成模型确定性和上游网络检查；没有在远端执行本轮CI。
