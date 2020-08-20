import React from 'react';

import Header from '../components/Header';
import styles from './index.less';

export default () => {
  return (
    <div>
      <Header></Header>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
