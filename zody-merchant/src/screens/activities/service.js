import { request } from '../../utils'
import { ApiConst } from '../../configs'

const recentActivities = (data) => {
  const api = ApiConst.activities.recentActivities()
  return request(api.url, {
    method: api.method,
    body: data
  })
}
const fetch = (data) => {
  const api = ApiConst.activities.pageActivity()
  return request(api.url, {
    method: api.method,
    body: data
  })
}
export {
  fetch,
  recentActivities
}
