import React, { Component } from 'react';

import { connect } from 'dva';

import css from '../public/css/base.css';

// 用装饰器 获取Store
@connect((state) => state)
class GoodsPage extends Component {

    componentDidMount() {
        console.debug('props中的数据：', this.props)
    }

    render() {
        const { book } = this.props.goods
        return (
            <section className={css.page}>
                <h1 className={css.h1}>商品列表</h1>
                <hr />
                <pre className={css.pre}>
                    <b>获取 Store 中的数据</b>
                </pre>

                <ul>
                    {book.map((o, i, a) => {
                        return (
                        <li key={i}>{i + 1}：{o.name}，￥：{o.rmb}</li>
                        )
                    })}
                </ul>
            </section>
        );
    }
}

export default GoodsPage;
