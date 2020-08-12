import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Routes from '../../routes';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './App.scss';

function App() {
  return (
    <>
      {/* <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container> */}

      <Header></Header>
      <Routes></Routes>
      <Footer></Footer>

    </>
  );
}

export default App;
