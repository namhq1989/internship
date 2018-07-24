import { fetch, deleteBill } from './service'
import { Notification } from '../../../components'
import { MessageConst, AppConst } from '../../../configs';

export default {
  namespace: 'customerInfo',
  state: {
    data: [],
    sort: '-createdAt',
  },
  reducers: {
    updateState(state, { payload: { data } }) {
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
      return { data: [], sort: '-createdAt' }
    }
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const data = yield call(fetch, payload)
      const dataResponse = data.data.data.data
      yield put({
        type: 'updateState',
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
