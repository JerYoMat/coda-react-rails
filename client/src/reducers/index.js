import { combineReducers } from 'redux';
import companies from './companies';
import user from './user';

export default combineReducers({ 
  companies,
  user
});