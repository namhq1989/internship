import React from 'react'
import {connect} from 'dva'
import CommentList from '../components/comment-list';

class Comment extends React.Component {
  render() {
    const {comments} = this.props
    return (
      <div>
        <CommentList
          listCom={comments.listCom}
          post={comments.post}
        />
      </div>
    );
  }
}
export default connect(({ comments }) => ({
  comments,
}))(Comment);