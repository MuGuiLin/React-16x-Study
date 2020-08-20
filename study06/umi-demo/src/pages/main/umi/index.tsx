import React from 'react';

import logo from '../../../assets/img/umi.png';
import css from '../../../assets/css/base.less';

const index = () => {
    return (
        <section className={css.page}>
            <h1>Umi - 插件化的企业级前端应用框架</h1>
            <hr />
            <p className={css.p}>
                <img src={logo} alt="" srcset="" />
                <br/>
                <a href="https://umijs.org/zh-CN" target="_blank">UmiJS 官方文档</a>
            </p>
            
            <pre>
                Umi 是什么？
                {'\n'}Umi，中文可发音为乌米，是可扩展的企业级前端应用框架。
                {'\n'}Umi 以路由为基础的，同时支持配置式路由和约定式路由，保证路由的功能完备，并以此进行功能扩展。
                {'\n'}然后配以生命周期完善的插件体系，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求。
                {'\n'}Umi 是蚂蚁金服的底层前端框架，已直接或间接地服务了 3000+ 应用，包括 java、node、H5 无线、离线（Hybrid）应用、纯前端 assets 应用、CMS 应用等。
                {'\n'}他已经很好地服务了我们的内部用户，同时希望他也能服务好外部用户。
            </pre>

            <ul>
                <li>它主要具备以下功能：</li>
                <li>🎉 可扩展，Umi 实现了完整的生命周期，并使其插件化，Umi 内部功能也全由插件完成。此外还支持插件和插件集，以满足功能和垂直域的分层需求。</li>
                <li>📦 开箱即用，Umi 内置了路由、构建、部署、测试等，仅需一个依赖即可上手开发。并且还提供针对 React 的集成插件集，内涵丰富的功能，可满足日常 80% 的开发需求。</li>
                <li>🐠 企业级，经蚂蚁内部 3000+ 项目以及阿里、优酷、网易、飞猪、口碑等公司项目的验证，值得信赖。</li>
                <li>🚀 大量自研，包含微前端、组件打包、文档工具、请求库、hooks 库、数据流等，满足日常项目的周边需求。</li>
                <li>🌴 完备路由，同时支持配置式路由和约定式路由，同时保持功能的完备性，比如动态路由、嵌套路由、权限路由等等。</li>
                <li>🚄 面向未来，在满足需求的同时，我们也不会停止对新技术的探索。比如 dll 提速、modern mode、webpack@5、自动化 external、bundler less 等等。</li>
            </ul>
        </section>
    );
}

export default index;
