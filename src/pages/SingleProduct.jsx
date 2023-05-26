import { useParams } from "react-router-dom";
import { BiCartAdd, BiHeart } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";

import { products } from "../../components/dummy_data/products";

export default function SingleProduct() {
  const { id } = useParams();

  // Gatting the clicked product data
  const product = products.filter((item) => item.id === +id);

  const { name, title, newPrice, oldPrice, img } = product[0];

  // Render All Product Images
  const productImages = img.map((singleImg, index) => (
    <div className="cursor-crosshair" key={index}>
      <img src={singleImg} alt="Product Image" />
    </div>
  ));

  const html = document.querySelector("html");
  // html.style.overflow = "hidden";

  return (
    <>
      <section className="grid grid-cols-3 border-b">
        {/* Section for Image, Review, Discription, Details, Others About Product Details */}
        <section className="col-span-2 border-r">
          {/* Product Image GALLARY */}
          <div className="grid grid-cols-2 gap-1">{productImages}</div>
        </section>

        {/* Section for `Product Name, category, prices, color, size, Add to cart etc.` */}
        <section className="flex flex-col gap-6 px-6 py-6 sticky top-0  h-max">
          {/* Product Name, Price, Short-Desc */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="text-xl">
              <span className="line-through pr-2 text-gray-400">
                {oldPrice}
              </span>
              <strong className="font-semibold">${newPrice}</strong>
            </p>
          </div>

          {/* Product Available Color Option */}
          <div className="flex flex-col gap-3">
            <strong>{img.length} colors available</strong>

            {/* Available color button */}
            <div className="flex flex-row flex-wrap gap-2">
              {img.map((item) => (
                <div className="h-16 w-16 cursor-pointer overflow-hidden border rounded hover:border-slate-300 active:scale-95 active:border active:border-slate-700 select-none transition">
                  <img src={item} alt="Product Image" className="select-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Available Size */}
          <div className="flex flex-col gap-3">
            <strong>Sizes :</strong>
            <ul className="product-size">
              <li>s</li>
              <li>m</li>
              <li>l</li>
              <li>xl</li>
              <li>xxl</li>
            </ul>
          </div>

          {/* Add to Cart & Add Favourit Button */}
          <div className="flex flex-row justify-between gap-2 my-3">
            <button className="button btn_with_icon group bg-slate-900 text-white hover:text-slate-700 active:scale-95 border hover:bg-slate-100 hover:border-slate-300 active:border-slate-700">
              <span>Add to Cart</span>
              <BiCartAdd className="icon fill-white group-hover:fill-slate-700" />
            </button>

            <button className="button btn_with_icon group text-slate-700 border hover:bg-slate-100 hover:border-slate-300 active:scale-95 active:border-slate-700">
              <span>Add to Wishlist</span>
              <BiHeart className="icon fill-slate-700" />
            </button>
            {/* <button className="py-3 px-3 rounded border border-gray-900">
              <CiHeart className="icon" />
            </button> */}
          </div>
        </section>
      </section>
    </>
  );
}
