import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div className="page vdom">
                <h1>JSX - JavaScript XML</h1>
                <hr />
                <pre>
                    <a href="https://react.docschina.org/docs/introducing-jsx.html" target="_blank">JSX 简介</a>，
                    <a href="/redirect-to-codepen/introducing-jsx" target="_blank" rel="noreferrer">在 CodePen 上尝试</a>
                    <b> 1. 什么是JSX</b>
                    <p>     jsx是一种语法糖</p>
                    <p>     React 使用 JSX 来替代常规的 JavaScript。</p>
                    <p>     JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。</p>

                    <b>2. 为什么需要JSX</b>
                    <p>    * 开发效率：使用 JSX 编写模板简单快速。</p>
                    <p>    * 执行效率：JSX编译为 JavaScript 代码后进行了优化，执行更快。</p>
                    <p>    * 类型安全：在编译过程中就能发现错误。</p>

                    <b>3. 原理：babel-loader会预编译JSX为React.createElement(...)</b>

                    <b>4. 与vue的异同：</b>
                    <p>     react中虚拟dom+jsx的设计一开始就有，vue则是演进过程中才出现的</p>
                    <p>     jsx本来就是js扩展，转义过程简单直接的多；vue把template编译为render函数的过程需要复杂的编译器转换字符串-ast-js函数字符串。</p>

                </pre>
            </div>
        );
    }
}

export default index;
