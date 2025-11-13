import React from "react";
import "./header.css";
import Nav from "./nav.jsx";

function Header() {
  return (
    <header>

      <h2 className="name-tag">
        <div className="shiny-text">UI-coxx</div>
      </h2>

      <Nav />

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
