import { AppConst } from '../../configs'
import { KeysConst } from '../../configs/locale'

const PASS_MAX_LENGTH = 6
const validateLogin = {
  isValid: false,
  message: ''
}
/**
 *
 * @param {String} email form ipnut email
 * @param {String} password form input password
 * @returns Object contains: { isValid, message }
 */
const loginValidator = (email, password) => {
  if (!email || !password) {
    validateLogin.message = KeysConst.requireEmailAndPassword
  } else if (!AppConst.regex.email.test(email)) {
    validateLogin.message = KeysConst.emailIsNotValid
  } else if (password.length < PASS_MAX_LENGTH) {
    validateLogin.message = KeysConst.passwordLengthMustAtLeast6Characters
  } else {
    validateLogin.isValid = true
  }
  return validateLogin
}
export {
  loginValidator
}
