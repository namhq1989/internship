import { routerRedux } from 'dva/router'
import { AppConst } from '../../configs'

export default {
  namespace: 'home',
  state: {
    userInfo: {}
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state, ...payload
      }
    }
  },
  effects: {
    *init(payload, { put }) {
      const userInfo = JSON.parse(localStorage.getItem(AppConst.localStorage.accountLogin))
      if (!userInfo) {
        yield put(routerRedux.push('/login'))
      }
    },
    *userInfoSave(payload, { put }) {
      const userInfo = JSON.parse(localStorage.getItem(AppConst.localStorage.accountLogin))
      yield put({
        type: 'save',
        payload: {
          userInfo
        }
      })
    },
    *logout(payload, { put }) {
      localStorage.removeItem(AppConst.localStorage.accountLogin)
      yield put(routerRedux.push('/login'))
    }
  }
}
