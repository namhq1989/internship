import { AppConst } from '../../configs'
import { KeysConst } from '../../configs/locale'

const NAME_MAX_LENGTH = 128
const NAME_MIN_LENGTH = 2
const AGE_MIN = 1
const AGE_MAX = 100
const PASS_MAX_LENGTH = 6

const validate = {
  isValid: false,
  message: ''
}

/**
 *
 * @param {String} name form input name
 * @param {String} email form input email
 * @param {String} password form input password
 * @param {String} rePassword form input confirm password
 * @param {String} age form input age
 * @returns Object validate{ isValid, message}
 */
const registerValidator = (name, email, password, rePassword, age) => {
  if (!name || !email || !password || !rePassword || !age) {
    validate.message = KeysConst.requireRegister
  } else if (!AppConst.regex.email.test(email)) {
    validate.message = KeysConst.emailIsNotValid
  } else if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {
    validate.message = KeysConst.userNameLengthBetweenFrom2To128Characters
  } else if (password.length < PASS_MAX_LENGTH) {
    validate.message = KeysConst.passwordLengthMustAtLeast6Characters
  } else if (rePassword !== password) {
    validate.message = KeysConst.comfirmToFirstPassword
  } else if (!age.match(AppConst.regex.ageInt)) {
    validate.message = KeysConst.ageIntegerNumber
  } else if (age < AGE_MIN || age > AGE_MAX) {
    validate.message = KeysConst.ageMinMax
  } else {
    validate.isValid = true
  }
  return validate
}
export {
  registerValidator
}
