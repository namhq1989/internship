import React from 'react'
import { connect } from 'dva';
import { Form, Icon, Input, Button, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { translate } from 'react-i18next'

import { ImageConst, AppConst, key, URLConst } from '../../configs'
import { RcCountryFlag, RcNotification } from '../../components'
import { validate } from './validator'
import './style.less'
import RcAccountKitLogin from '../../components/account-kit-login';

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
   * Handle change form input
   */
  handleChange = (e) => {
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  /**
   * Handle submit form
   */
  submitLogin = () => {
    const { email, password } = this.state
    const { dispatch, t } = this.props
    const { isValid, message } = validate(email, password)
    if (isValid) {
      dispatch({
        type: 'login/login',
        payload: {
          email,
          password
        }
      })
    } else {
      RcNotification(t(`${key.messages}:${message}`), AppConst.notification.error)
    }
  }

  render() {
    const { t, i18n } = this.props
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }
    return (
      <div className="page">
        <Row type="flex" justify="center">
          <Col md={8} xs={18} sm={18} className="container">
            <div className="logo">
              <img src={ImageConst.imageLogin} alt="" />
            </div>
            <Form className="form-container">
              <FormItem>
                <Input
                  prefix={<Icon type="user" />}
                  type="email"
                  placeholder={t(key.email)}
                  name="email"
                  onChange={this.handleChange}
                  onPressEnter={this.submitLogin}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder={t(key.password)}
                  name="password"
                  onChange={this.handleChange}
                  onPressEnter={this.submitLogin}
                />
              </FormItem>
              <FormItem className="btn-center">
                <Button
                  type="primary"
                  htmlType="button"
                  className="btn-submit"
                  onClick={this.submitLogin}
                >
                  {t(key.login)}
                </Button>
                <Row>
                  <RcAccountKitLogin t={t} />
                </Row>
                <Row gutter={16}>
                  {t(key.dontHaveAccount)}
                  <Link to={URLConst.register}>{t(key.signUp)}</Link>
                </Row>
              </FormItem>
            </Form>
          </Col>
        </Row>
        <Row type="flex" justify="center" className="options-language">
          {
            AppConst.nation.map(item => (
              <RcCountryFlag
                changeLanguage={changeLanguage}
                language={item.language}
                code={item.code}
                key={item.code}
              />
            ))
          }
        </Row>
      </div>
    )
  }
}
export default connect()(translate([key.translations, key.messages])(LoginView))
