// Libraries
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

// CSS
import "./Header.css";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const cart = cartCtx.state.cart;
  const numOfCart = cart.length;

  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg bg-light px-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CellPhoneS
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <div className="cart">
              <Link to="/cart">
                <div>
                  <AiOutlineShoppingCart />
                  <span className="ms-2">Cart ({numOfCart})</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
