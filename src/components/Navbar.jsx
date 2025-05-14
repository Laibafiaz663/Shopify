import React, { useContext } from "react";
import { CartContext } from "../App"; //import context
import { Link } from "react-router-dom"; //import link

function Navbar() {
  const cartContext = useContext(CartContext); //use context
  return (
    <div>
      <div className="navbar-wrapper">
        <div className="container">
          <div className="navbar-inner">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                  Shopify
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <form className="d-flex mx-auto" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search for a product..."
                      aria-label="Search"
                    />
                    <Link to="#">
                      <i className="bi bi-search"></i>
                    </Link>
                  </form>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to="/products"
                      >
                        Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Categories
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <i className="bi bi-person-fill"></i>
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cart">
                        <i className="bi bi-cart">
                          <span> {cartContext.cart.length}</span>
                        </i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <i className="bi bi-moon"></i>
                        {/* <i className="bi bi-brightness-high"></i> */}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* /.navbar-wrapper  */}
    </div>
  );
}

export default Navbar;
