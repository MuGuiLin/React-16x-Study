import React, { Component } from 'react';
import './Context.scss'

import { ThemeContext, MupiaoProvider } from '../../context/theme';

import FunComp from './FunComp';
import ClassComp from './ClassComp';
import ClassConsumer from './ClassConsumer';

class Context extends Component {

    constructor(prpos) {
        super(prpos);

        this.state = {
            theme: {
                color: 'green',
                background: '#666'
            },
            users: {
                name: '沐枫',
                age: 30,
                job: 'Web全栈开发'
            }
        }

    }

    componentDidMount() {

    }

    onChangeColor = (e) => {
        console.log(e.target.value);

        this.setState({
            theme: { ...this.state.theme, color: e.target.value }
        })
    }

    onChangeSize = (e) => {
        console.log(e.target.value);

        this.setState({
            theme: { ...this.state.theme, size: e.target.value }
        })
    } 
    
    onChangeName = (e) => {
        console.log(e.target.value);

        this.setState({
            users: { ...this.state.users, name: e.target.value }
        })
    }
    
    onChangeAge = (e) => {
        console.log(e.target.value);

        this.setState({
            users: { ...this.state.users, age: e.target.value }
        })
    }
    
    onChangeJob = (e) => {
        console.log(e.target.value);

        this.setState({
            users: { ...this.state.users, job: e.target.value }
        })
    }

    render() {

        return (
            <section className="page-main context">
                <h1>Context 组件间跨层组通信</h1> 
                <hr/>
                <h2 style={{ "color": this.context }}>Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。</h2>
                <pre>
                    在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。
                    {'\n'}Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

                    {'\n'}<b>何时使用 Context：</b>
                    {'\n'}Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户信息、主题色或首选语言。

                    {'\n'}<b>注项事项：</b>
                    {'\n'}Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。

                    {'\n'}<b>Context API：</b>
                    {'\n'}      * React.createContext()       // 创建一个 Context 对象
                    {'\n'}      * Context.Provider            // 提供者：Provider接收一个value属性，传递给消费组件，它允许多个消费组件订阅 context 的变化，当Provider的value 值发生变化时，它内部的所有消费组件都会重新渲染。

                    {'\n'}      * Class.contextType           // 消费者1：在 class类式组件上以静态属性方式挂载、接收Context对象，然后在组件中用this.context来(获取)Context中的值，但只能用1次。
                    {'\n'}      * Context.Consumer            // 消费者2：在 class类式组件中订阅(接收)Context中的值，可以有多个Consumer，而且还可以嵌套使用。
                    {'\n'}      * useContext(contextValue)    // 消费者3：在 function函数式组件中以hoods方式订阅(接收)Context中的值，可以多次useContext(contextValue)。

                    {'\n'}      * Context.displayName         // context 对象接受一个名为 displayName 的 property，类型为字符串。
                </pre>
                <h2 className="h2">使用方法：</h2>
                <pre>
                    React中的Context和Vue中的prowide & inject类似，建立一个中间件，然后在需要使用的地方引入即可！

                    {'\n'}<b>1、在src/context目录中创建Context对象，名字自定义，内容如下：</b>
                    <code>
                        import React from 'react';
                        {'\n'}const Mupiao = React.createContext('red'); //创建Contex对象
                        {'\n'}export Mupiao; // 导出
                    </code>

                    {'\n'}<b>2、在组件中指定作用范围 Provider：</b>
                    <code>
                        import MupiaoContext from '../../context/theme';
                        {'\n'}《MupiaoContext.Provider value=""》
                        {'\n'}只要被Provider包超来的子组件，就可以的获取(订阅、消费)到 Context中的数据!
                        {'\n'}    《子组件1/》
                        {'\n'}    《子组件2/》
                        {'\n'}    《子组件3.../》
                        {'\n'}《/MupiaoContext》
                    </code>

                    {'\n'}<b>3、获取Context中的数据（就是以下3种消费者方式）：</b>
                    <code>
                        import MupiaoContext from '../../context/theme';
                        {'\n'}    1、static contextType = MupiaoContext;                    //类式组件 在类的形态属性中挂载后，在类中任意地方：this.context 注：contextType只能使用1次  
                        {'\n'}    2、《MupiaoContext.Consumer》《/MupiaoContext.Consumer》  //类式组件 用Consumer标签包起来在函数参数中获取：(context) =》 context
                        {'\n'}    3、const context = useContext(MupiaoContext);            //函数组件 useContext() 是从 from 'react';中来的，在函数组件是use后、直接获取：context
                    </code>

                </pre>

                <h2 className="h2">实例效果：</h2>
                {/* <ThemeContext.Provider value={'red'} > */}
                <ThemeContext.Provider value={this.state.theme}>
                    <b>只要被Provider包超来的子组件，就可以的获取(订阅、消费)到 Context中的数据!</b>
                    <ClassComp></ClassComp>
                    <ClassConsumer></ClassConsumer>
                    <FunComp></FunComp>
                </ThemeContext.Provider>

                <p>用 MupiaoContext.Provider 和 MupiaoProvider 效果一样的！</p>
                <MupiaoProvider value={this.state.users}>
                    <ClassConsumer></ClassConsumer>
                </MupiaoProvider>
               
                <h2 className="h2">修改、更新Context中的数据：</h2>
                <input type="color" onChange={this.onChangeColor} />
                <input type="range" onChange={this.onChangeSize} defaultValue="18" />

                <br/>
                <input type="text" onChange={this.onChangeName} placeholder="请输入姓名" />
                <input type="range" onChange={this.onChangeAge} placeholder="请输入姓名" defaultValue="28" />
                <input type="text" onChange={this.onChangeJob} placeholder="请输入职业"  />

            </section>
        );
    }
}

export default Context;
