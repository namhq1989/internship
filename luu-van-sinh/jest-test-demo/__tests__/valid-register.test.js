import { validate } from '../src/screens/register/validator'

test('Register with name: abc, age: 10, email: abc@de.com, password: 123456 will be true', () => {
  const user = { name: 'abc', age: '10', email: 'abc@de.com', password: '123456' }
  expect(validate(user)).toEqual({ status: true })
})

test('Register with empty name , age: 10, email: abc@de.com, password: 123456 will be false', () => {
  const user = { name: '', age: '10', email: 'abc@de.com', password: '123456' }
  expect(validate(user)).toEqual({ status: false, message: 'RequireInfo' })
})

test('Register with name: a, age: 10, email: abc@de.com, password: 123456 will be false', () => {
  const user = { name: 'a', age: '10', email: 'abc@de.com', password: '123456' }
  expect(validate(user)).toEqual({ status: false, message: 'NameLengthIsNotvalid' })
})

test('Register with name: abc, age: 0, email: abc@de.com, password: 123456 will be false', () => {
  const user = { name: 'abc', age: '0', email: 'abc@de.com', password: '123456' }
  expect(validate(user)).toEqual({ status: false, message: 'AgeIsNotValid' })
})

test('Register with name: abc, age: 10, email: abc@de, password: 123456 will be false', () => {
  const user = { name: 'abc', age: '10', email: 'abc@de', password: '123456' }
  expect(validate(user)).toEqual({ status: false, message: 'EmailIsNotValid' })
})

test('Register with name: abc, age: 10, email: abc@de.com, password: 1234 will be false', () => {
  const user = { name: 'abc', age: '10', email: 'abc@de.com', password: '123' }
  expect(validate(user)).toEqual({ status: false, message: 'PasswordLengthMustAtLeast6Characters' })
})