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
        {/* Most Popular Product Header */}
        <header className="pb-3 pt-6 sm:pb-6 sm:pt-10 xl:pb-8 xl:pt-12 text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          <h1>Most Popular Product</h1>
        </header>

        <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-between align-baseline">
          {productData}
        </section>
      </div>
    </>
  );
}
