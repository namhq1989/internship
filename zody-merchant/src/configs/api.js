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
        url: '/v2.7/merchants/activities',
        method: METHODS.get
      }
    },
    profile: () => {
      return {
        url: '/v2.7/merchants/customerProfile/',
        method: METHODS.get
      }
    },
    updateCustomer: () => {
      return {
        url: '/merchants/customerInfo/',
        method: METHODS.put
      }
    },
    phoneActivities: (phone) => {
      return {
        url: `/v2.7/merchants/phoneActivities/${phone}`,
        method: METHODS.get
      }
    },
    customerActivities: (customerId) => {
      return {
        url: `/v2.7/merchants/customerActivities/${customerId}`,
        method: METHODS.get
      }
    },
    deleteBill: (billId) => {
      return {
        url: `/bills/${billId}`,
        method: METHODS.delete
      }
    }
  }
}
