import { useContext } from "react";

import { CartContext } from "../../../context/CartContext";
import RightModal from "../modal/Right_Modal";

export default function Cart({ onHideModal }) {
  const cartData = useContext(CartContext);
  console.log(cartData.products);

  return (
    <RightModal onHideModal={onHideModal}>
      This is cart <button>x</button>
    </RightModal>
  );
}
