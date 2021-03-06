import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div className="page api">
                <h1>React 中的 API</h1>
                <hr />
                <pre>
                    <a className="home-link" href="https://zh-hans.reactjs.org/docs/react-api.html" target="_blank" rel="noopener noreferrer" >React 顶层 API</a>
                    <b> React 中的 API</b>
                    <p>React 是 React 库的入口。如果你通过使用 script 标签的方式来加载 React，则可以通过 React 全局变量对象来获得 React 的顶层 API。当你使用 ES6 与 npm 时，可以通过编写 import React from 'react' 来引入它们。当你使用 ES5 与 npm 时，则可以通过编写 var React = require('react') 来引入它们。</p>


                </pre>
            </div>
        );
    }
}

export default index;
