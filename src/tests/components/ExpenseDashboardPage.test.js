import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashBoardPage from '../../components/ExpenseDashboardPage'

test('Should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashBoardPage />)
    expect(wrapper).toMatchSnapshot()
})