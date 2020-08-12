
// model 
export default {

  namespace: 'example',

  state: {
    num: 666
  },

  // 订阅 Subscriptions 是一种从 源 获取数据的方法，它来自于 elm。 订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.debug('example：在index.js中注册mode后，这里会先执行！');
    },
  },

  // 定义副作用 异步、延时 Effect 被称为副作用，在我们的应用中，最常见的就是异步操作。它来自于函数编程的概念，之所以叫副作用是因为它使得我们的函数变得不纯，同样的输入不一定获得同样的输出。
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  // 定义修改规则
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};

// Models 的用法用说明：https://dvajs.com/guide/concepts.html#models
