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
                <NavLink to="/myReact">MyReact</NavLink>
            </nav>
        </header>
    );
}

export default index;
