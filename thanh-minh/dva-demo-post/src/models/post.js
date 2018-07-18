import * as postService from '../services/post'
export default {
  namespace: 'post',
  state: {
    list:[],
  },
  reducers: {
    update(state, { payload: {data: list} }) {
      return {...state,list}
    },
    remove(state, {payload: id}){
      const list = state.list.filter(p => p.id !== id)
      return {...state, list}
    },
  },
  effects: {
    *fetch({payload},{call, put}) {
      const {data} = yield call(postService.fetch)
      yield put({ type: 'update', payload: {data}});
    },
    
  },
  subscriptions: {
    setup ({dispatch,history}){
      return history.listen(({pathname, query}) => {
        if ( pathname === '/post') {
          dispatch({type:'fetch', payload: query})
        }
        
      }); 
    }
  }
  
};