import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'
import { LoginView, LoginModel } from './screens/login'
import { RegisterView, RegisterModel } from './screens/register'
import { HomeView, HomeModel } from './screens/home'
import i18n from './i18n'
import { URLConst } from './configs'

const routes = [
  {
    path: URLConst.login,
    models: () => [LoginModel],
    component: () => LoginView,
    id: 1
  },
  {
    path: URLConst.register,
    models: () => [RegisterModel],
    component: () => RegisterView,
    id: 2
  },
  {
    path: URLConst.home,
    models: () => [HomeModel],
    component: () => HomeView,
    id: 3
  },
]

function RouterConfig({ history, app }) {
  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  )
}

export default RouterConfig
