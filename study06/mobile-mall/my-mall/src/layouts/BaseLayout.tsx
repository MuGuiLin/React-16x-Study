import React, { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import BottomNav from '@/components/BottomNav';

// import 'antd-mobile/dist/antd-mobile.less';
import '../static/iconfont/iconfont.css';
import css from './BaseLayout.less'

interface BaseLoutProps {
    location: Location;
    dispatch: Dispatch;
    user: any;
}
const BaseLayout: React.FC<BaseLoutProps> = props => {
    const { children, location, dispatch, user } = props;
    // console.log(props);

    //注：useEffect 接受一个回调函数，这个回调函数内代码会在如类式组件中的 componentDidMount()和componentDidUpdate()时执行。回调函数的返回值应该是一个函数，这个函数会在componentWillUnmount()
    useEffect(() => {
        dispatch({
            type: 'user/fetchUser'
        })
    }, []);

    const isShowBottomNav = '/login' !== location.pathname

    return (
        <section className={css.main}>
            <article>
                {children}
            </article>
            <footer>
                {isShowBottomNav && <BottomNav pathname={location.pathname} />}
            </footer>
        </section>
    );
}

export default connect(({ user }: any) => ({ user }))(BaseLayout);
