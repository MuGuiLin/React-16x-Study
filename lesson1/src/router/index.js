import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home/Home';
import Antd from '../views/Antd/Antd';
import RCFieldForm from '../views/RCFieldForm/RCFieldForm';
import MyRCFieldForm from '../views/MyRCFieldForm/MyRCFieldForm';
import RcForm from '../views/RcForm/RcForm';
import Context from '../views/Context/Context';
import Hoc from '../views/Hoc/Hoc';


class index extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/antd" component={Antd}></Route>
                <Route path="/rc-field-form" component={RCFieldForm}></Route>
                <Route path="/my-rc-field-form" component={MyRCFieldForm}></Route>
                <Route path="/rc-form" component={RcForm}></Route>
                <Route path="/context" component={Context}></Route>
                <Route path="/hoc" component={Hoc}></Route>
            </Switch>
        );
    }
}

export default index;
