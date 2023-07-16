import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { HiChevronDown } from "react-icons/hi2";

export default function NavItem({
  menuStyle,
  itemName,
  lastScrollY,
  children,
}) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const subMenuHandler = () => {
    setShowSubMenu((prev) => !prev);
  };

  // HIDE THE SUBMENU WHEN CLICKING OUTSIDE OF THE SUBMENU CONTAINER
  let menuRef = useRef();

  useEffect(() => {
    if (lastScrollY > 100) {
      setShowSubMenu(false);
    }
  }, [lastScrollY]);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowSubMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <li ref={menuRef}>
      <Link href="/products" onClick={subMenuHandler}>
        <span>{itemName}</span>{" "}
        <HiChevronDown
          className={`${!showSubMenu ? "rotate-0" : "rotate-180"} transition`}
        />
      </Link>
      <ul className={`${menuStyle} ${showSubMenu ? "block" : "hidden"}`}>
        {children}
      </ul>
    </li>
  );
}
