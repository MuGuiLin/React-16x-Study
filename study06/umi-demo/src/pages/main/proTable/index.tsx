import React from 'react';
import ProTable, { ProColumns } from '@ant-design/pro-table';

import moment from 'moment';

const columns: ProColumns[] = [
    {
        title: '姓名',
        dataIndex: 'name',
        copyable: true,
    },
    {
        title: '性别',
        dataIndex: 'sex',
    },
    {
        title: '年龄',
        dataIndex: 'age',
    },
    {
        title: '存款',
        dataIndex: 'money',
    },
    {
        title: '职位',
        dataIndex: 'job',
    },
    {
        title: '住址',
        dataIndex: 'address',
    },
    {
        title: '日期',
        dataIndex: 'date',
        valueType: 'date',
    },
    {
        title: '操作',
        dataIndex: 'option',
        valueType: 'option',
        render: (text, row, index, action) => [
            <button type="button" onClick = {() => { action.reload(); }}> 编辑 </button>,
            <button type = "button" onClick = {() => { confirm('您确定要删除吗？') }}> 删除 </button>
        ]
    }
]

const setKeywords = (e) => {
    console.log(e.target.value);
};

const data: {
    key: string | number;
    name: string;
    sex: string;
    age: string | number;
    job: string;
    address: string;
    money: string | number;
    date: number;
}[] = [];
for (let i = 0; i < 46; i += 1) {
    data.push({
        key: i,
        name: `名字${i}`,
        sex: Math.random() > 0.5 ? '男' : '女',
        age: parseInt(Math.random() * 100),
        job: 'Web 全栈开发',
        money: '￥'+ parseFloat((10000.26 * (i + 1)).toFixed(2)),
        date: moment("2020-08-06 12:25:31").valueOf() + i * 1000 * 60 * 2,
        address: `城市${i}`
    });
}

const request = (): Promise<{
    data: {
        key: string | number;
        name: string;
        age: string | number;
        address: string;
    }[];
    success: true;
}> => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            data,
            success: true
        });
    }, 1000);
});

const index = () => {
    // 中非 https://www.npmjs.com/package/@ant-design/pro-table
    return (
        <ProTable 
            size="small"
            columns= { columns }
            rowKey = "users"
            request = { request }
            toolBarRender = {(action) => [<input placeholder="请输入关键字" style={{ width: 200 }} onChange={(e) => setKeywords(e)} />]}
            pagination = {{ defaultCurrent: 10 }}
        >
    </ProTable>
    );
}

export default index;
