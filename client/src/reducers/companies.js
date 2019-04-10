import produce from 'immer';

const initialState = {
  list: [],
  savingNew: false,
  savingNewError: null,
  loadingList: false,
  loadingListError: null,
  loadingProfile: false,
  loadingProfileError: null  
};

const reducer = produce((draft, action) => {
  switch(action.type) {
    default:
      return;
  }
}, initialState);

export default reducer;