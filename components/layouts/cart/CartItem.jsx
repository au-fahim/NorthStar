import { useContext } from "react";
import { Link } from "react-router-dom";

import { IoCloseOutline, IoHeartOutline } from "react-icons/io5";
import { CartContext } from "../../../context/CartContext";

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
  } = product;

  // Callback Function For Removeing Product From Cart
  const removeFromCartFunc = () => cartData.removeFromCartFunc(product.id);

  return (
    <>
      {/* Product Items */}
      <div className="flex flex-row border rounded hover:border-slate-400 overflow-hidden transition group">
        {/* Product Image */}
        <Link to={`/products/${id}`}>
          <img src={images[0]} alt="" className="w-60" />
        </Link>

        {/* Product Details */}
        <div className="w-3/4 py-4 px-4 ml-4 flex flex-col justify-between">
          {/* Product Name & Close Button */}
          <div className="w-full flex flex-row gap-2 justify-between">
            <div className="flex flex-col gap-2 py-2">
              {/* Product Name */}
              <Link
                to={`/products/${id}`}
                className="text-xl font-medium line-clamp-1 uppercase hover:underline">
                {productName}
              </Link>

              {/* product Color */}
              <p className="line-clamp-1 font-light uppercase">
                {productTitle}
              </p>

              {/* Product Size */}
              <p className="py-2">SIZE: 10 (US Men)</p>
            </div>

            {/* Close From Cart Item List */}
            <div className="hidden group-hover:flex flex-col gap-1">
              <button onClick={removeFromCartFunc} className="btn-icon">
                <IoCloseOutline className="icon" />
              </button>

              <button className="btn-icon">
                <IoHeartOutline className="icon" />
              </button>
            </div>
          </div>

          {/* Select Quantity & Price */}
          <div className="flex flex-row justify-between items-center py-2">
            <div className="flex flex-row gap-1 items-end">
              <p>Quantity:</p>
              <select className="min-w-max" value={quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>

            {/* Product Price */}
            <p className="mr-2 text-lg">
              <span className="text-gray-400 font-light">
                <span className="group-hover:hidden line-through">
                  ${regularPrice}
                </span>{" "}
                <span className="hidden group-hover:inline-block">
                  ${salePrice} &#10005; {quantity} &#10170;
                </span>{" "}
              </span>
              <strong>${salePrice * quantity}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
