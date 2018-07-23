import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic';
import { SideBarView, ActivitiesModel } from './screens/activities'
import { LoginView, LoginModel } from './screens/login'


const routes = [
  {
    path: '/login',
    models: () => [LoginModel],
    component: () => LoginView,
    id: 1
  },
  {
    path: '/activities',
    models: () => [ActivitiesModel],
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
