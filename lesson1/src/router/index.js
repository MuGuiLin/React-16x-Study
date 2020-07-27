import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home/Home';
import Antd from '../views/Antd/Antd';
import Context from '../views/Context/Context';
import Hoc from '../views/Hoc/Hoc';


class index extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/antd" component={Antd}></Route>
                <Route path="/context" component={Context}></Route>
                <Route path="/hoc" component={Hoc}></Route>
            </Switch>
        );
    }
}

export default index;
