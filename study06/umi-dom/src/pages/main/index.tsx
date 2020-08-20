import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const index = (props) => {

    console.log(props);

    return (
        <>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </>
    );
}

export default index;
