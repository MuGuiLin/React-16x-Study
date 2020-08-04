import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './index.scss';

class index extends Component {
    render() {
        return (
            <header className="header">
                {/* <nav className="nav nav-pills nav-fill">
                    <a className="nav-item nav-link active" href="#">Active</a>
                    <a className="nav-item nav-link" href="#">Link</a>
                    <a className="nav-item nav-link" href="#">Link</a>
                    <a className="nav-item nav-link disabled" href="#">Disabled</a>
                </nav> */}
                <nav className="nav nav-pills nav-justified">
                    <NavLink className="navbar-brand" to="/">
                        <img src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
                    </NavLink>
                    <NavLink to='/' className="nav-item nav-link" exact activeClassName="active" >首页</NavLink>
                    <NavLink to='/router' className="nav-item nav-link" exact activeClassName="active" >Router</NavLink>
                    <NavLink to='/react-router' className="nav-item nav-link" exact activeClassName="active" >React-Router</NavLink>
                    <NavLink to='/product' className="nav-item nav-link" exact activeClassName="active" >产品</NavLink>
                    <NavLink to='/prompt' className="nav-item nav-link" activeClassName="active" >Prompt</NavLink>
                    <a className="nav-item nav-link disabled" href="#">Disabled</a>
                </nav>
            </header>
        );
    }
}

export default index;
