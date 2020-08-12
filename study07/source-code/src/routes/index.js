import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/';
import Vdom from '../pages/Vdom/';
import Jsx from '../pages/Jsx/';
import MyReact from '../pages/MyReact/';

const index = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/vdom" component={Vdom}></Route>
            <Route path="/jsx" component={Jsx}></Route>
            <Route path="/myReact" component={MyReact}></Route>

        </Switch>
    );
}

export default index;
