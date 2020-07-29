This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



## HOC 高阶组件

> 为了提高组件复用率，可测试性，就要保证组件功能的单一性。 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。 具体而言，高阶组件是参数为组件，返回值为新组件的函数。
>
> * 组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。
> * HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用。
> * 不要在 render 方法中值接调用 HOC，这将导致子树每次渲染都会进行卸载，和重新挂载的操作！
> * Refs 不会被传递，虽然高阶组件的约定是将所有 props 传递给被包装组件，但这对于 refs 并不适用！





## Context 组件 跨层级通信

> Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。

* 在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。
* Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

#### 何时使用 Context：

Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户信息、主题色或首选语言。

#### 注项事项：

Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。

#### Context API：

| API                      | 作用   | 说明                                                         |
| :----------------------- | ------ | ------------------------------------------------------------ |
| React.createContext()    |        | 创建一个 Context 对象                                        |
| Context.Provider         | 提供者 | Provider接收一个value属性，传递给消费组件，它允许多个消费组件订阅 context 的变化，当Provider的value 值发生变化时，它内部的所有消费组件都会重新渲染。 |
| Context.Consumer         | 消费者 | 在 class类式组件中订阅(接收)Context中的值，可以有多个Consumer，而且还可以嵌套使用。 |
| Class.contextType        | 消费者 | 在 class类式组件上以静态属性方式挂载、接收Context对象，然后在组件中用this.context来(获取)Context中的值，但只能用1次 |
| useContext(contextValue) | 消费者 | 在 function函数式组件中以hoods方式订阅(接收)Context中的值，可以多次useContext(contextValue)。 |
| Context.displayName      |        | context 对象接受一个名为 displayName 的 property，类型为字符串。 |



## 使用方法：

React中的Context和Vue中的prowide & inject类似，建立一个中间件，然后在需要使用的地方引入即可！

1、在src/context目录中创建Context对象，名字自定义，内容如下：import React from 'react';

```js
const Mupiao = React.createContext('red'); //创建Contex对象
export Mupiao; // 导出
```



2、在组件中指定作用范围 Provider：import MupiaoContext from '../../context/theme';

```html
<MupiaoContext.Provider value=""> //只要被Provider包超来的子组件，就可以的获取(订阅、消费)到 Context中的数据!
    <子组件1/>
    <子组件2/>
    <子组件3.../>
</MupiaoContext.Provider>
```

  

3、获取Context中的数据（就是以下3种消费者方式）：import MupiaoContext from '../../context/theme';

  ```js
1、static contextType = MupiaoContext;             //类式组件 在类的形态属性中挂载后，在类中任意地方：this.context 注：contextType只能使用1次
2、<MupiaoContext.Consumer></MupiaoContext.Consumer>//类式组件 用Consumer标签包起来在函数参数中获取：(context) =》 context
3、const context = useContext(MupiaoContext);       //函数组件 useContext() 是从 from 'react';中来的，在函数组件是use后、直接获取：context
  ```



## 实例效果：

## React 装饰器运行环境配置

> 装饰器是es6提出来的草案，如果要在react项目中使用装饰器，需要配置一下运行环境。  
> decorator 是 ES7 的一个新语法，他可以对一些对象进行装饰包装然后返回一个被包装过的对象。

1、暴漏 create-react-app 脚手架配置文件。
```js
yarn eject
```

2、安装依赖

```js
yarn add @babel/plugin-proposal-decorators -D
```

3、修改package.json文件，添加如下配置
```js
"babel": {
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ]
    ],
    "presets": [
      "react-app"
    ]
  }
```
4、重启服务就OK啦！