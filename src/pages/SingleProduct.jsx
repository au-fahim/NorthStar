import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BiCartAdd, BiHeart } from "react-icons/bi";

import { products } from "../assets/dummy_data/products";
import { CartContext } from "../context/CartContext";
import DetailsItem from "../components/ui/DetailsItem";

export default function SingleProduct() {
  const [allImageShow, setAllImageShow] = useState(false);

  const cartData = useContext(CartContext);

  const { id } = useParams();

  // Gatting the clicked product data
  const product = products.filter((item) => item.id === +id);

  const { productName, productTitle, images, salePrice, regularPrice, stock } =
    product[0];

  // Render All Product Images
  const productImages = images.map((singleImg, index) => (
    <div className="cursor-crosshair" key={index}>
      <img src={singleImg} alt="Product Image" />
    </div>
  ));

  // DISPLAY 4 IMAGE INITIALY
  let filterProductImages;

  function productImgFilterFunc() {
    if (productImages.length >= 5) {
      if (!allImageShow) {
        filterProductImages = productImages.splice(0, 4);
      } else {
        filterProductImages = productImages;
      }
    } else {
      filterProductImages = productImages;
    }
  }

  productImgFilterFunc();

  const isCartedProduct = cartData.products?.find(
    (p) => p.id === product[0].id
  );

  // Add to Cart Function
  const addToCartFunc = () => {
    return cartData.addToCartFunc({ ...product[0], quantity: 1 });
  };

  return (
    <div className="main-wrapper">
      <section className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-3 border-b mb-10">
        {/* PRODUCT IMAGES, REVIEWS, DISCRIPTION, DETAILS, etc.*/}

        {/* LEFT SECTION START */}
        <section className="md:col-span-4 lg:col-span-3 xl:col-span-2 border-b md:border-r">
          {/* PRODUCT IMAGES GALLARY START */}
          <div className="relative grid grid-cols-2 sm:grid-cols-2 gap-[0.125rem] xl:gap-1">
            {filterProductImages}
            {images.length >= 5 && (
              <button
                onClick={() => setAllImageShow(!allImageShow)}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white rounded-full shadow-md cursor-pointer z-10">
                {allImageShow ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
          {/* PRODUCT IMAGES GALLARY END */}

          {/* ABOUT PRODUCT */}
          {/* PRODUCT DETAILS */}
          <div className="flex flex-col pt-8 md:pt-10">
            <DetailsItem displayName={"Discription"} />
            <DetailsItem displayName={"Details"} />
            <DetailsItem displayName={"Reviews"} />
            <DetailsItem displayName={"FAQs"} />
          </div>
        </section>
        {/* LEFT SECTION END */}

        {/* ---------------------------------------------------------------------- */}

        {/* PRODUCT NAME, PRICES, COLORS,SIZES, ADD TO CART FUNCTIONALITYS, etc.*/}
        {/* RIGHT SECTION START */}
        <section className="md:col-span-3 lg:col-span-2 xl:col-span-1 flex flex-col gap-3 md:gap-6 md:px-6 py-6 md:sticky top-0 h-max">
          {/* Product Name, Price, Short-Desc */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">{productName}</h1>
            <p className="text-xl">
              <span className="line-through pr-2 text-gray-400">
                {regularPrice}
              </span>
              <strong className="font-semibold">${salePrice}</strong>
            </p>
          </div>

          {/* Product Available Color Option */}
          <div className="flex flex-col gap-3">
            <strong>{images.length} colors available</strong>

            {/* Available color button */}
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {images.map((item, index) => (
                <div
                  key={index}
                  className="w-full cursor-pointer overflow-hidden border rounded hover:border-slate-300 active:scale-95 active:border-slate-900 select-none transition">
                  <img src={item} alt="Product Image" className="select-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Available Size */}
          <div className="flex flex-col gap-3">
            <strong>Sizes :</strong>
            <ul className="productSize--btn">
              <li>s</li>
              <li>m</li>
              <li>l</li>
              <li>xl</li>
              <li>xxl</li>
            </ul>
          </div>

          {/* Add to Cart & Add Favourit Button */}

          {/* Add To Cart Button */}
          <div className="flex flex-col xl:flex-row justify-between gap-2 my-3">
            {/* ERROR MESSAGE CONTAINER START */}
            {isCartedProduct?.quantity >= stock && (
              <p className="text-red-600 text-sm md:text-base">
                This Product is Out of Stock
              </p>
            )}
            {/* ERROR MESSAGE CONTAINER END */}

            {isCartedProduct?.quantity >= stock ? (
              <></>
            ) : (
              <button
                onClick={addToCartFunc}
                disabled={isCartedProduct?.quantity >= stock ? true : false}
                className={`button btn_with_icon group bg-slate-900 text-white hover:text-slate-700 active:scale-95 border hover:bg-slate-100 hover:border-slate-300 active:border-slate-700 ${
                  isCartedProduct?.quantity >= stock
                    ? "cursor-not-allowed active:scale-100 active:border-red-600"
                    : ""
                }`}>
                <span>Add to Cart</span>
                <BiCartAdd className="icon fill-white group-hover:fill-slate-700" />
              </button>
            )}

            {/* Add To Wishlist Button */}
            <button className="button btn_with_icon group text-slate-700 border hover:bg-slate-100 hover:border-slate-300 active:scale-95 active:border-slate-700">
              <span>Add to Wishlist</span>
              <BiHeart className="icon fill-slate-700" />
            </button>

            {/* <button className="py-3 px-3 rounded border border-gray-900">
              <CiHeart className="icon" />
            </button> */}
          </div>
        </section>
        {/* RIGHT SECTION END */}
      </section>
    </div>
  );
}
