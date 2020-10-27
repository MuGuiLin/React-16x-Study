import { defineConfig } from 'umi';
import { host } from '@/utils/config'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/base/index',
      routes: [
        { path: '/', component: '@/pages/index' },

        {
          path: '/',
          component: '@/layouts/main/index',
          routes: [
            {
              path: '/main', component: '@/pages/main/index'
            },
            {
              path: '/view', component: '@/pages/view/index'
            }
          ]
        }
      ]
    }
  ],
  proxy: {
    '/api': {
      target: 'https://smtmalltest.smgtech.net',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  }
});
