import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/child-v', microApp: '404vue' },
    { path: '/child-r', microApp: '404react' },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: '404vue', // 唯一 id
          entry: '//localhost:8080', // html entry
        },
        {
          name: '404react', // 唯一 id
          entry: '//localhost:20000', // html entry
        },
      ],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
  },
});