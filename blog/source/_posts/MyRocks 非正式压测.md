---
title: MyRocks 非正式压测
comments: true
date: 2021-01-21 00:00:00
tags: [压测, rocksdb, MyRocks]
categories: 实用
---

“非正式”：开发环境有个docker容器要过期了，刚好对MyRocks和MySQL性能对比感兴趣，就拿来简单不专业地测下，仅对比下同样环境下两个版本的结果，测试工具是sysbench，场景是olap_read_write.lua。

简单的压测发现，同样配置下，MyRocks包括读写、事务的性能是MySQL两倍。

# 1. 配置
机器配置：`32core,32GB,ubuntu 16.04,docker容器`
sysbench: `sysbench 1.0.20 (using bundled LuaJIT 2.1.0-beta2)`

## 1.1 MySQL

版本：`mysql  Ver 14.14 Distrib 5.7.31-34, for debian-linux-gnu (x86_64) using  6.3`

my.cnf:
```
[mysqld]
bind-address    = 0.0.0.0
# SAFETY #
max_allowed_packet             = 16M
max_connect_errors             = 1000000
innodb                         = FORCE
# BINARY LOGGING #
log_bin                        = /var/lib/mysql/mysql-bin
expire_logs_days               = 14
sync_binlog                    = 100000
server-id  = 1
open_files_limit               = 65535
max_connections = 10000
innodb_buffer_pool_size        = 26G
# LOGGING #
log_error                      = /var/lib/mysql/mysql-error.log
log_queries_not_using_indexes  = 1
slow_query_log                 = 1
slow_query_log_file            = /var/lib/mysql/mysql-slow.log
query_response_time_stats = on
innodb_monitor_enable = all
innodb_log_buffer_size          = 512M
innodb_log_file_size            = 1024M
innodb_flush_log_at_trx_commit = 0
sync_binlog = 100000
innodb_write_io_threads=16
innodb_read_io_threads=16
innodb_flush_method=O_DIRECT
```

## 1.2 MyRocks

安装：[Percona MyRocks 5.7](https://www.percona.com/doc/percona-server/5.7/myrocks/install.html)
```
sudo apt-get install -y wget gnupg2 lsb-release curl
wget https://repo.percona.com/apt/percona-release_latest.generic_all.deb
sudo dpkg -i percona-release_latest.generic_all.deb
sudo apt-get install --fix-broken
sudo percona-release setup ps80

sudo apt-get update
sudo apt-get install percona-server-rocksdb-5.7
```

版本: ``


# 2. 测试 oltp_read_write.lua

## 2.1 prepare

首先创建test db，然后执行：
```
sysbench /usr/share/sysbench/oltp_read_write.lua --mysql-host=127.0.0.1 --mysql-db=test --tables=20 --table_size=1000000 --mysql-user=root --mysql-password=passw0rd prepare
```

## 2.2 run

```
sysbench /usr/share/sysbench/oltp_read_write.lua --threads=4 --mysql-host=127.0.0.1 --mysql-db=test --tables=20 --table_size=1000000 --mysql-user=root --mysql-password=passw0rd run
```

## 2.3 cleanup

```
sysbench /usr/share/sysbench/oltp_read_write.lua --threads=4 --mysql-host=127.0.0.1 --mysql-db=test --tables=20 --table_size=1000000 --mysql-user=root --mysql-password=passw0rd cleanup
```

# 3. 测试结果

## 3.1 percona MySQL 5.7

oltp read write
```
sysbench 1.0.20 (using bundled LuaJIT 2.1.0-beta2)

Running the test with following options:
Number of threads: 32
Initializing random number generator from current time


Initializing worker threads...


Threads started!

SQL statistics:
    queries performed:
        read:                            62230
        write:                           17780
        other:                           8890
        total:                           88900
    transactions:                        4445   (438.55 per sec.)
    queries:                             88900  (8770.98 per sec.)
    ignored errors:                      0      (0.00 per sec.)
    reconnects:                          0      (0.00 per sec.)

General statistics:
    total time:                          10.1280s
    total number of events:              4445

Latency (ms):
         min:                                    3.46
         avg:                                   72.08
         max:                                  454.91
         95th percentile:                      167.44
         sum:                               320397.94

Threads fairness:
    events (avg/stddev):           138.9062/9.37
    execution time (avg/stddev):   10.0124/0.01
```

## 3.2 MyRocks

```
sysbench 1.0.20 (using bundled LuaJIT 2.1.0-beta2)

Running the test with following options:
Number of threads: 4
Initializing random number generator from current time


Initializing worker threads...

Threads started!

SQL statistics:
    queries performed:
        read:                            110810
        write:                           31660
        other:                           15830
        total:                           158300
    transactions:                        7915   (789.10 per sec.)
    queries:                             158300 (15782.04 per sec.)
    ignored errors:                      0      (0.00 per sec.)
    reconnects:                          0      (0.00 per sec.)

General statistics:
    total time:                          10.0291s
    total number of events:              7915

Latency (ms):
         min:                                    1.65
         avg:                                    5.05
         max:                                  460.64
         95th percentile:                       12.08
         sum:                                39987.29

Threads fairness:
    events (avg/stddev):           1978.7500/124.21
    execution time (avg/stddev):   9.9968/0.01
```


