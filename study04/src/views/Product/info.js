import React, { Component } from 'react';

class info extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const { id } = this.props.match.params
        return (
            <section className="page-box">
                <h1>产品详情 - 动态路由</h1>
                <hr />
                <h2>传过来的ID：{id}</h2>
            </section>
        );
    }
}

export default info;
