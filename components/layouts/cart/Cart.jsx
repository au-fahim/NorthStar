import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BsStars, BsMinecartLoaded, BsPersonAdd } from "react-icons/bs";

import { CartContext } from "../../../context/CartContext";
import CenterModal from "../modal/Center_Modal";

export default function Cart({ onHideModal }) {
  const cartData = useContext(CartContext);
  console.log(cartData.products);

  return (
    <CenterModal onHideModal={onHideModal}>
      {/* Successfull Added Product Modal */}
      <header className="flex flex-row items-center justify-between py-4 px-4 bg-white">
        <h1 className="text-2xl font-medium capitalize">
          Successfully added to bag
        </h1>

        {/* Modal Close Button */}
        <button className="btn-icon" onClick={onHideModal}>
          <IoCloseOutline className="icon" />
        </button>
      </header>

      {/* Modal Body Content */}
      <section className="grid grid-cols-2 px-4 overflow-y-auto mb-8">
        {/* Added Cart Item Details */}
        <div className="grid grid-cols-1 pr-4 sticky top-0">
          <div className="w-32 h-32 rounded-md overflow-hidden">
            <img
              src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/4863ccda96f24b1eb996af540093cfec_9366/HP7672_650_HP7672_01_standard.jpg.jpg?sh=364&strip=false&sw=364"
              alt=""
              className="object-cover w-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="line-clamp-1 font-medium">
              Nike Sportswear Club Fleece
            </h1>
            <p className="py-1">
              <span className="line-through text-gray-500">$35</span>{" "}
              <strong className="text-red-600">$21</strong>
            </p>
            <div className="text-sm">
              <p className="line-clamp-1">
                Color: <span className="uppercase">Gray Size</span>
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
          <p className="font-light text-sm">3 Items in Your Bag</p>

          {/* Price Details */}
          <div className="my-2">
            <p className="totalPricing--item">
              <span>Total Product Cost: </span> <span>$280.00</span>
            </p>
            <p className="totalPricing--item">
              <span>Total Delivery Cost: </span> <span>Free</span>
            </p>

            {/* Total Price */}
            <strong className="totalPricing--item py-1 border-t border-slate-900">
              <span>Total: </span> <span>$280.00</span>
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
