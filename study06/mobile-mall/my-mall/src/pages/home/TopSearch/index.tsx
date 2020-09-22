import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

export default () => {
  return (
    <section className={styles.main}>
      <Link className={styles.input} to="/search">
        <i className="iconfont icon-sousuo"></i>寻找宝贝
        </Link>
    </section>
  );
};