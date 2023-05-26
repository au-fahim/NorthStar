import { useContext, useState } from "react";

// Custom Components
import Header from "../components/layouts/Header";
import MsgBanner from "../components/layouts/Msg_Banner";
import HomeProducts from "../components/layouts/product/HomeProducts";
import CartModal from "../components/layouts/cart/CartModal";
import { CartContext } from "../context/CartContext";

function App() {
  const [showModal, setShowModal] = useState(false);

  // Store Context Data in cartData Veriable
  const cartData = useContext(CartContext);

  // Selecting the <html> Element
  const html = document.querySelector("html");

  // Disable Scrolling in Root Div, When Cart Modal is Active on screen
  cartData.isCartModalShow
    ? (html.style.overflow = "hidden")
    : (html.style.overflow = "scroll");

  // Modal Show Function
  // const showModalFunc = () => {
  //   setShowModal(true);
  //   html.style.overflow = "hidden";
  // };

  // Modal Hide Function
  // const hideModalFunc = () => {
  //   setShowModal(false);
  //   html.style.overflow = "scroll";
  // };

  return (
    <>
      {/* Modal Show or Hide */}
      {cartData.isCartModalShow && <CartModal />}

      {/* Top Banner Component */}
      <MsgBanner />

      {/* Top Header Component */}
      <Header />

      {/* All Products View Component */}
      <HomeProducts />
    </>
  );
}

export default App;
