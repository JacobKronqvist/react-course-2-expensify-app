import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper

beforeEach(() =>{
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(
    <EditExpensePage 
    editExpense={editExpense} 
    removeExpense={removeExpense} 
    history={history} 
    expense={expenses[1]}/>)
})

test('Should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should handle editExpense',() => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenCalledWith(expenses[1].id, expenses[1])
})

test('Should handle removeExpense',() => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenCalledWith({id: expenses[1].id})
})