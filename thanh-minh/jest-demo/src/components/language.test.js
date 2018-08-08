import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'antd'
import ReactCountryFlag from 'react-country-flag'
import LanguageChange from './language'
import i18n from '../configs/i18n'
import { AppConst } from '../configs'


const changeLanguage = (lng) => {
  i18n.changeLanguage(lng)
}
const t = jest.fn()
test('Component LanguageChange render correctly', () => {
  const wrapper = shallow(
    <LanguageChange t={t} changeLanguage={changeLanguage} language="en" code="US" />
  )
  expect(wrapper).toMatchSnapshot()
})
test('Change language when click button flag', () => {
  const wrapper = shallow(
    <LanguageChange t={t} changeLanguage={changeLanguage} language="en" code="US" />
  )
  wrapper.simulate('click')
  expect(i18n.language).toEqual('vi')
})

test('should render 2 button language', () => {
  const wrapper = shallow(
    <LanguageChange t={t} changeLanguage={changeLanguage} language="en" code="US" />
  )
  expect(wrapper.find(Button)).toHaveLength(AppConst.language.length)
  expect(wrapper.find(ReactCountryFlag)).toHaveLength(AppConst.language.length)
})
