import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import { Menu } from 'antd';
import { AntDesignOutlined, CopyrightOutlined, FunctionOutlined, FacebookOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';

import './Header.scss';

const { SubMenu } = Menu;

class Header extends PureComponent {
    constructor() {
        super();

        this.state = {
            current: 'home',
        }
    }

    handleClick = e => {
        // console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <header className="header">
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">

                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <NavLink to="/" exact={true}> 首页 </NavLink>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<CopyrightOutlined />}>
                        <NavLink to="/context" > Context </NavLink>
                    </Menu.Item>

                    <Menu.Item key="3" icon={<FunctionOutlined />}>
                        <NavLink to="/hof" > HOF </NavLink>
                    </Menu.Item>

                    <Menu.Item key="4" icon={<FacebookOutlined />}>
                        <NavLink to="/hoc" > HOC </NavLink>
                    </Menu.Item>

                    <Menu.Item key="5" icon={<CopyrightOutlined />}>
                        <NavLink to="/complex" > Complex </NavLink>
                    </Menu.Item>

                    <Menu.Item key="6" icon={<SettingOutlined />}>
                        <NavLink to="/alert" > Alert </NavLink>
                    </Menu.Item>

                    <SubMenu icon={<AntDesignOutlined />} title="Form组件">
                        <Menu.ItemGroup title="Ant Design UI框架">
                            <Menu.Item key="setting:1" icon={<AntDesignOutlined />}>
                                <NavLink to="/antd" > Antd Form 用法 </NavLink>
                            </Menu.Item>
                            <Menu.Item key="setting:2" icon={<AntDesignOutlined />}>
                                <a href="//ant.design/components/overview-cn/" target="_blank">Ant Design 文档</a>
                            </Menu.Item>
                            {/* <Menu.Item key="setting:3" disabled>禁用项</Menu.Item> */}
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="rc-field-form 表单插件">
                            <Menu.Item key="setting:4" icon={<AntDesignOutlined />}>
                                <NavLink to="/rc-field-form"> RC-Field-Form 用法</NavLink>
                            </Menu.Item>
                            <Menu.Item key="setting:5" icon={<AntDesignOutlined />}>
                                <a href="//www.npmjs.com/package/rc-field-form" target="_blank">RC-Field-Form 文档</a>
                            </Menu.Item>
                            <Menu.Item key="setting:6" icon={<AntDesignOutlined />}>
                                <NavLink to="/my-rc-field-form" > RC-Field-Form 实现</NavLink>
                            </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="rc-form 表单插件">
                            <Menu.Item key="setting:7" icon={<AntDesignOutlined />}>
                                <NavLink to="/rc-form" > RC-Form 用法</NavLink>
                            </Menu.Item>
                            <Menu.Item key="setting:8" icon={<AntDesignOutlined />}>
                                <a href="//www.npmjs.com/package/rc-form" target="_blank">RC-Form 文档</a>
                            </Menu.Item>
                            <Menu.Item key="setting:9" icon={<AntDesignOutlined />}>
                                <NavLink to="/my-rc-form" > Rc-Form 实现</NavLink>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                    {/* <Menu.Item key="12">
                        <AntDesignOutlined/>
                        <a href="https://ant.design/components/overview-cn/" target="_blank" rel="noopener noreferrer"> Ant Design </a>
                    </Menu.Item> */}
                </Menu>
                <nav>

                </nav>
            </header>
        );
    }
}

export default Header;
