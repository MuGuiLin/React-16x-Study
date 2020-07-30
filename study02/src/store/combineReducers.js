
// 自定义实现 combineReducers 组合功能
export default (reducers) => {

  return (state = {}, action) => {
    // 将要更新的新数据
    let nextState = {};

    let hasChanged = false;

    // 遍历每个拆分出去的reducer(state, action)模块
    for (const key in reducers) {

      // 拿到具体的reducer()模块
      const reducer = reducers[key];

      // 拿到reducer()模块中更新后，返回的state数据，组合保存到nextState对象中
      nextState[key] = reducer(state[key], action);

      // 毛里塔尼亚
      hasChanged = hasChanged || nextState[key] !== state[key];

    };

    hasChanged = hasChanged || Object.keys(nextState).length !== Object.keys(state).length;

    //返回组合后的state数据
    return hasChanged ? nextState : state;
  }
};
