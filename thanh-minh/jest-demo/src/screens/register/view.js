import React from 'react'
import { connect } from 'dva'
import { Col, Row, Form, Icon, Input, Button } from 'antd'
import { translate } from 'react-i18next'
import { ImageConst, AppConst } from '../../configs'
import { RcNotification, LanguageChange } from '../../components'
import { registerValidator } from './validator'
import { KeysConst } from '../../configs/locale'
import './style.less'


const FormItem = Form.Item
export class RegisterView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      age: ''
    }
  }

  /**
   * @param {Object} event
   * Handle change form input::
   * Update state on input change (name, email, password, repassword, age)
   */
  handleChange = (event) => {
    // event.preventDefault()
    const newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  /**
   * Submit Register
   * (check validator) ? (dispatch to models): notification error
   */
  submitRegister = () => {
    const { email, password, rePassword, name, age } = this.state
    const { t, dispatch } = this.props
    const validator = registerValidator(name, email, password, rePassword, age)
    if (validator.isValid) {
      const account = { name, email, password, rePassword, age }
      dispatch({
        type: 'register/register',
        payload: account
      })
    } else {
      RcNotification(t(validator.message), AppConst.notification.error)
    }
  }

  /**
   * Render Register View
   */
  render() {
    const { t, i18n } = this.props
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }
    return (
      <div className="wrapper-register">
        <Row type="flex" justify="center">
          <Col xs={18} sm={18} md={8} className="container">
            <div className="logo">
              <img src={ImageConst.imageLogin} alt="logo" />
              <h2 className="title-register">{t(KeysConst.signUp)}</h2>
            </div>
            <Form className="form-register">
              <FormItem className="margin-input">
                <Input
                  prefix={<Icon type="user" />}
                  type="text"
                  placeholder={t(KeysConst.usernamePlaceholder)}
                  name="name"
                  className="input"
                  id="username"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem className="margin-input">
                <Input
                  prefix={<Icon type="mail" />}
                  type="email"
                  placeholder={t(KeysConst.emailPalceholder)}
                  name="email"
                  id="email"
                  className="input"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem className="margin-input">
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder={t(KeysConst.passwordPlaceholder)}
                  name="password"
                  id="password"
                  className="input"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem className="margin-input">
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder={t(KeysConst.repasswordPlaceholder)}
                  name="rePassword"
                  id="repassword"
                  className="input"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem className="margin-input">
                <Input
                  prefix={<Icon type="idcard" />}
                  type="text"
                  placeholder={t(KeysConst.agePlaceholder)}
                  name="age"
                  id="age"
                  className="input"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem className="div-register-button">
                <Button
                  type="pi18nKeyrimary"
                  htmlType="button"
                  className="button-register"
                  onClick={this.submitRegister}
                >
                  {t(KeysConst.signUp)}
                </Button>
              </FormItem>
            </Form>
            <div className="div-login">
              <span>{t(KeysConst.doHaveAnAccount)}&nbsp;&nbsp;</span>
              <a href="/#/login" title="login">
                {t(KeysConst.loginButton)}
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
export default connect()(translate('translations')(RegisterView))
