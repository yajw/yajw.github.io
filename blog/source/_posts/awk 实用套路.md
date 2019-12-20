---
title: awk 实用套路
comments: true
date: 2019-12-20 00:00:00
tags: [linux, awk]
categories: 实用
---

## 匹配
**包含某些关键词，但不包含其他关键词**
```bash
awk -F '|' '/error|warn/ && !/system/' error.log
```

## 统计
**日志第一列是ip，数不同ip的日志行数**
```bash
awk -v OFS='\t' -F '|' '{count[$1]++;} END {for (ip in count) print ip, count[ip]}' info.log
```

**按照ip数统计某个url的请求量**
```bash
awk -F '|' '/api\/service/ && !/api\/service\/other/ {c[$1]++} END {for (ip in c) print ip,c[ip]}' info.log
```

**按照小时统计某个url的请求量**

sample log
```
0.0.0.0|2019-12-19 13:01:02|elapsed=12ms,url=/api/service
```

```bash
awk -F '|' '/api\/service/ {split($2, t, "[-: ]"); c[t[4]]++;} END {for (hour in c) print hour,c[hour]}' info.log | sort -k1
```

**按照小时统计某个url的请求量，并且包含占总量的百分比**

```bash
awk -F '|' '/api\/service/ {split($2, t, "[-: ]"); c[t[4]]++; s++} END {for (hour in c) printf "%s\t%s\t%.2f\n" hour,c[hour],100*c[hour]/s}' info.log | sort -k1
```

**统计错误日志中不同类型的种类**

```bash
awk -F '|' ' /ERROR/ {c[$7]++;s++} END {for (r in c) printf "%s\t%.2f\t%s\n", c[r],100*c[r]/s,r}' error.log | sort -k2
```

**连接状态统计**

```bash
ss | awk 'NR!=1{c[$2]++} END {for (s in c) print s, c[s]}'
```

**统计不同目的ip的不同状态的连接数**
```bash
netstat -t | awk -v OFS='\t\t' 'NR>2{c[$5,$6]++} END {for (x in c) {split(x, s, SUBSEP); print c[x],s[2],s[1]} }'
```
