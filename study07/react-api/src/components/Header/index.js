import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const index = () => {
    return (
        <header className="header">
            <nav>
                <NavLink to="/" exact={true} activeClassName="active">首页</NavLink>
                <NavLink to="/vdom">虚拟DOM</NavLink>
                <NavLink to="/jsx">JSX</NavLink>
                <NavLink to='/reactApi'>React Api</NavLink>
                <NavLink to='/component'>Component</NavLink>
                <NavLink to='/render'>render</NavLink>
                <NavLink to='/createElement'>createElement</NavLink>
            </nav>
        </header>
    );
}

export default index;
