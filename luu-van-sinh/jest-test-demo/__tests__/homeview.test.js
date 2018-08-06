import 'jsdom-global/register'
import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { HomeView } from '../src/screens/home/view'
import i18n from '../src/i18n'

const mockFn = jest.fn()

test('renders correctly', () => {
  const wrapper = shallow(<HomeView dispatch={mockFn} i18n={i18n} t={mockFn} user="vansinh" />)
  expect(wrapper).toMatchSnapshot()
})

test('call logout ', ()=> {
  const wrapper = shallow(<HomeView dispatch={mockFn} i18n={i18n} t={mockFn} user="vansinh" />)
  wrapper.instance().logout()
})

test('call componentDidMount', () => {
  sinon.spy(HomeView.prototype, 'componentDidMount')
  mount(<HomeView dispatch={mockFn} i18n={i18n} t={mockFn} user="vansinh" />)
  expect(HomeView.prototype.componentDidMount.calledOnce).toEqual(true)
})

test('render correct when not have user in store', () => {
  shallow(<HomeView dispatch={mockFn} i18n={i18n} t={mockFn} />)
})

test('Change language correctly', () => {
  const wrapper = shallow(<HomeView dispatch={mockFn} i18n={i18n} t={mockFn} user="vansinh" />)
  wrapper.find('Select').simulate('change', 'en')
  expect(i18n.language).toEqual('en')
  wrapper.find('Select').simulate('change', 'vi')
  expect(i18n.language).toEqual('vi')
})
