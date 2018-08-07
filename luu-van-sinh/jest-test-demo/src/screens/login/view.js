import React from 'react'
import { connect } from 'dva';
import { Form, Icon, Input, Button, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { translate } from "react-i18next"
import AccountKit from 'react-facebook-account-kit'

import { ImageConst, AppConst } from '../../configs'
import { RcCountryFlag, RcNotification } from '../../components'
import { validate } from './validator'
import './style.less'

const FormItem = Form.Item

class LoginView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  submitLogin = () => {
    const { email, password } = this.state
    const { dispatch, t } = this.props
    const { status, message } = validate({ email, password })
    if (status) {
      dispatch({
        type: 'login/login',
        payload: {
          email,
          password
        }
      })
    } else {
      RcNotification(t(`message:${message}`), AppConst.notification.error)
    }
  }

  render() {
    const { t, i18n } = this.props
    const changeLanguage = lng => {
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
                  placeholder={t('email')}
                  name="email"
                  onChange={this.handleChange}
                  onPressEnter={this.submitLogin}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder={t('password')}
                  name="password"
                  onChange={this.handleChange}
                  onPressEnter={this.submitLogin}
                />
              </FormItem>
              <FormItem className="btn-center">
                <Button
                  type="primary"
                  htmlType="button"
                  className="zody-button"
                  onClick={this.submitLogin}
                >
                  {t('login')}
                </Button>
                <Row>
                  <AccountKit
                    appId={AppConst.accountKit.appId}
                    version={AppConst.accountKit.version}
                    onResponse={resp => console.log(resp)}
                    csrf={AppConst.accountKit.csrf}
                    language="vi_VN"
                    loginType="PHONE"
                  >
                    {p => <Button {...p}>{t('loginByPhoneNumber')}</Button>}
                  </AccountKit>
                </Row>
                <Row gutter={16}>
                  {t('haveAccount')}
                  <Link to="/register">{t('signUp')}</Link>
                </Row>
              </FormItem>
            </Form>
          </Col>
        </Row>
        <Row type="flex" justify="center" className="options-language">
          {
            AppConst.language.map(item => (
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
export default connect()(translate(['translations', 'message'])(LoginView)
)
