import { Route, Routes, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// CONTEXT
import { CartContext } from "./context/CartContext";

// CUSTOM COMPONENTS
import Header from "./components/Header";
import SingleProduct from "./pages/SingleProduct";
import MsgBanner from "./components/banner/Msg_Banner";
import CartModal from "./components/cart/CartModal";
import LeftNavModal from "./components/modal/LeftNavModal";

// PAGES &
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  // LEFT NAVIGATION MENU SHOW HIDE STATE
  const [leftNavOpen, setLeftNavOpen] = useState(false);

  // LEFT NAVIGATION MENU SHOW HIDE FUNCTION
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
      {/* :: SUCCESSFULLY ADDED TO CART :: MESSAGE MODAL */}
      {cartData.isCartModalShow && <CartModal />}

      {/* LEFT NAVIGATION MENU */}
      {leftNavOpen && (
        <LeftNavModal
          showLeftMenuFunc={showLeftMenuFunc}
          hideLeftMenuFunc={hideLeftMenuFunc}
        />
      )}

      {/* TOP SMALL BANNER COMPONENT */}
      <MsgBanner />

      {/* TOP HEADER COMPONENT */}
      <Header showLeftMenuFunc={showLeftMenuFunc} />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>

      {/* FOOTER COMPONENT */}
      <Footer />
    </>
  );
}

export default App;
