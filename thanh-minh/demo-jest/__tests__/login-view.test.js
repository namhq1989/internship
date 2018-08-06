
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { LoginView } from '../src/screens/login/view'

const t = jest.fn()
const submitLogin = jest.fn()
const changeLanguage = jest.fn()
it('renders correctly', () => {
  const wrapper = shallow(
    <LoginView submitLogin={submitLogin} t={t} />
  )
  expect(toJson(wrapper)).toMatchSnapshot();
});
describe('Email input', () => {
  it('should respond to change event and change the state of the Login Component', () => {
    const wrapper = shallow(<LoginView submitLogin={submitLogin} t={t} changeLanguage={changeLanguage} />)
    wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'blah@gmail.com' } })
    expect(wrapper.state('email')).toEqual('blah@gmail.com')
  })
})

describe('Password input', () => {
  it('should respond to change event and change the state of the Login Component', () => {
    const wrapper = shallow(<LoginView submitLogin={submitLogin} t={t} changeLanguage={changeLanguage} />)
    wrapper.find('#password').simulate('change', { target: { name: 'password', value: 'minh15662' } })
    expect(wrapper.state('password')).toEqual('minh15662')
  })
})
