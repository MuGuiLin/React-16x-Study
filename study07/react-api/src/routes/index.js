import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/';
import Vdom from '../pages/Vdom/';
import Jsx from '../pages/Jsx/';
import Component from '../pages/Component/';
import Render from '../pages/Render/';
import CreateElement from '../pages/CreateElement';
import ReactApi from '../pages/ReactApi';

const index = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/vdom" component={Vdom}></Route>
            <Route path="/jsx" component={Jsx}></Route>
            <Route path="/component" component={Component}></Route>
            <Route path="/render" component={Render}></Route>
            <Route path="/createElement" component={CreateElement}></Route>
            <Route path="/reactApi" component={ReactApi}></Route>
        </Switch>
    );
}

export default index;
