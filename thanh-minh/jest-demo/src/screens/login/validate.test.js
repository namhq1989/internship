import { loginValidator } from './validator'

describe('Test login', () => {
  it('Please fill out the login form!', () => {
    const user = { email: '', password: '' }
    expect(loginValidator(user.email, user.password).isValid).toBe(false)
  })
  it('The input is not valid E-mail!', () => {
    const user = { email: 'milano', password: '123456' }
    expect(loginValidator(user.email, user.password).isValid).toBe(false)
  })
  it('Password is less than 6!', () => {
    const user = { email: 'milano123@gmail.com', password: '1233' }
    expect(loginValidator(user.email, user.password).isValid).toBe(false)
  })
  it('Do not Password', () => {
    const user = { email: 'milano123@gmail.com', password: '' }
    expect(loginValidator(user.email, user.password).isValid).toBe(false)
  })
  it('Do not enter email', () => {
    const user = { email: '', password: '123456' }
    expect(loginValidator(user.email, user.password).isValid).toBe(false)
  })
  it('Email and password success!  email: milano123@gmail.com, password: 123456', () => {
    const user = { email: 'milano123@gmail.com', password: '123456' }
    expect(loginValidator(user.email, user.password).isValid).toBe(true)
  })
})
