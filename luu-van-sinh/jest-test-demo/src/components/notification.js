import { message } from 'antd'
import { AppConst } from '../configs'

const RcNotification = (text, type) => (
  message[type || AppConst.notification.success](text)
)
export default RcNotification
