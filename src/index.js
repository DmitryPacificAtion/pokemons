import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import App from './App/App.jsx';
import reducers from './App/reducers.js';

let logger = createLogger();

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, logger));

render( <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);