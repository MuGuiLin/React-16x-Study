import React from 'react';

import Header from '../../components/Header';
import Router from '../../router';
import Footer from '../../components/Footer';

import './App.scss';

function App() {
  return (
    <>
      <Header></Header>
      <Router></Router>
      <Footer></Footer>
    </>
  );
}

export default App;
