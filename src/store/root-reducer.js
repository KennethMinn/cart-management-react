import { combineReducers } from "redux";
import { searchReducer } from "./search/search-reducer";
import { productsReducer } from "./products/product-reducer";

export const rootReducer = combineReducers({
  search: searchReducer,
  products: productsReducer,
});
