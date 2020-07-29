import React, { Component } from 'react';

import Store from '../../store';

import './MyRedux.scss'

class MyRedux extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        console.log(Store);
        Store.subscribe(() => {
            this.forceUpdate()
        })
    }

    addNum() {
        Store.dispatch({
            type: 'ADD',
            data: 100
        })
    }

    render() {
        let num = Store.getState()
        return (
            <section className="page-box">
                <h1>{num}</h1>
                <button onClick={this.addNum}>普通添加</button>
                <button onClick={this.addNum}>异步添加</button>
            </section>
        );
    }
}

export default MyRedux;
