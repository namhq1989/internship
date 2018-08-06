import { AppConst } from '../../configs'

const getUser = () => {
  return JSON.parse(localStorage.getItem(AppConst.localStorage.userInfo))
}

const logout = () => {
  localStorage.removeItem(AppConst.localStorage.userInfo)
}

export {
  getUser,
  logout
}
