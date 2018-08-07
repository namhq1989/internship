import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'
import dynamic from 'dva/dynamic';
import { I18nextProvider } from 'react-i18next'
import { LoginView, LoginModel } from './screens/login'
import { RegisterView, RegisterModel } from './screens/register'
import { HomePageView, LogoutModel } from './screens/home'
import { i18n } from './configs'

const routes = [
  {
    path: '/login',
    models: () => [LoginModel],
    component: () => LoginView,
    id: 1
  },
  {
    path: '/register',
    models: () => [RegisterModel],
    component: () => RegisterView,
    id: 2
  },
  {
    path: '/home',
    models: () => [LogoutModel],
    component: () => HomePageView,
    id: 3
  }
]
function RouterConfig({ history, app }) {
  return (
    <I18nextProvider i18n={i18n}>
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
          <Route render={() => (<Redirect to="/home" />)} />
        </Switch>
      </Router>
    </I18nextProvider>
  )
}

export default RouterConfig
