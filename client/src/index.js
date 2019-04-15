import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'; 
import { loadCompanies } from './actions';
import './index.css';
import App from './App';
import { saveState, loadState } from './sessionStorage';
import throttle  from 'lodash/throttle';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true
      })
    : compose;

const persistedState = loadState()
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, persistedState, enhancer);

store.subscribe(throttle(() => {
  saveState({
    companies: store.getState().companies,
    periodData: store.getState().periodData
  });
}, 1000, { 'trailing': false}));

if (store.getState().companies.loadedList === false) {
  store.dispatch(loadCompanies())
}



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
