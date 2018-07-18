import React from 'react'
import {connect} from 'dva'
import PostList from '../components/post-list';

class Post extends React.Component {
  handleDelete = (id) => {
    this.props.dispatch({
      type: 'post/remove',
      payload: id,
    });
  }
  render() {
    const {post} = this.props
    return (
      <div>
        <PostList 
          onDelete={this.handleDelete}
          postList={post.list}
        />
      </div>
    );
  }
}
export default connect(({ post }) => ({
  post,
}))(Post);