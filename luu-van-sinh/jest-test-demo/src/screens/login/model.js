import { routerRedux } from 'dva/router'
import i18n from '../../i18n'
import { AppConst, URLConst } from '../../configs'
import { RcNotification } from '../../components'
import { storeUserInfo } from './service'

const INCORRECT_EMAIL_OR_PASSWORD = {
  vi: 'Email hoặc mật khẩu không đúng',
  en: 'Email or password is incorrect',
}

export default {
  namespace: 'login',
  state: {},
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    *login({ payload: { email, password } }, { call, put }) {
      let userList = JSON.parse(localStorage.getItem(AppConst.localStorage.accountList))
      if (!userList) {
        userList = []
      }
      const userInfo = userList.find(item => (item.email === email && item.password === password))
      if (!userInfo) {
        return RcNotification(INCORRECT_EMAIL_OR_PASSWORD[i18n.language], AppConst.notification.error)
      }
      yield call(storeUserInfo, { payload: userInfo })
      yield put(routerRedux.push(URLConst.home))
    }
  }
}
