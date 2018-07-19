import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic';
import Example from './components/Example'
import { LoginView } from './screens/login'

const routes = [
  {
    path: '/',
    component: () => Example,
    id: 1
  },
  {
    path: '/login',
    component: () => LoginView,
    id: 2
  },
]
function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {routes.map(({ path, id, ...dynamics }) => (
          <Route
            path={path}
            exact
            component={dynamic({
              app,
              ...dynamics
            })}
            key={id}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default RouterConfig
