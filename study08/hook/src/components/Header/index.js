import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './index.css';

const index = () => {
    return (
        <header className="header">
            <nav>
                <NavLink to="/" exact={true} activeClassName="active" >首页</NavLink>
                <NavLink to="/myreact">MyReact</NavLink>
                <NavLink to="/hook">Hook</NavLink>
                <NavLink to="/myhook">MyHook</NavLink>
            </nav>
        </header>
    );
}

export default index;
