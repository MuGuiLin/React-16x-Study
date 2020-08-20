import React from 'react';

import Header from '../../components/Header';
import Router from '../../routes/index';
import Footer from '../../components/Footer';

const App = () => {
    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    );
}

export default App;
