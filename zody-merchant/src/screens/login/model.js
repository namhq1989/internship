import { routerRedux } from 'dva/router'
import { Notification } from '../../components'
import { AppConst, MessageConst } from '../../configs'
import { login } from './service'

export default {
  namespace: 'login',
  state: {},
  effects: {
    *login({ payload }, { call, put }) {
      const data = yield call(login, payload)
      const response = data.data
      if (!response.success) {
        return Notification(response.message, AppConst.notification.error)
      }
      const users = response.data.user
      if (users.statuses.banned) {
        return Notification(MessageConst.Login.UserBanned, AppConst.notification.error)
      }
      localStorage.setItem(AppConst.localStorage.authKey, response.data.token)
      yield put(routerRedux.push('/activities'))
    }
  }
}
