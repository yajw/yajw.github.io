---
title: The road to react 笔记
comments: true
date: 2020-12-20 00:00:00
tags: [react, frontend, 笔记]
categories: 实用
---

# 1. Fundamentals of React

## 1.1 Hello React

**SPA**: 相比每次从服务端请求一个完整的html文件，SPA使得一个js和一个html文件就能完成客户端的绝大部分功能。页面的切换通过js就能完成。
**React**就是一种能够实现SPA应用或者遵循了SPA原则的技术。
**Component**是React中的一个重要概念，一个Component定义了它的html/css/js即样式和交互，它能够被整个应用中灵活地复用。
作者认为的**React的优势**：稳定，且拥有强大的生态和社区。

## 1.2 Requirements

编辑器: VSCode
运行环境：node
包管理：npm

依赖包的定义：`package.json`和`package-lock.json`
依赖包本地目录：`npm_modules/`

npm常用命令
  - `npm install -g <module>`: 全局安装
  - `npm install --save-dev`： 调试安装，不会写到`package.json`
  - `npm uninstall <module>`：卸载
  - `npm init -y`：初始化

参考：[npm crash course](https://www.robinwieruch.de/npm-crash-course)



# 参考
- 不熟悉前端的必读:https://www.robinwieruch.de/javascript-fundamentals-react-requirements
