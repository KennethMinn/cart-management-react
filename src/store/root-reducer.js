import { combineReducers } from '@reduxjs/toolkit';
import { searchReducer } from './search/search-reducer';
import { productsReducer } from './products/product-reducer';
import { categoriesReducer } from './categories/category-reducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  products: productsReducer,
  categories: categoriesReducer,
});
