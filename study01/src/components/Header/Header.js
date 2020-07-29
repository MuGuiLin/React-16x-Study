import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import { Menu } from 'antd';
import { HomeOutlined, AntDesignOutlined, SettingOutlined } from '@ant-design/icons';

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

                    <Menu.Item key="2" icon={<AntDesignOutlined />}>
                        <NavLink to="/context" > Context </NavLink>
                    </Menu.Item>

                    <Menu.Item key="3" icon={<AntDesignOutlined />}>
                        <NavLink to="/hoc" > HOC </NavLink>
                    </Menu.Item>

                    <Menu.Item key="4"  icon={<AntDesignOutlined />}>
                        <NavLink to="/alert" > Alert </NavLink> 
                    </Menu.Item>

                    <Menu.Item key="5" icon={<AntDesignOutlined />}>
                        <NavLink to="/antd" > Antd Form </NavLink>
                    </Menu.Item>

                    <Menu.Item key="6"  icon={<AntDesignOutlined />}>
                        <NavLink to="/rc-field-form" > RC-Field-Form </NavLink> 
                    </Menu.Item>

                    <Menu.Item key="7"  icon={<AntDesignOutlined />}>
                        <NavLink to="/my-rc-field-form" > My-RC-Field-Form </NavLink> 
                    </Menu.Item>

                    <Menu.Item key="8"  icon={<AntDesignOutlined />}>
                        <NavLink to="/rc-form" > RC-Form </NavLink> 
                    </Menu.Item> 
                    
                    <Menu.Item key="9"  icon={<AntDesignOutlined />}>
                        <NavLink to="/my-rc-form" > My-Rc-Form </NavLink> 
                    </Menu.Item>
              
                    <SubMenu icon={<SettingOutlined />} title="子导航">
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2" disabled>Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                    <Menu.Item key="12">
                        <AntDesignOutlined/>
                        <a href="https://ant.design/components/overview-cn/" target="_blank" rel="noopener noreferrer"> Ant Design </a>
                    </Menu.Item>
                </Menu>
                <nav>

                </nav>
            </header>
        );
    }
}

export default Header;
