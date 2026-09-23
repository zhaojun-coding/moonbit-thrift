# 与 Xpeng/moonthrift 的代码扩展关系

2026-09-23，直接依赖 `Xpeng/moonthrift@0.2.0`，公开仓库 https://github.com/pxgt/moonthrift 。官方 registry 归档校验值 `3635c60f7f78fe0952b06f8455501900277b2aed44a9dcc58669a04e8ba11e5e`。检索后读取下载包的公开 API、`protocol/message.mbt`、生成器和许可证，再编写本适配。没有修改依赖包。

| 部分 | 实际负责者 | 本版做了什么 |
|---|---|---|
| IDL / 生成模型 | 上游 root/codegen 包 | `cmd/moonthrift_codegen` 直接调用 `compile_idl` / `generate_moonbit`，生成示例类型 |
| Binary/Compact RPC 消息字节 | 上游 protocol 包 | `/moonthrift.message_codec` 直接调用四个 encode/decode message API |
| 数据表示互转 | 本项目 `/moonthrift` | 保留 Int64、Bytes、字段/列表顺序；公开双向转换，限制深度/节点/大小 |
| FramedTransport / 调用关联 | 本项目 MoonBit Client、FrameDecoder | 可注入 `MessageCodec`，保持 pending、oneway、乱序、EOF、异常后状态 |
| TCP/TLS、Promise、取消、关闭 | 本项目 Node 宿主 | `connect` / `serve` 用 `codec:'moonthrift'` 选择上游 codec |
| Node 动态 Schema / JSON 参数映射 | 本项目原实现 | 为已有 CLI/宿主保留，尚未替换为上游 Schema；不是新增独有能力 |

重叠确实存在。原有解析器、生成器与 codec 仍作为兼容路径保留；没有将删掉上游名称或更换宣传词当作解决方案。新增价值的候选范围是：已有上游数据模型与协议 API 可以参加本项目有状态的网络会话，无需改写上游生成代码。

## 验证路径

1. 上游生成模型 `SharedAddArgs` → 上游 Value → 本项目 Value → 原 Client + 上游消息 codec → TCP → 上游 codec 服务端；回复进入 `SharedAddResult`，两种协议都检查超过 JS Number 精度的 i64。
2. 新宿主测试：Binary/Compact × 三种 codec 配对（上游/上游、上游/builtin、builtin/上游）× TCP/TLS，共12组，均使用 multiplex；每组检查精确 i64、Unicode、嵌套 map/list、原始 bytes、声明/应用异常、oneway、乱序与错误后复用。另2组取消/超时，以及 legacy 选择拒绝。
3. 原 Apache 0.24.0 Python 双向网络测试重新运行：37组、192项 RPC。它覆盖 builtin 的 legacy、UUID、mTLS 等旧能力；**不证明上游路径支持这些能力**。

## 可见限制

- 上游 0.2.0 Value 没有 UUID；Binary 消息接口只提供 strict version header。不回退。Node 选择 legacy+moonthrift 在打开连接前拒绝；MoonBit 指定自定义 codec 后，protocol/strict 参数只作为未提供 codec 时的默认值，不覆盖该 codec。
- 适配转换限制深度64、节点100000、单 binary 1 MiB；MessageCodec 限制消息1 MiB及方法名1024 UTF-8字节。数字/field ID 越界拒绝，避免上游窄整数写入时截断。Compact 解码会丢失空 map 的类型标签，该 typeless 值不能直接用 Binary 重编码，须由应用补全类型。
- `/moonthrift` 是值/消息适配，不是上游服务端 stub 生成器。通用 MoonBit Client 可用于宿主实现；仓库的生成模型 JS 桥是单会话示例，Node 的通用客户端仍使用本地动态 Schema。
- 上游实现的协议细节和限制仍由上游决定。本轮为选定案例与边界验证，不能声称覆盖所有 Thrift 或所有上游 API。

未联系上游、未声称背书，未发现或编造真实客户。重叠基础不计为首创，是否满足赛事扩展要求由组委会判断。上轮“未直接依赖”的历史材料见 UPSTREAM-RELATION-BEFORE-MOONTHRIFT.md。
