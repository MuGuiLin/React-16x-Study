import React from 'react';

import logo from '../../../assets/img/pro.svg';
import css from '../../../assets/css/base.less';

const index = () => {
    return (
        <section className={css.page}>
            <h1>ProComponents - 专业组件, 像Pro一样使用Ant Design！</h1>
            <hr/>
            <p className={css.p}>
                <img src={logo} alt="" srcset="" />
                <br/>
                <a href="https://procomponents.ant.design/" target="_blank">ProComponents 官方文档</a>，
                <a href="https://procomponents.ant.design/docs/getting-started-table" target="_blank">ProTable 文档</a>，
                <a href="https://procomponents.ant.design/docs/getting-started-layout" target="_blank">ProLayout 文档</a>
            </p>
            <pre>
              
            </pre>

            <h2>ProTable</h2>
            <p>ProTable 的诞生是为了解决项目中需要写很多 table 的样板代码的问题，所以在其中做了封装了很多常用的逻辑。这些封装可以简单的分类为预设行为与预设逻辑。在 react 的中写一个 table 免不了需要定义一些 state，比如 page，pageNumber，pageSize。如果使用 dva 等数据流方案可能还需要写很多样板代码来请求数据。但是很多时候这些行为是高度雷同的，所以 ProTable 默认封装了请求网络，翻页，搜索和筛选的逻辑。</p>
            
            <h2>ProLayout</h2>
            <p>Layout 作为协助进行页面级整体布局工具，在每个项目中都必不可少，而且在中后台中是非常雷同的。所以我们抽象了 ProLayout 来减少重复代码，并且吃掉其中的脏逻辑。</p>
        </section>
    );
}

export default index;
