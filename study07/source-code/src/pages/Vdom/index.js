import React, { Component } from 'react';

import vdom from '../../assets/img/vdom.jpg';

class index extends Component {
    render() {
        return (
            <div className="page vdom">
                <h1>Virtual Document Object Module - 虚拟DOM</h1>
                <hr />
                <pre>
                    <h3>常见问题:</h3>
                    <b>React Virtual Dom(vdom) 是什么？</b>
                    <p>是一种编程概念，在JS中是描述真实DOM结构的一个JS对象。（具体来说：就是用JavaScript对象表示DOM的结构信息，在当状态变更时，重新渲染这个JS的对象结构。）</p>

                    <b>为什么要用Virtual Dom？</b>
                    <p>在DOM更新时，如果直接对真实的DOM进行操作，代价太大了，所以vdomr 的目的是为了减少对真实DOM的操作，从而提高性能。。</p>

                    <b>说一下Diff算法？</b>
                    <p>Diff算法 就是对新的和旧的两个vdom(虚拟DOM[JS对象])之间进行比对，然后再与真实DOM同步(也就是所谓的协调)。</p>

                    <b>React Fiber？</b>
                    <p>Fiber是React 16中新的协调引擎，主要目的是让VDOM可以进行增量式的渲染。</p>

                    <b>在React中使用JSX语法来描述视图，通过babel-loader转译后它们变为React.createElement(...)形式(用于创建虚拟DOM)，该函数将生成vdom来描述真实dom。</b>
                    <b>将来如果状态变化，vdom将作出相应变化，再通过diff算法对比新老vdom区别从而做出最终dom操作。</b>
                </pre>
                <img src={vdom} />
            </div>
        );
    }
}

export default index;
