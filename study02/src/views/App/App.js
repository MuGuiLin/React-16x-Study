import React from 'react';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Router from '../../router';

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
