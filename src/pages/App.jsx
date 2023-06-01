import { Route, Routes, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Custom Components
import CartModal from "../../components/layouts/cart/CartModal";
import { CartContext } from "../../context/CartContext";
import MsgBanner from "../../components/layouts/Msg_Banner";
import Header from "../../components/layouts/Header";

// Pages
import Home from "./Home";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Footer from "../../components/layouts/Footer";
import LeftNavModal from "../../components/layouts/modal/LeftNavModal";

function App() {
  const [leftNavOpen, setLeftNavOpen] = useState(false);

  const showLeftMenuFunc = () => {
    setLeftNavOpen(true);
  };
  const hideLeftMenuFunc = () => {
    setLeftNavOpen(false);
  };

  // STORE CONTEXT DATA IN `cartData` VERIABLE
  const cartData = useContext(CartContext);

  // RESET WINDOW SCROLL POSITION TOP, WHEN THE URL CHANGE
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* Modal Show or Hide */}
      {cartData.isCartModalShow && <CartModal />}

      {/* LEFT NAVIGATION MENU */}
      {leftNavOpen && (
        <LeftNavModal
          showLeftMenuFunc={showLeftMenuFunc}
          hideLeftMenuFunc={hideLeftMenuFunc}
        />
      )}

      {/* Top Banner Component */}
      <MsgBanner />

      {/* Top Header Component */}
      <Header showLeftMenuFunc={showLeftMenuFunc} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default App;
