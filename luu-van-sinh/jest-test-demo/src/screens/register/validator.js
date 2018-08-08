import { AppConst, key } from '../../configs'

/**
 * Validate form register
 * @param {String} name name form input
 * @param {number} age age form input
 * @param {String} email Email form input
 * @param {String} password Password form input
 */
const validate = (name, age, email, password) => {
  const response = { isValid: false, message: '' }
  if (!email || !password || !name || !age) {
    response.message = key.requireFormInput
  } else if (name.length < 2 || name.length > 128) {
    response.message = key.nameLengthIsNotvalid
  } else if (age < 1 || age > 100) {
    response.message = key.ageIsNotValid
  } else if (!AppConst.regex.email.test(email)) {
    response.message = key.emailIsNotValid
  } else if (password.length < 6) {
    response.message = key.passwordLengthMustAtLeast6Characters
  } else {
    response.isValid = true
  }
  return response
}

export {
  validate
}
