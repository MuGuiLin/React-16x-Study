import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <section className="page-box">
                <h1>react-router</h1>
                <hr/>
                <pre>
                    <h2>react-router简介:</h2>
                    react-router包含3个库，react-router、react-router-dom和react-router-native。
                    {'\n'}<a href="http://react-router.docschina.org" target="_blank">中文文档</a>
                    {'\n'}react-router提供最基本的路由功能，实际使用的时候我们不会直接安装react-router，而是根据应用运行的环境选择安
                    装react-router-dom（在浏览器中使用）或react-router-native（在rn中使用）。
                    {'\n'}react-router-dom和 react-router-native都依赖react-router，所以在安装时，react-router也会自动安装，创建web应用，
                    <b>安装</b>
                    <code>
                        npm install react-router-dom 或 yarn add react-router-dom 
                    </code>
                    <b>基本使用:</b>
                    react-router中奉行一切皆组件的思想，路由器-Router、链接-Link、路由-Route、独占-Switch、重定向-Redirect都以组件形式存在。
                    <code>
                        {/* <BrowserRouter>
                            <nav>
                                <Link to="/">首页</Link>
                                <Link to="/user">用户中心</Link>
                            </nav>
                             根路由要添加exact，实现精确匹配 *
                            <Route exact path="/" component={HomePage} />
                            <Route path="/user" component={UserPage} />
                        </BrowserRouter> */}
                    </code>
                    <b>Route渲染内容的三种方式：</b>
                    Route渲染优先级：children → component → render。
                    三者能接收到同样的[route props]，包括match, location and history，但是当不匹配的时候，
                    children的match为null。
                    这三种方式互斥，你只能用一种
                    <code></code>
                </pre>
            </section>
        );
    }
}

export default index;
