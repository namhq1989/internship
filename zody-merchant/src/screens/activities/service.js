import { request } from '../../utils'
import { ApiConst } from '../../configs'

async function recentActivities(data) {
  const api = ApiConst.recentActivities()
  return request(api.url, {
    method: api.method,
    body: data
  })
}
export {
  recentActivities
}
