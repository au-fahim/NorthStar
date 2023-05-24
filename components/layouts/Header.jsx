import { CiShoppingCart, CiUser, CiMenuBurger } from "react-icons/ci";

import SearchBar from "../ui/Search_bar";
import logo from "/North_Star.png";

export default function Header(props) {
  return (
    <div className="bg-white">
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
          <nav>
            <ul className="hidden xl:flex flex-row gap-6">
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">New arrival</a>
              </li>
              <li>
                <a href="#">Most wanted</a>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
            </ul>
          </nav>
          {/* Header - Search, Cart & User Profile */}
          <div className="flex flex-row gap-0 sm:gap-2 xl:gap-8 items-center">
            {/* Search Component */}
            <SearchBar />

            {/* Cart Button */}
            <div className="flex flex-row gap-0 sm:gap-2">
              <button
                onClick={props.onShowModal}
                className="btn-icon relative z-20">
                <CiShoppingCart className="icon" />
                {/* Total Items count box */}
                {/* <div className="count-element">
                  <span>9+</span>
                </div> */}
              </button>

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
