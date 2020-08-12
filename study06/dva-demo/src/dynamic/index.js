import dynamic from 'dva/dynamic';

import app from '../app';

// 动态注册model（由跳转时来这里注册） 在配路由时 component 就指向这里

export const userDynamic = dynamic({
    app,
    models: () => {
        return [import('../models/users')]
    },
    component: () => {
        return import('../routes/UserPage')
    }
});

export const goodsDynamic = dynamic({
    app,
    models: () => {
        return [import('../models/goods')]
    },
    component: () => {
        return import('../routes/GoodsPage')
    }
});

 userDynamic;
