export default {

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
  },
}
