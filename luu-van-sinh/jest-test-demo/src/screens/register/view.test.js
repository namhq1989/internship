import React from 'react'
import { shallow } from 'enzyme'
import { RegisterView } from './view'

const mockFn = jest.fn()
const wrapper = shallow(<RegisterView t={mockFn} dispatch={mockFn} />)

test('render correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should respond to change event and change the state of the register-view', () => {
  const target = { name: 'name', value: 'example' }
  wrapper.find('Input[name="name"]').simulate('change', { target })
  expect(wrapper.state('name')).toEqual('example')
})

test('call submit function', () => {
  wrapper.find('Button.btn-submit').simulate('click')
})

test('call dispatch when data is valid', () => {
  const nameInput = { name: 'name', value: 'example' }
  const ageInput = { name: 'age', value: '10' }
  const emailInput = { name: 'email', value: 'example@gmail.com' }
  const passwordInput = { name: 'password', value: '123456' }
  wrapper.find('Input[name="name"]').simulate('change', { target: nameInput })
  wrapper.find('Input[name="age"]').simulate('change', { target: ageInput })
  wrapper.find('Input[name="email"]').simulate('change', { target: emailInput })
  wrapper.find('Input[name="password"]').simulate('change', { target: passwordInput })
  // expect(wrapper.state('name')).toEqual('example')
  wrapper.find('Button.btn-submit').simulate('click')
})
