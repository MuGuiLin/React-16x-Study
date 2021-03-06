import React, { Component } from 'react';

import logo from '../../static/img/logo.svg';
import './index.scss';

class index extends Component {
    
    componentDidMount() {
        console.log(this.props);
    }
    
    render() {
        return (
            <section className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p> Edit <code>src/App.js</code> and save to reload. </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                        Learn React
                    </a>
                    <a className="App-link" href="https://www.html.cn/create-react-app" target="_blank" rel="noopener noreferrer" >
                        脚手架：Create-React-App
                    </a> 
                    <a className="App-link" href="http://react-router.docschina.org" target="_blank" rel="noopener noreferrer" >
                        路由管理：React-Router
                    </a>
                </header>
            </section>
        );
    }
}

export default index;
