import React from 'react'
import { connect } from 'dva'
import { Popconfirm, Icon, Modal, Row, Col, Table, Button, Input } from 'antd'
import { ImageConst, MessageConst } from '../../../configs'
import { format } from '../../../utils'
import style from './style.css'


const columns = (context) => {
  const array = [
    {
      title: 'STT',
      dataIndex: '',
      render: (value, record, index) => {
        return (<span>{index + 1}</span>)
      }
    }, {
      title: 'HOẠT ĐỘNG',
      dataIndex: '',
      render: () => {
        return (
          <div>
            <img src={ImageConst.imageActivity} alt="" className={style.iconBill} />
            <span>Tich luy hoa don</span>
          </div>
        )
      }
    }, {
      title: '#MÃ HOÁ ĐƠN',
      dataIndex: '',
      render: (value) => {
        return (value) ? <span>{value.billId}</span> : ''
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
            <span>{format.numbers(value.price)}</span>
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
            <span>{format.numbers(value)}</span>
          </div>
        )
      }
    }, {
      title: 'THỜI GIAN TÍCH ĐIỂM',
      dataIndex: 'createdAt',
      render: (value) => {
        return format.date(value)
      },
      sorter: true
    }, {
      title: '',
      dataIndex: '',
      render: (value, row) => {
        return (
          <Popconfirm
            title={MessageConst.Common.ConfirmDeleteBill}
            okText={MessageConst.Common.ConfirmPopupOk}
            cancelText={MessageConst.Common.ConfirmPopupCancel}
            onConfirm={() => context.deleteBill(row.bill._id)}
          >
            <Icon type="close" title="Xoá" className="cursor-pointer" />
          </Popconfirm>
        )
      }
    }
  ]
  return array
}
class CustomerInfoModalView extends React.Component {
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

  componentWillReceiveProps(newProp) {
    const { customerId, phone } = newProp
    const { customerInfo } = this.props
    if (!customerInfo.data.length) {
      this.loadActivities(customerId, phone)
    }
  }

  onTableChange = (pagination, filter, sorter) => {
    const { field, order } = sorter
    const { dispatch, customerId, phone, customerInfo } = this.props
    let sort = field
    if (order === 'descend') {
      sort = `-${sort}`
    }
    // Return if is current sort
    if (!sort || sort === customerInfo.sort) {
      return ''
    }
    dispatch({
      type: 'customerInfo/updateSort',
      payload: {
        sort,
      }
    })
    this.loadActivities(customerId, phone)
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

  deleteBill = (billId) => {
    const { dispatch } = this.props
    dispatch({
      type: 'customerInfo/remove',
      payload: {
        billId
      }
    })
  }

  loadActivities = (customerId, phone) => {
    const { customerInfo, dispatch } = this.props
    const { sort } = customerInfo
    dispatch({
      type: 'customerInfo/fetch',
      payload: {
        customerId,
        phone,
        sort
      }
    })
  }

  render() {
    const { visible, phone, customerId, customerInfo } = this.props
    const { data } = customerInfo
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
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <div>
              <Row className={style.profileInfo}>
                <h5>
                  User Name {phone} va {customerId}
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
                      <td className={style.tabledata}>{format.numbers(120000)}</td>
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
              columns={columns(this)}
              pagination={false}
              onChange={this.onTableChange}
              rowKey={record => record._id}
            />
          </Col>
        </Row>
      </Modal>
    )
  }
}

export default connect(({ customerInfo }) => ({ customerInfo }))(CustomerInfoModalView)
