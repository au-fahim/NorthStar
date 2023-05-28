export default function ProductCard({ productData }) {
  const { productName, productTitle, images, salePrice, regularPrice } =
    productData;

  return (
    <div className="w-full cursor-pointer group">
      {/* Product Image */}
      <div className="w-full object-cover rounded-md overflow-hidden">
        <img
          src={images[0]}
          alt="Product_1"
          className="group-hover:scale-105 transition"
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div className="h-36 py-3 px-2 flex flex-col gap-2">
        {/* Product Name or Title */}
        <div>
          {/* Product Name */}
          <h1 className="text-base sm:text-xl line-clamp-2">{productName}</h1>

          {/* Product Category */}
          <h4 className="text-sm sm:text-base font-light line-clamp-1">
            {productTitle}
          </h4>
        </div>

        {/* Select Product Color */}

        {/* Product Price & Add to Cart Button */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            {/* Product New Price */}
            <strong className="text-base sm:text-xl">${salePrice}</strong>

            {/* Product Old Price (If Have) */}
            <span className="text-sm sm:text-base text-gray-400 line-through">
              ${regularPrice}
            </span>
          </div>

          {/* Discount Parcantage */}
          <div>
            <span className="hidden sm:group-hover:block bg-red-100 px-2 text-sm rounded-full text-red-500 font-medium">
              {parseInt(((regularPrice - salePrice) / regularPrice) * 100)}% Off
            </span>
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
