import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import MessageConst from './message'

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
	'Account Kit': 'Login by phone',
        'language-o': 'en_US',
        'login-button': 'Login',
        'email-palceholder': 'Enter email',
        'password-placeholder': 'Enter password',
        'language- label': 'Language',
        'Do not have an account': 'Do not have an account?',
        'Sign-up': 'Sign Up',
        'Username-placeholder': 'Enter username',
        'repassword-placeholder': 'Enter confirm password',
        'age-placeholder': 'Enter age',
        'Do have an account': 'Do you have an account?',
        'log-out': 'Log Out',
        'welcome-page': 'Welcome',
        'come-page': ' to HomePage',
        // validator register
        RequireRegister: MessageConst.en.Register.RequireRegister,
        EmailIsNotValid: MessageConst.en.Register.EmailIsNotValid,
        userNameLengthBetweenFrom2To128Characters: MessageConst.en.Register.userNameLengthBetweenFrom2To128Characters,
        PasswordLengthMustAtLeast6Characters: MessageConst.en.Register.PasswordLengthMustAtLeast6Characters,
        Successfully: MessageConst.en.Register.Successfully,
        ComfirmToFirstPassword: MessageConst.en.Register.ComfirmToFirstPassword,
        AgeMinMax: MessageConst.en.Register.AgeMinMax,
        AgeIntegerNumber: MessageConst.en.Register.AgeIntegerNumber,
        EmailExists: MessageConst.en.Register.EmailExists,
        SuccessRegister: MessageConst.en.Register.SuccessRegister,

        // validator login
        RequireEmailAndPassword: MessageConst.en.Login.RequireEmailAndPassword,
        ErrorAccount: MessageConst.en.Login.ErrorAccount,
        LoginSuccess: MessageConst.en.Login.LoginSuccess,
        NotExistAccounts: MessageConst.en.Login.NotExistAccounts
      }
    },
    vi: {
      translations: {
	'Account Kit': 'Đăng nhập bằng số  điện thoại',
        'language-o': 'vi_VN',
        'login-button': 'Đăng nhập',
        'email-palceholder': 'Nhập email',
        'language- label': 'Ngôn ngữ',
        'Do not have an account': 'Bạn chưa có tài khoản?',
        'Sign-up': 'Đăng ký',
        'Username-placeholder': 'Nhập username',
        'password-placeholder': 'Nhập mật khẩu',
        'repassword-placeholder': 'Nhập xác nhận mật khẩu',
        'age-placeholder': 'Nhập tuổi',
        'Do have an account': 'Bạn có tài khoản?',
        'log-out': 'Đăng xuất',
        'welcome-page': 'Chào mừng',
        'come-page': ' đến với trang HomePage',
        // validator registor
        RequireRegister: MessageConst.vi.Register.RequireRegister,
        EmailIsNotValid: MessageConst.vi.Register.EmailIsNotValid,
        userNameLengthBetweenFrom2To128Characters: MessageConst.vi.Register.userNameLengthBetweenFrom2To128Characters,
        PasswordLengthMustAtLeast6Characters: MessageConst.vi.Register.PasswordLengthMustAtLeast6Characters,
        Successfully: MessageConst.vi.Register.Successfully,
        ComfirmToFirstPassword: MessageConst.vi.Register.ComfirmToFirstPassword,
        AgeMinMax: MessageConst.vi.Register.AgeMinMax,
        AgeIntegerNumber: MessageConst.vi.Register.AgeIntegerNumber,
        EmailExists: MessageConst.vi.Register.EmailExists,
        SuccessRegister: MessageConst.vi.Register.SuccessRegister,

        // validator login
        RequireEmailAndPassword: MessageConst.vi.Login.RequireEmailAndPassword,
        ErrorAccount: MessageConst.vi.Login.ErrorAccount,
        LoginSuccess: MessageConst.vi.Login.LoginSuccess,
        NotExistAccounts: MessageConst.vi.Login.NotExistAccounts
      }
    }
  },
  fallbackLng: 'vi',
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
});

export default i18n
