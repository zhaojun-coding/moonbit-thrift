# Thrift RPC 会话与 TCP/TLS 宿主 · 复审草稿

本项目仓库：https://github.com/zhaojun-coding/moonbit-thrift
模块 / 本地版本：`zhaojun-coding/thrift` / `0.5.1`；许可证：MIT。仅本地修订，尚未推送或提交表单。

## 已有项目与扩展关系
[Xpeng/moonthrift 0.2.0](https://github.com/pxgt/moonthrift) 已有 IDL、跨文件工作区、类型生成、Binary/Compact 与 RPC message 编解码及 Python 互通。本项目同类代码明显重叠，不能将这些作为新增价值。对方公开说明把 socket transport、服务端调度、TLS 与连接池留给可独立开发的上层包。
本项目候选增量是 RPC 会话及网络运行时：MoonBit 提供分帧、请求/回复与序号关联；Node 提供 TCP/TLS/mTLS、队列上限、超时/取消和关闭。当前并未直接依赖 Xpeng/moonthrift，也不称已与其生成模型无缝叠加；功能分工、待适配处见 UPSTREAM-RELATION.md。

## 可运行任务与验证
构建 JS 引擎后运行 `node examples/run-rpc-runtime.mjs`：本机 Compact TCP 客户端与服务端真实通信，文字回复和 `9007199254740994` 精确 i64 结果均断言，失败非零退出。此前独立 Apache Thrift 0.24.0 双向检查覆盖 12 组合、192 项 RPC 和生命周期负向路径，保持原日期；本例及历史报告都不是与 Xpeng 项目的直接依赖/互通验证。

## 使用条件与剩余边界
已有 Thrift IDL、需要从 MoonBit 调用或提供可运行 RPC 时可评估；只需 IDL/编解码时应优先选择已维护的 Xpeng 包。本项目没有 HTTP/Header/JSON transport、SASL、生产压测或全部语言生成器；网络 I/O 位于 Node。无确认使用方。若赛事要求代码层直接扩展既有包，目前还需上游 codec/Schema 适配，不把计划写成完成。
团队应核对真实公开源码与报名表后复审；不能保证组委会认可这个增量范围。
