import request from "../utils/request"

export function fetch(postId) {
  return request(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
}