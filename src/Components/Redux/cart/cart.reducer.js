import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART_PRODUCTS,
  RESET_CART,
} from "./cart.action.types";

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
    case DELETE_FROM_CART: {
      let updatedCart = state.products.filter((p) => p.id != payload);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return { ...state, products: updatedCart };
    }
    case RESET_CART: {
      localStorage.setItem("cartItems", JSON.stringify([]));
      return { ...state, products: [] };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
