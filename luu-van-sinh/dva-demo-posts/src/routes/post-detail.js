import React from 'react'
import { connect } from 'dva'
import { Redirect } from 'dva/router'

import styles from './post-detail.css'
import CommentList from '../components/comment-list'
import { Button, Icon } from 'antd';

class PostDetail extends React.Component {

  render(){
    const { post, comments } = this.props
    if (!post) {
      return (<Redirect to="/posts" />)
    }
    return(
      <div className={styles.container}>
        <Button type="primary" href="/#/posts" >
          <Icon type="left" /> Back To Posts
        </Button>
        <h3 className={styles.title}>
          {post.title}
        </h3>
        <p className={styles.content}>{post.body}</p>
        <CommentList comments={comments}/>
      </div>
    )
  }
}
export default connect(({ postDetail }) => ({
  post : postDetail.post,
  comments: postDetail.comments
}))(PostDetail)