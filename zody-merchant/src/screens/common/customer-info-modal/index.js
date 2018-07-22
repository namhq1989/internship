import React from 'react'
import { Popconfirm, Icon, Modal, Row, Col, Table, Button, Input } from 'antd'
import { ImageConst, MessageConst } from '../../../configs'
import style from './style.css'

const data = [
  {
    activity: 'Tich luy hoa don',
    id: 1,
    bill: {
      price: '50000'
    },
    coin: '10',
    createdAt: '10/07/2018, 15:24'
  }, {
    activity: 'Tich luy hoa don',
    id: 2,
    bill: {
      price: '5000'
    },
    coin: '10',
    createdAt: '10/07/2018, 15:24'
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
    title: 'SỐ TIỀN',
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
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isEnd: true,
      sort: '-createdAt',
      page: 0,
      profile: null,
      isEditNote: false,
      noteContent: ''
    }
  }

  toggle = () => {
    const { onClose } = this.props
    onClose()
  }

  editNote = () => {
    this.setState({
      isEditNote: true,
    }, () => {
      document.getElementById('note-content').focus()
    })
  }

  cancelNoteEdit = () => {
    this.setState({
      isEditNote: false
    })
  }

  render() {
    const { visible } = this.props
    const { isEditNote, noteContent } = this.state
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
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <div>
              <Row className={style.profileInfo}>
                <h5>
                  User Name
                </h5>
                <Row className={style.basicInfo}>
                  <Col className={style.item} span={12}>
                    <Icon type="environment-o" />
                    <span>City</span>
                  </Col>
                  <Col className={style.item} span={12}>
                    <Icon type="user" />
                    <span>Nam</span>
                  </Col>
                </Row>
              </Row>
              {
                !isEditNote
                  ?
                    <Row className={style.customerNote} onClick={this.editNote}>
                      <Icon type="edit" /> <span>Thêm ghi chú khách hàng</span>
                    </Row>
                  :
                    <div style={{ paddingBottom: 30 }}>
                      <Row className="customer-note">
                        <Input.TextArea
                          id="note-content"
                          value={noteContent}
                          onChange={e => this.setState({ noteContent: e.target.value })}
                          onPressEnter={this.saveNoteEdit}
                        />
                      </Row>
                      <Button type="primary" size="small" className={style.btnEdit} onClick={this.saveNoteEdit}>Lưu</Button>
                      <Button type="default" size="small" className={style.btnEdit} onClick={this.cancelNoteEdit}>Huỷ</Button>
                    </div>
              }
              <Row>
                <table className={style.profiletable}>
                  <tbody>
                    <tr>
                      <td>SDT</td>
                      <td className={style.tabledata}>Phone Number</td>
                    </tr>
                    <tr>
                      <td>Facebook</td>
                      <td className={style.tabledata}>
                        <a href="/#" target="blank">Xem</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Ngày sinh</td>
                      <td className={style.tabledata}>01/02/1993</td>
                    </tr>
                    <tr>
                      <td>Chi tiêu</td>
                      <td className={style.tabledata}>150000</td>
                    </tr>
                    <tr>
                      <td>Lượt giao dịch</td>
                      <td className={style.tabledata}>2</td>
                    </tr>
                  </tbody>
                </table>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <Table
              dataSource={data}
              columns={columns}
              pagination={false}
              rowKey={record => record.id}
            />
          </Col>
        </Row>
      </Modal>
    )
  }
}

export default CustomerInfoModal
