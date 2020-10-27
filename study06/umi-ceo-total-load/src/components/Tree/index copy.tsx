import React, { useState, useEffect } from 'react';
import { Tree } from 'antd';

import { GetAgency } from '@/services/agency'
import less from './index.less'

const treeData: any = [
    {
        title: 'parent 1',
        key: 'a',
        children: [
            {
                title: 'parent 1-0',
                key: 'b',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: 'ad',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: 'asdf',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: 'sadf',
                children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
            },
        ],
    },
];

const Index = () => {



    let j = 0;
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


    const [arr, setArr] = useState([]);

    useEffect(() => {
        GetAgency({ fid: -1 }).then(res => {
            // setArr(reset(res))
        });

    }, [ arr])


    return (
        <section className={less.tree}>

            <Tree treeData={arr}></Tree>

            <Tree treeData={treeData}></Tree>

        </section>
    );
};




export default Index;
