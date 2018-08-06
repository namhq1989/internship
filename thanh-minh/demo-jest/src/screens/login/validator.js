import { AppConst } from '../../configs'

const loginValidator = (email, password) => {
  if (!email || !password) {
    return { status: false, message: 'RequireEmailAndPassword' }
  } else if (!AppConst.regex.email.test(email)) {
    return { status: false, message: 'EmailIsNotValid' }
  } else if (password.length < 6) {
    return { status: false, message: 'PasswordLengthMustAtLeast6Characters' }
  } else {
    return { status: true, message: '' }
  }
}

export {
  loginValidator
}
