import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Hook from '../views/Hook';
import MyHook from '../views/MyHook';

const index = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Home} ></Route>
            <Route path="/hook" render={(...props) => {
                return <Hook {...props} />
            }}></Route>
            <Route path="/myhook" component={MyHook} ></Route>
            <Route render={() => <h1>404</h1>}></Route>
        </Switch>
    );
}

export default index;
