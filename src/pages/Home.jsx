import HeroBanner from "../../components/layouts/HeroBanner";
import Products from "./Products";

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
