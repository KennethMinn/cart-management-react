import { PRODUCTS_ACTION_TYPES } from "./product-type";

const INITIAL_STATE = {
  products: [],
  filteredProducts: [],
  cartItems: [],
};

export const productsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case PRODUCTS_ACTION_TYPES.SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: payload,
      };
    case PRODUCTS_ACTION_TYPES.SET_CART_ITEMS:
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) return state;

      return {
        ...state,
        cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
      };

    default:
      return state;
  }
};
