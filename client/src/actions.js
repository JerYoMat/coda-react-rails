import { getCompanies } from './api';

//For Companies
//Getting Company List 
export const LOAD_COMPANIES_BEGIN = 'LOAD_COMPANIES_BEGIN';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const LOAD_COMPANIES_ERROR = 'LOAD_COMPANIES_ERROR';

//For User
//Login
export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
//Signup 
export const SIGNUP_BEGIN = 'SIGNUP_BEGIN';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';




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