import produce from 'immer';
import { 
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT_SUCCESS
} from '../actions';
const initialState = {
  info: null,
  auth_token: '',
  loading: false,
  error: null,
  sessionHistory: []
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case LOGIN_BEGIN:
    case SIGNUP_BEGIN:
      draft.loading = true;
      draft.error = null;
      return;
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      draft.loading = false;
      draft.info = action.payload.info;  //depending on how favorites are passed back
      draft.auth_token = action.payload.auth_token; 
      return;
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      draft.loading = false;
      draft.error = action.error;
      draft.user = null;
      return;
    case LOGOUT_SUCCESS:
      draft.info = null;
      draft.auth_token = '';
      draft.loading = false;
      draft.error = false;
      draft.sessionHistory = [];
      return;
    default:
      return;
  }
}, initialState);

export default reducer;
