import React from 'react';
import { NavLink } from 'umi';

import css from './index.less';

const index = () => {
    return (
        <header className={css.header}>
            <nav>
                <NavLink to="/" exact activeClassName={css.active}>首页</NavLink>
                <NavLink to="/main/umi" activeClassName={css.active}>UmiJs</NavLink>
                <NavLink to="/main/proComponents" activeClassName={css.active}>ProComponents</NavLink>
                <NavLink to="/main/protable" activeClassName={css.active}>pro-table</NavLink>
            </nav>
        </header>
    );
}

export default index;
