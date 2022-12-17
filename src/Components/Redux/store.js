import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import cartReducer from "./cart/cart.reducer";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const totalReducer = combineReducers({
  cartManager: cartReducer,
  authManager: authReducer,
});
export const store = legacy_createStore(
  totalReducer,
  composeInhancer(applyMiddleware(thunk))
);
