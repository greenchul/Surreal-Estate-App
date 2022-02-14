import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="navbar-logo" data-testid="logo">
          🏠
        </li>
        <li>
          <Link to="/" className="navbar-links">
            View Properties
          </Link>
        </li>
        <li>
          <Link to="/add-property" className="navbar-links">
            Add a property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
