import { useContext } from "react";
import ReactDOM from "react-dom";

import { CartContext } from "../../../context/CartContext";

export default function ModalBackdrop({ children, hideLeftMenuFunc }) {
  const cartData = useContext(CartContext);

  const modalBackdropHandler = () => {
    cartData.closeCartModal();
    hideLeftMenuFunc();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <section
          onClick={modalBackdropHandler}
          className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] z-40">
          {children}
        </section>,
        document.getElementById("modal")
      )}
    </>
  );
}
