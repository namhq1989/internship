import React from 'react'
import { connect } from 'dva'
import { Row, Col, Button } from 'antd'
import { translate } from 'react-i18next'
import { ImageConst } from '../../configs'
import './style.less'

class HomePageView extends React.Component {
  componentDidMount() {
    this.init()
    this.saveUserInfo()
  }

  init = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/init',
    })
  }

  saveUserInfo = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/userInfoSave',
    })
  }

  handleLogOut = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/logout',
    })
  }

  render() {
    const { home: { userInfo } } = this.props
    const { t, i18n } = this.props
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={8} className="wrapper">
            <h1>{t('welcome-page')} <strong className="user-info">{userInfo.name}</strong>{t('come-page')}</h1>
            <Button
              type="primary"
              onClick={this.handleLogOut}
              className="logout-button"
            >{t('log-out')}
            </Button><br /><br />
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

export default connect(({ home }) => ({ home }))(translate('translations')(HomePageView))
