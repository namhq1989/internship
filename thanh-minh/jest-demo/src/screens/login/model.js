import { routerRedux } from 'dva/router'
import { RcNotification } from '../../components'
import { AppConst } from '../../configs'
import { vi, en } from '../../configs/locale'
import i18n from '../../configs/i18n'


export default {
  namespace: 'login',
  state: {},
  effects: {
    *init(payload, { put }) {
      const account = localStorage.getItem(AppConst.localStorage.accountLogin)
      if (account) {
        yield put(routerRedux.push('/home'))
      }
    },
    *login({ payload }, { put }) {
      const languages = i18n.language
      if (localStorage.getItem(AppConst.localStorage.accounts)) {
        const accounts = JSON.parse(localStorage.getItem(AppConst.localStorage.accounts))
        const isExistsAccount = accounts.find(acc => (
          acc.email === payload.email && acc.password === payload.password))
        if (!isExistsAccount) {
          if (languages === 'vi') {
            RcNotification(vi.translations.errorAccount, AppConst.notification.error)
          } else {
            RcNotification(en.translations.errorAccount, AppConst.notification.error)
          }
          return
        } else {
          localStorage.setItem(AppConst.localStorage.accountLogin, JSON.stringify(isExistsAccount))
        }
        yield put(routerRedux.push('/home'))
      } else if (languages === 'vi') {
        RcNotification(vi.translations.notExistAccounts, AppConst.notification.error)
      } else {
        RcNotification(en.translations.notExistAccounts, AppConst.notification.error)
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/login') {
          dispatch({ type: 'init' })
        }
      })
    }
  }
}
