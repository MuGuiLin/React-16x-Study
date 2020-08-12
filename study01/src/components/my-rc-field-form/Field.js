import React, { Component } from 'react';

import { Context } from './Context';

// 组件复合
class Field extends Component {
    static contextType = Context;

    constructor() {
        super()
    }

    onFormStoreChange = () => {
        this.forceUpdate();
    }

    // 让表单项成为受控制
    FormItemCtrl = () => {
        const { name } = this.props;
        const { getFieldValue, setFieldsValue } = this.context.current;

        return {
            value: getFieldValue(name),
            defaultValue: '',
            onChange: (event) => {
                // console.log(event.target.value);
                setFieldsValue({
                    [name]: event.target.value
                })
                // this.onFormStoreChange();
            },
            onInput: (event) => {

            }
        }
    };

    render() {
        // console.log(this.props);
        const { children } = this.props;
        
        // const createNode = React.createElement('input');
        // const cloneNode = React.cloneElement(createNode, this.FormItemCtrl());

        // React.cloneElement 以 element 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。新的子元素将取代现有的子元素，而来自原始元素的 key 和 ref 将被保留。
        const cloneNode = React.cloneElement(children, this.FormItemCtrl());

        return cloneNode;
     
    }
}

export default Field;
