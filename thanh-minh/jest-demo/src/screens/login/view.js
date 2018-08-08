import React from 'react'
import { connect } from 'dva'
import { Col, Row, Form, Icon, Button, Input } from 'antd'
import { translate } from 'react-i18next'
import { ImageConst, AppConst } from '../../configs'
import { RcNotification, AccountKitView, LanguageChange } from '../../components'
import { loginValidator } from './validator'
import { KeysConst } from '../../configs/locale'
import './style.less'

const FormItem = Form.Item
export class LoginView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  /**
   *
   * @param {Object} event
   * Handle change form input::
   * Update state on input change ( Email, Password )
   *
  */
  handleChange = (event) => {
    const newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  /**
   * Submit form login,
   * (check validator) ? (dispatch to models): notification error
   *
  */
  submitLogin = () => {
    const { t, dispatch } = this.props
    const { email, password } = this.state
    const validator = loginValidator(email, password)
    if (validator.isValid) {
      const user = { email, password }
      dispatch({
        type: 'login/login',
        payload: user
      })
    } else {
      RcNotification(t(validator.message), AppConst.notification.error)
    }
  }

  /**
   * Render Login View
   */
  render() {
    const { t, i18n } = this.props
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }
    return (
      <div className="wrapper-login">
        <Row type="flex" justify="center">
          <Col xs={18} sm={18} md={8} className="container">
            <div className="logo">
              <img src={ImageConst.imageLogin} alt="logo" />
            </div>
            <Form className="form-login">
              <FormItem>
                <Input
                  prefix={<Icon type="user" />}
                  id="email"
                  type="email"
                  placeholder={t(KeysConst.emailPalceholder)}
                  name="email"
                  className="input"
                  onChange={this.handleChange}
                  onPressEnter={this.submitLogin}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<Icon type="lock" />}
                  id="password"
                  type="password"
                  placeholder={t(KeysConst.passwordPlaceholder)}
                  name="password"
                  className="input"
                  onChange={this.handleChange}
                  onPressEnter={this.submitLogin}
                />
              </FormItem>
              <FormItem className="div-login-button">
                <Button
                  type="primary"
                  htmlType="button"
                  className="button-login"
                  onClick={this.submitLogin}
                >
                  {t(KeysConst.loginButton)}
                </Button>
              </FormItem>
            </Form>
            <AccountKitView />
            <div className="div-login">
              <span>{t(KeysConst.doNotHaveAnAccount)}&nbsp;&nbsp;</span>
              <a href="/#/register" title="register">
                {t(KeysConst.signUp)}
              </a>
            </div>
            <LanguageChange
              t={t}
              changeLanguage={changeLanguage}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
export default connect()(translate('translations')(LoginView))
