import { AppConst, MessageConst } from '../../configs'
import { Notification } from '../../components'
import { fetch } from './service'

export default {
  namespace: 'activities',
  state: {
    data: [],
    statistic: {
      revenue: 0,
      releasedCoin: 0,
      totalBill: 0
    },
    filter: {
      start: AppConst.components.rangePicker.start,
      end: AppConst.components.rangePicker.end,
      status: AppConst.components.customerTypes.default,
      sort: '-createdAt',
      total: 0,
    }
  },
  reducers: {
    updateState(state, action) {
      let { filter } = state
      if (action.payload.filter) {
        filter = Object.assign(filter, action.payload.filter)
      }
      action.payload.filter = filter
      return {
        ...state,
        ...action.payload
      }
    }
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const data = yield call(fetch, payload)
      if (!data || data.err) {
        return Notification(MessageConst.ServerError, AppConst.notification.error)
      }

      const response = data.data
      if (!response || !response.success) {
        return Notification(response.message, AppConst.notification.error)
      }

      yield put({
        type: 'updateState',
        payload: {
          statistic: response.data,
          total: response.data.totalBill,
          ...payload
        }
      })
    }
  }
}
