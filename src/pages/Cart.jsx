import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

import { CartContext } from "./../../context/CartContext";
import CartItem from "../../components/layouts/cart/CartItem";

export default function Cart() {
  const cartData = useContext(CartContext);

  const { products, totalRegularPrice, totalSalePrice, totalVat } = cartData;

  const totalItems = products.reduce((currentQuantity, product) => {
    return currentQuantity + product.quantity;
  }, 0);

  const cartItems = products.map((product, index) => (
    <CartItem key={index} product={product} />
  ));

  return (
    <section>
      <div className="main-wrapper">
        {!!cartItems?.length ? (
          <>
            {/* CART HEADER */}
            <header className="flex flex-col gap-2 text-sm md:text-base pt-3 pb-0 md:pt-5 md:pb-2">
              <h1 className="text-2xl md:text-4xl font-bold uppercase">
                your cart
              </h1>
              <p>
                <span className="uppercase">TOTAL:</span> ({totalItems} items){" "}
                <strong>${totalSalePrice}</strong>
              </p>
              <p className="font-light">
                Items in your bag are not reserved — check out now to make them
                yours.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 py-2 md:py-4">
              {/* CART ITEMS SECTION START */}
              <section className="order-last md:order-first lg:col-span-7 flex flex-col gap-4 md:gap-6 pt-4 pb-8 md:pt-8">
                {/* Listed Cart Product Item */}
                <div className="flex flex-col gap-2 lg:gap-4">
                  <strong className="text-xl md:text-2xl xl:text-3xl pb-2 md:pb-4">
                    Product Overview
                  </strong>
                  {cartItems}
                </div>
              </section>
              {/* CART ITEMS SECTION END */}

              {/* ORDER SUMMERY SECTION START */}
              <section className="lg:col-start-9 lg:col-span-4 md:sticky top-0 h-max py-4 md:pt-8">
                <strong className="text-base lg:text-lg xl:text-xl uppercase">
                  ORDER SUMMARY
                </strong>

                <ul className="orderSummery--list">
                  <li>
                    <span>{totalItems} items</span>
                    <span>${totalSalePrice.toFixed(2)}</span>
                  </li>
                  <li>
                    <span>Original price</span>
                    <span>${totalRegularPrice.toFixed(2)}</span>
                  </li>
                  <li>
                    <span>Sales VAT</span>
                    {/* <span>{!!totalVat ? `$${totalVat}` : "-"}</span> */}
                    <span>${((totalSalePrice / 100) * 2.1).toFixed(2)}</span>
                  </li>
                  <li>
                    <span>Delivery</span>
                    <span>FREE</span>
                  </li>
                </ul>

                {/* TOTAL PRICE */}
                <strong className="flex flex-row justify-between items-center py-2 md:py-4 text-lg">
                  <span>Total</span>{" "}
                  <span>
                    $
                    {(totalSalePrice + (totalSalePrice / 100) * 2.1).toFixed(2)}
                  </span>
                </strong>

                {/* CHECKOUT BUTTON */}
                <div className="flex flex-col gap-4 pt-2 lg:pt-0">
                  <button className="button primary-btn btn_with_icon uppercase">
                    Checkout <HiArrowRight className="icon fill-white" />
                  </button>

                  <strong className="text-center text-gray-500">OR</strong>

                  {/* PAY WITH PAYPAL */}
                  <p>
                    As low as $26.84/mo PayPal{" "}
                    <Link className="text-orange-600 underline">
                      Learn more
                    </Link>
                  </p>
                </div>

                {/* ACCEPTED PAYMENT METHODS */}
                <div className="flex flex-col gap-2 md:gap-4 pt-6 pb-2 md:py-8">
                  <h1 className="text-sm md:text-base uppercase font-medium">
                    ACCEPTED PAYMENT METHODS
                  </h1>

                  <img
                    src="/payment_icons/group_payment_methods.webp"
                    alt="Payment Methods"
                  />
                </div>
              </section>
              {/* ORDER SUMMERY SECTION END */}
            </div>
          </>
        ) : (
          // EMPTY CART SECTION START
          <section className="flex flex-col items-center justify-center gap-8 lg:gap-10 py-10 lg:py-12">
            <div className="max-w-[15rem]">
              <img src="/empty_cart.svg" alt="Empty Cart" />
            </div>

            <div className="flex flex-col gap-2 sm:gap-4 lg:gap-6 text-center">
              <strong className="text-lg sm:text-2xl lg:text-3xl">
                Your cart is empty
              </strong>
              <span className="text-xs sm:text-base lg:text-lg">
                <p>Looks like you have not added anything in your cart.</p>
                <p>Go ahead and explore top categories.</p>
              </span>
            </div>

            <Link to="/">
              <button className="button primary-btn max-w-xs">
                Continue Shopping
              </button>
            </Link>
          </section>
          // EMPTY CART SECTION END
        )}
      </div>
    </section>
  );
}
