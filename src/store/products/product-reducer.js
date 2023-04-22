import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  products: [],
  filteredProducts: [],
  cartItems: [],
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
        ...state.cartItems,
        { ...action.payload, quantity: 1 },
      ];
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const {
  setProducts,
  setFilteredProducts,
  setCartItems,
  removeItemFromCart,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;

// export const productsReducer = (state = INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;
//   switch (type) {
//     case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
//       return {
//         ...state,
//         products: payload,
//       };

//     case PRODUCTS_ACTION_TYPES.SET_FILTERED_PRODUCTS:
//       return {
//         ...state,
//         filteredProducts: payload,
//       };
//     case PRODUCTS_ACTION_TYPES.SET_CART_ITEMS:
//       const isExisted = state.cartItems.find(item => item.id === payload.id);
//       if (isExisted) return state;

//       return {
//         ...state,
//         cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
//       };

//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(item => item.id !== payload.id),
//       };

//     default:
//       return state;
//   }
// };
