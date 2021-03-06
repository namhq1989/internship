import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'
import dynamic from 'dva/dynamic';
import { ActivitiesView, ActivitiesModel } from './screens/activities'
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
    component: () => ActivitiesView,
    id: 2
  },
]
function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/login" />)} />
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
        <Route render={() => (<Redirect to="/activities" />)} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
