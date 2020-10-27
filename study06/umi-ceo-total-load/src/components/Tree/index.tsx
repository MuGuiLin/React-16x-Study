import React, { PureComponent } from 'react';
import { Tree } from 'antd';

import { GetAgency } from '@/services/agency'
import less from './index.less'


let j = 0;
export default class index extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            treeData: []
        }
    };

    reset = (arr) => {
        let data = [];
        if (0 < arr.length) {
            for (let i in arr) {
                j++;
                data.push({
                    title: arr[i].name,
                    id: arr[i].id,
                    key: `${j}-${i}-${Date.now()}`,
                    fid: arr[i].fid,
                    disableCheckbox: true,
                    children: this.reset(arr[i].children)
                });
            };
        }
        return data
    };

    componentDidMount() {
        GetAgency({ fid: -1 }).then(res => {
            this.setState({
                treeData: this.reset(res)
            })
        });
    };

    render() {
        return (
            <section className={less.tree}>
                <Tree treeData={this.state.treeData}></Tree>
            </section>
        );
    }
};