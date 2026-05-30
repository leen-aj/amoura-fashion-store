import { Link } from "react-router-dom";
import { FaCrown, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";


function Navbar() {
  return (
    <>
      <div className="top-bar">
        FREE SHIPPING ON ALL ORDERS
      </div>

      <nav className="navbar sticky-top">
        <div className="container-fluid px-4">

          <Link className="navbar-brand fw-bold" to="/">
            <FaCrown className="me-2" />
            Amour
          </Link>

          <div className="nav-links">

            <ul className="navbar-nav ms-auto">
              <li>
                <Link to="/product" className="nav-link">
                  Shop
                </Link>
              </li>
            </ul>

            <Link
              to="/measurement"
              className="btn btn-pink ms-3"
            >
              Measurements
            </Link>

            <div className="ms-3 icons">

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