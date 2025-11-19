import React from "react";
import "./header.css";
import Nav from "./nav.jsx";
import { Link } from "react-router-dom";

function Header({ showNav = true }) {
  return (
    <header>
      <h2 className="name-tag">
        <Link to="/" className="shiny-text"
        style={{
          textDecoration: "none",
        }}>UI-coxx</Link>
      </h2>
      {showNav && <Nav />}
      <button className="cart-btn">
        <img src="./shopping-cart.svg" alt="cart" />
      </button>
      <button className="user-btn">
        <img src="./user-round.svg" alt="user" />
      </button>
    </header>
  );
}

export default Header;
