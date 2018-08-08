import React from 'react'
import { connect } from 'dva'
import { Row, Col, Button } from 'antd'
import { translate } from 'react-i18next'
import { LanguageChange } from '../../components'
import { KeysConst } from '../../configs/locale'
import './style.less'

export class HomePageView extends React.Component {
  componentDidMount() {
    this.init()
    this.saveUserInfo()
  }

  /**
   * Call to model for Check whether the user account is logged on
   */
  init = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/init',
    })
  }

  /**
   * Call to model for save user account into store
   */
  saveUserInfo = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/userInfoSave',
    })
  }

  /**
   * Call to model for log out
   */
  handleLogOut = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/logout',
    })
  }

  /**
   * Render register view
   */
  render() {
    const { t, i18n, userInfo } = this.props
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={8} className="wrapper">
            <h1>{t(KeysConst.welcomePage)}
              <strong className="user-info">
                {userInfo.name}
              </strong>
              {t(KeysConst.comePage)}
            </h1>
            <Button
              type="primary"
              onClick={this.handleLogOut}
              className="logout-button"
            >{t(KeysConst.logOut)}
            </Button><br /><br />
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
export default connect(
  ({ home }) => (
    { userInfo: home.userInfo }
  )
)(translate('translations')(HomePageView))
