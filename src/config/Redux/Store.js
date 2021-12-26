// const { createStore } = require("react-redux");
import { createStore } from "redux";

const initialState = {
  product: [],
  cart: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_PRODUCT") {
    return {
      ...state,
      product: action.payload,
    };
  }
  if (action.type === "UPDATE_CART_INCREMENT") {
    return {
      ...state,
      cart: state.cart + 1,
    };
  }
  if (action.type === "UPDATE_CART_DECREMENT") {
    return {
      ...state,
      cart: state.cart - 1,
    };
  }
  return state;
};
const store = createStore(reducer);

export default store;
