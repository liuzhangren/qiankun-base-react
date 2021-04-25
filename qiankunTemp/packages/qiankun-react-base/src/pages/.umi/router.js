import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/login',
    component: require('../User/Login').default,
    exact: true,
    _title: '生产管理支持平台 | 生产支持',
    _title_default: '生产管理支持平台 | 生产支持',
  },
  {
    path: '/child-v',
    microApp: '404vue',
    exact: false,
    _title: '生产管理支持平台 | 生产支持',
    _title_default: '生产管理支持平台 | 生产支持',
  },
  {
    path: '/child-r',
    microApp: '404react',
    exact: false,
    _title: '生产管理支持平台 | 生产支持',
    _title_default: '生产管理支持平台 | 生产支持',
  },
  {
    path: '/403',
    component: require('../Exception/403').default,
    exact: true,
    _title: '生产管理支持平台 | 生产支持',
    _title_default: '生产管理支持平台 | 生产支持',
  },
  {
    path: '/',
    component: require('../../layouts/index').default,
    Routes: [require('../Auth.js').default],
    routes: [
      {
        path: '/',
        component: require('../index').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/Role/RoleMngA',
        component: require('../Platform/Role/newRole').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/Role/RoleMngB',
        component: require('../Platform/Role/newRole').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/Org/OrgPage',
        component: require('../Platform/Org').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/Resource/MenuPage',
        component: require('../Platform/Resource').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/PuserPeople/Ppuser',
        component: require('../Platform/PuserPeople/newsIndex').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/SchedulerTask/TaskManagement',
        component: require('../Platform/TaskManagement').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/SchedulerTask/TaskLog',
        component: require('../Platform/TaskLog').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/Puser/Puser',
        component: require('../Platform/Puser').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/Admin/AdminMng',
        component: require('../Platform/Admin/AdminMng').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/PostMain/PostMaintence',
        component: require('../Platform/Admin/NewPost').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/Flow/ProCategory',
        component: require('../Platform/ProCategory').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/zz',
        component: require('../Platform/Zz').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/ss',
        component: require('../Platform/Ss').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/dic/dicMaintenance',
        component: require('../Platform/Dic/dicMaintenance').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/:post/building',
        component: require('../Exception/building').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/numberConfig',
        component: require('../Platform/NumberConfig').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/SeparationThree',
        component: require('../Platform/SeparationThree').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/log/operationLog',
        component: require('../Platform/Log/operationLog').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/log/interfaceLog',
        component: require('../Platform/Log/interfaceLog').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/log/authLog',
        component: require('../Platform/Log/loginLog').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        path: '/log/mailLog',
        component: require('../Platform/Log/mailLog').default,
        exact: true,
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: '生产管理支持平台 | 生产支持',
        _title_default: '生产管理支持平台 | 生产支持',
      },
    ],
    _title: '生产管理支持平台 | 生产支持',
    _title_default: '生产管理支持平台 | 生产支持',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: '生产管理支持平台 | 生产支持',
    _title_default: '生产管理支持平台 | 生产支持',
  },
];
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
