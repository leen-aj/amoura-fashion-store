import { Link } from "react-router-dom";
import { FaCrown, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";


function Navbar() {
  return (
    <>
      <div className="top-bar">
        FREE SHIPPING ON ALL ORDERS
      </div>

<nav className="navbar navbar-expand-lg sticky-top">
  <div className="container-fluid px-4">

    <Link className="navbar-brand fw-bold" to="/">
      <FaCrown className="me-2" />
      Amour
    </Link>

    {/* Hamburger Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Collapsible Content */}
    <div
      className="collapse navbar-collapse"
      id="navbarContent"
    >

      <ul className="navbar-nav ms-auto">

        <li className="nav-item">
          <Link to="/product" className="nav-link">
            Shop
          </Link>
        </li>

      </ul>

      <Link
        to="/measurement"
        className="btn btn-pink ms-lg-3"
      >
        Measurements
      </Link>

      <div className="ms-lg-3 icons d-flex gap-3">

        <Link to="/wishlist">
          <FaHeart />
        </Link>

        <Link to="/cart">
          <FaShoppingBag />
        </Link>

        <Link to="/account">
          <FaUser />
        </Link>

      </div>

    </div>

  </div>
</nav>
    </>
  );
}

export default Navbar;