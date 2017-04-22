import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers/reducers';

import App from './containers/contactApp';
import './index.css';


const middleware = [ thunk ]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)
ReactDOM.render(
  <Provider store={store}>
  <App /></Provider>,
  document.getElementById('root')
);