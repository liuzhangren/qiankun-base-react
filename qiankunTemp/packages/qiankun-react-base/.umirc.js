import { defineConfig } from 'umi';
import settings from "./src/settings"
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/login',
      component: '../pages/User/Login',
    },
    {
      path: '/403',
      component: '../pages/Exception/403',
    },
    {
      path: '/',
      component: '../layouts/index',
      Routes: ['./src/pages/Auth.js'],
      routes: [
        {
          path: '/',
          component: '../pages/index',
        },
        { path: '/child-v', microApp: '404vue' },
        { path: '/child-r', microApp: '404react' },
        {
          path: '/Role/RoleMngA',
          component: '../pages/Platform/Role/newRole',
        },
        {
          path: '/Role/RoleMngB',
          component: '../pages/Platform/Role/newRole',
        },
        {
          path: '/Org/OrgPage',
          component: '../pages/Platform/Org',
        },
        {
          path: '/Resource/MenuPage',
          component: '../pages/Platform/Resource',
        },
        {
          path: 'PuserPeople/Ppuser',
          component: '../pages/Platform/PuserPeople/newsIndex',
        },
        {
          path: '/SchedulerTask/TaskManagement',
          component: '../pages/Platform/TaskManagement',
        },
        {
          path: '/SchedulerTask/TaskLog',
          component: '../pages/Platform/TaskLog',
        },
        {
          path: '/Puser/Puser',
          component: '../pages/Platform/Puser',
        },
        {
          path: '/Admin/AdminMng',
          component: '../pages/Platform/Admin/AdminMng',
        },
        {
          path: '/PostMain/PostMaintence',
          component: '../pages/Platform/Admin/NewPost',
        },
        {
          path: '/Flow/ProCategory',
          component: '../pages/Platform/ProCategory',
        },
        {
          path: '/zz',
          component: '../pages/Platform/Zz',
        },
        {
          path: '/ss',
          component: '../pages/Platform/Ss',
        },
        {
          path: '/dic/dicMaintenance',
          component: '../pages/Platform/Dic/dicMaintenance',
        },
        // 建设中页面
        {
          path: '/:post/building',
          component: '../pages/Exception/building',
        },
        {
          path: '/numberConfig',
          component: '../pages/Platform/NumberConfig',
        },
        //  三元分立
        {
          path: '/SeparationThree',
          component: '../pages/Platform/SeparationThree',
        },
        {
          path: '/log/operationLog',
          component: '../pages/Platform/Log/operationLog',
        },
        {
          path: '/log/interfaceLog',
          component: '../pages/Platform/Log/interfaceLog',
        },
        {
          path: '/log/authLog',
          component: '../pages/Platform/Log/loginLog',
        },
        {
          path: '/log/mailLog',
          component: '../pages/Platform/Log/mailLog',
        },
      ]
    }
  ],
  proxy: {
    '/platform': {
      target: settings.devIp.platform,
      // target: 'http://192.168.3.3:29001',
      changeOrigin: true,
      pathRewrite: {
        '^/platform': '/platform'
      }
    },
    '/schedule': {
      target: settings.devIp.schedule,
      changeOrigin: true,
      pathRewrite: {
        '^/schedule': '/schedule'
      }
    },
    '/process': {
      target: settings.devIp.process,
      changeOrigin: true,
      pathRewrite: {
        '^/process': '/process'
      }
    },
    '/equip': {
      target: settings.devIp.equip,
      changeOrigin: true,
      pathRewrite: {
        '^/equip': '/equip'
      }
    },
    '/document': {
      target: settings.devIp.document,
      changeOrigin: true,
      pathRewrite: {
        '^/document': '/document'
      }
    },
    '/plan': {
      target: settings.devIp.plan,
      changeOrigin: true,
      pathRewrite: {
        '^/plan': '/plan'
      }
    },
    '/magicflu': {
      target: "http://172.16.12.180:999/",
      changeOrigin: true,
      pathRewrite: {
        '^/magicflu': '/magicflu'
      }
    },
    '/run': {
      target: settings.devIp.run,
      changeOrigin: true,
      pathRewrite: {
        '^/run': '/run'
      }
    },
    '/instrument': {
      target: settings.devIp.instrument,
      changeOrigin: true,
      pathRewrite: {
        '^/instrument': '/instrument'
      }
    },
  },
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: '404vue', // 唯一 id
          entry: '//localhost:8080', // html entry
          history: 'browser',
        },
        {
          name: '404react', // 唯一 id
          entry: '//localhost:20000', // html entry
          history: 'browser',
        },
      ],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
  },
});