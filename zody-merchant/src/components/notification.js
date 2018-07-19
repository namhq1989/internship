import { message } from 'antd'
import { AppConst } from '../configs'

export default function (text, type) {
  message[type || AppConst.notification.success](text)
}
