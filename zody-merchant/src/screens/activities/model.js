import { AppConst } from '../../configs'

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
}
