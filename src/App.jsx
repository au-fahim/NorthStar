import { useState, useContext } from "react";

// Custom Components
import Header from "../components/layouts/Header";
import MsgBanner from "../components/layouts/Msg_Banner";
import Products from "../components/layouts/product/Products";
import CartProvider from "../context/CartProvider";
import Cart from "../components/layouts/cart/Cart";

function App() {
  const [showModal, setShowModal] = useState(false);

  // Select the <html> Tag
  const html = document.querySelector("html");

  // Modal Show Function
  const showModalFunc = () => {
    setShowModal(true);
    html.style.overflow = "hidden";
  };

  // Modal Hide Function
  const hideModalFunc = () => {
    setShowModal(false);
    html.style.overflow = "scroll";
  };

  return (
    <CartProvider>
      {/* Modal Show or Hide */}
      {showModal && <Cart onHideModal={hideModalFunc} />}

      {/* Top Banner */}
      <MsgBanner />

      {/* Top Header */}
      <Header onShowModal={showModalFunc} />

      {/* All Products */}
      <Products />
    </CartProvider>
  );
}

export default App;
