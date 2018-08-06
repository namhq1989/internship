import React from 'react'
import { connect } from 'dva'
import { Col, Row, Form, Icon, Input, Button } from 'antd'
import { translate } from 'react-i18next'
import { ImageConst, AppConst } from '../../configs'
import { RcNotification } from '../../components'
import { registerValidator } from './validator'
import './style.less'


const FormItem = Form.Item
class RegisterView extends React.Component {
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

  handleChange = (event) => {
    event.preventDefault()
    const newState = {}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  submitRegister = () => {
    const { email, password, rePassword, name, age } = this.state
    const { t, dispatch } = this.props
    const validator = registerValidator(name, email, password, rePassword, age)
    if (validator.status) {
      const account = { name, email, password, rePassword, age }
      dispatch({
        type: 'register/register',
        payload: account
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
      <div className="wrapper-register">
        <Row type="flex" justify="center">
          <Col xs={18} sm={18} md={8} className="container">
            <div className="logo">
              <img src={ImageConst.imageLogin} alt="logo" />
              <h2 className="title-register">{t('Sign-up')}</h2>
            </div>
            <Form className="form-register">
              <FormItem className="margin-input">
                <Input
                  prefix={<Icon type="user" />}
                  type="text"
                  placeholder={t('Username-placeholder')}
                  name="name"
                  className="input"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem className="margin-input">
                <Input
                  prefix={<Icon type="mail" />}
                  type="email"
                  placeholder={t('email-palceholder')}
                  name="email"
                  className="input"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem className="margin-input">
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder={t('password-placeholder')}
                  name="password"
                  className="input"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem className="margin-input">
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder={t('repassword-placeholder')}
                  name="rePassword"
                  className="input"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem className="margin-input">
                <Input
                  prefix={<Icon type="idcard" />}
                  type="text"
                  placeholder={t('age-placeholder')}
                  name="age"
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
                  {t('Sign-up')}
                </Button>
              </FormItem>
            </Form>
            <div className="div-login">
              <span>{t('Do have an account')}&nbsp;&nbsp;</span>
              <a href="/#/login" title="login">
                {t('login-button')}
              </a>
            </div>
            <div className="country-flag">
              <span>{t('language- label')}:&nbsp;&nbsp;</span>
              <Button onClick={() => changeLanguage('vi')}>
                <img src={ImageConst.imageIconVietNamese} alt="vn" />
              </Button>  &nbsp;&nbsp;&nbsp;&nbsp;
              <Button onClick={() => changeLanguage('en')} className="en-flae">
                <img src={ImageConst.imageIconEngland} alt="en" />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default connect()(translate('translations')(RegisterView))
