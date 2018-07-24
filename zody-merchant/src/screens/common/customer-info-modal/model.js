import { loadProfile, saveNote } from './service'
import { MessageConst, AppConst } from '../../../configs'
import { Notification } from '../../../components'

export default {
  namespace: 'customerInfo',
  state: {
    dataProfile: {},
  },
  reducers: {
    updateState(state, { payload: { dataProfile } }) {
      return { ...state, dataProfile }
    },
    resetState(state, { payload: { dataProfile } }) {
      return { ...state, dataProfile }
    }
  },
  effects: {
    *loadProfile({ payload }, { call, put }) {
      const data = yield call(loadProfile, payload)
      if (!data || data.err) {
        return Notification(MessageConst.ServerError, AppConst.notification.error)
      }

      const response = data.data
      if (!response || response.err) {
        return Notification(response.message, AppConst.notification.error)
      }
      yield put({
        type: 'updateState',
        payload: {
          dataProfile: response.data.data
        }
      })
    },
    *saveNote({ payload: { noteContent, customerId } }, { call }) {
      const data = yield call(saveNote, noteContent, customerId)
      const response = data.data
      if (!response || response.err) {
        return Notification(response.message, AppConst.notification.error)
      }
      Notification(response.message, AppConst.notification.success)
    }
  }
}
