import React from 'react'
import { connect } from 'dva'
import { Col, Row, Form, Icon, Button, Input } from 'antd'
import { translate } from 'react-i18next'
import AccountKit from 'react-facebook-account-kit'
import { ImageConst, AppConst } from '../../configs'
import { RcNotification } from '../../components'
import { loginValidator } from './validator'
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

  handleChange = (event) => {
    const newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  submitLogin = () => {
    const { t, dispatch } = this.props
    const { email, password } = this.state
    const validator = loginValidator(email, password)
    if (validator.status) {
      const user = { email, password }
      dispatch({
        type: 'login/login',
        payload: user
      })
    } else {
      RcNotification(t(validator.message), AppConst.notification.error)
    }
  }

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
                  placeholder={t('email-palceholder')}
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
                  placeholder={t('password-placeholder')}
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
                  {t('login-button')}
                </Button>
              </FormItem>
            </Form>
            <div className="account-kit">
              <AccountKit
                appId="195477857985857"
                version="v1.0"
                onResponse={resp => console.log(resp)}
                csrf="Demo-Account-Kit"
                language={t('language-o')}
                loginType="EMAIL"
              >
                {p => <Button {...p}>Account Kit</Button>
              }
              </AccountKit>
            </div>
            <div className="div-login">
              <span>{t('Do not have an account')}&nbsp;&nbsp;</span>
              <a href="/#/register" title="register">
                {t('Sign-up')}
              </a>
            </div>
            <div className="country-flag">
              <span>{t('language- label')}:&nbsp;&nbsp;</span>
              <Button id="vi-button" onClick={() => changeLanguage('vi')}>
                <img src={ImageConst.imageIconVietNamese} alt="vn" />
              </Button>  &nbsp;&nbsp;&nbsp;&nbsp;
              <Button id="en-button" onClick={() => changeLanguage('en')} className="en-flae">
                <img src={ImageConst.imageIconEngland} alt="en" />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default connect()(translate('translations')(LoginView))
