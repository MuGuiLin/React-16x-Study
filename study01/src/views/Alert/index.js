import React, { Component } from 'react';


import Alert from '../../components/my-alert/Alert';
import Alert2 from '../../components/my-alert/Alert2';

// import Dialog from '../../components/my-alert/Dialog';
import Dialog from '../../components/my-alert/Dialog2';


class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showAlert: false,
            showDialog: false
        }
    }

    popUp = () => {
        this.setState({
            showAlert: !this.state.showAlert
        }, () => {
            setTimeout(() => {
                this.setState({ showAlert: false });
            }, 3000);
        })
    }

    popUp2 = () => {
        console.log(Alert2)
        Alert2.info({
            title: '666',
            content: '888'
        })

        Alert2.success({
            title: '666',
            content: '888'
        })

        Alert2.error({
            title: '666',
            content: '888'
        })
    }

    diaLog = () => {
        this.setState({
            showDialog: !this.state.showDialog
        }, () => {
            setTimeout(() => {
                this.setState({ showDialog: false });
            }, 3000);
        })
    }

    render() {
        return (
            <section className="page-main hoc">
                <h1>自定义弹窗</h1>
                <hr />

                <pre>
                    <b>createPortal() 传送门API：</b>
                    {'\n'}在React中，用于创建 portal。
                    {'\n'}Portal 将提供一种将子节点渲染到 DOM 节点中的方式，该节点存在于 DOM 组件的层次结构之外。
                    也就是提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。
                    {'\n'} <a href="https://zh-hans.reactjs.org/docs/portals.html" target="_blank">ReactDOM.createPortal(child, container)的用法说明</a>
                    <code>
                        ReactDOM.createPortal(child, container)
                        {'\n'}第一个参数（child）是任何可渲染的 React 子元素/组件，例如一个元素、标签，字符串或 fragment。
                        {'\n'}第二个参数（container）是一个 DOM 元素。
                    </code>
                </pre>

                <button onClick={this.popUp}> Alert弹出 </button>
                <button onClick={this.popUp2}> Alert2弹出 </button>

                <button onClick={this.diaLog}> Dialog弹出 </button>

     
                {this.state.showDialog && <Dialog title="提示信息" content="我是弹出内容！" />}
                {this.state.showAlert && <Alert title="提示信息" content="我是弹出内容！" />}
            </section>
        );
    }
}

export default index;
