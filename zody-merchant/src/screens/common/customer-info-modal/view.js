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
      isEditNote: false,
      noteContent: ''
    }
  }

  componentWillReceiveProps(newProps) {
    const { visible, customerId, phone } = newProps
    const { customerInfo: { dataProfile, data } } = this.props
    if (!data.length) {
      this.loadActivities(customerId, phone)
    }
    if (this.isEmpty(dataProfile)) {
      if (visible) {
        if (customerId) {
          this.loadProfile(customerId)
        }
      }
    }
  }

  isEmpty = (obj) => {
    for (const i in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, i)) { return false }
    }
    return true
  }

  loadProfile = (customerId) => {
    const { dispatch } = this.props
    dispatch({
      type: 'customerInfo/loadProfile',
      payload: customerId
    })
  }

  onTableChange = (pagination, filter, sorter) => {
    const { field, order } = sorter
    const { dispatch, customerId, phone, customerInfo } = this.props
    let sort = field
    if (order === 'descend') {
      sort = `-${sort}`
    }
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

  saveNoteEdit = () => {
    const { noteContent } = this.state
    const { customerId } = this.props
    if (noteContent === '') {
      return this.cancelNoteEdit()
    }
    const { dispatch } = this.props
    dispatch({
      type: 'customerInfo/saveNote',
      payload: {
        noteContent,
        customerId
      }
    })
    this.setState({
      isEditNote: false
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
    const { visible } = this.props
    const { customerInfo: { dataProfile, data } } = this.props
    const { isEditNote } = this.state
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
            {
            this.isEmpty(dataProfile) ?
              <p className="not-using-app-text">Số điện thoại này chưa đăng ký sử dụng Zody</p>
              :
              <div>
                <Row className={style.profileInfo}>
                  <img className={style.profileAvatar} src={dataProfile.user.avatar} alt="" />
                  <h5>
                    {dataProfile.user.name}
                  </h5>
                  <Row className={style.basicInfo}>
                    <Col className={style.item} span={12}>
                      <Icon type="environment-o" />
                      <span>{format.city(dataProfile.user.city)}</span>
                    </Col>
                    <Col className={style.item} span={12}>
                      <Icon type="user" />
                      <span>{format.gender(dataProfile.user.gender)}</span>
                    </Col>
                  </Row>
                </Row>
                {
                !isEditNote
                  ?
                    <Row className={style.customerNote} onClick={this.editNote}>
                      <Icon type="edit" /> <span>{dataProfile.note || 'Thêm ghi chú khách hàng'}</span>
                    </Row>
                  :
                    <div style={{ paddingBottom: 30 }}>
                      <Row className="customer-note">
                        <Input.TextArea
                          id="note-content"
                          defaultValue={dataProfile.note}
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
                        <td className={style.tabledata}>phone</td>
                      </tr>
                      <tr>
                        <td>Facebook</td>
                        <td className={style.tabledata}>
                          <a href="/#" target="blank">Xem</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Ngày sinh</td>
                        <td className={style.tabledata}>{format.date(dataProfile.user.birthday)}</td>
                      </tr>
                      <tr>
                        <td>Chi tiêu</td>
                        <td className={style.tabledata}>{format.numbers(dataProfile.totalExpense)}</td>
                      </tr>
                      <tr>
                        <td>Lượt giao dịch</td>
                        <td className={style.tabledata}>{dataProfile.totalBill}</td>
                      </tr>
                    </tbody>
                  </table>
                </Row>
              </div>
          }
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
