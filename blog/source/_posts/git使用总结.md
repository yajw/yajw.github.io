---
title: git使用总结
comments: true
date: 2021-02-17 00:00:00
tags: [git]
categories: 总结
---

```
git fetch <remote> <remote_branch>:<local_branch_name>
git checkout <local_branch_name>
```


clone一个项目时，同时同步submodule：

git clone <url> <path> && cd <path>
git submodule init
git submodule update
另一种：git clone <url> <path> --recurse-submodules


git config:

[format]
        pretty = "%C(Yellow)%h  %C(reset)%ai  %C(Cyan)%an  %C(reset)%s" (%C(Green)%cr%C(reset))
