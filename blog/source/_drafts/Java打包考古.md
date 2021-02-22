---
title: Java打包考古
comments: true
date: 2021-02-22 00:00:00
tags: [jar]
categories: 考古
---

uber jar: 
jar with dependencies
把项目所依赖的jar解压，然后和编译输出的class放到一个jar中。

fat jar: 是uber jar的一个别名。

shaded jar: 
属于uber jar的一种，只不过为了兼容同一个依赖的不同版本，使用重命名方法避免不同版本class文件冲突。

[spring boot executable jar][1]
maven插件：`org.springframework.boot:spring-boot-maven-plugin`


[1]: https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-executable-jar-format.html
