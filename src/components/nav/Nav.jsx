import { Link } from "react-router-dom";
import NavItem from "./NavItem";

export default function Nav({
  styleType,
  subMenuStyle,
  hideLeftMenuFunc,
  lastScrollY,
}) {
  return (
    <>
      <nav>
        <ul className={`${styleType}`}>
          <li>
            <Link to="/" onClick={hideLeftMenuFunc}>
              <span>Shop</span>
            </Link>
          </li>

          <NavItem
            menuStyle={subMenuStyle}
            itemName={"New Arrival"}
            lastScrollY={lastScrollY}
          >
            <li>
              <Link>New for Man</Link>
            </li>
            <li>
              <Link>Woman Collection</Link>
            </li>
            <li>
              <Link>Kid's</Link>
            </li>
          </NavItem>

          <li>
            <Link href="/most-wanted">Most wanted</Link>
          </li>

          <NavItem
            menuStyle={subMenuStyle}
            itemName={"Brand"}
            lastScrollY={lastScrollY}>
            <li>
              <Link>Brand 01</Link>
            </li>
            <li>
              <Link>Brand 02</Link>
            </li>
            <li>
              <Link>Brand 03</Link>
            </li>
            <li>
              <Link>Brand 04</Link>
            </li>
            <li>
              <Link>Brand 05</Link>
            </li>
          </NavItem>
        </ul>
      </nav>
    </>
  );
}
