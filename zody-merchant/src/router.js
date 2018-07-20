import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic';
import { SideBarView } from './screens/side-bar'
import { LoginView } from './screens/login'

const routes = [
  {
    path: '/login',
    component: () => LoginView,
    id: 1
  },
  {
    path: '/activities',
    component: () => SideBarView,
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
