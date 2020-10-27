import React from 'react';
import styles from './index.less';


interface ViewProps {
  location: Location;
}
const View: React.FC<ViewProps> = ({ location }) => {
  const { state } = location;

  console.log(state);

  const onLoad = (args) => {
    console.log(args);
  };

  return (<><iframe className={styles.iframe} onLoad={onLoad} src={state.link}></iframe></>);
};

export default View;
