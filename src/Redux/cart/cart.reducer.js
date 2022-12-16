import { ADD_TO_CART, GET_CART_PRODUCTS } from "./cart.action.types";

let initialState = {
  products: JSON.parse(localStorage.getItem("cartItems")) || [],
};
const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.push(payload);

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return { ...state, products: [...state.products, payload] };
    }
    case GET_CART_PRODUCTS: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
