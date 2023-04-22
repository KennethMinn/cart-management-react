import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  searchField: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: INITIAL_STATE,
  reducers: {
    setSearchField(state, action) {
      state.searchField = action.payload;
    },
  },
});

export const { setSearchField } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

// export const searchReducer = (state = INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;
//   switch (type) {
//     case SEARCH_ACTION_TYPES.SET_SEARCH_FIELD:
//       return {
//         ...state,
//         searchField: payload,
//       };

//     default:
//       return state;
//   }
// };
