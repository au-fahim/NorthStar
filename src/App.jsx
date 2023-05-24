import { useState } from "react";
import ReactDOM from "react-dom";

import Header from "../components/layouts/Header";
import MsgBanner from "../components/layouts/Msg_Banner";
import Products from "../components/layouts/product/Products";
import ModalOverlay from "../components/layouts/modal/Modal_Backdrop";
import RightModal from "../components/layouts/modal/Right_Modal";

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
    <>
      {/* Modal Show or Hide */}
      {showModal && <RightModal onHideModal={hideModalFunc} />}

      {/* Top Banner */}
      <MsgBanner />

      {/* Top Header */}
      <Header onShowModal={showModalFunc} />

      {/* All Products */}
      <Products />
    </>
  );
}

export default App;
