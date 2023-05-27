import { useContext } from "react";
import { CartContext } from "./../../context/CartContext";
import CartItem from "../../components/layouts/cart/CartItem";

export default function Cart() {
  const cartData = useContext(CartContext);

  const { products, totalSalePrice } = cartData;

  const cartItems = products?.map((product, index) => (
    <CartItem key={index} product={product} />
  ));

  return (
    <section>
      <div className="main-wrapper">
        <div className="grid grid-cols-8 py-14">
          <div className="col-span-5 flex flex-col gap-6">
            <h1 className="text-4xl font-bold uppercase">your cart</h1>
            <div className="flex flex-col gap-2">
              <p>
                <span className="uppercase">TOTAL:</span> ({products?.length}{" "}
                items) <strong>${totalSalePrice}</strong>
              </p>
              <p className="font-light">
                Items in your bag are not reserved — check out now to make them
                yours.
              </p>
            </div>

            {/* Listed Cart Product Item */}
            <div className="flex flex-col gap-4">{cartItems}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
