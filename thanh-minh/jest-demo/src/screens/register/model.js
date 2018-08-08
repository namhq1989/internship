import { routerRedux } from 'dva/router'
import { RcNotification } from '../../components'
import { AppConst, i18n } from '../../configs'
import { vi, en } from '../../configs/locale'

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
          if (languages === 'vi') {
            RcNotification(vi.translations.emailExists, AppConst.notification.error)
          } else {
            RcNotification(en.translations.emailExists, AppConst.notification.error)
          }
          return
        } else {
          accounts.push(payload)
          localStorage.setItem(AppConst.localStorage.accounts, JSON.stringify(accounts))
        }
      }
      if (languages === 'vi') {
        RcNotification(vi.translations.successRegister, AppConst.notification.success)
      } else {
        RcNotification(en.translations.successRegister, AppConst.notification.success)
      }
      yield put(routerRedux.push('/login'))
    }
  }
}
