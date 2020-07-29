import React, { Component } from 'react';

import Store from '../../store/index2';

import './Redux.scss';

class Redux extends Component {
    constructor(props) {
        super(props)
    }

    addNum = () => {
        Store.dispatch({
            type: 'ADD',
            payload: 100
        })
    }

    delNum = () => {
        Store.dispatch({
            type: 'DEL',
            payload: 100
        })
    }

    thunkNum = () => {
        Store.dispatch((dispatch, getState) => {
            // console.log(getState());
            setTimeout(() => {
                // Store.dispatch({
                //     type: 'ADD',
                //     payload: 888
                // });
                dispatch({
                    type: 'ADD',
                    payload: 888
                });
            }, 2000)

        })
    }

    componentDidMount() {
        console.log(Store.getState());

        Store.subscribe(() => {
            // console.log('state数据实更新啦!');
            this.forceUpdate();
        })
    }

    render() {
        const state = Store.getState()
        return (
            <section className="page-box redux">
                <h1>原生 Redux</h1>
                <hr />
                <pre>
                    Redux 是 JavaScript 状态容器，提供可预测化的状态管理。
                    {'\n'}可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。不仅于此，它还提供 超爽的开发体验，比如有一个时间旅行调试器可以编辑后实时预览。
                    {'\n'}基于 Redux 的应用程序中最常见的 state 结构是一个简单的 JavaScript 对象，它最外层的每个 key 中拥有特定域的数据。
                    {'\n'}
                    <a href="https://www.redux.org.cn" target="_blank" >中文文档</a>，
                        <a href="http://redux.js.org" target="_blank" >英文文档</a>，
                        <a href="https://egghead.io/courses/getting-started-with-redux" target="_blank" >开始观看 30 个英文免费视频！</a>

                    <b>安装 Redux：</b>
                    <code>
                        npm install redux 或 yarn add redux
                    </code>

                    <b>Redux API：</b>
                    &nbsp;* 1、createStore()           // 创建store 仓库
                    {'\n'}  * 2、reducer(state, action) // 初始化、修改状态 的纯函数
                    {'\n'}      * state 存储状态
                    {'\n'}      * action 新状态﹛type, payload﹜= action
                    {'\n'}  * 3、getState()             // 获取状态值
                    {'\n'}  * 4、dispatch()             // 提交更新
                    {'\n'}  * 5、subscribe()            // 变更订阅 监听state数据的变化
                    {'\n'}  * 6、combineReducers()      // 模块化 reducer 【当state数据很复杂时 可以拆分多个reducer()，然后用combineReducers()合并成一个大的reducer】
                    {'\n'}  * 7、applyMiddleware()      // 使用包含自定义功能的 middleware 来扩展 Redux 是一种推荐的方式。Middleware 可以让你包装 store 的 dispatch 方法来达到你想要的目的。



                    <b>Redux 中间件、拦截器：</b>
                    {'\n'}  * redux-logger              // 打印redux state变更日志
                    {'\n'}  * redux-thunk               // 异步更新state，对store.dispatch 方法进行改造
                    {'\n'}  * redux-promise             // promise异步更新state，对store.dispatch 方法进行改造
                    <b>安装 Redux：</b>
                    <code>
                        yarn add redux-logger redux-thunk redux-promise
                    </code>

                    <b>异步：</b>
                    Redux只是个纯粹的状态管理器，默认只支持同步，实现异步任务 比如延迟，网络请求，需要中间件的支持，比如我们使用最简单的redux-thunk和redux-logger 。
                </pre>

                <button onClick={this.addNum}> 添加 </button>
                {state}
                <button onClick={this.delNum}> 减少 </button>

                <button onClick={this.thunkNum}> thunk异步更新 </button>
                <button onClick={this.thunkNum}> Promise异步更新 </button>
            </section>
        );
    }
}

export default Redux;
