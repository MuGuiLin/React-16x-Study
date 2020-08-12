import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Header from '../components/Header';

function IndexPage(props) {

  console.log(props);
  return (

    <div className={styles.normal}>
      <Header></Header>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload，<a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md" target="_blank" >Getting Started</a></li>
        <li>
          <a href="https://dvajs.com/" target="_blank" >DvaJs 官方文档(以状态为基础)</a>，
          <a href="https://umijs.org/zh-CN" target="_blank" >UmiJS 官方文档(以路由为基础)</a>
        </li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(
  state => state
)(IndexPage);
