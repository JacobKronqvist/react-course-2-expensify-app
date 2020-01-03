import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {AppRouter, history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense, startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import {firebase} from './firebase/firebase'
//import './playground/promises'

const store = configureStore();

//store.dispatch(addExpense({description: 'Water bill', amount: 10000}));
//store.dispatch(addExpense({description: 'Gas bill', amount: 1000, createdAt: 1000}));
//store.dispatch(addExpense({description: 'Rent', amount: 100000}));
//store.dispatch(setTextFilter('bill'));

//setTimeout(() => {
//    store.dispatch(setTextFilter('rent'));
//}, 3000);

//const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

//ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
//ReactDOM.render(jsx, document.getElementById('app'));

// store.dispatch(startSetExpenses()).then(() => {
//     ReactDOM.render(jsx, document.getElementById('app'));
// })

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        //console.log('uid', user.uid)
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
        //console.log('log in')
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
        //console.log('log out')
    }
})