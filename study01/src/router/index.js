import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home/Home';
import Context from '../views/Context/Context';
import Hoc from '../views/Hoc/Hoc';
import Antd from '../views/Antd/Antd';
import Alert from '../views/Alert';
import RCFieldForm from '../views/RCFieldForm/RCFieldForm';
import MyRCFieldForm from '../views/MyRCFieldForm/MyRCFieldForm';
import RcForm from '../views/RcForm/RcForm';
import MyRcForm from '../views/MyRcForm/MyRcForm';



class index extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/context" component={Context}></Route>
                <Route path="/hoc" component={Hoc}></Route>
                <Route path="/alert" component={Alert}></Route>
                <Route path="/antd" component={Antd}></Route>
                <Route path="/rc-field-form" component={RCFieldForm}></Route>
                <Route path="/my-rc-field-form" component={MyRCFieldForm}></Route>
                <Route path="/rc-form" component={RcForm}></Route>
                <Route path="/my-rc-form" component={MyRcForm}></Route>
                
            </Switch>
        );
    }
}

export default index;
