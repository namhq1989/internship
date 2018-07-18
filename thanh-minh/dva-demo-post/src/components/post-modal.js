import React from 'react'
import { Button, Modal } from 'antd';
class PostModal extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  handleCancel =() => {
    this.setState ({
      visible: false
    })
  }
  showModal = () => {
    this.setState({
      visible:true
    })
  }
  render(){
    const {visible}= this.state
    const {record} = this.props
    return (
      <span>
        <Button type="primary" onClick={() =>this.showModal()}>View</Button>
          <Modal
            title={record.title}
            visible={visible}
            onOk={this.handleCancel}
            onCancel={this.handleCancel}
          >
            <h3>Body</h3>
            <p>{record.body}</p>
          </Modal>
      </span>
    );
  }
}
export default PostModal;