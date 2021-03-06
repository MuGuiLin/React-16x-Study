import React, { Component } from 'react';

import FlowImg from '../assets/PPrerEAKbIoDZYr.png';
import FlowImg2 from '../assets/20200804.jpg';
import css from '../public/css/base.css';


class DataFlow extends Component {
    render() {
        return (
            <section className={css.page}>
                <h1 className={css.h1} > Dva - 数据流向</h1>
                <hr/>
                <p className={css.p}>数据的改变发生通常是通过用户交互行为或者浏览器行为（如路由跳转等）触发的，当此类行为会改变数据的时候可以通过 dispatch 发起一个 action，如果是同步行为会直接通过 Reducers 改变 State ，如果是异步行为（副作用）会先触发 Effects 然后流向 Reducers 最终改变 State，所以在 dva 中，数据流向非常清晰简明，并且思路基本跟开源社区保持一致（也是来自于开源社区）。</p>
                <img style={{width: '100%'}} src={FlowImg} />
                <img style={{width: '100%'}} src={FlowImg2} />
            </section>
        );
    }
}

export default DataFlow;
