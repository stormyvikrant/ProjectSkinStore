import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART_PRODUCTS,
  RESET_CART,
} from "./cart.action.types";

export const getCartProducts = () => (dispatch) => {
  dispatch({ type: GET_CART_PRODUCTS });
};

export const addToCart = (data) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: data });
};
export const deleteToCart = (id) => (dispatch) => {
  dispatch({ type: DELETE_FROM_CART, payload: id });
};
export const resetCart = () => (dispatch) => {
  dispatch({ type: RESET_CART });
};
