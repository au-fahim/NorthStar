import { createContext } from "react";

export const CartContext = createContext({
  products: [],
  totalPrice: 0,
  addToCartFunc: () => {},
  removeFromCartFunc: () => {},
});
