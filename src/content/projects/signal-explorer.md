---
title: "信号处理探索笔记"
date: 2026-04-15
description: "结合信号与系统课程学习，使用MATLAB实现常见信号处理算法的可视化演示，包括傅里叶变换、滤波器设计、采样定理验证等。"
tags: ["信号处理", "MATLAB", "数学建模", "可视化"]
techStack: ["MATLAB", "Python/NumPy"]
featured: false
role: "独立完成"
repoUrl: "https://github.com/slishy-sun/signal-explorer"
---

# 信号处理探索笔记

## 项目动机

在学习NTU李琳山老师《信号与系统》课程的过程中，发现很多概念光看公式很难真正理解。于是动手写代码，把每个核心概念都做成可交互的可视化，帮助自己建立直觉。

## 已实现模块

- **连续时间傅里叶变换（CTFT）** — 方波、三角波的频谱分解动画
- **奈奎斯特采样定理演示** — 欠采样混叠（Aliasing）的可视化
- **FIR/IIR滤波器设计** — 窗函数法设计低通、带通滤波器，对比幅频/相频响应
- **零极点分析** — s-plane / z-plane 交互式绘图

## 技术细节

- MATLAB App Designer 做 GUI
- 信号生成模块支持自定义参数（频率、幅值、占空比）
- 频谱分析对比：理想 vs 加窗（矩形窗/汉明窗/布莱克曼窗）

## 后续计划

- 加入DTFT与DFT的对比演示
- 扩展到二维信号处理（图像滤波）
- Python + Streamlit 版本，方便部署到网页
