---
title: "流水线ADC行为级建模与仿真"
date: 2026-03-01
description: "复现ISSCC论文中的Pipelined ADC架构，使用MATLAB搭建完整的行为级仿真平台，包括采样保持、子ADC、MDAC、数字校正等模块的建模与系统级验证。"
tags: ["数模混合IC", "ADC", "MATLAB", "行为级建模"]
techStack: ["MATLAB", "Simulink", "Signal Processing"]
featured: true
role: "独立完成"
repoUrl: "https://github.com/slishy-sun/pipelined-adc-modeling"
---

# 流水线ADC行为级建模与仿真

## 项目背景

大一下学期开始探索数模混合IC方向，选取了一篇ISSCC上关于高速Pipelined ADC的论文作为起点。目标是复现论文中的架构，通过行为级仿真理解ADC的核心设计trade-off。

## 技术路线

### 系统架构
- 10-bit, 100MS/s Pipelined ADC
- 1.5-bit/stage 流水线结构
- 数字冗余校正（Digital Redundancy Correction）

### MATLAB建模模块
1. **采样保持电路（S/H）** — 考虑有限带宽、时钟抖动、kT/C噪声
2. **子ADC（Sub-ADC）** — Flash架构，含比较器失调建模
3. **余量放大器（MDAC）** — 有限增益、电容失配的建模
4. **数字校正逻辑** — 1.5-bit冗余位的数字域对齐与合成

### 非理想效应建模
- 电容失配（Capacitor Mismatch）
- 有限运放增益（Finite Op-amp Gain）
- 比较器失调电压（Comparator Offset）
- 时钟抖动（Clock Jitter）
- 热噪声（Thermal Noise）

## 仿真结果

- 理想情况下 SNR = 61.8dB，ENOB = 9.97 bit
- 引入非理想效应后 SNR ≈ 55dB，ENOB ≈ 8.8 bit
- 通过FFT分析验证频谱纯度，SFDR > 65dB

## 收获

这是第一次接触大规模MATLAB系统级建模。最大的收获是理解了ADC设计中最核心的矛盾——速度、精度、功耗之间的trade-off，以及数字校正技术如何放松模拟电路的设计要求。
