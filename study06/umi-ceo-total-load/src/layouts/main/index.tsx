import React, { ReactElement } from 'react';
import { Redirect } from 'umi';

import { Layout } from 'antd';
const { Footer, Content } = Layout;

import less from './index.less';

import Header from '@/components/Header/index';
import Sider from '@/components/Sider/index';


interface BaseMainProps {
  children: ReactElement;
};
const Main: React.FC<BaseMainProps> = props => {
  const { children } = props;

  if (false) {
    return <Redirect to={{ pathname: '/', state: { from: location.pathname } }}></Redirect>
  } else {
    return (<Layout className={less.layout}>
      <Header>Header</Header>

      <Layout>  
        <Sider>Sider</Sider>
        <Content className={less.content}>
          {children}
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>)

  };

};

export default Main;