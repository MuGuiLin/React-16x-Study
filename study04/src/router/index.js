import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Router from '../views/Router';
import ReactRouter from '../views/ReactRouter';
import Product from '../views/Product';
import ProductInfo from '../views/Product/info';
import Prompt from '../views/Prompt';

class index extends Component {
    render() {
        return (
            /* 路由渲染属性：
             *      有三个属性来给 <Route> 渲染组件: component ，render，和 children 。
             *      但在这我们将重点关注component 和 render 因为这几乎是你总会用到的两个。
             * 
             * 路由渲染先级：
             *      children → component → render
             *      以上三者能接收到同样的[route props]，包括match, location and history，但是当不匹配的时候，children的match为null，
             *      它们这3种route渲染方式互斥，只能同时用一种！
            **/
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/router' component={Router}></Route>
                <Route path='/react-router' component={ReactRouter}></Route>
                <Route path='/product' component={Product}></Route>
                {/* <Route path='/product/:id' component={ProductInfo}></Route> */}
                <Route path='/prompt' render={(...props) => <Prompt {...props}></Prompt>}></Route>
                {/* <Route component={'404'}></Route> */}
            </Switch>
        );
    }
}

export default index;
