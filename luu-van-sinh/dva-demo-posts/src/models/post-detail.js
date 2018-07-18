import pathToRegexp from 'path-to-regexp'
import * as postsService from '../services/posts'
import * as commentsService from '../services/comments'

export default {
  namespace: 'postDetail',
  state: {
    post: {},
    comments: []
  },
  reducers: {
    save(state, { payload: { data: comments } }) {
      console.log(comments)
      return { ...state, comments}
    },
    savePost(state, { payload: { data: post } }) {
      console.log('post',post)
      return { ...state, post }
    }
  },
  effects: {
    *fetch({ payload: id }, { call, put }) {
      const { data } = yield call(commentsService.fetch, id)
      yield put({
        type: 'save',
        payload: {
          data
        }
      })
    },
    *getPost({ payload: postId }, { call, put }) {
      const { data } = yield call(postsService.getPost, postId)
      yield put({
        type: 'savePost',
        payload: {
          data
        }
      })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        const match = pathToRegexp('/posts/:postId').exec(pathname)
        if (match) {
          const postId = match[1]
          dispatch({ type: 'fetch', payload: postId })
          dispatch({ type: 'getPost', payload: postId })
        }
      })
    }
  }
}