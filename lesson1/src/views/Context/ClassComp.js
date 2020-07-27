import React, { Component } from 'react';
import { ThemeContext, MupiaoContext } from '../../context/theme';

class ClassComp extends Component {

    // 1、在类组件的静态属性上 挂载 contextType 如：static contextType = ThemeContext 以后 React 会向上找到最近的 Provider 传来的数据；
    // 2、然后在 this.context 中就可以获取到Context的值。
    static contextType = ThemeContext;

    constructor() {
        super();
    }

    componentDidMount() {

        // console.log('this.context：', this.context);

    }

    render() {
        // let color = '[object Object]' === Object.prototype.toLocaleString(this.context) ? this.context.color : this.context;
        const { color, size } = this.context
        return (
            <div>
                <h3 style={{ color: color }}> ⛳消费者1：我是类式组件，用 static contextType = ThemeContext; 来获取！</h3>
                <p style={{ fontSize: size+'px' }}>这是我接收到的context: {color}，{size}</p>
            </div>
        );
    }
}

// 或者这样挂载也可以的哦：
// ClassComp.contextType = ThemeContext;

export default ClassComp;
