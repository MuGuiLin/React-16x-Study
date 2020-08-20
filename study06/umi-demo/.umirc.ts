import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login' },

    {
      path: '/main', component: '@/pages/main',
      routes: [
        {
          path: '/main/umi', component: '@/pages/main/umi'
        },
        {
          path: '/main/proComponents', component: '@/pages/main/proComponents'
        },
        {
          path: '/main/protable', component: '@/pages/main/proTable'
        }
      ]
    },

    {component: '@/pages/notPage'}
  ],
});
