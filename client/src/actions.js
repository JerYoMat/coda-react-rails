import { getCompanies } from './api';

//For Companies List
export const LOAD_COMPANIES_BEGIN = 'LOAD_COMPANIES_BEGIN';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const LOAD_COMPANIES_ERROR = 'LOAD_COMPANIES_ERROR';


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