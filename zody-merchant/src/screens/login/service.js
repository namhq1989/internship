import { request } from '../../utils'
import { ApiConst } from '../../configs'

async function login(data) {
  const api = ApiConst.login()
  return request(api.url, {
    method: api.method,
    body: data
  })
}
export {
  login
}
