import React, { Component } from 'react';

import logo from '../../static/img/logo.svg';
import './index.scss';

class index extends Component {
    render() {
        return (
            <section className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p> Edit <code>src/App.js</code> and save to reload. </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                        Learn React
                    </a>
                </header>
            </section>
        );
    }
}

export default index;
