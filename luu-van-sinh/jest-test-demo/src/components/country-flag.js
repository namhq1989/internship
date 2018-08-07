import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { Button } from 'antd'
import './style.less'

class RcCountryFlag extends React.Component {
  render() {
    const { changeLanguage, language, code } = this.props
    return (
      <Button onClick={() => changeLanguage(language)} className="margin-right">
        <ReactCountryFlag code={code} svg />
      </Button>
    )
  }
}
export default RcCountryFlag
