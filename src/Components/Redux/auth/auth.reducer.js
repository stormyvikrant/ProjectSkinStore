import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGN_UP } from "./auth.action.types";
const int = {
  email: "",
  password: "",
  username: "",
};
const initialState = {
  isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
  userdata: JSON.parse(localStorage.getItem("userdata")) || int,
};
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_UP: {
      localStorage.setItem("userdata", JSON.stringify(payload));
      return { ...state, userdata: payload };
    }
    case AUTH_LOGIN: {
      localStorage.setItem("isAuth", true);
      return { ...state, isAuth: true };
    }
    case AUTH_LOGOUT: {
      localStorage.setItem("isAuth", false);
      return { ...state, isAuth: false };
    }
    default: {
      return state;
    }
  }
};
