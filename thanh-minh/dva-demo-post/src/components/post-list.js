import React from 'react'
import PropTypes from 'prop-types'
import { Table, Popconfirm, Button } from 'antd'

import PostModal from './post-modal'
import { Link, Redirect } from 'dva/router';
class PostList extends React.Component {
  render() {
    const {postList, onDelete} =this.props
    if (!postList){
     return  <Redirect to="/post" />
    }
    const columns = [{
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
      align	: 'center'
    },
    {
      key:'title',
      title: 'Post Title',
      align	: 'center',
      dataIndex: 'title',
      render: (text,record) => {
        return (
          <Link to={`/post/${record.id}`}>{text}</Link>
        );
      }
    },
   {
      align	: 'center',
      key: 'action',
      title: 'Action',
      render: (text, record) => {
        return (
          <div>
            <Popconfirm title="Deletes" onConfirm={() =>{onDelete(record.id)}}>
              <Button type="danger">Delete</Button>
            </Popconfirm><span>&nbsp;&nbsp;&nbsp;</span>
            <PostModal record={record}/>
          </div>
        );
      },
    }];
    return (
      <Table
        bordered={true}
        size='middle'
        dataSource={postList}
        columns={columns}
        rowKey={record => record.id}
      />
  );
  }
}
PostList.propTypes= {
  onDelete: PropTypes.func.isRequired,
  postList: PropTypes.array.isRequired,
}

export default PostList;