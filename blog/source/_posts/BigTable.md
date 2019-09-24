---
title: BigTable
comments: true
date: 2019-09-25 00:05:00
tags: [Google, BigTable]
categories: 读书
---

这个论文是2006年发表的，当时我还在读高二吧。据论文中所说，BigTable是在03年左右开始的，花了两年多时间，不包含测试的代码在10w行（应该是C++）。

BigTable没有支持完整的关系型数据模型。
BigTable只支持行级事务。
BigTable最多支持2^61(2048PB)的数据量（猜测这个级别可能是不够用的）。

BigTable提供两个配置：保留最后多少个版本，或者保留最近多少时间的版本。有垃圾回收机制，去做清理和释放空间。

BigTable解决特定问题而发明的，并不是闭门造车的结果。BigTable不能替代关系型数据库。

BigTable依赖Chubby，可用性因此也有一定程度依赖Chubby。

BigTable某些特点似乎是针对网页存储而设计的。

## BigTable结构

逻辑上是多维的有序map，维度包括：row, column family, timestamp。既然是map，维度就是key，value是字符串。其中column family可以有多个（最多数百个），每个column family可以不限数量。

论文中以一个存储网页数据的表WebTable为例，
- row是倒序的hostname，例如`com.yajunw.www`
- column family有两个
    1. 第一个是`content:`
    2. 第二个是`anchor:`，它下面有两个column: `a.com`, `b.com`
- timestamp是在横向的，每个value都会有一个timestamp，可以标识数据的版本。
- value是某个时刻的网页文档数据。

权限控制是到column family这个粒度。
