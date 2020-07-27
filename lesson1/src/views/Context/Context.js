import React, { Component } from 'react';
import './Context.scss'
import { Mupiao } from '../../context/theme';
import FunComp from './FunComp';

class Context extends Component {
    // 指定 contextType 读取当前的 context。 React 会往上找到最近的 theme Provider，然后使用它的值。
    static contextType = Mupiao;

    componentDidMount() {

        console.log(this);
    }


    render() {

        return (
            <section className="page-main context">
                <h1>Context 组件间跨层组通信</h1>
                <h2 style={{"color": this.context}}>Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。</h2>
                <pre>
                    在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。
                    {'\n'}Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

                    {'\n'}<b>何时使用 Context：</b>
                    {'\n'}Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。

                    {'\n'}<b>注项事项：</b>
                    {'\n'}Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。

                    {'\n'}<b>Context API：</b>
                    {'\n'}      * React.createContext()       // 创建一个 Context 对象
                    {'\n'}      * Context.Provider            // 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
                    {'\n'}      * Class.contextType           // 在 class 类式组件上以静态属性方式挂载、接收Context
                    {'\n'}      * useContext(contextValue)    // 在 function 函数式组件上以hoods方式接收Context
                    {'\n'}      * Context.Consumer
                    {'\n'}      * Context.displayName
                </pre>

                <FunComp></FunComp>
            </section>
        );
    }
}

export default Context;
