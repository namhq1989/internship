import { AppConst, key } from '../../configs'

/**
 * Validate form login
 * @param {String} email Email form input
 * @param {String} password Password from input
 */
const validate = (email, password) => {
  const response = { isValid: false, message: '' }
  if (!email || !password) {
    response.message = key.requireFormInput
  } else if (!AppConst.regex.email.test(email)) {
    response.message = key.emailIsNotValid
  } else {
    response.isValid = true
  }
  return response
}

export {
  validate,
}
