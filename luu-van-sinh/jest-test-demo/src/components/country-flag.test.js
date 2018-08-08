import { shallow } from 'enzyme'
import React from 'react'
import RcCountryFlag from './country-flag'
import i18n from '../i18n'

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng)
}
test('RcCountryFlag render correctly', () => {
  const wrapper = shallow(
    <RcCountryFlag changeLanguage={changeLanguage} language="vi" code="VN" />
  )
  expect(wrapper).toMatchSnapshot()
})

test('Change language when click', () => {
  const wrapper = shallow(
    <RcCountryFlag changeLanguage={changeLanguage} language="en" code="VN" />
  )
  wrapper.simulate('click')
  expect(i18n.language).toEqual('en')
})
