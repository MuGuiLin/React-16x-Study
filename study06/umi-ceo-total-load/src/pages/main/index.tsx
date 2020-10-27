import React from 'react';

import { GetAgency } from '@/services/agency'
import styles from './index.less';

import Tree from '@/components/Tree'

export default () => {

  const onLoad = (args) => {
    console.log(args)
  };

  let j = 0;
  let mupiao: any = [];

  const reset = (arr) => {
    const data = []
    if (0 < arr.length) {
      for (let i in arr) {
        j++;
        data.push({
          title: arr[i].name,
          // id: arr[i].id,
          key: `${j}-${i}-${Date.now()}`,
          // fid: arr[i].fid,
          children: reset(arr[i].children)
        });
      };
    }
    return data

  };

  GetAgency({ fid: -1 }).then(res => {
    // console.log(res);

    mupiao = reset(res);
    // console.log(mupiao);

  }).catch(err => {

  });


  return (<>
     <Tree></Tree>
  </>);
}
