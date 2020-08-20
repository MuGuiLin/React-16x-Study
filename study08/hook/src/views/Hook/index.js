import React from 'react';

import UseCallbackPage from './useCallBack';

import UseMemoPage from './useMemo';

import './index.css'

const index = () => {
    return (
        <div className="hook">
            <h2>Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。</h2>
            <br/>
            <h3>问题：React 中当组件的 props 或 state 变化时，子组件也会重新执行render() 或 渲染视图，实际开发会遇到不必要的渲染场景！</h3>
            <h3>思路：为了提高性能，只要子组件的 props 和 state 没有变化时，即便父组件重新渲染了，也不要渲染子组件。</h3>
            <b>useMemo()缓存的是一个值，useCallback()缓存的是一个函数（缓存依赖未改变的回调函数）, <br/> React.memo()在函数式组件中用 和 PureComponent在类式组件中用，它们的功能差不多，</b>
            <br/>
            <br/>
            <UseCallbackPage></UseCallbackPage>
            <br/>
            <UseMemoPage></UseMemoPage>
        </div>
    );
};

export default index;
