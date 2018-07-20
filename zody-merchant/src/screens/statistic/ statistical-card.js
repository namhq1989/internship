import React from 'react'
import { Card, Col } from 'antd'

import style from './style.css'

class StatisticalCard extends React.Component {
  render() {
    const { title, desc, icon, number } = this.props
    const cardTitle = (
      <div className={style.infoTitle}>
        <p>
          {title}
        </p>
        <span>
          {desc}
        </span>
      </div>
    )
    return (
      <Col xs={24} sm={24} md={12} lg={8} xl={8} className={style.colCard}>
        <Card>
          {cardTitle}
          <img src={icon} alt="" className={style.cardIcon} />
          <span className={style.cardSpan}>
            {number}
          </span>
        </Card>
      </Col>
    )
  }
}
export default StatisticalCard
