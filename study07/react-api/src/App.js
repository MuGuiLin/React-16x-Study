import React from 'react';

import Header from './components/Header';
import Router  from './routes';
import Footer from './components/Footer';
function App(props) {
  // console.log(props);

  return (
    <section className="App">
      <Header></Header>
      <Router></Router>
      <Footer></Footer>
    </section>
  );
}

export default App;
