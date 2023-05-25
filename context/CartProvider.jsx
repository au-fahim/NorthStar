import { useReducer } from "react";

import { CartContext } from "./CartContext";

// ░░░░░░░░░░░░░░░░░░░░░ Initial Cart Products ░░░░░░░░░░░░░░░░░░░░░
const initialCartState = {
  products: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "add_to_cart") {
    console.log(state);

    let updatedProducts = {
      ...state,
      products: [...state.products, action.product],
    };

    return updatedProducts;
  }
};

// ░░░░░░░░░░░░░░░░░░░░░ CartProvider Component ░░░░░░░░░░░░░░░░░░░░░

export default function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  // ░░░░░░░░░░░░░░░░ Function For Add Product To Cart ░░░░░░░░░░░░░░░░░░
  const addToCartFunc = (product) => {
    dispatchCartAction({ type: "add_to_cart", product });
  };

  // ░░░░░░░░░░░░░░░ Function For Remove Product From Cart  ░░░░░░░░░░░░░░░░░░
  const removeFromCartFunc = (id) => {
    dispatchCartAction({ type: "remove_from_cart", id });
  };

  // ░░░░░░░░░░░░░░░ Cart Product Context Data ░░░░░░░░░░░░░░░
  const cartProduct = {
    products: cartState.products,
    totalPrice: cartState.totalPrice,
    addToCartFunc,
    removeFromCartFunc,
  };

  return (
    <CartContext.Provider value={cartProduct}>{children}</CartContext.Provider>
  );
}
