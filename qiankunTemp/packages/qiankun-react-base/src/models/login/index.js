import {history} from 'umi';
import { message, notification } from 'antd';

import {
  login,
} from '@/services/login';


const namespace = 'login'

export default {
  namespace,
  state: {
    userName: '超级管理员',
    count: 0,
  },
  effects: {
    *login ({ payload }, { call, put }) {
      const res = yield call(login, payload)
      if (res.code === 0) {
        localStorage.setItem('token', `Bearer ${res.data.token}`);
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        yield put({
          type: 'save',
          payload: {
            userName: res.data.userName,
            count: 0,
          },
        })
        message.success('登陆成功');
        localStorage.removeItem('KOTOMI-ROUTES')
        history.push('/')
        window.location.reload();
      }
    },
    *logout ({ playload }, { put, select }) {
      // 清除所有缓存
      localStorage.clear();
      const count = yield select(state => state.login.count)
      if (playload && playload.is401) {
        yield put({
          type: 'save',
          payload: {
            count: count + 1,
          },
        })
        history.replace({
          pathname: '/login',
        })
      } else {
        history.replace({
          pathname: '/login',
        })
      }
    },
  },
  reducers: {
    save (state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
}
