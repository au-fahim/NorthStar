import { createContext } from "react";

export const CartContext = createContext({
  products: [],
  totalPrice: 0,
  totalVat: 0,
  totalSalePrice: 0,
  totalRegularPrice: 0,
  lastAddedProduct: {},
  isCartModalShow: false,
  closeCartModal: () => {},
  addToCartFunc: () => {},
  removeFromCartFunc: () => {},
});
