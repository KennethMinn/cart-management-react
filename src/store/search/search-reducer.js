import { SEARCH_ACTION_TYPES } from "./search-type";

const INITIAL_STATE = {
  searchField: "",
};

export const searchReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ACTION_TYPES.SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: payload,
      };

    default:
      return state;
  }
};
