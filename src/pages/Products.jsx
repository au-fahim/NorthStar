import { Link } from "react-router-dom";

import { products } from "../../components/dummy_data/products";
import ProductCard from "../../components/layouts/product/ProductCard";

export default function Products() {
  const productData = products.map((product, index) => (
    <Link to={`/products/${product.id}`} key={index}>
      <ProductCard productData={product} id={index} />
    </Link>
  ));

  return (
    <>
      <div className="main-wrapper">
        <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-between align-baseline">
          {productData}
        </section>
      </div>
    </>
  );
}
