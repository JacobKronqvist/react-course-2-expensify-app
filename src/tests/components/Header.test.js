import React from 'react'
import {shallow} from 'enzyme'
//import toJSON from 'enzyme-to-json'
//import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
    //expect(toJSON(wrapper)).toMatchSnapshot()
    //expect(wrapper.find('h1').text()).toBe('Expensify')
    //const renderer = new ReactShallowRenderer()
    //renderer.render(<Header />)
    //expect(renderer.getRenderOutput()).toMatchSnapshot()
    //console.log(renderer.getRenderOutput())
})
