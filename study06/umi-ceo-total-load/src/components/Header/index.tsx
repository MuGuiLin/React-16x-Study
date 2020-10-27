import React, { ReactElement } from 'react';
import { history } from 'umi';

import { Layout, Menu, Avatar, Button } from 'antd';
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';

import less from './index.less';
import logo from '@/assets/images/mst-logo.png';

interface BaseMainProps {
  localhost: Location;
  history: History;
};

const Head: React.FC<BaseMainProps> = (props) => {

  const { Header } = Layout;

  const logOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    history.push('/');
  };

  return (<Header className={less.header}>

    <img src={logo} alt="logo" className={less.logo} />
    <h2 className={less.title}>SMT数据可视化-总裁界面</h2>

    <Menu className={less.menu} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      {/* <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item> */}
    </Menu>

    <ul className={less.user}>
      <li><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} title={'this.state.user.department'} /></li>
      <li>沐枫</li>
      <li><Button type="link" danger icon={<PoweroffOutlined />} onClick={logOut}>退出登录</Button></li>
    </ul>

  </Header >);
};

export default Head;