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
  }
}
