import React, { Component } from 'react';

import logo from '../../static/logo.svg';

import './index.scss';

class index extends Component {
    render() {
        return (
            <section className="home">
                <div className="home-box">
                    <img src={logo} className="home-logo" alt="logo" />
                    <p> 用于构建用户界面的 <code>JavaScript</code>库 </p>
                    <a className="home-link" href="https://react.docschina.org" target="_blank" rel="noopener noreferrer"> React </a>
                    <a className="home-link" href="https://www.html.cn/create-react-app" target="_blank" rel="noopener noreferrer"> Create-React-App</a>
                </div>
            </section>
        );
    }
}

export default index;
