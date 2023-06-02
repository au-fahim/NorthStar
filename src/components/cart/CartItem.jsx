import { useContext } from "react";
import { Link } from "react-router-dom";

import { IoCloseOutline, IoHeartOutline } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ product }) {
  const cartData = useContext(CartContext);

  const {
    id,
    productName,
    productTitle,
    images,
    salePrice,
    regularPrice,
    quantity,
    stock,
  } = product;

  // Callback Function For Removeing Product From Cart
  const removeFromCartFunc = () => cartData.removeFromCartFunc(product.id);

  return (
    <>
      {/* Product Items */}
      <div className="flex flex-row border rounded hover:border-slate-400 overflow-hidden transition group">
        {/* Product Image */}
        <Link to={`/products/${id}`}>
          <img src={images[0]} alt="Product Image" className="w-24 md:w-48" />
        </Link>

        {/* Product Details */}
        <div className="w-4/5 py-2 md:py-4 px-1 md:px-4 ml-2 flex flex-col justify-between">
          {/* Product Name & Close Button */}
          <div className="w-full flex flex-row gap-1 xl:gap-2 justify-between">
            <div className="flex flex-col md:gap-2 md:py-2 ">
              {/* Product Name */}
              <Link
                to={`/products/${id}`}
                className="text-sm md:text-xl line-clamp-1 md:uppercase hover:underline">
                {productName}
              </Link>

              {/* product Color */}
              {/* <p className="line-clamp-1 font-light uppercase">
                {productTitle}
              </p> */}

              {/* Product Size */}
              <p className="text-xs md:text-base py-1 xl:py-2 text-gray-500">
                SIZE: 10 (US Men)
              </p>
            </div>

            {/* Close From Cart Item List */}
            <div className="hidden group-hover:flex flex-row-reverse md:flex-col md:gap-1">
              <button
                onClick={removeFromCartFunc}
                className="btn-icon w-8 h-8 md:w-auto md:h-auto flex items-center justify-center">
                <IoCloseOutline className="icon" />
              </button>

              <button className="btn-icon w-8 h-8 md:w-auto md:h-auto flex items-center justify-center">
                <IoHeartOutline className="icon" />
              </button>
            </div>
          </div>

          {/* Select Quantity & Price */}
          <div className="flex flex-row justify-between items-center md:py-2 text-xs md:text-base">
            <div className="flex flex-row gap-1 items-end">
              <p>Quantity:</p>
              <select
                className="min-w-max"
                value={quantity}
                onChange={(e) => {
                  cartData.updateQuantityFunc(product, +e.target.value);
                }}>
                {/* QUANTITY OPTIONS */}
                {Array.from({ length: stock }, (_, index) => index + 1).map(
                  (item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  }
                )}
              </select>
            </div>

            {/* Product Price */}
            <p className="mr-2">
              <span className="text-gray-400 font-light text-xs md:text-base lg:text-lg">
                <span className="group-hover:hidden line-through">
                  ${regularPrice * quantity}
                </span>{" "}
                <span className="hidden group-hover:inline-block">
                  (${salePrice} x {quantity})
                </span>{" "}
              </span>
              <strong className="text-sm md:text-lg lg:text-xl">
                ${salePrice * quantity}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
