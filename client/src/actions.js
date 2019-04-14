import { getCompanies, getStatmentData } from './api';

//For Companies
//Getting Company List 
export const LOAD_COMPANIES_BEGIN = 'LOAD_COMPANIES_BEGIN';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const LOAD_COMPANIES_ERROR = 'LOAD_COMPANIES_ERROR';

//Get Individual Company Data
export const LOAD_STATEMENTS_BEGIN = 'LOAD_STATEMENTS_BEGIN';
export const LOAD_STATEMENTS_SUCCESS = 'LOAD_STATEMENTS_SUCCESS';
export const LOAD_STATEMENTS_ERROR = 'LOAD_STATEMENTS_ERROR';


//For User
//Login
export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
//Signup 
export const SIGNUP_BEGIN = 'SIGNUP_BEGIN';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const loadStatements = (ticker) => {
  return dispatch => {
    dispatch({ type: LOAD_STATEMENTS_BEGIN });
    getStatmentData(ticker)
    .then(fins => {
      dispatch({
        type: LOAD_STATEMENTS_SUCCESS,
        payload: fins
      });
    })
    .catch(error => {
      dispatch({ type: LOAD_STATEMENTS_ERROR, error });
    });
  };
}; 


export const loadCompanies = () => {
  return dispatch => {
    dispatch({ type: LOAD_COMPANIES_BEGIN });
    getCompanies()
    .then(companies => {
      dispatch({
        type: LOAD_COMPANIES_SUCCESS,
        payload: companies
      });
    })
    .catch(error => {
      dispatch({ type: LOAD_COMPANIES_ERROR, error });
    });
  };
}; 