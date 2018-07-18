import React from 'react'
import { List } from 'antd';

class CommentList extends React.Component {

  render(){
    const { comments } = this.props
    return (
      <List
        itemLayout="horozontal"
        dataSource={comments}
        locale={{ emptyText:'' }}
        header={<h4 style={{ fontWeight: 'bold' }}>Comments:</h4>}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta 
              title={<p>Name: {item.name}</p>}
              description={<p>{item.body}</p>}
            />
          </List.Item>
        )}
      />
    )
  }
}
export default CommentList