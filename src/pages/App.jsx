import { Route, Routes, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

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

function App() {
  // Store Context Data in cartData Veriable
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

      {/* Top Banner Component */}
      <MsgBanner />

      {/* Top Header Component */}
      <Header />

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
