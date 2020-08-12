import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../views/Home/Home';
import Context from '../views/Context/Context';
import Curry from '../views/Curry/Curry';
import Hof from '../views/Hof/Hof';
import Hoc from '../views/Hoc/Hoc';
import Complex from '../views/Complex/Complex';
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
                <Route path="/curry" component={Curry}></Route>
                <Route path="/hof" component={Hof}></Route>
                <Route path="/hoc" component={Hoc}></Route>
                <Route path="/complex" component={Complex}></Route>
                <Route path="/alert" component={Alert}></Route>
                <Route path="/antd" component={Antd}></Route>
                <Route path="/rc-field-form" component={RCFieldForm}></Route>
                <Route path="/my-rc-field-form" component={MyRCFieldForm}></Route>
                <Route path="/rc-form" component={RcForm}></Route>
                <Route path="/my-rc-form" component={MyRcForm}></Route>
                {/* <Redirect component="404"></Redirect> */}
            </Switch>
        );
    }
}

export default index;
