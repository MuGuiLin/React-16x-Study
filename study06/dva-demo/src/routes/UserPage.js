import React, { Component } from 'react';

import { connect } from 'dva';

import css from '../public/css/base.css';

// 用装饰器 获取Store
@connect((state) => state)
class UserPage extends Component {

    componentDidMount() {
        console.debug('props中的数据：', this.props)
    }

    onChange1 = (e) => {
        e.target.value;
    }

    onChange1 = (e) => {
        e.target.value;
    }

    render() {
        const { name, age, job } = this.props.user
        return (
            <section className={css.page}>
                <h1 className={css.h1}>个人用户中心</h1>
                <hr />
                <pre className={css.pre}>
                    <b>获取 Store 中的数据</b>
                </pre>

                <h2>姓名：{name}，年龄：{age}，职位：{job}</h2>

                <pre className={css.pre}>
                    <b>修改 Store 中的数据</b>
                </pre>

                <h2>
                    <input type="text" value={name} onChange={ this.onChange1} />
                    <input type="range" value={age} onChange={ this.onChange2} />
                </h2>
            </section>
        );
    }
}

export default UserPage;
