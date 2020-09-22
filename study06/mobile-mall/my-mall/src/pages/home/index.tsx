import React from 'react';
import Arc from '@/components/Arc';
import styles from './index.less';
import TopSearch from './TopSearch';
import Carousel from './Carousel';
import NavTable from './NavTable';
import Recommend from './Recommend';

export default () => {
  return (
    <div className={styles.main}>
      <TopSearch></TopSearch>
      <Carousel></Carousel>
      <Arc></Arc>
      <NavTable></NavTable>
      <Recommend></Recommend>
    </div>
  );
}
