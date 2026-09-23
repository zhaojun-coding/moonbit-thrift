# 查重结论与本版变化

2026-09-23：组委会指出的核心重叠成立。直接核对 [Xpeng/moonthrift](https://github.com/pxgt/moonthrift) 与官方 registry 的 0.2.0 源码包；其 IDL/工作区、模型生成、Binary/Compact 值与消息 API 均已存在。本项目不声称生态空白或首个实现。

0.6.0 增加真实代码依赖与上游生成模型的 RPC 运行实例。与上游的分工、仍保留的重叠、未覆盖范围见 [UPSTREAM-RELATION.md](UPSTREAM-RELATION.md)。这是上层运行时接入的候选贡献，不是替评委认定创新性，也不是上游背书。

具体证据是固定包的实际调用和测试；没有搜索到更多同范围库不能证明不存在。检索不覆盖未公开报名、私有仓库或所有分支。此前独立核心与检索历史见 [DUPLICATION-BEFORE-MOONTHRIFT.md](DUPLICATION-BEFORE-MOONTHRIFT.md)，其中“未依赖”的描述已由本版取代。
