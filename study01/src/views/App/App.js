import React from 'react';
import './App.scss';

import { MupiaoContext, MupiaoProvider } from '../../context/theme';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../router';


function App() {
    
    const newTheme = {
        color: 'green',
        background: '#666'
    }

    return (
        <React.Fragment>
            {/* <MupiaoContext.Provider value={newTheme}> */}
            {/* <MupiaoProvider value={newTheme} > */}
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            {/* </MupiaoProvider> */}
            {/* </MupiaoContext.Provider> */}
        </React.Fragment>
    );
}

export default App;
