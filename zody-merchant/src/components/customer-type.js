import React from 'react'
import { Col, Select } from 'antd'
import { AppConst } from '../configs'
import styles from './styles.css'

const { Option } = Select
class RcCustomerType extends React.Component {
  render() {
    const { initValue, onChange } = this.props
    return (
      <Col xs={24} sm={24} md={12} lg={12} xl={8} className={styles.rccomponent}>
        <div className={styles.title}>
          <h4>Thành viên</h4>
        </div>
        <Select defaultValue={initValue} className={styles.container} onChange={onChange}>
          {
            AppConst.components.customerTypes.list.map((item) => {
              return (
                <Option key={item.id} value={item.id}>{item.text}</Option>
              )
            })
          }
        </Select>
      </Col>
    )
  }
}

export default RcCustomerType
