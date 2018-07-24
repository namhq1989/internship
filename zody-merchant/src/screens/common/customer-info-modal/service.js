import { request } from '../../../utils'
import { ApiConst } from '../../../configs'

const loadProfile = (customerId) => {
  const api = ApiConst.activities.profile()
  const url = `${api.url}${customerId}`
  return request(url, {
    method: api.method,
  })
}

const saveNote = (noteContent, customerId) => {
  const api = ApiConst.activities.updateCustomer()
  const url = `${api.url}${customerId}`
  return request(url, {
    method: api.method,
    body: {
      note: noteContent
    }
  })
}
export {
  loadProfile,
  saveNote
}
