import React from 'react';
import less from './index.less';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';

import { UserLogin } from '@/services/user'

interface LoginProps {
  history: History;
}

const Login: React.FC<LoginProps> = ({ history }) => {
  const rules = {
    username: [
      { required: true, message: '请输入您的账户!' }
    ],
    password: [
      { required: true, message: '请输入您的密码!' }
    ]
  }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    UserLogin(values).then((res) => {
      console.log('---------res',res);

      // history.push('/main');
    }).catch(err => {
      console.log(err);
      
    });
  };

  return (
    <article className={less.login}>

      <h1 className={less.title}>SMT数据可视化-总裁界面</h1>

      <Form name="normal_login" className={less.form} initialValues={{ remember: true }} onFinish={onFinish} size="large">

        <Form.Item name="username" rules={rules.username} >
          <Input prefix={<UserOutlined style={{ color: '#409EFF' }} />} allowClear placeholder="请输入账户！" />
        </Form.Item>

        <Form.Item name="password" rules={rules.password}>
          <Input.Password prefix={<LockOutlined style={{ color: '#409EFF' }} />} type="password" placeholder="请输入密码！" />
        </Form.Item>

        <Form.Item className="mb0">
          <Button type="primary" block htmlType="submit" icon={<LoginOutlined />}>登 录</Button>
        </Form.Item>

      </Form>

    </article>
  );

};

export default Login;