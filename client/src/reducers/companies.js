import produce from 'immer';
import { 
  LOAD_COMPANIES_BEGIN,
  LOAD_COMPANIES_SUCCESS,
  LOAD_COMPANIES_ERROR
} from '../actions';
const initialState = {
  list: [],
  loadedList: false,
  loadingList: false,
  loadingListError: null
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
    default:
      return;
  }
}, initialState);

export default reducer;