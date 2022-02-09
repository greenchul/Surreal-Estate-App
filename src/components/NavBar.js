import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="navbar-logo">🏠</li>
        <li>
          <p className="navbar-links">View Properties</p>
        </li>
        <li>
          <p className="navbar-links">Add a property</p>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
