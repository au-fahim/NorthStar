import { useReducer } from "react";

import { CartContext } from "./CartContext";

// ░░░░░░░░░░░░░░░░░░░░░ Initial Cart Products ░░░░░░░░░░░░░░░░░░░░░
const initialCartState = {
  products: [],
  totalVat: 0,
  totalPrice: 0,
  totalSalePrice: 0,
  totalRegularPrice: 0,
  lastAddedProduct: {},
  isCartModalShow: false,
};

const cartReducer = (state, action) => {
  if (action.type === "add_to_cart") {
    let updatedTotalSalePrice =
      state.totalSalePrice + action.product.salePrice * action.product.quantity;

    // Selecting Existing Cart Product :: <if user selected product is Already have in the Cart>
    const existingProductIndex = state.products.findIndex(
      (product) => product.id === action.product.id
    );
    const existingProduct = state.products[existingProductIndex];

    let updatedProducts;

    // If User Selected Product is Already have in the Cart, Then Update The Quantity of the Product
    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + action.product.quantity,
      };

      updatedProducts = [...state.products];

      updatedProducts[existingProductIndex] = updatedProduct;
    } else {
      updatedProducts = state.products.concat(action.product);
    }

    return {
      products: updatedProducts,
      totalSalePrice: updatedTotalSalePrice,
      lastAddedProduct: action.product,
      isCartModalShow: true,
    };
  }

  if (action.type === "remove_from_cart") {
    // Selecting Existing Cart Product :: <if user selected product is Already have in the Cart>
    const existingProductIndex = state.products.findIndex(
      (product) => product.id === action.id
    );
    const existingProduct = state.products[existingProductIndex];

    let updatedProducts = state.products.filter(
      (product) => product.id !== action.id
    );

    const existingProductPrice =
      existingProduct.salePrice * existingProduct.quantity;

    // Update The Total Sale Price
    const updatedTotalSalePrice = state.totalSalePrice - existingProductPrice;

    return {
      products: updatedProducts,
      totalSalePrice: updatedTotalSalePrice,
    };
  }

  if (action.type === "close_cart_modal") {
    return {
      ...state,
      isCartModalShow: false,
    };
  }

  return initialCartState;
};

// ░░ ░░ ░░ ░░ ░░ ░░ ░░ CartProvider Component ░░ ░░ ░░ ░░ ░░ ░░ ░░ ⁐

export default function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  // Add Product To Cart
  const addToCartFunc = (product) => {
    dispatchCartAction({ type: "add_to_cart", product });
  };

  // Remove Product From Cart
  const removeFromCartFunc = (id) => {
    dispatchCartAction({ type: "remove_from_cart", id });
  };

  // Closing Cart Modal
  const closeCartModal = () => {
    dispatchCartAction({ type: "close_cart_modal" });
  };

  // Destructuring >>> cartState <<<
  let { products, totalSalePrice, isCartModalShow, lastAddedProduct } =
    cartState;

  // Cart Product Context Data
  const cartProduct = {
    products,
    totalVat: 0,
    totalPrice: 0,
    totalSalePrice,
    totalRegularPrice: 0,
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
