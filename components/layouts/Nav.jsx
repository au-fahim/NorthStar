import { Link, Route, Routes } from "react-router-dom";
import App from "../../src/pages/App";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="hidden xl:flex flex-row gap-6">
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
