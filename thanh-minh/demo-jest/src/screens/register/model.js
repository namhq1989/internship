import { routerRedux } from 'dva/router'
import { RcNotification } from '../../components'
import { MessageConst, AppConst, i18n } from '../../configs'

export default {
  namespace: 'register',
  state: {},
  effects: {
    *register({ payload }, { put }) {
      const languages = i18n.language

      if (!localStorage.getItem(AppConst.localStorage.accounts)) {
        const accounts = []
        accounts.push(payload)
        localStorage.setItem(AppConst.localStorage.accounts, JSON.stringify(accounts))
      } else {
        const accounts = JSON.parse(localStorage.getItem(AppConst.localStorage.accounts))
        const isAccount = accounts.find(account => account.email === payload.email)
        if (isAccount) {
          RcNotification(MessageConst[languages].Register.EmailExists, AppConst.notification.error)
          return
        } else {
          accounts.push(payload)
          localStorage.setItem(AppConst.localStorage.accounts, JSON.stringify(accounts))
        }
      }
      RcNotification(MessageConst[languages].Register.SuccessRegister, AppConst.notification.success)
      yield put(routerRedux.push('/login'))
    }
  }
}
