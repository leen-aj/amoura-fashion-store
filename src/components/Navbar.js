import { Link } from "react-router-dom";
import { FaCrown, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="top-bar">
        FREE SHIPPING ON ALL ORDERS
      </div>

      <nav className="navbar navbar-expand-lg sticky-top bg-black">
        <div className="container-fluid px-4">

          <Link className="navbar-brand fw-bold" to="/">
            <FaCrown className="me-2" />
            Amour
          </Link>

          <button
         className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
           aria-controls="navbarContent"
           aria-expanded="false"
           aria-label="Toggle navigation">

              ☰
</button>
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
              className="btn btn-pink ms-lg-3 my-2 my-lg-0"
            >
              Measurements
            </Link>

            <div className="icons ms-lg-3">

              <Link
                to="/wishlist"
                className="text-decoration-none me-3"
              >
                <FaHeart color="#ffb6d9" />
              </Link>

              <Link
                to="/cart"
                className="text-decoration-none me-3"
              >
                <FaShoppingBag color="#ffb6d9" />
              </Link>

              <Link
                to="/account"
                className="text-decoration-none"
              >
                <FaUser color="#ffb6d9" />
              </Link>

            </div>

          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;