# 针对 Thrift 初审意见的补充草稿

项目地址：https://github.com/zhaojun-coding/moonbit-thrift 。拟同步本地 0.6.0；本文件尚未发送。

组委会指出本项目与近期维护的 Xpeng/moonthrift 核心功能重叠，且未说明扩展关系。这一意见有依据：IDL、生成模型和 Binary/Compact 协议并非本项目独有。此前仅说明上层网络分工，仍没有直接接入，证据不足。

本次新增直接依赖 `Xpeng/moonthrift@0.2.0`，通过公开 `/moonthrift` 值转换和 MessageCodec 接口复用上游协议包；由上游生成器生成请求/结果类型，经本项目 MoonBit Client/FrameDecoder 和 Node 网络宿主完成真实 TCP RPC。新增 `codec:'moonthrift'` 可在通用 Node 客户端/服务端选择该路径。不是将对方名称移走或继续宣称生态空白。

生成模型示例在 Binary/Compact 下均保持 i64 精度；14组组合与失败生命周期检查通过；原 Apache 双向网络回归也重新通过。运行命令和证据见 README、TESTING 及 evidence/moonthrift-integration-20260923。

同时明确保留项：Node 动态 Schema 尚是本项目原实现；旧解析器/生成器/codec 作为兼容代码保留，不作为首创。上游路径不支持 UUID/legacy Binary，JS生成模型桥只是单会话示例。网络I/O来自Node，无真实使用方、生产规模或上游背书材料。

请对接团队先同步源码、完整仓库 URL 和上述边界，再使用本草稿申请重新审核。是否认可该扩展范围，仍由组委会决定。
