import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

import Info from './info'

class index extends Component {
    constructor() {
        super()

        this.state = {
            goods: [{ name: 'HTML5权威指南' }, { name: 'CSS3开发秘笈' }, { name: 'JavaScript绿宝书' }]
        }
    }
    render() {
        const { goods } = this.state;
        const { url } = this.props.match;

        return (
            <section className="page-box">
                <h1>产品列表 - 嵌套路由</h1>
                <hr />
                <ul>
                    {goods.map((o, i, a) => {
                        return (
                            <li key={i}>
                                {/* <Link to={'/product/' + i}>{o.name}</Link> */}
                                <Link to={url + '/' + i}>{o.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <b>嵌套路由：路由中的路由</b>
                {/* <hr/> */}
                <Route path={url + '/:id'} component={Info}></Route>

            </section>
        );
    }
}

export default index;
