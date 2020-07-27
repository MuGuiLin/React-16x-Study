import React, { Component } from 'react';
import './Hoc.scss';

// HOC高阶组件：是一个函数，参数是一个组件，返回值也是一个组件！
const myHocFn = (Comp) => (props) => {
    // 双箭头函数意思是导出一个函数
    return (
        <section className="border">
            我是高阶组件：
            <Comp {...props}></Comp>
        </section>
    )
};

// 函数式组件
function ChildComp(props) {
    return (
        <section className="border">
            <h2>我是一个函数式子组件： {props.name}</h2>
        </section>
    )
};


// 调用高阶组件
// const HocComp = myHocFn(ChildComp);

// 嵌套调用高阶组件 (也就是所谓的链式调用)
const FunHocComp = myHocFn(myHocFn(ChildComp));


// 装饰器
// @myHocFn
// @myHocFn  // 多个装饰器 @myHocFn 就是链式调用
class ClassChild extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section className="border">
                <h2>我是一个类式子组件： {this.props.name}</h2>
            </section>
        )
    }
}


class Hoc extends Component {
    render() {
        return (
            <section className="page-main hoc">
                <h1>HOC 高阶组件</h1>
                <pre>
                    为了提高组件复用率，可测试性，就要保证组件功能的单一性。
                    高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。
                    具体而言，<b>高阶组件是参数为组件，返回值为新组件的函数。</b>
                    {'\n'}组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。
                    {'\n'}HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用。

                    <h3>* HOC高阶组件：是一个函数，参数是一个组件(类式/函数式)，返回值也是一个组件(类式/函数式)！</h3>
                    <h3>* 不要在 render 方法中使用 HOC，这将导致子树每次渲染都会进行卸载，和重新挂载的操作！</h3>
                    <h3>* Refs 不会被传递，虽然高阶组件的约定是将所有 props 传递给被包装组件，但这对于 refs 并不适用！</h3>
                </pre>

                <h2 className="h2">HOC高阶组件 链式调用：</h2>
                <FunHocComp name="高阶组件666"></FunHocComp>

                <h2 className="h2">HOC高阶组件 装饰器用法：</h2>
                <pre>
                    高阶组件本身就是对装饰器模式的应用，自然就可以利用ES7中新出现的装饰语法来更 优雅的编写代码啦！
                    <h3>* 在使用之前要先安装一下: npm install --save-dev @babel/plugin-proposal-decorators</h3>
                </pre>
                <ClassChild name="装饰器"></ClassChild>
            </section>
        );
    }
}

export default Hoc;
