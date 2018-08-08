import React from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd'
import { connect } from 'dva'
import { translate } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ImageConst, AppConst, URLConst, key } from '../../configs'
import { validate } from './validator'
import { RcCountryFlag, RcNotification } from '../../components'
import './style.less'

const FormItem = Form.Item

export class RegisterView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: '',
      password: '',
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
   * Handle submit register
   */
  submitRegister = () => {
    const { email, password, age, name } = this.state
    const { dispatch, t } = this.props
    const { isValid, message } = validate(name, age, email, password)
    if (isValid) {
      dispatch(
        {
          type: 'register/register',
          payload: { email, password, name, age }
        }
      )
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
                  type="text"
                  placeholder={t(key.name)}
                  name="name"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<Icon type="solution" />}
                  type="number"
                  placeholder={t(key.age)}
                  name="age"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<Icon type="mail" />}
                  type="email"
                  placeholder={t(key.email)}
                  name="email"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder={t(key.password)}
                  name="password"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem className="btn-center">
                <Button
                  type="primary"
                  htmlType="button"
                  className="btn-submit"
                  onClick={this.submitRegister}
                >
                  {t(key.signUp)}
                </Button>
                <Row gutter={16}>
                  {t(key.haveAccount)}
                  <Link to={URLConst.login}>{t(key.login)}</Link>
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
export default connect()(translate([key.translations, key.messages])(RegisterView))
