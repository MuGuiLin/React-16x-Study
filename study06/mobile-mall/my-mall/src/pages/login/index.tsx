import React from 'react';
import { connect, Redirect, Dispatch } from 'umi';
import { UserModelState, ConnectState, ConnectProps } from '@/models/connect.d.ts';
import { UserLgonFormParams } from '@/services/login';
import LoginForm from './LoginForm';
import css from './index.less';


interface LoginProps extends ConnectProps {
  user: UserModelState,
  dispatch: Dispatch
};
const Login: React.FC<LoginProps> = ({ user, location, dispatch }) => {
  const { userid } = user.userState;
  // console.log('-------------------', user);

  const handleSubmit = (val: UserLgonFormParams) => {
    console.log('登录表单数据', val);

    dispatch({ type: 'user/login', payload: val });
  };

  if (!!userid) {
    // 如果已经登录过(有userid)了，就从哪时回哪里去！
    const { from = '/' } = location.state || {};
    return <Redirect to={from}></Redirect>

  } else {
    return (
      <div className={css.main}>
        <h1 className={css.title}>欢迎登录</h1>
        <div className={css.logo}></div>
        <LoginForm handleSubmit={handleSubmit}></LoginForm>
      </div>
    );
  }
};

export default connect(({ user }: ConnectState) => ({ user }))(Login);
