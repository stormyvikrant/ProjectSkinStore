import {
  AUTH_ADMIN_LOGIN,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SIGN_UP,
} from "./auth.action.types";

export const userSignUp = (data) => (dispatch) => {
  dispatch({ type: AUTH_SIGN_UP, payload: data });
};
export const userLogin = () => (dispatch) => {
  dispatch({ type: AUTH_LOGIN });
};
export const userLogout = () => (dispatch) => {
  dispatch({ type: AUTH_LOGOUT });
};
export const adminLogin = () => (dispatch) => {
  dispatch({ type: AUTH_ADMIN_LOGIN });
};
