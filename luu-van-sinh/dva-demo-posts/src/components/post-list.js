import React from 'react'
import { Table, Popconfirm, Button } from 'antd'
import { Link } from 'dva/router';

class PostList extends React.Component {

  render() {
    const { posts, onDelete } = this.props
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id'
      },
      {
        title: 'Name Post',
        dataIndex: 'title',
        render: (text, record) => {
          const postUrl = `/posts/${record.id}`
          return <Link to={postUrl}>{text}</Link>
        }
      },
      {
        title: 'Actions',
        render: (text, record) => {
          return (
            <div>
              <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                <Button type="danger">Delete</Button>
              </Popconfirm>
            </div>
          )
        }
      }
    ]
    return (
      <Table
        dataSource={posts}
        columns={columns}
        rowKey={record => record.id}
        bordered
      />
    )
  }
}
export default PostList