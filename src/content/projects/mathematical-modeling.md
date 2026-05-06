---
title: "数学建模竞赛工具箱"
date: 2026-02-10
description: "为备战美赛和华东杯，整理的一套MATLAB数学建模常用算法与模板，涵盖优化、微分方程、评价模型、预测模型等经典方法。"
tags: ["数学建模", "MATLAB", "算法", "竞赛"]
techStack: ["MATLAB", "LaTeX"]
featured: true
role: "独立维护"
repoUrl: "https://github.com/slishy-sun/modeling-toolkit"
---

# 数学建模竞赛工具箱

## 起因

准备2026年MCM/ICM和华东杯的过程中，发现每次都要从零写求解代码太耗时间。于是把自己练过的模型整理成一个可复用的工具箱，比赛时直接调用。

## 包含内容

### 优化模型
- 线性规划（Linprog）、整数规划（Intlinprog）
- 非线性规划（Fmincon）
- 多目标优化（Goal Attainment）

### 评价模型
- 层次分析法（AHP）
- TOPSIS综合评价
- 模糊综合评价

### 预测模型
- 灰色预测 GM(1,1)
- 时间序列 ARIMA
- 多元线性回归

### 微分方程
- ODE数值求解（ode45, ode15s）
- SIR传染病模型
- 种群竞争模型（Lotka-Volterra）

### 图论与网络
- Dijkstra最短路径
- 最小生成树
- 网络最大流

## 使用方式

每个算法封装为独立函数，附带测试用例和LaTeX数学推导文档。比赛时复制对应函数即可快速出结果。
