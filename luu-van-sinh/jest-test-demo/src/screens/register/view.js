import React from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd'
import { connect } from 'dva'
import { translate } from "react-i18next"
import { Link } from 'react-router-dom'
import { ImageConst, AppConst } from '../../configs'
import { validate } from './validator'
import { RcCountryFlag, RcNotification } from '../../components'
import './style.less'

const FormItem = Form.Item

class RegisterView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  submitRegister = () => {
    const { email, password, age, name } = this.state
    const { dispatch, t } = this.props
    const { status, message } = validate({ name, age, email, password })
    if (status) {
      dispatch(
        {
          type: 'register/register',
          payload: { email, password, name, age }
        }
      )
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
                  type="text"
                  placeholder={t('name')}
                  name="name"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<Icon type="solution" />}
                  type="number"
                  placeholder={t('age')}
                  name="age"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<Icon type="mail" />}
                  type="email"
                  placeholder={t('email')}
                  name="email"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder={t('password')}
                  name="password"
                  onChange={this.handleChange}
                  onPressEnter={this.submitRegister}
                />
              </FormItem>
              <FormItem className="btn-center">
                <Button
                  type="primary"
                  htmlType="button"
                  className="zody-button"
                  onClick={this.submitRegister}
                >
                  {t('signUp')}
                </Button>
                <Row gutter={16}>
                  {t('haveAccount')}
                  <Link to="/login">{t('login')}</Link>
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
export default connect()(translate(['translations', 'message'])(RegisterView))
