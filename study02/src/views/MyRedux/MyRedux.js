import React, { Component } from 'react';

import myStore from '../../store/myStore';

import './MyRedux.scss'

class MyRedux extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        console.log(myStore);
        myStore.subscribe(() => {
            this.forceUpdate()
        })
    }

    addNum() {
        myStore.dispatch({
            type: 'ADD',
            data: 100
        })
    }

    render() {
        let num = myStore.getState()
        return (
            <section className="page-box">
                <h1>自定义实现 Redux</h1>
                <hr/>
                <h2>{num}</h2>
                <button onClick={this.addNum}>普通添加</button>
                <button onClick={this.addNum}>异步添加</button>
            </section>
        );
    }
}

export default MyRedux;
