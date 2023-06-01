import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  products: [],
  filteredProducts: [],
  cartItems: [],
  isLoading: false,
};

// export const setProducts = (newProducts) =>
//   createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS, newProducts);

// export const setFilteredProducts = (newFilterProducts) =>
//   createAction(PRODUCTS_ACTION_TYPES.SET_FILTERED_PRODUCTS, newFilterProducts);

// export const setCartItems = (newCartItems) =>
//   createAction(PRODUCTS_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

// export const removeItemFromCart = (item) =>
//   createAction("REMOVE_FROM_CART", item);

export const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setFilteredProducts(state, action) {
      state.filteredProducts = action.payload;
    },
    setCartItems(state, action) {
      const isExisted = state.cartItems.find(
        item => item.id === action.payload.id
      );
      if (isExisted) {
        state.cartItems = state;
      }

      state.cartItems = [
        ...state.cartItems, // [...[{state.cartItems}],{}] => [...{state.cartItems},{}]
        { ...action.payload, quantity: 1 }, // {...{action.payload} , quantity :1} => {...action.payload , quantity : 1}
      ];
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload.id
      );
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setProducts,
  setFilteredProducts,
  setCartItems,
  removeItemFromCart,
  setIsLoading,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
