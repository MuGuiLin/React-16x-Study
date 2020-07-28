import React, { Component } from 'react';

class ClassComp extends Component {
    render() {
        return (
            <div className="border">
                <h2>我是一个类式子组件： {this.props.name}</h2>
            </div>
        );
    }
}

export default ClassComp;
