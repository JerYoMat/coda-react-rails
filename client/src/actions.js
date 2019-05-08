import { getCompanies, getStatmentData, loginUser, createUser } from './api';
import { createStatements } from './functions/createStatements';
import { storeAuthToken } from './sessionStorage';

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
//Logout
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const loadStatements = (ticker) => {
  return dispatch => {
    dispatch({ type: LOAD_STATEMENTS_BEGIN });
    getStatmentData(ticker)
    .then(rawFins => createStatements(rawFins))
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

export const login = (email, password) => {
  return dispatch => {
    dispatch({ type: LOGIN_BEGIN });
    loginUser(email, password)
      .then(user => {
        storeAuthToken(user.auth_token)
        dispatch({
          type: LOGIN_SUCCESS,
          payload: user
        });
      })
      .catch(error => {
        dispatch({ type: LOGIN_ERROR, error });
      });
  };
};

export const signup = (username, email, password) => {
  return dispatch => {
    dispatch({ type: SIGNUP_BEGIN });
    createUser(username, email, password)
      .then(user => {
        storeAuthToken(user.auth_token)
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: user
        });
      })
      .catch(error => {
        dispatch({ type: SIGNUP_ERROR, error });
      });
  };
};

export const logout = () => ({
  type: LOGOUT_SUCCESS
});