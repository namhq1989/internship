import React from 'react'
import { Popconfirm, Icon, Modal, Row, Col, Table } from 'antd'
import { ImageConst, MessageConst } from '../../../configs'
import style from './style.css'

const data = [
  {
    activity: 'Tich luy hoa don',
    key: '1',
    bill: {
      id: '1',
      price: '50000'
    },
    coin: '10',
    createdAt: '2'
  }, {
    activity: 'Tich luy hoa don',
    key: '2',
    bill: {
      id: '2',
      price: '50000'
    },
    coin: '10',
    createdAt: '1'
  }
]
const columns = [
  {
    title: 'STT',
    dataIndex: '',
    render: (value, record, index) => {
      return (<span>{index + 1}</span>)
    }
  }, {
    title: 'HOẠT ĐỘNG',
    dataIndex: 'activity',
    render: (value) => {
      return (
        <div>
          <img src={ImageConst.imageActivity} alt="" className={style.iconBill} />
          <span>{value}</span>
        </div>
      )
    }
  }, {
    title: '#MÃ HOÁ ĐƠN',
    dataIndex: 'bill',
    render: (value) => {
      return (value) ? <span>{value.id}</span> : ''
    }
  }, {
    title: 'Số tiền',
    dataIndex: 'bill',
    render: (value) => {
      if (!value) {
        return ''
      }
      return (
        <div>
          <img src={ImageConst.imageDolar} alt="" className={style.iconCoin} />
          <span>{value.price}</span>
        </div>
      )
    }
  }, {
    title: 'ZCOIN',
    dataIndex: 'coin',
    render: (value) => {
      return (
        <div>
          <img src={ImageConst.imageZcoin} alt="" className={style.iconCoin} />
          <span>{value}</span>
        </div>
      )
    }
  }, {
    title: 'THỜI GIAN TÍCH ĐIỂM',
    dataIndex: 'createdAt',
    sorter: true
  }, {
    title: '',
    dataIndex: '',
    render: () => {
      return (
        <Popconfirm
          title={MessageConst.Common.ConfirmDeleteBill}
          okText={MessageConst.Common.ConfirmPopupOk}
          cancelText={MessageConst.Common.ConfirmPopupCancel}
        >
          <Icon type="close" title="Xoá" className="cursor-pointer" />
        </Popconfirm>
      )
    }
  }
]
class CustomerInfoModal extends React.Component {
  toggle = () => {
    const { onClose } = this.props
    onClose()
  }

  render() {
    const { visible } = this.props
    return (
      <Modal
        title="THÔNG TIN THÀNH VIÊN"
        style={{ top: 40 }}
        width="90%"
        visible={visible}
        onOk={this.toggle}
        onCancel={this.toggle}
        footer={null}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <Table
              dataSource={data}
              columns={columns}
              pagination={false}
              rowKey={record => record.key}
            />
          </Col>
        </Row>
      </Modal>
    )
  }
}

export default CustomerInfoModal
