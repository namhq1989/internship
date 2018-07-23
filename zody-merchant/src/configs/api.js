const METHODS = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  patch: 'PATCH'
}

export default {
  methods: METHODS,
  login: () => {
    return {
      url: '/login',
      method: METHODS.post
    }
  },
  activities: {
    pageActivity: () => {
      return {
        url: '/v2.7/merchants/pageActivity',
        method: METHODS.get
      }
    },
    recentActivities: () => {
      return {
        url: '/v2.7/chains/report/activities',
        method: METHODS.get
      }
    },
    profile: (customerId) => {
      return {
        url: `/v2.7/chains/report/customerProfile/${customerId}`,
        method: METHODS.get
      }
    },
    phoneActivities: (phone) => {
      return {
        url: `/v2.7/chains/report/phoneActivities/${phone}`,
        method: METHODS.get
      }
    },
    customerActivities: (customerId) => {
      return {
        url: `/v2.7/chains/report/customerActivities/${customerId}`,
        method: METHODS.get
      }
    },
    exportActivities: () => {
      return {
        url: '/v2.7/chains/report/export-excel/activities',
        method: METHODS.get
      }
    }
  },
}
