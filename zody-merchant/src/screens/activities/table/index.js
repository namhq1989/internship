import React from 'react'
import { Table } from 'antd'
import { ImageConst } from '../../../configs'
import { format } from '../../../utils'
import style from './style.css'

class TableView extends React.Component {
  render() {
    const { data } = this.props
    const { viewCustomerId, viewPhone } = this.props
    const columns = [{
      title: 'STT',
      dataIndex: '',
      align: 'center',
      render: (value, row, index) => {
        return (
          <span>{index + 1}</span>
        )
      }
    }, {
      title: 'Thành viên',
      dataIndex: 'user',
      align: 'center',
      render: (value, row) => {
        if (value) {
          return (
            <span
              className={style.custumerModal}
              onClick={() => viewCustomerId(value._id)}
            >
              {value.name}
            </span>
          )
        }
        return (
          <span
            onClick={() => viewPhone(row.phone)}
          >
            {row.phone}
          </span>
        )
      }
    }, {
      title: '#MÃ HOÁ ĐƠN',
      dataIndex: 'billId',
      align: 'center',
    }, {
      title: 'SỐ TIỀN',
      dataIndex: 'price',
      align: 'center',
      render: (value) => {
        return (
          <div>
            <img src={ImageConst.imageDolar} alt="" className={style.iconRevenueTable} />
            <span>{format.numbers(value)}</span>
          </div>
        )
      }
    }, {
      title: 'ZCOIN',
      dataIndex: 'coin',
      align: 'center',
      render: (value) => {
        return (
          <div>
            <img src={ImageConst.imageZcoin} alt="" className={style.iconRevenueTable} />
            <span>{format.numbers(value)}</span>
          </div>
        )
      }
    }, {
      title: 'THỜI GIAN TÍCH ĐIỂM',
      dataIndex: 'createdAt',
      align: 'center',
      render: (value) => {
        return format.date(value)
      }
    }, {
      title: 'THỜI GIAN NHẬN ĐIỂM',
      dataIndex: 'updatedAt',
      align: 'center',
      sorter: true,
      render: (value) => {
        return format.date(value)
      }
    }]
    return (
      <Table
        defaultCurrent={0}
        columns={columns}
        dataSource={data}
        className={style.tableView}
        rowKey="_id"
      />
    )
  }
}
export default TableView
