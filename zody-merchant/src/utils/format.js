import moment from 'moment'
import lodash from 'lodash'
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

// Get city text
const city = (value) => {
  const obj = lodash.find(AppConst.displayText.cities, item => item.id === value)
  return obj ? obj.text : 'N/A'
}

// Get gender text
const gender = (value) => {
  const obj = lodash.find(AppConst.displayText.genders, item => item.id === value)
  return obj ? obj.text : 'N/A'
}
export default {
  date,
  numbers,
  city,
  gender
}
