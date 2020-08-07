import React, { Component } from 'react';

class Hof extends Component {
    render() {
        return (
            <section className="page-main">
                <h1>HOF 高阶函数</h1>
                <hr/>
                <pre>
                    <b>高阶函数英文叫Higher-order function。<a href="https://www.liaoxuefeng.com/wiki/1022910821149312/1023021271742944" target="_blank">什么是高阶函数？</a></b>
                    JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。
                </pre>
            </section>
        );
    }
}

export default Hof;
