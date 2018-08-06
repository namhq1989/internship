import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { Row, Button } from 'antd'
import './style.less'

class RcCountryFlag extends React.Component {
  render() {
    const { changeLanguage } = this.props
    return (
      <Row type="flex" justify="center" className="options-language">
        <Button onClick={() => changeLanguage('vi')} className="margin-right">
          <ReactCountryFlag code="VN" svg />
        </Button>
        <Button onClick={() => changeLanguage('en')}>
          <ReactCountryFlag code="US" svg />
        </Button>
      </Row>
    )
  }
}
export default RcCountryFlag
