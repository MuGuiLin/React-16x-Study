import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import DvaPage from './routes/DvaPage';
import DataFlow from './routes/DataFlow';
// import UserPage from './routes/UserPage';
import { userDynamic, goodsDynamic } from './dynamic';  // 异步注册users model

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/dva" component={DvaPage} />
        <Route path="/dataflow" component={DataFlow} />
        <Route path="/goods" component={goodsDynamic} />
        <Route path="/user" component={userDynamic} />
      </Switch>
    </Router>

  );
}

export default RouterConfig;
