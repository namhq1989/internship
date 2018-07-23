import { request } from '../../utils'
import { ApiConst } from '../../configs'

const fetch = (data) => {
  const api = ApiConst.activities.pageActivity()
  return request(api.url, {
    method: api.method,
    body: data
  })
}

export {
  fetch,
}
