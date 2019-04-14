import produce from 'immer';
import { 
  LOAD_STATEMENTS_BEGIN,
  LOAD_STATEMENTS_SUCCESS,
  LOAD_STATEMENTS_ERROR
} from '../actions';
const initialState = {
  fins: {},
  loadingStmnt: false,
  loadingStmtError: null
};

const reducer = produce((draft, action) => {
  switch(action.type) {
    case LOAD_STATEMENTS_BEGIN:
      draft.loadingStmnt = true;
      draft.loadingStmtError = null;
      return;
    case LOAD_STATEMENTS_SUCCESS:
      draft.loadingStmnt = false;
      draft.fins.push(action.payload) 
      return;
    case LOAD_STATEMENTS_ERROR:
      draft.loadingStmnt = false;
      draft.loadingStmtError = action.error
      return;
    default:
      return;
  }
}, initialState);

export default reducer;