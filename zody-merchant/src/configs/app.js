import moment from 'moment'

const LocalStoragePrefix = (process.env.NODE_ENV === 'production') ? 'zody-' : 'zody-dev-'
export default {

  endpoint: 'https://dev-api.zody.vn',
  // Screen size
  screens: {
    'xs-max': 480,
    'sm-min': 481,
    'sm-max': 767,
    'md-min': 768,
    'md-max': 991,
    'lg-min': 992,
    'lg-max': 1199,
    'xl-min': 1200
  },
  // Notification level
  notification: {
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info'
  },

  // Regex
  regex: {
    email: /\S+@\S+\.\S+/,
  },

  // Format
  format: {
    date: 'DD/MM/YYYY, HH:mm',
    dateWithNoHour: 'DD/MM/YYYY',
    dateWithDayMonthOnly: 'DD/MM',
    dateWithHour: 'H',
    dateWithMinute: 'm'
  },

  // localStorage
  localStorage: {
    authKey: `${LocalStoragePrefix}chain`,
  },
  // Components default data
  components: {
    customerTypes: {
      default: 'registered',
      list: [{
        id: 'all',
        text: 'Tất cả'
      }, {
        id: 'registered',
        text: 'Đã đăng ký'
      }, {
        id: 'unregistered',
        text: 'Chưa đăng ký'
      }]
    },
    rangePicker: {
      start: moment().subtract(30, 'd').startOf('d').toISOString(),
      end: moment().endOf('d').toISOString()
    },
  },
}
