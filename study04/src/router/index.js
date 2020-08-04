import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Router from '../views/Router';
import Prompt from '../views/Prompt';

class index extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/router' exact component={Router}></Route>
                <Route path='/prompt' render={(...props) =><Prompt {...props}></Prompt>}></Route>
            </Switch>
        );
    }
}

export default index;
