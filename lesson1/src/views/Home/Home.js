import React, { Component } from 'react';

import { Carousel } from 'antd';

import logo from '../../static/img/logo.svg';
import scaffold from '../../static/img/scaffold.svg';
import antdAdmin from '../../static/img/antd-admin.svg';
import antDesign from '../../static/img/ant-design.svg';
import d2dmin from '../../static/img/d2-admin.png';

import './Home.scss';

class Home extends Component {
    constructor() {
        super()
    }

    onChange = (index) => {
        console.log(index);
    }

    render() {
        return (
            <section className="App">
                <Carousel autoplay={true} effect="scrollx" dotPosition="bottom" afterChange={this.onChange}>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p> 用于构建用户界面的 JavaScript 库 </p>
                        <a className="App-link" href="https://react.docschina.org" target="_blank" rel="noopener noreferrer" > React 中文文档 </a>
                        <p> 通过运行一个命令来建立现代Web应用程序</p>
                        <a className="App-link" href="https://www.html.cn/create-react-app" target="_blank" > Create React App 中文文档 </a>
                    </div>
                    <div className="App-header">
                        <img src={antDesign} className="App-logo" alt="logo" />
                        <h1>Ant Design Pro 开箱即用的中台前端/设计解决方案</h1>
                        <a className="App-link" href="https://preview.pro.ant.design" target="_blank" > Ant Design Pro 预览 </a>，
                        <a className="App-link" href="https://pro.ant.design/index-cn" target="_blank" > Ant Design Pro 文档 </a>
                    </div>
                    <div className="App-header">
                        <p><img src={antdAdmin} className="App-util" /> 一套优秀的中后台前端解决方案 </p>
                        <a className="App-link" href="https://doc.antd-admin.zuiidea.com/#/zh-cn" target="_blank" > AntD Admin 文档 </a>
                        <p><img src={d2dmin} className="App-util" /> 一个完全 开源免费 的企业中后台产品前端集成方案 </p>
                        <a className="App-link" href="https://d2.pub/zh" target="_blank" > d2-Admin 文档 </a>
                    </div>
                    <div className="App-header">
                        <img src={scaffold} className="App-logo" alt="logo" />
                        <br></br>
                        <h1> 丰富实用的业务脚手架集合 </h1>
                        <a className="App-link" href="https://scaffold.ant.design" target="_blank" > 脚手架市场 </a>
                    </div>
                </Carousel>
            </section>
        );
    }
}

export default Home;