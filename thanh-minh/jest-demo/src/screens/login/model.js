import { routerRedux } from 'dva/router'
import { RcNotification } from '../../components'
import { MessageConst, AppConst } from '../../configs'
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
          console.log(MessageConst[languages]);
          RcNotification(MessageConst[languages].Login.ErrorAccount, AppConst.notification.error)
          return
        } else {
          localStorage.setItem(AppConst.localStorage.accountLogin, JSON.stringify(isExistsAccount))
        }
        RcNotification(MessageConst[languages].Login.LoginSuccess, AppConst.notification.success)
        yield put(routerRedux.push('/home'))
      } else {
        RcNotification(MessageConst[languages].Login.NotExistAccounts, AppConst.notification.error)
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
