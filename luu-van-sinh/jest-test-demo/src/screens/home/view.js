import React from 'react'
import { connect } from 'dva'
import { Button, Select } from 'antd'
import { translate } from 'react-i18next'

import { key, AppConst } from '../../configs'
import './style.less'

const { Option } = Select

export class HomeView extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'home/init'
    })
  }

  /**
   * Handle logout
   */
  logout = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/logout'
    })
  }

  /**
   * Handle change language
   */
  changeLanguage = (lng) => {
    const { i18n } = this.props
    i18n.changeLanguage(lng)
  }

  render() {
    const { user, t, i18n } = this.props
    const currentLanguage = i18n.language
    if (!user) {
      return null
    }
    return (
      <div className="text-center">
        <header>
          <div className="top-left">
            <Select defaultValue={currentLanguage} onChange={value => this.changeLanguage(value)}>
              {
                AppConst.nation.map(item => (
                  <Option key={item.code} value={item.language}>{item.description}</Option>
                ))
              }
            </Select>
          </div>
        </header>
        <h2 className="title">
          {t(key.welcome)} {user.name}
        </h2>
        <Button type="danger" onClick={this.logout}>{t(key.logout)}</Button>
      </div>
    )
  }
}

export default connect(({ home }) => ({ user: home.user }))(translate(key.translations)(HomeView))
