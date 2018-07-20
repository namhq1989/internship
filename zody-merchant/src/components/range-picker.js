import React from 'react'
import { DatePicker, Col } from 'antd'
import moment from 'moment'
import styles from './styles.css'

const { RangePicker } = DatePicker

class RcRangePicker extends React.Component {
  constructor(props) {
    super(props)
    const { start, end } = this.props
    this.state = {
      start: start ? moment(start) : moment().subtract(1, 'month').startOf('d'),
      end: end ? moment(end) : moment().endOf('d')
    }
  }

  handleChange = (dates) => {
    this.setState({
      start: dates[0],
      end: dates[1]
    })
  }

  render() {
    const { start, end } = this.state
    return (
      <Col xs={24} sm={24} md={12} lg={8} xl={8} className={styles.rccomponent}>
        <div className={styles.title}>
          <h4>Thời gian</h4>
        </div>
        <RangePicker
          style={{ width: '100%' }}
          allowClear={false}
          defaultValue={[start, end]}
          showTime
          ranges={{ 'Hôm nay': [moment(), moment()], 'Tháng này': [moment().startOf('month'), moment().endOf('month')] }}
          onChange={this.handleChange}
        />
      </Col>
    )
  }
}

export default RcRangePicker
