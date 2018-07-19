import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic';
import Example from './components/Example'
import Example2 from './components/Example2'
import SideBarView from './screens/side-bar/view'

const routes = [
  {
    path: '/',
    component: () => Example,
    id: 1
  },
  {
    path: '/login',
    component: () => Example2,
    id: 2
  },
  {
    path: '/siderbar',
    component: () => SideBarView,
    id: 3
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
