import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'

import generateStore from './app/redux/store'

const {store,persistor} = generateStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <PersistGate  persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

