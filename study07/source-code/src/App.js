import React from 'react';

import Header from './components/Header';
import Router  from './routes';

function App(props) {
  // console.log(props);

  return (
    <section className="App">
      <Header></Header>
      <Router></Router>
    </section>
  );
}

export default App;
