import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'button', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/button.js').default) });
app.model({ namespace: 'dict', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/dict.js').default) });
app.model({ namespace: 'global', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/global.js').default) });
app.model({ namespace: 'index', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/home/index.js').default) });
app.model({ namespace: 'index', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/login/index.js').default) });
app.model({ namespace: 'menu', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/menu.js').default) });
app.model({ namespace: 'index', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/message/index.js').default) });
app.model({ namespace: 'index', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/org/index.js').default) });
app.model({ namespace: 'index', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/puser/index.js').default) });
app.model({ namespace: 'index', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/role/index.js').default) });
app.model({ namespace: 'index', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/TaskLog/index.js').default) });
app.model({ namespace: 'index', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/TaskManagement/index.js').default) });
app.model({ namespace: 'tree', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/tree.js').default) });
app.model({ namespace: 'user', ...(require('/Users/zhangrenliu/workspace/qiankun/qiankunTemp/packages/qiankun-react-base/src/models/user.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
