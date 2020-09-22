import React, { ReactElement } from 'react';
import { connect, Redirect } from 'umi';
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';

/**
 * 路由守卫
 */
interface IsLoginLayoutProps extends ConnectProps {
    user: UserModelState;
    children: ReactElement;
};

const IsLoginLayout: React.FC<IsLoginLayoutProps> = ({ user, children, location }) => {
    console.log(location);

    const { userid } = user.userInfo;
    //如果没有登录，就往登录页跳转，并把当前页面路由记录在名为form中，在redux存起来
    if (!userid) {
        return <Redirect to={{ pathname: '/login', state: { from: location.pathname } }}></Redirect>
    } else {
        return children;
    }
}

export default connect(({ user }: ConnectState) => ({ user }))(IsLoginLayout);
