import { createContext } from "react";

export const CartContext = createContext({
  selectedSize: "",
  products: [],
  totalVat: 0,
  totalPrice: 0,
  totalSalePrice: 0,
  totalRegularPrice: 0,
  lastAddedProduct: {},
  isCartModalShow: false,
  closeCartModal: () => {},
  addToCartFunc: () => {},
  removeFromCartFunc: () => {},
  updateQuantityFunc: () => {},
});
