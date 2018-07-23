import React from 'react'
import { Table } from 'antd'
import { ImageConst } from '../../../configs'
import { format } from '../../../utils'
import style from './style.css'

const data = [{
  key: '1',
  name: 'Nguyen Van Can',
  mahoadon: 'LLLL',
  money: '30000',
  zcoin: '112',
  timeTichDiem: '21/06/2018, 17:02',
  timeNhanDIem: '21/06/2018, 17:02'
}, {
  key: '2',
  name: 'Nguyen Van CA',
  mahoadon: 'MMMM',
  money: '40000',
  zcoin: '1122',
  timeTichDiem: '22/06/2018, 11:05',
  timeNhanDIem: '22/06/2018, 11:05'
}, {
  key: '3',
  name: 'Nguyen Van CA',
  mahoadon: 'MMMM',
  money: '40000',
  zcoin: '1122',
  timeTichDiem: '22/06/2018, 11:05',
  timeNhanDIem: '22/06/2018, 11:05'
}, {
  key: '4',
  name: 'Nguyen Van CA',
  mahoadon: 'MMMM',
  money: '40000',
  zcoin: '1122',
  timeTichDiem: '22/06/2018, 11:05',
  timeNhanDIem: '22/06/2018, 11:05'
}, {
  key: '5',
  name: 'Nguyen Van CA',
  mahoadon: 'MMMM',
  money: '40000',
  zcoin: '1122',
  timeTichDiem: '22/06/2018, 11:05',
  timeNhanDIem: '22/06/2018, 11:05'
}, {
  key: '6',
  name: 'Nguyen Van CA',
  mahoadon: 'MMMM',
  money: '40000',
  zcoin: '1122',
  timeTichDiem: '22/06/2018, 11:05',
  timeNhanDIem: '22/06/2018, 11:05'
}, {
  key: '7',
  name: 'Nguyen Van CA',
  mahoadon: 'MMMM',
  money: '40000',
  zcoin: '1122',
  timeTichDiem: '22/06/2018, 11:05',
  timeNhanDIem: '22/06/2018, 11:05'
}, {
  key: '8',
  name: 'Nguyen Van CA',
  mahoadon: 'MMMM',
  money: '40000',
  zcoin: '1122',
  timeTichDiem: '22/06/2018, 11:05',
  timeNhanDIem: '22/06/2018, 11:05'
}, {
  key: '9',
  name: 'Nguyen Van CA',
  mahoadon: 'MMMM',
  money: '40000',
  zcoin: '1122',
  timeTichDiem: '22/06/2018, 11:05',
  timeNhanDIem: '22/06/2018, 11:05'
}, {
  key: '10',
  name: 'Nguyen Van CA',
  mahoadon: 'MMMM',
  money: '40000',
  zcoin: '1122',
  timeTichDiem: '22/06/2018, 11:05',
  timeNhanDIem: '22/06/2018, 11:05'
}, {
  key: '11',
  name: 'Nguyen Van CA',
  mahoadon: 'MMMM',
  money: '40000',
  zcoin: '1122',
  timeTichDiem: '22/06/2018, 11:05',
  timeNhanDIem: '22/06/2018, 11:05'
}, {
  key: '12',
  name: 'Nguyen Van CA',
  mahoadon: 'MMMM',
  money: '40000',
  zcoin: '1122',
  timeTichDiem: '22/06/2018, 11:05',
  timeNhanDIem: '22/06/2018, 11:05'
}]
class TableView extends React.Component {
  render() {
    const { showModal } = this.props
    const columns = [{
      title: 'STT',
      dataIndex: 'key',
      align: 'center',
      key: 'key'
    }, {
      title: 'Thành viên',
      dataIndex: 'name',
      align: 'center',
      key: 'name',
      render: (value) => {
        return (
          <span
            className={style.custumerModal}
            onClick={() => showModal()}
          >
            {value}
          </span>
        )
      }
    }, {
      title: '#MÃ HOÁ ĐƠN',
      dataIndex: 'mahoadon',
      align: 'center',
      key: 'mahoadon'
    }, {
      title: 'SỐ TIỀN',
      dataIndex: 'money',
      align: 'center',
      key: 'money',
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
      dataIndex: 'zcoin',
      align: 'center',
      key: 'zcoin',
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
      dataIndex: 'timeTichDiem',
      align: 'center',
      key: 'timeTichDiem',
    }, {
      title: 'THỜI GIAN NHẬN ĐIỂM',
      dataIndex: 'timeNhanDIem',
      align: 'center',
      sorter: true,
      key: 'timeNhanDIem'
    }]
    return (
      <Table
        defaultCurrent={0}
        columns={columns}
        dataSource={data}
        className={style.tableView}
      />
    )
  }
}
export default TableView
