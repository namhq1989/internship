import { validate } from './validator'
import { key } from '../../configs'

test('Register with name: abc, age: 10, email: abc@de.com, password: 123456 will be true', () => {
  const user = { name: 'abc', age: '10', email: 'abc@de.com', password: '123456' }
  expect(validate(user.name, user.age, user.email, user.password)).toEqual({ isValid: true, message: '' })
})

test('Register with empty name , age: 10, email: abc@de.com, password: 123456 will be false', () => {
  const user = { name: '', age: '10', email: 'abc@de.com', password: '123456' }
  expect(validate(user.name, user.age, user.email, user.password)).toEqual({ isValid: false, message: key.requireFormInput })
})

test('Register with name: a, age: 10, email: abc@de.com, password: 123456 will be false', () => {
  const user = { name: 'a', age: '10', email: 'abc@de.com', password: '123456' }
  expect(validate(user.name, user.age, user.email, user.password)).toEqual({ isValid: false, message: key.nameLengthIsNotvalid })
})

test('Register with name: abc, age: 0, email: abc@de.com, password: 123456 will be false', () => {
  const user = { name: 'abc', age: '0', email: 'abc@de.com', password: '123456' }
  expect(validate(user.name, user.age, user.email, user.password)).toEqual({ isValid: false, message: key.ageIsNotValid })
})

test('Register with name: abc, age: 10, email: abc@de, password: 123456 will be false', () => {
  const user = { name: 'abc', age: '10', email: 'abc@de', password: '123456' }
  expect(validate(user.name, user.age, user.email, user.password)).toEqual({ isValid: false, message: key.emailIsNotValid })
})

test('Register with name: abc, age: 10, email: abc@de.com, password: 1234 will be false', () => {
  const user = { name: 'abc', age: '10', email: 'abc@de.com', password: '123' }
  expect(validate(user.name, user.age, user.email, user.password)).toEqual({ isValid: false, message: key.passwordLengthMustAtLeast6Characters })
})
