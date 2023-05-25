import { useContext } from "react";

import { CartContext } from "../../../context/CartContext";
import { products } from "../../dummy_data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  const cartData = useContext(CartContext);

  const productData = products.map((product, index) => (
    <ProductCard
      data={product}
      key={index}
      id={index}
      onAddToCart={() => cartData.addToCartFunc(product)}
    />
  ));

  return (
    <div className="main-wrapper">
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-between align-baseline">
        {productData}
      </section>
    </div>
  );
}
