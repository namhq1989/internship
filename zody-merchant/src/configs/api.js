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
  }
}
