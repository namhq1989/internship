import { AppConst } from "../../configs";

const validate = ({ email, password }) => {
  if (!email || !password) {
    return { status: false, message: 'RequireEmailAndPassword' }
  } else if (!AppConst.regex.email.test(email)) {
    return { status: false, message: 'EmailIsNotValid' }
  } else {
    return { status: true }
  }
}

export {
  validate,
}
