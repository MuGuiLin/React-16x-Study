import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Redux from "../views/Redux/Redux";
import MyRedux from "../views/MyRedux/MyRedux";


class index extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact={true} component={Home} ></Route>
                <Route path="/redux" component={Redux} ></Route>
                <Route path="/my-redux" component={MyRedux} ></Route>
            </Switch>
        );
    }
}

export default index;
