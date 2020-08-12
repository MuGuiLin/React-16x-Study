import React, { Component } from 'react';

import { NavLink } from 'dva/router';

import css from './Header.css';

class Header extends Component {
    render() {
        return (
            <header className={css.header}>
                <nav>
                    <NavLink to="/" exact activeClassName={css.active} >首页</NavLink>
                    <NavLink to="/dva" activeClassName={css.active} >Dva</NavLink>
                    <NavLink to="/dataflow" activeClassName={css.active} >Dva数据流向</NavLink>
                    <NavLink to="/goods" activeClassName={css.active} >产品列表</NavLink>
                    <NavLink to="/user" activeClassName={css.active} >用户中心</NavLink>
                </nav>
            </header>
        );
    }
}

export default Header;
