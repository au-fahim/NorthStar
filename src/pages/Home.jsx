import HeroBanner from "../components/banner/HeroBanner";
import Products from "../components/product/Products";

export default function Home() {
  return (
    <>
      {/* Home Page Hero Banner */}
      <HeroBanner />

      {/* All Products View Component */}
      <Products />
    </>
  );
}
