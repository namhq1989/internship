import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'
import Posts from './routes/posts'
import PostDetail from './routes/post-detail'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/posts" exact component={Posts} />
        <Route path="/posts/:postId" component={PostDetail} />
        <Route path="/" render={() => (
          <Redirect to="/posts" />
        )}/>
      </Switch>
    </Router>
  )
}

export default RouterConfig
