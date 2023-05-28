import { Link, Route, Routes } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="hidden lg:flex flex-row gap-6">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <a href="/products">New arrival</a>
          </li>
          <li>
            <a href="/most-wanted">Most wanted</a>
          </li>
          <li>
            <a href="/brands">Brands</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
