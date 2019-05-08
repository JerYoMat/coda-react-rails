import produce from 'immer';
import { 
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR
} from '../actions';
const initialState = {
  info: null,
  auth_token: '',
  loading: false,
  error: null,
  customFields: null,
  saveInProgress: false,
  saveError: null
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
      draft.customFields = action.payload.custom_fields;
      return;
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      draft.loading = false;
      draft.error = action.error;
      draft.info = null;
      return;
    case LOGOUT_SUCCESS:
      draft.info = null;
      draft.auth_token = '';
      draft.loading = false;
      draft.error = false;
      draft.sessionHistory = [];
      return;
    case UPDATE_USER_BEGIN:
      draft.saveInProgress = true;
      draft.saveError = null;
      return;
    case UPDATE_USER_SUCCESS:
      draft.saveInProgress = false;
      draft.saveError = null;
      draft.info = action.payload.info 
      return;
    case UPDATE_USER_ERROR:
      draft.saveInProgress = false;
      draft.saveError = action.error;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;
