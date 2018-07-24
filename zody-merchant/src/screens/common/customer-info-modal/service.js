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

const fetch = ({ customerId, phone, sort }) => {
  let api = ApiConst.activities.phoneActivities(phone)
  if (customerId) {
    api = ApiConst.activities.customerActivities(customerId)
  }
  return request(api.url, {
    method: api.method,
    body: {
      sort
    }
  })
}

const deleteBill = ({ billId }) => {
  const api = ApiConst.activities.deleteBill(billId)
  return request(api.url, {
    method: api.method
  })
}

export {
  fetch,
  deleteBill,
  loadProfile,
  saveNote
}
