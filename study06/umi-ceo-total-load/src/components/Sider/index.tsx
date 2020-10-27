import React, { PureComponent } from 'react';

import { Layout, Menu, Button } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import styles from './index.less';
import { Link } from 'umi';


interface SiderProps {
  pathname: string;
}

export default class Index extends PureComponent<SiderProps> {

  state = {
    collapsed: false,
    menu: [
      { name: '整体营收', link: 'https://bi.aliyuncs.com/token3rd/dashboard/view/pc.htm?spm=a2c10.workspacedashboard.0.0.7bc94666vf0Agb&pageId=040fc4a3-3b2d-4164-ad98-10e7c1884008&accessToken=3acbb9b4a90df7a4679dab532fb0d037' },
      { name: '毛利情况', link: 'https://bi.aliyuncs.com/token3rd/dashboard/view/pc.htm?pageId=b9f48076-dd1d-410a-ba31-ec901cd7a444&accessToken=994ee1943772dea3250f2cee4d0b24d6&qbi_version_param=1"' },
      { name: '联动部门筛选', link: 'https://bi.aliyuncs.com/token3rd/dashboard/view/pc.htm?pageId=f1b77af9-ffe4-4c08-bfed-44e0e2a7f1e9&accessToken=22a2dcae80e0b55aef22537b3864682d' },
    ]
  };



  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>

        <Button type="default" block onClick={this.toggle} style={{ display: 'block', margin: '10px auto' }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {
            this.state.menu.map((o, i) => {
              return (
                <Menu.Item key={i + 1} icon={<PieChartOutlined />}>
                  <Link to={{
                    pathname: `/view`,
                    state: { link: o.link }
                  }}>{o.name}</Link>
                </Menu.Item>
              );
            })
          }

          {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/view">整体营收及毛利情况</Link>
          </Menu.Item> */}
        </Menu>

      </Sider >
    );
  }
};