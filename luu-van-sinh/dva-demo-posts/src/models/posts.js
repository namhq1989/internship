import * as postsService from '../services/posts'

export default {
  namespace: 'posts',
  state: {
    list: []
  },
  reducers: {
    save(state, { payload: { data: list } }) {
      return { ...state, list}
    },
    delete(state, { payload: id }) {
      const list = state.list.filter((post) => post.id !== id)
      return { ...state, list }
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const { data } = yield call(postsService.fetch)
      yield put({
        type: 'save',
        payload: {
          data
        }
      })
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/posts') {
          dispatch({ type: 'fetch', payload: query })
        }
      })
    }
  }
}