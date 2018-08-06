import 'jsdom-global/register'
import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { HomeView } from '../src/screens/home/view'
import i18n from '../src/i18n'

test('call logout ', ()=> {
  const mockFn = jest.fn()
  let wrapper = shallow(<HomeView dispatch={mockFn} i18n={i18n} t={mockFn} user="vansinh" />)
  wrapper.instance().logout()
})

test('call componentDidMount', () => {
  const mockFn = jest.fn()
  sinon.spy(HomeView.prototype, 'componentDidMount')
  const wrapper = mount(<HomeView dispatch={mockFn} i18n={i18n} t={mockFn} user="vansinh" />)
  expect(wrapper).toMatchSnapshot()
  expect(HomeView.prototype.componentDidMount.calledOnce).toEqual(true)
})
