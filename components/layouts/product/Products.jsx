import { products } from "../../dummy_data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  const productData = products.map((product, index) => (
    <ProductCard data={product} key={index} id={index} />
  ));

  return (
    <div className="main-wrapper">
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-between align-baseline">
        {productData}
      </section>
    </div>
  );
}
