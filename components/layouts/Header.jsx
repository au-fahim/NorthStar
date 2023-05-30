import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart, CiUser, CiMenuBurger } from "react-icons/ci";

import Nav from "./Nav";
import logo from "/North_Star.png";
import SearchBar from "../ui/Search_bar";
import { CartContext } from "../../context/CartContext";

export default function Header(props) {
  const [showHeader, setShowHeader] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const cartData = useContext(CartContext);

  const headerControl = () => {
    if (window.scrollY > 100) {
      if (window.scrollY >= lastScrollY) {
        setShowHeader("-translate-y-[88px]");
      } else {
        setShowHeader("shadow-sm border-b translate-y-0");
      }
    } else {
      setShowHeader("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", headerControl);
    return () => {
      window.removeEventListener("scroll", headerControl);
    };
  }, [lastScrollY]);

  const numberOfCartItems = cartData?.products?.reduce(
    (currentQuantity, product) => {
      return currentQuantity + product.quantity;
    },
    0
  );

  return (
    <header
      className={`w-full py-4 sm:py-6 bg-white z-20 sticky top-0 transition-transform duration-300 ${showHeader}`}>
      <div className="main-wrapper">
        <header className="flex flex-row justify-between items-center">
          {/* Logo & Left Menu Button */}
          <div className="flex flex-row gap-2 md:gap-3 items-center">
            {/* Left Menu */}
            <button className="btn-icon lg:hidden">
              <CiMenuBurger className="icon" />
            </button>

            {/* Logo */}
            <div className="w-28 sm:w-40 xl:w-auto">
              <img src={logo} alt="Norht Star" />
            </div>
          </div>

          {/* Top Navigation menu */}
          <Nav />

          {/* Header - Search, Cart & User Profile */}
          <div className="flex flex-row gap-0 sm:gap-2 items-center">
            {/* Search Component */}
            <SearchBar />

            {/* Cart Button */}
            <div className="flex flex-row gap-0 sm:gap-2">
              <Link to={`/cart`}>
                <button
                  onClick={props.onShowModal}
                  className="btn-icon relative z-20">
                  <CiShoppingCart className="icon" />
                  {/* Total Items count box */}
                  {numberOfCartItems > 0 && (
                    <div className="count-totalRecord">
                      <span>
                        {numberOfCartItems < 10
                          ? `0${numberOfCartItems}`
                          : numberOfCartItems > 99
                          ? "99+"
                          : numberOfCartItems}
                      </span>
                    </div>
                  )}
                </button>
              </Link>

              {/* User Profile Button */}
              <button className="btn-icon">
                <CiUser className="icon" />
              </button>
            </div>
          </div>
        </header>
      </div>
    </header>
  );
}
