import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        email: "Email",
        password: "Password",
        login: "Login",
        loginByPhoneNumber: "Login By Phone Number",
        dontHaveAccount: "Don't have an account?",
        signUp: "Sign up",
        name: "Full Name",
        age: "Age",
        haveAccount: "Already have an Account?",
        welcome: "Welcome ",
        logout: "Logout",
      },
      message: {
        RequireEmailAndPassword: 'All information is require',
        InCorrectEmailOrPassWord: 'Incorrect email or password',
        EmailIsNotValid: 'Email is not valid',
        PasswordLengthMustAtLeast6Characters: 'Password length must be least 6 characters',
        Successfully: 'Login Success',
        UserBanned: 'Account is banned!',
        RequireInfo: 'All information is required',
        NameLengthIsNotvalid: 'Name length must be between 2 - 128 character',
        AgeIsNotValid: 'Age is not valid (must be betwwen 1 - 100)',
        RegisteredAccount: 'This email have been registered',
      }
    },
    vi: {
      translations: {
        email: "Email",
        password: "Mật khẩu",
        login: "Đăng nhập",
        loginByPhoneNumber: "Đăng nhập bằng số điện thoại",
        dontHaveAccount: "Bạn chưa có tài khoản?",
        signUp: "Đăng ký",
        name: "Họ tên",
        age: "Tuổi",
        haveAccount: "Bạn đã có tài khoản?",
        welcome: "Chào mừng ",
        logout: "Đăng xuất",
      },
      message: {
        RequireEmailAndPassword: 'Vui lòng điền đầy đủ thông tin đăng nhập',
        InCorrectEmailOrPassWord: 'Email hoặc mật khẩu không đúng',
        EmailIsNotValid: 'Email không đúng định dạng',
        PasswordLengthMustAtLeast6Characters: 'Mật khẩu phải có ít nhất 6 ký tự',
        Successfully: 'Đăng nhập thành công',
        UserBanned: 'Tài khoản của bạn đã bị khoá, vui lòng liên hệ với Zody để biết thêm chi tiết!',
        RequireInfo: 'Vui lòng điền đầy đủ thông tin',
        NameLengthIsNotvalid: 'Tên phải từ 2 - 128 ký tự',
        AgeIsNotValid: 'Tuổi không hợp lệ (1 - 100)',
        RegisteredAccount: 'Email đã được đăng ký',
      }
    }
  },
  fallbackLng: "vi",

  // have a common namespace used around the full app
  ns: ["translations","message"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n
