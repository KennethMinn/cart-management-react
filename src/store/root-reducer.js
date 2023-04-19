import { combineReducers } from "redux";
import { searchReducer } from "./search/search-reducer";

export const rootReducer = combineReducers({
  search: searchReducer,
});
