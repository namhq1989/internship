import { loadProfile, saveNote, fetch, deleteBill } from './service'
import { MessageConst, AppConst } from '../../../configs'
import { Notification } from '../../../components'

export default {
  namespace: 'customerInfo',
  state: {
    dataProfile: {},
    data: [],
    sort: '-createdAt',
  },
  reducers: {
    updateActivities(state, { payload: { data } }) {
      return { ...state, data }
    },
    updateSort(state, { payload: { sort } }) {
      console.log('sort model', sort);
      return { ...state, sort }
    },
    deleteBill(state, { payload: { billId } }) {
      let newData = state.data
      newData = newData.filter(item => item.bill._id !== billId.billId)
      return { ...state, data: newData }
    },
    resetState() {
      return { data: [], sort: '-createdAt', dataProfile: {} }
    },
    updateProfile(state, { payload: { dataProfile } }) {
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
        type: 'updateProfile',
        payload: {
          dataProfile: response.data.data
        }
      })
    },
    *saveNote({ payload: { noteContent, customerId } }, { call, put }) {
      console.log('id', customerId)
      const data = yield call(saveNote, noteContent, customerId)
      const response = data.data
      if (!response || response.err) {
        return Notification(response.message, AppConst.notification.error)
      }
      yield put({
        type: 'loadProfile',
        payload: customerId
      })
      Notification(response.message, AppConst.notification.success)
    },
    *fetch({ payload }, { call, put }) {
      const data = yield call(fetch, payload)
      const dataResponse = data.data.data.data
      yield put({
        type: 'updateActivities',
        payload: {
          data: dataResponse
        }
      })
    },
    *remove({ payload: billId }, { call, put }) {
      const data = yield call(deleteBill, billId)
      if (!data.data.success) {
        return Notification(data.data.message, AppConst.notification.error)
      }
      yield put({
        type: 'deleteBill',
        payload: {
          billId
        }
      })
      Notification(MessageConst.Common.DeleteBillSuccess, AppConst.notification.success)
    },
  }
}
