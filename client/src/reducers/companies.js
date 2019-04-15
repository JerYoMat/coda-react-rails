import produce from 'immer';
import { 
  LOAD_COMPANIES_BEGIN,
  LOAD_COMPANIES_SUCCESS,
  LOAD_COMPANIES_ERROR,
  LOAD_STATEMENTS_BEGIN,
  LOAD_STATEMENTS_SUCCESS,
  LOAD_STATEMENTS_ERROR
} from '../actions';
const initialState = {
  list: [],
  loadedList: false,
  loadingList: false,
  loadingListError: null,
  statements: {},
  loadingStmnt: false,
  loadingStmntError: null
};

const reducer = produce((draft, action) => {
  switch(action.type) {
    case LOAD_COMPANIES_BEGIN:
      draft.loadingList = true;
      draft.loadingListError = null;
      return;
    case LOAD_COMPANIES_SUCCESS:
      draft.loadedList = true;
      draft.loadingList = false;
      draft.list=action.payload;
      return;
    case LOAD_COMPANIES_ERROR:
      draft.loadingList = false;
      draft.loadingListError = action.error;
      return;
      case LOAD_STATEMENTS_BEGIN:
      draft.loadingStmnt = true;
      draft.loadingStmntError = null;
      return;
    case LOAD_STATEMENTS_SUCCESS:
      draft.loadingStmnt = false;
      draft.statements[Object.keys(action.payload)[0]] = Object.values(action.payload)[0]
      return;
    case LOAD_STATEMENTS_ERROR:
      draft.loadingStmnt = false;
      draft.loadingStmntError = action.error
      return;
    default:
      return;
  }
}, initialState);

export default reducer;