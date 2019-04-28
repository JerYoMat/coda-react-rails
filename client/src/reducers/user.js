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
  user: null,
  loading: false,
  modalIsOpen: false,
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
      draft.user = action.payload;  //depending on how favorites are passed back 
      return;
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      draft.loading = false;
      draft.error = action.error;
      draft.user = null;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;