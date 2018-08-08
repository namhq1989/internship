import { routerRedux } from 'dva/router'
import lodash from 'lodash'
import { getUser, logout } from './service'
import { URLConst } from '../../configs'

export default {
  namespace: 'home',
  state: {
    user: null,
  },
  effects: {
    *init(payload, { call, put }) {
      const user = yield call(getUser)
      if (lodash.isEmpty(user)) {
        return yield put(routerRedux.push(URLConst.login))
      }
      yield put({
        type: 'updateState',
        payload: {
          user
        }
      })
    },
    *logout(payload, { call, put }) {
      yield call(logout)
      yield put({
        type: 'updateState',
        payload: {
          user: null
        }
      })
      yield put(routerRedux.push(URLConst.login))
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
