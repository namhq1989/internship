import request from '../utils/request'
export function  fetch () {
  return request("https://jsonplaceholder.typicode.com/posts")
}
export function commentById (id) {
  return request(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
}
export function fetchById (id) {
  return request(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
