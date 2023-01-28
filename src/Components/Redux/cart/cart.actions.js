import {
  ADD_TO_CART,
  DEC_QUANTITY,
  DELETE_FROM_CART,
  GET_CART_PRODUCTS,
  INC_QUANTITY,
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

export const incQuantity = (id) => (dispatch) => {
  dispatch({ type: INC_QUANTITY, payload: id });
};
export const decQuantity = (id) => (dispatch) => {
  dispatch({ type: DEC_QUANTITY, payload: id });
};
