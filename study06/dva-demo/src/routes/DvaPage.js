import React, { Component } from 'react';

import css from '../public/css/base.css';

class DvaPage extends Component {
    render() {
        return (
            <section className={css.page}>
                <h1 className={css.h1}> Dva - 数据流解决方案</h1>
                <hr />
                <pre className={css.pre}>
                    <a href="https://dvajs.com">dva官方文档</a>
                    <b>Dva是基于React和Redux的轻量级和Elm风格的框架！</b>
                    <p className={css.p}>dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。</p>
                    <dl>
                        <dt>* 易学易用：</dt>
                        <dd>仅有 6 个 api，对 redux 用户尤其友好，配合 umi 使用后更是降低为 0 API</dd>

                        <dt>* elm 概念：</dt>
                        <dd>通过 reducers, effects 和 subscriptions 组织 model，简化 redux 和 redux-saga 引入的概念</dd>

                        <dt>* 插件机制：</dt>
                        <dd>比如 dva-loading 可以自动处理 loading 状态，不用一遍遍地写 showLoading 和 hideLoading</dd>
                    </dl>

                    <b>1、全局安装 dva-cli：</b>
                    <p>npm install -g dva-cli</p>

                    <b>2、创建项目：</b>
                    <p>dva new myapp --demo</p>

                    <b>3、启动项目：</b>
                    <p>cd myapp</p>
                    <p>npm start</p> 
                </pre>
            </section>
        );
    }
}

export default DvaPage;
