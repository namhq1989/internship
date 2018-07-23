import { AppConst, MessageConst } from '../../configs'
import { recentActivities } from './service'
import { Notification } from '../../components'

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
    }
  },

  reducers: {
    update(state, action) {
      const cpState = state.filter
      let filter = cpState
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
    *recentActivities({ payload }, { call, put }) {
      console.log('payload,', payload)
      const data = yield call(recentActivities, payload)
      console.log('data recent activities', data)
      if (!data || data.err) {
        return Notification(MessageConst.ServerError, AppConst.notification.error)
      }

      const response = data.data
      if (!response || response.err) {
        return Notification(response.message, AppConst.notification.error)
      }
      yield put({
        type: 'update',
        payload: {
          data: response.data.activities,
          filter: {
            ...payload
          }
        }
      })
    }
  }
}
