import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./Context";

const Navbar = () => {
  const { content } = useContext(ProductContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand" aria-label="mobile store">
          <i className="text-white h5">Mobile Store</i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <Link
            to="/cart"
            className="nav-link position-relative"
            aria-current="page"
            aria-label="cart"
          >
            <i className="text-white h5">
              Cart
              <span
                className="badge ms-1"
                style={{
                  backgroundColor: "#17a2b8",
                  boxShadow: "0 0 0 0.01rem #c0c0c0"
                }}
              >
                {content.cart.length}
              </span>
            </i>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
