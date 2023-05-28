import { useContext } from "react";
import { CiShoppingCart, CiUser, CiMenuBurger } from "react-icons/ci";

import logo from "/North_Star.png";
import SearchBar from "../ui/Search_bar";
import { CartContext } from "../../context/CartContext";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header(props) {
  const cartData = useContext(CartContext);

  const numberOfCartItems = cartData?.products?.reduce(
    (currentQuantity, product) => {
      return currentQuantity + product.quantity;
    },
    0
  );

  return (
    <div className="bg-white z-50">
      <div className="main-wrapper">
        <header className="mx-auto py-4 sm:py-6 flex flex-row justify-between items-center">
          {/* Logo & Left Menu Button */}
          <div className="flex flex-row gap-2 md:gap-3 items-center">
            {/* Left Menu */}
            <button className="btn-icon xl:hidden">
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
                    <div className="count-element">
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
    </div>
  );
}
