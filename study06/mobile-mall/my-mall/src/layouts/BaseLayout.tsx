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

    useEffect(() => {
        dispatch({
            type: 'user/fetchUser'
        })
    }, []);

    return (
        <section className={css.main}>
            <article>
                {children}
            </article>
            <footer>
                <BottomNav pathname={location.pathname} />
            </footer>
        </section>
    );
}

export default connect(({ user }: any) => ({ user }))(BaseLayout);
