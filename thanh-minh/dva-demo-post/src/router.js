import React from 'react'
import { Router, Route, Switch,Redirect} from 'dva/router'
import Post from './routes/post'
import Comment from './routes/comment'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/post" exact component={Post} />
        <Route path="/post/:postId" exact component={Comment}/>
        <Route exact path="/*" render= {() => (
          <Redirect to="/post"/>
        )
        }/>
      </Switch>
    </Router>
  );
}
export default RouterConfig;
