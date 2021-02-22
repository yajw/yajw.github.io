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

例如下面这个配置会在打包时改写依赖errorprone的包名，解压jar包会发现多了个shaded目录。
```xml
     <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-shade-plugin</artifactId>
        <version>3.2.4</version>
        <executions>
          <execution>
            <phase>package</phase>
            <goals>
              <goal>shade</goal>
            </goals>
            <configuration>
              <relocations>
                <relocation>
                  <pattern>com.google.errorprone</pattern>
                  <shadedPattern>shaded.com.google.errorprone</shadedPattern>
                </relocation>
              </relocations>
            </configuration>
          </execution>
        </executions>
      </plugin>
```


如果要单独保留某个依赖的版本，需要单独新建一个模块来包装。


[spring boot executable jar][1]
maven插件：`org.springframework.boot:spring-boot-maven-plugin`


[1]: https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-executable-jar-format.html
