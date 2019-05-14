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
  SAVE_USER_ERROR,
  ADD_FAVORITE_BEGIN,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_ERROR,
  REMOVE_FAVORITE_BEGIN,
  REMOVE_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_ERROR,
   OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL
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
  tokenIssueTime: null,
  favorites: {},
  syncingFavorites: false,
  syncFavoriteError: null,
  modalOpen: false, 
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      draft.modalOpen = true;
      return;
    case CLOSE_LOGIN_MODAL:
      draft.modalOpen = false;
      return;
    case LOGIN_BEGIN:
    case SIGNUP_BEGIN:
      draft.loading = true;
      draft.error = null;
      return;
    case LOGIN_SUCCESS:
      draft.loading = false;
      draft.customFields = action.payload.custom_fields;
      draft.info = action.payload.info; 
      draft.authToken = action.payload.auth_token;
      draft.favorites = action.payload.favorites 
      draft.tokenIssueTime = Date.now()
      draft.modalOpen = false;
    return;
    case SIGNUP_SUCCESS:
      draft.loading = false;
      draft.customFields = action.payload.custom_fields;
      draft.info = action.payload.info; 
      draft.authToken = action.payload.auth_token; 
      draft.tokenIssueTime = Date.now()
      draft.modalOpen = false
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
    case ADD_FAVORITE_BEGIN:
      draft.syncingFavorites = true;
      draft.syncFavoriteError = null;
      return;
    case ADD_FAVORITE_SUCCESS:
      draft.syncingFavorites = false;
      draft.favorites[action.payload.company_id] = action.payload.id
      return;
    case ADD_FAVORITE_ERROR:
      draft.syncingFavorites = false;
      draft.syncFavoriteError = action.error;
      return;
    case REMOVE_FAVORITE_BEGIN:
      draft.syncingFavorites = true;
      draft.syncFavoriteError = null;
      return;
    case REMOVE_FAVORITE_SUCCESS:
      draft.syncingFavorites = false;
      delete draft.favorites[action.payload];
      return;
    case REMOVE_FAVORITE_ERROR:
      draft.syncingFavorites = false;
      draft.syncFavoriteError = action.error;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;
