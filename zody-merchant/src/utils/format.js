import moment from 'moment'
import { AppConst } from '../configs'

// format date
const date = (value) => {
  if (!value) {
    return ''
  }
  return moment(value).format(AppConst.format.date)
}

// format number
const numbers = (value) => {
  if (!value) {
    return '0'
  }
  value = parseFloat(value)
  return Number(value.toFixed(1)).toLocaleString()
}

console.log(numbers(120000))
export default {
  date,
  numbers
}
