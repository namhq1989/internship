import { routerRedux } from 'dva/router'
import { AppConst, MessageConst } from '../../configs'
import { register } from './service'
import { RcNotification } from '../../components';

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
        return RcNotification(MessageConst.Register.RegisteredAccount, AppConst.notification.error)
      }
      yield call(register, { payload })
      yield put(routerRedux.push('/login'))
    }
  }
}
