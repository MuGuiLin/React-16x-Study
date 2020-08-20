import React from 'react';

import img404 from '../assets/img/404.png';

import css from '../assets/css/base.less';

const NotPage = () => {
    return (
        <section className={css.NotPage}>
            <img src={img404} />
        </section>
    );
}

export default NotPage;
