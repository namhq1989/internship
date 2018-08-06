import { AppConst } from '../../configs'

const registerValidator = (name, email, password, rePassword, age) => {
  if (!name || !email || !password || !rePassword || !age) {
    return { status: false, message: 'RequireRegister' }
  } else if (!AppConst.regex.email.test(email)) {
    return { status: false, message: 'EmailIsNotValid' }
  } else if (name.length < 2 || name.length > 128) {
    return { status: false, message: 'userNameLengthBetweenFrom2To128Characters' }
  } else if (password.length < 6) {
    return { status: false, message: 'PasswordLengthMustAtLeast6Characters' }
  } else if (rePassword !== password) {
    return { status: false, message: 'ComfirmToFirstPassword' }
  } else if (!age.match(AppConst.regex.ageInt)) {
    return { status: false, message: 'AgeIntegerNumber' }
  } else if (age < 1 || age > 100) {
    return { status: false, message: 'AgeMinMax' }
  } else {
    return { status: true, message: '' }
  }
}
export {
  registerValidator
}
