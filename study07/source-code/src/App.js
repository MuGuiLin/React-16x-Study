import React from 'react';

import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <section className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
              React 英文文档
          </a>~
          <a className="App-link" href="https://react.docschina.org/" target="_blank" rel="noopener noreferrer" >
              React 中文文档
          </a>
      </header>
    </section>
  );
}

export default App;
