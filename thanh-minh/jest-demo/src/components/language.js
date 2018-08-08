import React from 'react'
import { Button } from 'antd'
import ReactCountryFlag from 'react-country-flag'
import { AppConst } from '../configs'
import { KeysConst } from '../configs/locale'
import './styles.less'

class LanguageChange extends React.Component {
  render() {
    const { t, changeLanguage } = this.props
    return (
      <div className="country-flag">
        <span>{t(KeysConst.languageLabel)}:&nbsp;&nbsp;</span>
        {
          AppConst.language.map(item => (
            <Button onClick={() => changeLanguage(item.language)} key={item.key} className="margin-right">
              <ReactCountryFlag code={item.code} svg />
            </Button>
          ))
        }
      </div>
    )
  }
}

export default LanguageChange
