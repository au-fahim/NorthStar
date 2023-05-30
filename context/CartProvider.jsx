import { useEffect, useReducer } from "react";

import { CartContext } from "./CartContext";
import { useLocation } from "react-router-dom";

// ░░░░░░░░░░░░░░░░░░░░░ Initial Cart Products State ░░░░░░░░░░░░░░░░░░░░░
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

    let updatedTotalRegularPrice =
      state.totalRegularPrice +
      action.product.regularPrice * action.product.quantity;

    /* :: Select Existing Cart Product :: 
        <> if user selected product is Already have in the Cart */

    const existingProductIndex = state.products.findIndex(
      (product) => product.id === action.product.id
    );
    const existingProduct = state.products[existingProductIndex];

    let updatedProducts;

    /* :: If `User Given` Product is Already have in the Cart, ::
        <> Then, Update The Quantity of the Product. 
        <> Else, Add the `Given Product` To the Products State */

    if (existingProduct) {
      // :: Updating the product quantity ::
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + action.product.quantity,
      };

      // :: Store available Cart Items --> in `updateProducts` variable ::
      updatedProducts = [...state.products];

      // :: Update the `Quantity Updated Product` --> from Products State ::
      updatedProducts[existingProductIndex] = updatedProduct;
    } else {
      updatedProducts = state.products.concat(action.product);
    }

    return {
      products: updatedProducts,
      totalSalePrice: updatedTotalSalePrice,
      totalRegularPrice: updatedTotalRegularPrice,
      lastAddedProduct: action.product,
      isCartModalShow: true,
    };
  }

  if (action.type === "remove_from_cart") {
    // :: Selecting Existing Cart Product ::
    const existingProductIndex = state.products.findIndex(
      (product) => product.id === action.id
    );
    const existingProduct = state.products[existingProductIndex];

    let updatedProducts = state.products.filter(
      (product) => product.id !== action.id
    );

    // :: Existing Product Total Sale Price ::
    const extPdtTotalSalePrice =
      existingProduct.salePrice * existingProduct.quantity;

    // :: Update The Total Sale Price ::
    const updatedTotalSalePrice = state.totalSalePrice - extPdtTotalSalePrice;

    // :: Existing Product Total Regular Price ::
    const extPdtTotalRegPrice =
      existingProduct.salePrice * existingProduct.quantity;

    // :: Update The Total Regular Price ::
    const updatedTotalRegularPrice =
      state.totalRegularPrice - extPdtTotalRegPrice;

    return {
      products: updatedProducts,
      totalSalePrice: updatedTotalSalePrice,
      totalRegularPrice: updatedTotalRegularPrice,
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

// ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ CartProvider Component ░ ░ ░ ░ ░ ░ ░ ░ ░ ░

export default function CartProvider({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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

  // :: Destructuring --> `cartState` ::
  let {
    products,
    totalRegularPrice,
    totalSalePrice,
    isCartModalShow,
    lastAddedProduct,
  } = cartState;

  /* :: Disable Scrolling in Root Div :: 
      <> When Cart Modal is Active on screen */

  // :: Selecting the <html> Element ::
  const html = document.querySelector("html");

  isCartModalShow
    ? (html.style.overflow = "hidden")
    : (html.style.overflowY = "auto");

  // :: Cart Product Context Data ::
  const cartProduct = {
    products,
    totalVat: 0,
    totalPrice: 0,
    totalSalePrice,
    totalRegularPrice,
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
