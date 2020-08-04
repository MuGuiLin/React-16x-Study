import React, { Component } from 'react';

import Prompt from '../../components/Prompt';
import './index.scss';

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirm: true
        }
    }

    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        return (

            <section className='page-box prompt'>
                <h1>Prompt 监听路由跳转</h1>
                <b>通过组件的生命周期钩子来完成监听的，就是在组件初始化时，注册一个事件！然后在组件卸载时，触发那个事件！</b>
                <Prompt show={this.state.confirm}
                    message={'您确定要离开吗？'}
                ></Prompt>
            </section>

        );
    }
}

export default index;
