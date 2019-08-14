/* eslint-disable */
// require('dotenv').config()
import React from 'react';
import App from './components/pages/App';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
    sagaMiddleware
  )
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
