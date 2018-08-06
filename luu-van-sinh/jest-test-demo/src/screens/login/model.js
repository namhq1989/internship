import { routerRedux } from 'dva/router'
import i18n from '../../i18n'
import { AppConst, MessageConst } from '../../configs'
import { RcNotification } from '../../components'
import { storeUserInfo } from './service'

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
        const language = i18n.language
        return RcNotification(MessageConst[language].Login.InCorrectEmailOrPassWord,
          AppConst.notification.error)
      }
      yield call(storeUserInfo, { payload: userInfo })
      yield put(routerRedux.push('/'))
    }
  }
}
