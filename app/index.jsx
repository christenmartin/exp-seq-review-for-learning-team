'use strict'
import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Main from './components/Main';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('main')
)



// old start script
    // "start:dev": "webpack -w & nodemon main",
