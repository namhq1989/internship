import { loginValidator } from '../src/screens/login/validator'
import { registerValidator } from '../src/screens/register/validator'


describe('Test login', () => {
  it('Email and password success!  email: milano123@gmail.com, password: 123456', () => {
    const user = { email: 'milano123@gmail.com', password: '123456' }
    expect(loginValidator(user.email, user.password).status).toBe(true)
  })
  it('Please fill out the login form!', () => {
    const user = { email: '', password: '' }
    expect(loginValidator(user.email, user.password).status).toBe(false)
  })
  it('The input is not valid E-mail!', () => {
    const user = { email: 'milano', password: '123456' }
    expect(loginValidator(user.email, user.password).status).toBe(false)
  })
  it('Password is less than 6!', () => {
    const user = { email: 'milano123@gmail.com', password: '1233' }
    expect(loginValidator(user.email, user.password).status).toBe(false)
  })
  it('Password khong co', () => {
    const user = { email: 'milano123@gmail.com', password: '' }
    expect(loginValidator(user.email, user.password).status).toBe(false)
  })
  it('Email khong co', () => {
    const user = { email: '', password: '123456' }
    expect(loginValidator(user.email, user.password).status).toBe(false)
  })
})

describe('Test Register', () => {
  it('Please fill out the login form!', () => {
    const tmpAccount = {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      age: ''
    }
    expect(registerValidator(tmpAccount.name, tmpAccount.email, tmpAccount.password,
      tmpAccount.rePassword, tmpAccount.age).status).toBe(false)
  })

  it('UserName must be between 2 -128 characters', () => {
    const tmpAccount = {
      name: 'M',
      email: 'minh@gmail.com',
      password: '123456',
      rePassword: '123456',
      age: '22'
    }
    expect(registerValidator(tmpAccount.name, tmpAccount.email, tmpAccount.password,
      tmpAccount.rePassword, tmpAccount.age).status).toBe(false)
  })

  it('The input is not valid E-mail!', () => {
    const tmpAccount = {
      name: 'Minh123',
      email: 'minhnguyen.vn',
      password: '123456',
      rePassword: '123456',
      age: '22'
    }
    expect(registerValidator(tmpAccount.name, tmpAccount.email, tmpAccount.password,
      tmpAccount.rePassword, tmpAccount.age).status).toBe(false)
  })

  it('Passwords must be at least 6 characters', () => {
    const tmpAccount = {
      name: 'Minh123',
      email: 'minhnguyen@gmail.com.vn',
      password: '1234',
      rePassword: '123456',
      age: '22'
    }
    expect(registerValidator(tmpAccount.name, tmpAccount.email, tmpAccount.password,
      tmpAccount.rePassword, tmpAccount.age).status).toBe(false)
  })

  it('Confirm password mismatch', () => {
    const tmpAccount = {
      name: 'Minh123',
      email: 'minhnguyen@gmail.com.vn',
      password: '123456',
      rePassword: '1234566',
      age: '22'
    }
    expect(registerValidator(tmpAccount.name, tmpAccount.email, tmpAccount.password,
      tmpAccount.rePassword, tmpAccount.age).status).toBe(false)
  })

  it('Please enter age as an integer', () => {
    const tmpAccount = {
      name: 'Minh123',
      email: 'minhnguyen@gmail.com.vn',
      password: '123456',
      rePassword: '123456',
      age: 'sdsad223'
    }
    expect(registerValidator(tmpAccount.name, tmpAccount.email, tmpAccount.password,
      tmpAccount.rePassword, tmpAccount.age).status).toBe(false)
  })

  it('Age must be in between 1 to 100', () => {
    const tmpAccount = {
      name: 'Minh123',
      email: 'minhnguyen@gmail.com.vn',
      password: '123456',
      rePassword: '123456',
      age: '222'
    }
    expect(registerValidator(tmpAccount.name, tmpAccount.email, tmpAccount.password,
      tmpAccount.rePassword, tmpAccount.age).status).toBe(false)
  })

  it('Age must be in between 1 to 100', () => {
    const tmpAccount = {
      name: 'Minh123',
      email: 'minhnguyen@gmail.com.vn',
      password: '123456',
      rePassword: '123456',
      age: '-112'
    }
    expect(registerValidator(tmpAccount.name, tmpAccount.email, tmpAccount.password,
      tmpAccount.rePassword, tmpAccount.age).status).toBe(false)
  })

  it('Sign Up Success', () => {
    const tmpAccount = {
      name: 'Minh123',
      email: 'minhnguyen@gmail.com.vn',
      password: '123456',
      rePassword: '123456',
      age: '23'
    }
    expect(registerValidator(tmpAccount.name, tmpAccount.email, tmpAccount.password,
      tmpAccount.rePassword, tmpAccount.age).status).toBe(true)
  })
})
