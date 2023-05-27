import { Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";

// Custom Components
import CartModal from "../../components/layouts/cart/CartModal";
import { CartContext } from "../../context/CartContext";
import MsgBanner from "../../components/layouts/Msg_Banner";
import Header from "../../components/layouts/Header";

// Pages
import Home from "./Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";

function App() {
  // Store Context Data in cartData Veriable
  const cartData = useContext(CartContext);

  // Selecting the <html> Element
  const html = document.querySelector("html");

  // Disable Scrolling in Root Div, When Cart Modal is Active on screen
  cartData.isCartModalShow
    ? (html.style.overflow = "hidden")
    : (html.style.overflowY = "auto");

  return (
    <>
      {/* Modal Show or Hide */}
      {cartData.isCartModalShow && <CartModal />}

      {/* Top Banner Component */}
      <MsgBanner />

      {/* Top Header Component */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
