import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BsStars, BsMinecartLoaded, BsPersonAdd } from "react-icons/bs";

import { CartContext } from "../../../context/CartContext";
import CenterModal from "../modal/Center_Modal";

export default function CartModal({ onHideModal }) {
  const cartData = useContext(CartContext);

  // Last Added Product in Cart
  const { name, title, img, oldPrice, newPrice } = cartData.lastAddedProduct;

  return (
    <CenterModal>
      {/* Successfull Added Product Modal */}
      <header className="flex flex-row items-center justify-between py-4 px-4 bg-white">
        <h1 className="text-2xl font-medium capitalize">
          Successfully added to bag
        </h1>

        {/* Modal Close Button */}
        <button className="btn-icon" onClick={cartData.closeCartModal}>
          <IoCloseOutline className="icon" />
        </button>
      </header>

      {/* Modal Body Content */}
      <section className="grid grid-cols-2 px-4 overflow-y-auto mb-8">
        {/* Added Cart Item Details */}
        <div className="grid grid-cols-1 pr-4 sticky top-0">
          <div className="w-32 h-32 rounded-md overflow-hidden">
            <img
              src={img[0]}
              alt="Product Image"
              className="object-cover w-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="line-clamp-1 font-medium">{name}</h1>
            <p className="py-1">
              <span className="line-through text-gray-500">${oldPrice}</span>{" "}
              <strong className="text-red-600">${newPrice}</strong>
            </p>
            <div className="text-sm">
              <p className="line-clamp-1">
                Color: <span className="uppercase">Gray</span>
              </p>
              <p>
                Size: <span className="uppercase">XL</span>
              </p>
              <p>Quantity: 1</p>
            </div>
          </div>
        </div>

        {/* Total Pricing Section */}
        <div className="pl-4 border-l">
          <p className="font-light text-sm">
            {cartData.products.length} Items in Your Bag
          </p>

          {/* Price Details */}
          <div className="my-2">
            <p className="totalPricing--item">
              <span>Total Product Cost: </span>
              <span>${cartData.totalPrice}</span>
            </p>

            <p className="totalPricing--item">
              <span>Total Delivery Cost: </span>
              <span>Free</span>
            </p>

            {/* Total Price */}
            <strong className="totalPricing--item py-1 border-t border-slate-900">
              <span>Total: </span> <span>${cartData.totalPrice}</span>
            </strong>
          </div>

          {/* Full Cart View Button */}
          <div className="flex flex-col gap-2">
            <strong className="text-blue-500 flex flex-row items-center gap-2 my-2">
              <BsStars /> Members get unlimited free shipping
            </strong>
            <button className="button primary-btn btn_with_icon">
              <span>join for free </span>{" "}
              <BsPersonAdd className="icon fill-white" />
            </button>
            <button className="button secondary-btn btn_with_icon group">
              <span>view cart</span>{" "}
              <BsMinecartLoaded className="icon fill-slate-900 group-hover:fill-white" />
            </button>
          </div>
        </div>
      </section>
    </CenterModal>
  );
}
