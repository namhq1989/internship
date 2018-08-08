import React from 'react'
import { shallow } from 'enzyme'
import { LoginView } from './view'

const mockFn = jest.fn()
const wrapper = shallow(<LoginView t={mockFn} dispatch={mockFn} />)

test('render correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should respond to change event and change the state of the view', () => {
  const target = { name: 'email', value: 'example@gmail.com' }
  wrapper.find('Input[name="email"]').simulate('change', { target })
  expect(wrapper.state('email')).toEqual('example@gmail.com')
})

test('call handleSubmit function', () => {
  wrapper.find('Button.btn-submit').simulate('click')
})

test('dispatch in handleSubmit function when data is valid', () => {
  const emailInput = { name: 'email', value: 'example@gmail.com' }
  const passwordInput = { name: 'password', value: '111111' }
  wrapper.find('Input[name="email"]').simulate('change', { target: emailInput })
  wrapper.find('Input[name="password"]').simulate('change', { target: passwordInput })
  wrapper.find('Button.btn-submit').simulate('click')
})
