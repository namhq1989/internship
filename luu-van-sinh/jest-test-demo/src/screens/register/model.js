import { routerRedux } from 'dva/router'
import { AppConst, URLConst } from '../../configs'
import { register } from './service'
import { RcNotification } from '../../components'
import i18n from '../../i18n'

const REGISTERED_ACCOUNT = {
  vi: 'Email đã được đăng ký',
  en: 'Email have been registered!'
}

export default {
  namespace: 'register',
  state: {},
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    *register({ payload }, { call, put }) {
      const { email } = payload
      const accountList = JSON.parse(localStorage.getItem(AppConst.localStorage.accountList))
      if (accountList && accountList.find(item => item.email === email)) {
        return RcNotification(REGISTERED_ACCOUNT[i18n.language], AppConst.notification.error)
      }
      yield call(register, { payload })
      yield put(routerRedux.push(URLConst.login))
    }
  }
}
