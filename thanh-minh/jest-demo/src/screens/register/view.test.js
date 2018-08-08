import React from 'react'
import { shallow } from 'enzyme'
import { RegisterView } from './view'
import { registerValidator } from './validator'

describe('Register View: ', () => {
  const t = jest.fn()
  const handleChange = jest.fn()
  test('render correctly ', () => {
    const wrapper = shallow(
      <RegisterView t={t} />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('Update state on input change', () => {
    const wrapper = shallow(
      <RegisterView t={t} handleChange={handleChange} />
    )
    wrapper.find('#username').simulate('change', {
      target: { name: 'name', value: 'Minh123' }
    })
    expect(wrapper.state('name')).toEqual('Minh123')

    wrapper.find('#email').simulate('change', {
      target: { name: 'email', value: 'blah@gmail.com' }
    })
    expect(wrapper.state('email')).toEqual('blah@gmail.com')

    wrapper.find('#password').simulate('change', {
      target: { name: 'password', value: 'minh12345' }
    })
    expect(wrapper.state('password')).toEqual('minh12345')

    wrapper.find('#repassword').simulate('change', {
      target: { name: 'rePassword', value: 'minh12345' }
    })
    expect(wrapper.state('rePassword')).toEqual('minh12345')

    wrapper.find('#age').simulate('change', {
      target: { name: 'age', value: '22' }
    })
    expect(wrapper.state('age')).toEqual('22')
  })

  test('when click button => Call submit login with account user incorrect ', () => {
    const submitRegister = jest.fn()
    const dispatch = jest.fn()
    const wrapper = shallow(
      <RegisterView
        t={t}
        handleChange={handleChange}
        submitRegister={submitRegister}
        dispatch={dispatch}
      />
    )
    wrapper.find('#username').simulate('change', {
      target: { name: 'name', value: 'Minh123' }
    })
    wrapper.find('#email').simulate('change', {
      target: { name: 'email', value: 'blahmail' }
    })
    wrapper.find('#password').simulate('change', {
      target: { name: 'password', value: '126' }
    })
    wrapper.find('#repassword').simulate('change', {
      target: { name: 'rePassword', value: '123456' }
    })
    wrapper.find('#age').simulate('change', {
      target: { name: 'age', value: '22' }
    })

    const user = {
      name: wrapper.state('name'),
      email: wrapper.state('email'),
      password: wrapper.state('password'),
      rePassword: wrapper.state('rePassword'),
      age: wrapper.state('age')
    }
    wrapper.find('.button-register').simulate('click')
    expect(registerValidator(
      user.name,
      user.email,
      user.password,
      user.rePassword,
      user.age
    ).isValid).toEqual(false)
  })

  test('when click button => Call submit login with account user correct ', () => {
    const submitRegister = jest.fn()
    const dispatch = jest.fn()
    const wrapper = shallow(
      <RegisterView
        t={t}
        handleChange={handleChange}
        submitRegister={submitRegister}
        dispatch={dispatch}
      />
    )
    wrapper.find('#username').simulate('change', {
      target: { name: 'name', value: 'Minh123' }
    })
    wrapper.find('#email').simulate('change', {
      target: { name: 'email', value: 'bla@gmail.com' }
    })
    wrapper.find('#password').simulate('change', {
      target: { name: 'password', value: '123456' }
    })
    wrapper.find('#repassword').simulate('change', {
      target: { name: 'rePassword', value: '123456' }
    })
    wrapper.find('#age').simulate('change', {
      target: { name: 'age', value: '22' }
    })

    const user = {
      name: wrapper.state('name'),
      email: wrapper.state('email'),
      password: wrapper.state('password'),
      rePassword: wrapper.state('rePassword'),
      age: wrapper.state('age')
    }
    wrapper.find('.button-register').simulate('click')
    expect(registerValidator(
      user.name,
      user.email,
      user.password,
      user.rePassword,
      user.age
    ).isValid).toEqual(true)
  })
})
