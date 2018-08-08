import key from '../key'

export default {
  translations: {
    [key.email]: 'Email',
    [key.password]: 'Mật khẩu',
    [key.login]: 'Đăng nhập',
    [key.loginByPhoneNumber]: 'Đăng nhập bằng số điện thoại',
    [key.dontHaveAccount]: 'Bạn chưa có tài khoản?',
    [key.signUp]: 'Đăng ký',
    [key.name]: 'Họ tên',
    [key.age]: 'Tuổi',
    [key.haveAccount]: 'Bạn đã có tài khoản?',
    [key.welcome]: 'Chào mừng',
    [key.logout]: 'Đăng xuất',
  },
  messages: {
    [key.requireFormInput]: 'Vui lòng điền đầy đủ thông tin',
    [key.incorrectEmailOrPassword]: 'Email hoặc mật khẩu không đúng',
    [key.emailIsNotValid]: 'Email không đúng định dạng',
    [key.passwordLengthMustAtLeast6Characters]: 'Mật khẩu phải có ít nhất 6 ký tự',
    [key.singUpSuccessfully]: 'Đăng ký thành công',
    [key.nameLengthIsNotvalid]: 'Tên phải từ 2 - 128 ký tự',
    [key.ageIsNotValid]: 'Tuổi không hợp lệ (1 - 100)',
    [key.registeredAccount]: 'Email đã được đăng ký'
  }
}
