import { AppConst } from '../../configs'

const register = ({ payload: { name, age, email, password } }) => {
  let accountList = localStorage.getItem(AppConst.localStorage.accountList)
  if (!accountList) {
    accountList = []
  } else {
    accountList = JSON.parse(accountList)
  }
  const id = accountList.length + 1
  accountList.push({ id, name, age, email, password })
  localStorage.setItem(AppConst.localStorage.accountList, JSON.stringify(accountList))
}

export {
  register
}
