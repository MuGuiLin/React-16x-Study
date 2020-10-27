import React from 'react';
import styles from './index.less';

interface BaseMainProps { }
const Base: React.FC<BaseMainProps> = props => {
  const { children } = props;
  return (
    <>
      {children}
    </>
  );
};

export default Base;