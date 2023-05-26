import { useReducer } from "react";

import { CartContext } from "./CartContext";

// ░░░░░░░░░░░░░░░░░░░░░ Initial Cart Products ░░░░░░░░░░░░░░░░░░░░░
const initialCartState = {
  products: [],
  totalPrice: 0,
  lastAddedProduct: {},
  isCartModalShow: false,
};

const cartReducer = (state, action) => {
  if (action.type === "add_to_cart") {
    let updatedProducts = {
      ...state,
      products: [...state.products, action.product],
      lastAddedProduct: action.product,
      isCartModalShow: true,
    };

    return updatedProducts;
  }

  if (action.type === "close_cart_modal") {
    return {
      ...state,
      isCartModalShow: false,
    };
  }
};

// ░░ ░░ ░░ ░░ ░░ ░░ ░░ CartProvider Component ░░ ░░ ░░ ░░ ░░ ░░ ░░

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

  // ░░░░░░░░░░░░░░░ Function For Closing Cart Modal  ░░░░░░░░░░░░░░░░░░
  const closeCartModal = () => {
    dispatchCartAction({ type: "close_cart_modal" });
  };

  // ░░░░░░░░░░░░░░░ Distructure cartState ░░░░░░░░░░░░░░░
  let { products, totalPrice, isCartModalShow, lastAddedProduct } = cartState;

  // ░░░░░░░░░░░░░░░ Cart Product Context Data ░░░░░░░░░░░░░░░
  const cartProduct = {
    products,
    totalPrice,
    lastAddedProduct,
    isCartModalShow,
    closeCartModal,
    addToCartFunc,
    removeFromCartFunc,
  };

  return (
    <CartContext.Provider value={cartProduct}>{children}</CartContext.Provider>
  );
}
