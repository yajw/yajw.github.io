---
title: awk 实用套路
comments: true
date: 2019-12-20 00:00:00
tags: [linux, awk]
categories: 实用
---

日志第一列是ip，数不同ip的日志行数
```bash
awk -v OFS='\t' -F '|' '{count[$1]++;} END {for (ip in count) print ip, count[ip]}' info.log
```

包含某些关键词，但不包含其他关键词
```bash
awk -F '|' '/error|warn/ && !/system/' error.log
```
