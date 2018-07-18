import React from 'react'
import {  List,Avatar,Divider } from 'antd'
import { Redirect } from 'dva/router'
import PropTypes from 'prop-types'

class CommentList extends React.Component {
  render() {
    const {listCom, post} = this.props
    if (!post) {
      return <Redirect to='/post'/>
    }
    return (
      <div>
        <div className="header-div">
            <h3 className = "header">{post.title}</h3>
            <h4 className = "header-body">{post.body}</h4>
        </div>
        <Divider>Comments</Divider>
          <List
            itemLayout="horizontal"
            bordered
            dataSource = {listCom}
            renderItem = {item => (
              <List.Item>
              <List.Item.Meta
                avatar= {
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                }
                title = {<span className="name-user">{item.name}</span>}
                description = {item.email}
              />
              <p>{item.body}</p>
            </List.Item>
            )}
          />
      </div>
    );
  }
}
CommentList.propTypes= {
  listCom: PropTypes.array.isRequired,
}
export default CommentList;