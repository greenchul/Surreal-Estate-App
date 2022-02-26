import React from "react";
import propTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = ({ onLogin, userID, onLogout }) => {
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
        <li>
          {!userID ? (
            <FacebookLogin
              callback={onLogin}
              appId="919435078722829"
              fields="name,email"
            />
          ) : (
            <button type="button" onClick={onLogout}>
              Sign out
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  onLogin: propTypes.func.isRequired,
  userID: propTypes.string.isRequired,
  onLogout: propTypes.func.isRequired,
};
