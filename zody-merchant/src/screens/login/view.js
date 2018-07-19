import React from 'react'
import { Form, Icon, Input, Button, Row, Col } from 'antd'
import { ImageConst, Message, AppConst } from '../../configs'
import { Notification } from '../../components'
import styles from './style.css'

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
    if (!email || !password) {
      Notification(Message.Login.RequireEmailAndPassword, AppConst.notification.error)
    } else if (!AppConst.regex.email.test(email)) {
      Notification(Message.Login.EmailIsNotValid, AppConst.notification.error)
    } else {
      // send data to server
      console.log('Checking login')
    }
  }

  render() {
    return (
      <div className={styles.page}>
        <Row type="flex" justify="center">
          <Col md={8} xs={18} sm={18} className={styles.container}>
            <div className={styles.logo}>
              <img src={ImageConst.imageLogin} alt="" />
            </div>
            <Form className={styles.form}>
              <FormItem>
                <Input
                  className={styles.input}
                  prefix={<Icon type="user" />}
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                  onPressEnter={this.submitLogin}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder="Mật khẩu"
                  name="password"
                  onChange={this.handleChange}
                  onPressEnter={this.submitLogin}
                />
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="button"
                  className="zody-button"
                  onClick={this.submitLogin}
                >
                  Đăng nhập
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
export default LoginView
