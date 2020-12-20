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

## 1.3 Setting up a React Project
npx命令: `execute npm package binaries` 
`create-react-app`： 一个创建/初始化react项目骨架的工具
通过`create-react-app`所创建的react项目基本结构：
  - `node_modules/`: 依赖目录
  - `public/index.html`: 默认`src/`下的js是处理这个文件
  - `package.json`和`package-lock.json`，同上，另外前者定义了`start`/`build`/`test`命令
  - `src/App.js`：应用的Components定义
  - `src/App.css`：Components样式
  - `src/index.js`：应用入口
  
## 1.4 Meet the React Component

```javascript
import React from 'react';

const target = 'React'

function App() {
  return (
    <div>
      <h1>Hello {target}</h1>
    </div>
  )
}

export default App;
```
这个component叫做App，同时也是一个普通的js function，所以也叫做function component。
这个component返回一段类似html的叫做JSX的代码。
这个component就是一个普通的js function，可以定义变量以及任何符合js语法的逻辑。


## 1.5 React JSX
JSX语法：结合html和js
  - 特殊关键字：`htmlfor`, `className`, `onClick`
  - `{}`包含的是js表达式

## 1.6 Lists in React

js语法中list有`map`, `filter`等方法，也可以用在JSX中：

```javascript
const App = () => (
  <div>
  {items.map(item => (<div key={item.objectID}>{item.title}</div>))}
  </div>
)
```
`key`用来标识一个node。

`return null` 表示不生成任何html。

## 1.7 Meet another React Component

一个定义好的component，可以作为JSX的标签来使用。
```javascript
const Item = ({item}) => (
  <div key={item.objectID}>{item.title}</div>
)

const App = () => (
  <div>
  {items.map(item => (<Item item={item}/>))}
  </div>
)
```

一个react应用由此会形成一个组件树。

## 1.8 React Component instantiation

js中的class:
```javascript
class Item {
  constructor(title) {
    this.title = title
  }
}

const item1 = new Item('test')
```

当使用JSX语法定义一个component的标签时，也就创建了一个component的实例。

## 1.9 React DOM

```javascript
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

1. `ReactDOM.render`将JSX渲染为真实的的DOM。
2. `root`是`public/index.html`中的id

## 1.10 React Component Definition (Advanced)

定义componenet的几个pattern
1. functional component 函数的方式定义component
2. arrow function
3. 定义一个类，继承`React.Component`

## 1.11 Handler Function in JSX

```javascript
const App = () => {
  const handleChange = event => {
    console.log(event.target.value)
  }

  return (
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange}>
    </div>
  )
}
```

`synthetic event`合成事件是对浏览器native event的封装，并且改变了某些行为（例如避免submit时刷新页面）。
JSX中event handler和js的语法十分相似。

## 1.12 React Props

props可以用来在父component到子component的传递参数。

```javascript
const App = () => (
  <div>
     {items.map(item => <Item item={item}>)}
  </div>
)

const Item = props => (
  <div>
     <span>{props.item.title}</span>
  </div>
) 
```


# 参考
- 不熟悉前端的必读:https://www.robinwieruch.de/javascript-fundamentals-react-requirements
