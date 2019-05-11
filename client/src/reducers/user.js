import produce from 'immer';
import { 
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT_SUCCESS,
  GET_DEFAULT_FIELDS_BEGIN,
  GET_DEFAULT_FIELDS_SUCCESS,
  GET_DEFAULT_FIELDS_ERROR,
  UPDATE_FIELD_SETTING,
  SAVE_USER_BEGIN,
  SAVE_USER_SUCCESS,
  SAVE_USER_ERROR
} from '../actions';
const initialState = {
  info: null,
  authToken: '',
  loading: false,
  error: null,
  customFields: null,
  saveInProgress: false,
  saveError: null,
  unsavedChanges: false,
  tokenIssueTime: null 
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
      draft.customFields = action.payload.custom_fields;
      draft.info = action.payload.info; 
      draft.authToken = action.payload.auth_token; 
      draft.tokenIssueTime = Date.now()
      return;
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      draft.loading = false;
      draft.error = action.error;
      draft.info = null;
      return;
    case SAVE_USER_BEGIN:
      draft.saveInProgress = true;
      draft.saveError = null;
    return;
    case SAVE_USER_SUCCESS:
      draft.saveInProgress = false;
      draft.unsavedChanges = false;
      draft.customFields = action.payload.custom_fields;
      draft.info = action.payload.info; 
      return;
    case SAVE_USER_ERROR:
      draft.saveInProgress = false;
      draft.error = action.error;
    return;
    case LOGOUT_SUCCESS:
      draft.info = null;
      draft.authToken = '';
      draft.loading = false;
      draft.error = false;
      draft.sessionHistory = [];
      return;
    case UPDATE_FIELD_SETTING:
      draft.customFields[action.payload.statement][action.payload.field][1] = action.payload.value;
      draft.unsavedChanges = true;
      return;
    case GET_DEFAULT_FIELDS_BEGIN:
      draft.loadingFields = true;
      draft.loadingFieldsError = null;
      return;
    case GET_DEFAULT_FIELDS_SUCCESS:
      draft.loadingFields = false;
      draft.customFields = action.payload;
      return;
    case GET_DEFAULT_FIELDS_ERROR:
      draft.loadingFields = false;
      draft.loadingFieldsError = action.error;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;
