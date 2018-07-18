import * as commentService from '../services/post'
import pathToRegexp from 'path-to-regexp'
export default {
  namespace: 'comments',
  state: {
    post: {},
    listCom:[],
  },
  reducers: {
    update(state, { payload: {data: listCom} }) {
      return {...state,listCom}
    },
    savePost(state, {payload:{data:post}}) {
      return {...state,post}
    }
  },
  effects: {
    *comment({payload: postId},{call, put}) {
      const {data} = yield call(commentService.commentById,postId)
      yield put({ type: 'update', payload: {data}});
    },
    *fetchById({payload: postId},{call, put}) {
      const {data} = yield call(commentService.fetchById,postId)
      yield put({ type: 'savePost', payload: {data}});
    }
  },
  subscriptions: {
    setup ({dispatch,history}){
      return history.listen(({pathname}) => {
        const match=pathToRegexp('/post/:postId').exec(pathname)
        if (match) {
          const postId= match[1]
          dispatch({type:'comment', payload:postId})
          dispatch({type:'fetchById',payload:postId})
        }  
      }); 
    }
  }
  
};