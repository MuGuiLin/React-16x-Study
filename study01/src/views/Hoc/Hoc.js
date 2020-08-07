import React, { Component } from 'react';
import './Hoc.scss';

import HocComp from './HocComp';
import FunComp from './FunComp';
import ClassComp from './ClassComp';


// 调用高阶组件
const FunHocComp = HocComp(FunComp);

// 嵌套调用高阶组件 (也就是所谓的链式调用)
const FunHocComp2 = HocComp(HocComp(FunComp));


const ClassHocComp = HocComp(ClassComp);
const ClassHocComp2 = HocComp(HocComp(ClassComp));


class Hoc extends Component {
    render() {
        return (
            <section className="page-main hoc">
                <h1>HOC 高阶组件</h1>
                <hr/>
                <pre>
                    <b>高阶组件英文叫Higher-order component。<a href="https://react.docschina.org/docs/higher-order-components.html" target="_blank">什么是高阶组件？</a></b>
                    高阶组件是一个函数式组件，它的参数是组件，返回值也是组件。
                    {'\n'}高阶组件HOC是React中用于复用组件逻辑的一种高级技巧。HOC自身不是React API的一部分，它是一种基于 React的组合特性而形成的设计模式，为了提高组件复用率，可测试性，就要保证组件功能的单一性。
                    {'\n'}{'\n'}
                    <h3>* 普通组件是将 props 转换为UI，而高阶组件是将组件转换为另一个组件。</h3>
                    <h3>* HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用。</h3>

                    <h3>* 不要在 render 方法中值接调用 HOC，这将导致子树每次渲染都会进行卸载，和重新挂载的操作！</h3>
                    <h3>* Refs 不会被传递，虽然高阶组件的约定是将所有 props 传递给被包装组件，但这对于 refs 并不适用！</h3>

                    {'\n'}<b>1、编写高阶组件：是一个函数，参数是一个组件(类式/函数式)，返回值也是一个组件(类式/函数式)！</b>
                    <code>
                        import React from 'react';
                        {'\n'}// HOC高阶组件：是一个函数，参数是一个组件，返回值也是一个组件！
                        {'\n'}const HocComp = (Comp) =&gt; (props) =&gt;﹛
                        {'\n'}  // =＞=＞双箭头函数意思是导出一个函数
                        {'\n'}  return (
                        {'\n'}      &lt;section className="border"&gt;
                        {'\n'}          // 我是高阶组件： 把传进来的props 又传给了传进来的组件！
                        {'\n'}          &lt;Comp 【...props】&gt;&lt;/Comp&gt;
                        {'\n'}      &lt;/section&gt;
                        {'\n'}  )
                        {'\n'} ﹜;
                        {'\n'}export default HocComp; 

                        {'\n'}const HocComp = function(Comp)﹛
                        {'\n'}  return function(props)﹛
                        {'\n'}      return (
                        {'\n'}          &lt;section className="border"&gt;
                        {'\n'}              // 我是高阶组件： 把传进来的props 又传给了传进来的组件！
                        {'\n'}              &lt;Comp ﹛...props﹜&gt;&lt;/Comp&gt;
                        {'\n'}          &lt;/section&gt;
                        {'\n'}      )
                        {'\n'}  ﹜
                        {'\n'} ﹜;
                        {'\n'}export default HocComp; 
                    </code>

                    {'\n'}<b>2、编写子组件（类式/函数式）：</b>
                    <code>
                        import React, ﹛ Component ﹜ from 'react';
                        {'\n'}// 类式组件
                        {'\n'}export class ClassComp extends Component﹛
                        {'\n'}    render() ﹛
                        {'\n'}        return (
                        {'\n'}            &lt;div className="border"&gt;
                        {'\n'}                &lt;h2&gt;我是一个类式子组件：﹛this.props.name﹜&lt;/h2&gt;
                        {'\n'}            &lt;/div&gt;
                        {'\n'}        );
                        {'\n'}    ﹜
                        {'\n'}﹜
                        {'\n'}
                        {'\n'}// 函数式组件
                        {'\n'}export const FunComp = (props) =&gt; ﹛
                        {'\n'}    return (
                        {'\n'}        &lt;div className="border"&gt;
                        {'\n'}            &lt;h2&gt;我是一个函数式子组件： ﹛props.name﹜&lt;/h2&gt;
                        {'\n'}        &lt;/div&gt;
                        {'\n'}    );
                        {'\n'}﹜
                    </code>         

                    {'\n'}<b>3、调用高阶组件，并传入子组件：</b>
                    <code>
                        import HocComp from './HocComp';
                        {'\n'}import FunComp from './FunComp';
                        {'\n'}import ClassComp from './ClassComp';
                        {'\n'}// 调用高阶组件
                        {'\n'}const FunHocComp = HocComp(FunComp);                          
                        {'\n'}// 嵌套调用高阶组件 (也就是所谓的链式调用)
                        {'\n'}const FunHocComp2 = HocComp(HocComp(FunComp));
                        {'\n'}
                        {'\n'}&lt;FunHocComp name="高阶组件 - 函数式组件"&gt;&lt;/FunHocComp&gt;
                        {'\n'}&lt;FunHocComp2 name="高阶组件 - 函数式组件 链式调用"&gt;&lt;/FunHocComp2&gt;
                    </code>
                </pre>

                <h2 className="h2">HOC高阶组件：</h2>
                <FunHocComp name="高阶组件 - 函数式组件"></FunHocComp>
                <FunHocComp2 name="高阶组件 - 函数式组件 链式调用"></FunHocComp2>
                <ClassHocComp name="高阶组件 - 类式组件" ></ClassHocComp>
                <ClassHocComp2 name="高阶组件 - 类式组件 链式调用" ></ClassHocComp2>

                <h2 className="h2">HOC高阶组件 装饰器用法：</h2>
                <pre>
                    高阶组件本身就是对装饰器模式的应用，自然就可以利用ES7中新出现的装饰语法来更 优雅的编写代码啦！
                    <h3>* 在使用之前要先安装一下: npm install --save-dev @babel/plugin-proposal-decorators</h3>
                </pre>
                {/* <ClassChild name="装饰器"></ClassChild> */}
            </section>
        );
    }
}

export default Hoc;
