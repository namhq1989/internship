import key from '../key'

export default {
  [key.translations]: {
    [key.email]: 'Email',
    [key.password]: 'Password',
    [key.login]: 'Login',
    [key.loginByPhoneNumber]: 'Login By Phone Number',
    [key.dontHaveAccount]: 'Don\'t have an account?',
    [key.signUp]: 'Sign up',
    [key.name]: 'Full Name',
    [key.age]: 'Age',
    [key.haveAccount]: 'Already have an Account?',
    [key.welcome]: 'Welcome',
    [key.logout]: 'Logout',
  },
  [key.messages]: {
    [key.requireFormInput]: 'Please fill all information',
    [key.incorrectEmailOrPassword]: 'Email or Password is incorrect',
    [key.emailIsNotValid]: 'Email is not valid',
    [key.passwordLengthMustAtLeast6Characters]: 'Password length must be least 6 characters',
    [key.singUpSuccessfully]: 'Register success',
    [key.nameLengthIsNotvalid]: 'Name length must be between 2 - 128 character',
    [key.ageIsNotValid]: 'Age is not valid (must be betwwen 1 - 100)',
    [key.registeredAccount]: 'This email have been registered!'
  }
}
