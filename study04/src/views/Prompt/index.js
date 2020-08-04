import React, { Component } from 'react';

import Prompt from '../../components/Prompt';
import './index.scss';

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirm: 1
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (

            <section className='page-box prompt'>
                <h1>Prompt 路由跳转监听</h1>
                <Prompt show={this.state.confirm}
                    message={'您确定要离开吗？'}
                ></Prompt>
            </section>
        );
    }
}

export default index;
