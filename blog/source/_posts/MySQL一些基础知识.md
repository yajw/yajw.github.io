---
title: MySQL一些基础知识
comments: true
date: 2021-02-17 00:00:00
tags: [MySQL]
categories: 
---

td
1. Mysql锁分析相关 : hedengcheng博客
2. mysql其他话题: 高性能Mysql
3. gap lock
4. mvcc


查询进行中的事务
https://www.cnblogs.com/zuoxingyu/p/6382585.html

https://blog.csdn.net/emoers/article/details/77971468
查询 正在执行的事务：
SELECT * FROM information_schema.INNODB_TRX

查看正在锁的事务
SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCKS; 

查看等待锁的事务
SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCK_WAITS;
