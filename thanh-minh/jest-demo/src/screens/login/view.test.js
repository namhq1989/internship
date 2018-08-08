
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { LoginView } from './view'
import { loginValidator } from './validator'


describe('Login View :', () => {
  const t = jest.fn()
  const handleChange = jest.fn()
  test('renders correctly', () => {
    const wrapper = shallow(
      <LoginView t={t} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Update state on input change ( Email, Password )', () => {
    const wrapper = shallow(
      <LoginView t={t} handleChange={handleChange} />
    )
    wrapper.find('#email').simulate('change', {
      target: { name: 'email', value: 'blah@gmail.com' }
    })
    expect(wrapper.state('email')).toEqual('blah@gmail.com')
    wrapper.find('#password').simulate('change', {
      target: { name: 'password', value: 'minh12345' }
    })
    expect(wrapper.state('password')).toEqual('minh12345')
  })

  test('when click button => Call submit login with account user incorrect ', () => {
    const submitLogin = jest.fn()
    const dispatch = jest.fn()
    const wrapper = shallow(
      <LoginView
        t={t}
        handleChange={handleChange}
        submitLogin={submitLogin}
        dispatch={dispatch}
      />
    )
    wrapper.find('#email').simulate('change', {
      target: { name: 'email', value: 'blahmail' }
    })
    wrapper.find('#password').simulate('change', {
      target: { name: 'password', value: 'minh5' }
    })
    wrapper.find('.button-login').simulate('click')
    expect(loginValidator(
      wrapper.state('email'),
      wrapper.state('password')
    ).isValid).toEqual(false)
  })

  test('when click button => Call submit login with account user correct ', () => {
    const submitLogin = jest.fn()
    const dispatch = jest.fn()
    const wrapper = shallow(
      <LoginView
        t={t}
        handleChange={handleChange}
        submitLogin={submitLogin}
        dispatch={dispatch}
      />
    )
    wrapper.find('#email').simulate('change', {
      target: { name: 'email', value: 'blah@gmail.com' }
    })
    wrapper.find('#password').simulate('change', {
      target: { name: 'password', value: 'minh12345' }
    })
    wrapper.find('.button-login').simulate('click')
    expect(loginValidator(
      wrapper.state('email'),
      wrapper.state('password')
    ).isValid).toEqual(true)
  })
})
