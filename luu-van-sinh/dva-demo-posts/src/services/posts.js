import request from "../utils/request"

export function fetch() {
  return request('https://jsonplaceholder.typicode.com/posts')
}
export function getPost(postId) {
  return request(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}