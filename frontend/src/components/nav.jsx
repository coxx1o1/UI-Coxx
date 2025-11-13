import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
   <nav className="nav">
        <Link to="/components" className="shiny-text">
          Components
        </Link>
        <Link to="/templates" className="shiny-text">
          Templates
        </Link>
        <Link to="/styles" className="shiny-text">
          Styles
        </Link>
      </nav>
  );
}
 export default Nav;
