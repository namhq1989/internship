
import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import i18n from '../src/configs/i18n'
import { LoginView } from '../src/screens/login/view'

const mck = jest.fn()
describe('Login:', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <LoginView t={mck} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('Update state on input change ( Email, Password )', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(
      <LoginView
        t={mck}
        submitLogin={() => null}
        handleChange={handleChange}
        dispatch={mck}
      />
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

  it('changeLanguage ', () => {
    const changeLanguage = jest.fn()
    const wrapper = shallow(
      <LoginView
        i18n={i18n}
        t={mck}
        submitLogin={() => null}
        handleChange={() => null}
        changeLanguage={changeLanguage}
        dispatch={mck}
      />
    )
    wrapper.find('#vi-button').simulate('click', 'vi')
    expect(i18n.language).toEqual('vi')
    wrapper.find('#en-button').simulate('click', 'en')
    expect(i18n.language).toEqual('en')
  })

  it('submit call', () => {
    const submitLogin = jest.fn()
    const wrapper = shallow(
      <LoginView
        i18n={i18n}
        t={mck}
        submitLogin={submitLogin}
        handleChange={() => null}
        changeLanguage={() => {}}
        dispatch={mck}
      />
    )
    wrapper.find('.button-login').simulate('click')
  })
})
