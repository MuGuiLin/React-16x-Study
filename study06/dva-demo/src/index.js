// import dva from 'dva';

// 1. Initialize 初始化dva() 原码在：dva/packages/dva/src/index.js 中的23行 export default function(opts = {}) {}
// const app = dva();

import './index.css';

import app from './app';

// 2. Plugins
// app.use({});

// 3. Model 注册 Store模块 Models：(state、action、dispatch()、reducer、effect、subscription)
app.model(require('./models/example').default);
// app.model(require('./models/users').default);

// 以上是在应用第一次启动时就把所有Model都注册（会影响性能），可以自定义异步注册 dynamic（就是在路由跳转时再去注册）

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

