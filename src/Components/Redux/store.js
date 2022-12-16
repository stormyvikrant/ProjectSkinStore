import { applyMiddleware, compose, legacy_createStore } from "redux";
import cartReducer from "./cart/cart.reducer";
import thunk from "redux-thunk";
const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  cartReducer,
  composeInhancer(applyMiddleware(thunk))
);
