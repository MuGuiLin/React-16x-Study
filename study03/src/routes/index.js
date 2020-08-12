import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import MaterialUI from '../views/MaterialUI';

class index extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/material-ui" component={MaterialUI}></Route>
            </Switch>
        );
    }
}

export default index;
