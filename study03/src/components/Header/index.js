import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <header className="header">
                <nav>
                    <NavLink to="/" exact={true} activeClassName="active">首页</NavLink>
                    <NavLink to="/material-ui" activeClassName="active">Material-UI</NavLink>
                </nav>
            </header>
        );
    }
}

export default index;
