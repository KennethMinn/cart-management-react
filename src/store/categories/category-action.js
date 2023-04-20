import { createAction } from '../../utils/helper-func';
import { CATEGORIES_ACTION_TYPES } from '../categories/category-type';

export const setCategories = newCategories =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, newCategories);
