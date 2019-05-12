import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'; 
import { loadCompanies, loadDefaultFields } from './actions';
import App from './App';
import { saveState, loadState } from './sessionStorage';
import throttle  from 'lodash/throttle';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';



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
  saveState(store.getState());
  console.log('hit')
}, 2000));

if (store.getState().companies.loadedList === false) {
  store.dispatch(loadCompanies())
  store.dispatch(loadDefaultFields())
}


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));
