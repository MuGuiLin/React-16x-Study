import React from 'react';
import logo from '../../logo.svg';
import './index.css';

function Home() {
    return (
        <div className="home">
            <header className="home-header">
                <img src={logo} className="home-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="home-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                    React 英文文档
                </a>~
                 <a className="home-link" href="https://react.docschina.org/" target="_blank" rel="noopener noreferrer" >
                    React 中文文档
                </a>
            </header>
        </div>
    );
}

export default Home;
