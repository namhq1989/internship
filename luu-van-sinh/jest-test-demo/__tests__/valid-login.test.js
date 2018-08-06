import { validate } from '../src/screens/login/validator';

test('Validate for email: abc@gm.vn and password: 123456 will be true', () => {
  const user = { email: 'abc@gm.vn', password: '123456'}
  expect(validate(user)).toEqual({ status: true })
})
test('Validate for email: abc@gm and password: 123456 will be false', () => {
  const user = { email: 'abc@gm', password: '123456'}
  expect(validate(user)).toEqual({ status: false, message: 'EmailIsNotValid' })
})
test('Validate for empty email and password: 123456 will be false', () => {
  const user = { email: '', password: '123456'}
  expect(validate(user)).toEqual({ status: false, message: 'RequireEmailAndPassword' })
})