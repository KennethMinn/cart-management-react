import { SEARCH_ACTION_TYPES } from "./search-type";
import { createAction } from "../../utils/helper-func";

export const setSearchField = (value) =>
  createAction(SEARCH_ACTION_TYPES.SET_SEARCH_FIELD, value);
