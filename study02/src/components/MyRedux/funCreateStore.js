
const funCreateStore = (countReducer, b) => {

    let state;
    let update = [];

    // 获取
    function getState() {
        return state;
    }

    // 更新
    function dispatch(action) {
        state = countReducer(state, action);
        update.forEach(item => {
            item();
        });
        // return action;
    }

    // 监听
    function subscribe(callBack) {
        update.push(callBack);
        // return function() {
        //     update = [];
        // }
    }

    // 初始化默认值
    dispatch({
        type: '@MyRedux@'
    })

    return {
        getState,
        dispatch: dispatch,
        subscribe: subscribe
    };
}

export default funCreateStore;
