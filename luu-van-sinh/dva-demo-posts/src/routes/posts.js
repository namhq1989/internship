import React from 'react'
import { connect } from 'dva'
import PostList from '../components/post-list'
import styles from './posts.css'

class Posts extends React.Component {

  handleDelete = (id) => {
    this.props.dispatch({
      type: 'posts/delete',
      payload: id
    })
  }
  
  render(){
    return (
      <div className={styles.container}>
        <h1 style={{ textAlign: 'center' }}>List of Posts</h1>
        <PostList onDelete={this.handleDelete} posts={this.props.posts}/>
      </div>
    )
  }
}

export default connect(({ posts }) => ({
  posts : posts.list
}))(Posts)