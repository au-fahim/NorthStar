import { useContext } from "react";

import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "../../../context/CartContext";

export default function ProductCard({ data }) {
  const cartData = useContext(CartContext);

  return (
    <div className="w-full cursor-pointer group">
      {/* Product Image */}
      <div className="w-full object-cover rounded-md overflow-hidden">
        <img
          src={data.img[0]}
          alt="Product_1"
          className="group-hover:scale-105 transition"
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div className="h-44 py-4 px-2 flex flex-col gap-2 ">
        {/* Product Name or Title */}
        <div>
          {/* Product Name */}
          <h1 className="text-xl line-clamp-2">{data.name}</h1>

          {/* Product Category */}
          <h4 className="font-light line-clamp-1">{data.title}</h4>
        </div>

        {/* Select Product Category */}

        {/* Product Price & Add to Cart Button */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            {/* Product New Price */}
            <strong className="text-xl">${data.newPrice}</strong>

            {/* Product Old Price (If Have) */}
            <span className="text-gray-500 line-through">${data.oldPrice}</span>
          </div>

          {/* Add to cart Button */}
          {/* <button
            onClick={() => cartData.addToCartFunc(data)}
            className="flex flex-row gap-2 px-4 py-2 items-center justify-between bg-orange-600 text-white rounded-md invisible group-hover:visible transition">
            <MdAddShoppingCart /> Add to cart
          </button> */}
        </div>
      </div>
    </div>
  );
}
