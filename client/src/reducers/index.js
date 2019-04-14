import { combineReducers } from 'redux';
import companies from './companies';
import periodData from './periodData';
export default combineReducers({ 
  companies,
  periodData
});