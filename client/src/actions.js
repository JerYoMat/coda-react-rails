import { getCompanies, getStatmentData, loginUser, createUser, getDefaultFields } from './api';
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
//For non logged in users
export const GET_DEFAULT_FIELDS_BEGIN = 'GET_DEFAULT_FIELDS_BEGIN';
export const GET_DEFAULT_FIELDS_SUCCESS = 'GET_DEFAULT_FIELDS_SUCCESS';
export const GET_DEFAULT_FIELDS_ERROR = 'GET_DEFAULT_FIELDS_ERROR';
//For User
//Login
export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
//Signup 
export const SIGNUP_BEGIN = 'SIGNUP_BEGIN';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
//Update
export const SAVE_USER_BEGIN = 'SAVE_USER_BEGIN';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
export const SAVE_USER_ERROR = 'SAVE_USER_ERROR';
//Logout
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const UPDATE_FIELD_SETTING= 'UPDATE_FIELD_SETTING'

export const loadStatements = (id) => {
  return dispatch => {
    dispatch({ type: LOAD_STATEMENTS_BEGIN });
    getStatmentData(id)
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

export const loadDefaultFields = () => {
  return dispatch => {
    dispatch({ type: GET_DEFAULT_FIELDS_BEGIN });
    getDefaultFields()
    .then(fields => {
      dispatch({
        type: GET_DEFAULT_FIELDS_SUCCESS,
        payload: fields
      });
    })
    .catch(error => {
      dispatch({ type: GET_DEFAULT_FIELDS_ERROR, error });
    });
  };
}


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


export const changeLocalField = (statement, field, value) => {
  return dispatch => {
    dispatch(
      { type: UPDATE_FIELD_SETTING,
        payload: {statement, field, value}
      }
    )
    }
}

export const logout = () => ({
  type: LOGOUT_SUCCESS
});