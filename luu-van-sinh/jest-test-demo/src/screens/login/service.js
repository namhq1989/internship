import { AppConst } from '../../configs';

const storeUserInfo = ({ payload }) => {
  localStorage.setItem(AppConst.localStorage.userInfo, JSON.stringify(payload))
}

export {
  storeUserInfo
}
