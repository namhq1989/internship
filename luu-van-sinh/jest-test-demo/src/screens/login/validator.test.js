import { validate } from './validator'
import { key } from '../../configs'

test('Validate for email: abc@gm.vn and password: 123456 will be true', () => {
  const user = { email: 'abc@gm.vn', password: '123456' }
  expect(validate(user.email, user.password)).toEqual({ isValid: true, message: '' })
})

test('Validate for email: abc@gm and password: 123456 will be false', () => {
  const user = { email: 'abc@gm', password: '123456' }
  expect(validate(user.email, user.password)).toEqual({ isValid: false, message: key.emailIsNotValid })
})

test('Validate for empty email and password: 123456 will be false', () => {
  const user = { email: '', password: '123456' }
  expect(validate(user.email, user.password)).toEqual({ isValid: false, message: key.requireFormInput })
})
