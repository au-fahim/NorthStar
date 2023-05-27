import { IoCloseOutline, IoHeartOutline } from "react-icons/io5";

export default function CartItem({ cartData }) {
  const { name, title, oldPrice, newPrice, img } = cartData;
  return (
    <>
      {/* Product Items */}
      <div className="flex flex-row border rounded hover:border-slate-400 overflow-hidden transition">
        {/* Product Image */}
        <div>
          <img src={img[0]} alt="" className="w-60" />
        </div>

        {/* Product Details */}
        <div className="w-3/4 py-4 px-4 ml-4 flex flex-col justify-between">
          {/* Product Name & Close Button */}
          <div className="w-full flex flex-row gap-2 justify-between">
            <div className="flex flex-col gap-2 py-2">
              {/* Product Name */}
              <h1 className="text-xl font-medium line-clamp-1 hover:underline">
                {name}
              </h1>

              {/* product Color */}
              <p className="line-clamp-1 font-light">
                GREY FIVE / NIGHT METALLIC / CORE WHITE
              </p>

              {/* Product Size */}
              <p className="py-2">SIZE: 10 (US Men)</p>
            </div>

            {/* Close From Cart Item List */}
            <div className="flex flex-col gap-1">
              <button className="btn-icon">
                <IoCloseOutline className="icon" />
              </button>

              <button className="btn-icon">
                <IoHeartOutline className="icon" />
              </button>
            </div>
          </div>

          {/* Select Quantity & Price */}
          <div className="flex flex-row justify-between items-center py-2">
            <div>
              Quantity:
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            {/* Product Price */}
            <p className="mr-2 text-lg">
              <span className="line-through text-gray-500">${oldPrice}</span>{" "}
              <strong>${newPrice}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
