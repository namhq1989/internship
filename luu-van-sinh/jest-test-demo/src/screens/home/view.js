import React from 'react'
import { connect } from 'dva'
import { Button, Select } from 'antd'
import { translate } from 'react-i18next'

import './style.less'

const Option = Select.Option

export class HomeView extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'home/init'
    })
  }

  logout = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/logout'
    })
  }

  render() {
    const { user, t, i18n } = this.props
    const currentLanguage = i18n.language
    const changeLanguage = lng => {
      i18n.changeLanguage(lng)
    }
    if (!user) {
      return null
    }
    return (
      <div className="text-center">
        <header>
          <div className="top-left">
            <Select defaultValue={currentLanguage} onChange={(value) => changeLanguage(value)}>
              <Option value="vi">Tieng Viet</Option>
              <Option value="en">English</Option>
            </Select>
          </div>
        </header>
        <h2 className="title">
          {t('welcome')} {user.name}
        </h2>
        <Button type="danger" onClick={this.logout}>{t('logout')}</Button>
      </div>
    )
  }
}

export default connect(({ home }) => ({ user: home.user }))(translate('translations')(HomeView))
