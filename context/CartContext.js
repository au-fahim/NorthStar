import { createContext } from "react";

export const CartContext = createContext({
  products: [],
  totalPrice: 0,
  lastAddedProduct: {},
  isCartModalShow: false,
  closeCartModal: () => {},
  addToCartFunc: () => {},
  removeFromCartFunc: () => {},
});
