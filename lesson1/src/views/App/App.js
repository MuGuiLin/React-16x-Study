import React from 'react';
import './App.scss';

import { Mupiao } from '../../context/theme';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../router';


function App() {
    return (
        <React.Fragment>
            <Mupiao.Provider value="blue">
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </Mupiao.Provider>
        </React.Fragment>
    );
}

export default App;
