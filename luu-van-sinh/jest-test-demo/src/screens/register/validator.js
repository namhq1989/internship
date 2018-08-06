import { AppConst } from "../../configs"

const validate = ({ name, age, email, password }) => {
  if (!email || !password || !name || !age) {
    return { status: false, message: 'RequireInfo' }
  } else if (name.length < 2 || name.length > 128) {
    return { status: false, message: 'NameLengthIsNotvalid' }
  } else if (age < 1 || age > 100) {
    return { status: false, message: 'AgeIsNotValid' }
  } else if (!AppConst.regex.email.test(email)) {
    return { status: false, message: 'EmailIsNotValid' }
  } else if (password.length < 6) {
    return { status: false, message: 'PasswordLengthMustAtLeast6Characters'}
  } else {
    return { status: true }
  }
}

export {
  validate
}