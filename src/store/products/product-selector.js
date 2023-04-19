import { createSelector } from "reselect";
import CartItems from "../../components/cart-items";

export const selectProductsReducer = (state) => state.products;

export const selectProducts = createSelector(
  [selectProductsReducer],
  (products) => products.products // state.products.products
);

export const selectFilteredProducts = createSelector(
  [selectProductsReducer],
  (products) => products.filteredProducts //state.products.filteredProducts
);

export const selectCartItems = createSelector(
  [selectProductsReducer],
  (products) => products.cartItems //state.products.cartItems
);
