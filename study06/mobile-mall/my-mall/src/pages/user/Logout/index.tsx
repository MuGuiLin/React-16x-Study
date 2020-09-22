import React from 'react';
import { Button, WingBlank } from 'antd-mobile';


interface UserLogoutProps {
    logout: Function;
};
const UserLogout: React.FC<UserLogoutProps> = ({ logout }) => {
    return (
        <WingBlank size="lg">
            <Button type="primary" onClick={() => logout()}>退出登录</Button>
        </WingBlank>
    );
};

export default UserLogout;
