import React, { useEffect } from 'react';
import { connect } from 'umi';
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';
import Header from './Header';

import styles from './index.less';
import UserLogout from './Logout';
import { Modal, Toast } from 'antd-mobile';

interface UserProps extends ConnectProps {
  user: UserModelState;
}
const User: React.FC<UserProps> = ({ user, dispatch }) => {
  const { name, icon } = user.userDetail;

  useEffect(() => {
    dispatch({ type: 'user/FetchDetail' });
  }, []);

  const logout = () => {
    Modal.alert('退出提示：', '是否确认即出登录？', [{
      text: '取消', onPress: () => console.log('cancel')
    }, {
      text: '确定',
      onPress: () => {
        dispatch({ type: 'user/userLogout' });
        Toast.success('OK 退出成功！', 1);
      }
    }]);
  };

  return (
    <div>
      <Header name={name} icon={icon}></Header>
      <h1 className={styles.title}>个人中心</h1>
      <UserLogout logout={logout}></UserLogout>
    </div>
  );
}

export default connect(({ user }: ConnectState) => ({ user }))(User);
