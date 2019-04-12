import produce from 'immer';
import { 
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../actions';
const initialState = {
  user: {},
  favorites: [],
  history: [],
  configs: {}
};

const reducer = produce((draft, action) => {
  switch(action.type) {
    default:
      return;
  }
}, initialState);

export default reducer;