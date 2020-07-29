import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './index.scss';

class index extends Component {
    render() {
        return (
            <header className="header">
                <nav>
                    <NavLink to="/" exact={true} activeClassName="active">首页</NavLink>
                    <NavLink to="my-redux">MyRedux</NavLink>
                </nav>
            </header>
        );
    }
}

export default index;
