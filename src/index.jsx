import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/main.scss'

import React from 'react';
import Immutable from 'immutable';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import Helper from './Helper';
import reducer from './reducers/index';

const initialState = Immutable.fromJS({
  myTeam: {
    selected: 0,
    members: Array(6).fill()
  },
  otherTeam: {
    members: Helper.getRandomTeam()
  },
});

let store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log(store.getState().toJS());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
