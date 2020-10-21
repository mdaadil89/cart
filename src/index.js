import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {loadProducts} from './components/actions/cartActions'

const store = createStore(cartReducer,applyMiddleware(thunk) );
store.dispatch(loadProducts())  
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

