import React from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to={`/?query={"city": "Manchester"}`} className="sidebar__links">
        Manchester
      </Link>
      <Link to={`/?query={"city": "Leeds"}`} className="sidebar__links">
        Leeds
      </Link>
      <Link to={`/?query={"city": "Sheffield"}`} className="sidebar__links">
        Sheffield
      </Link>
      <Link to={`/?query={"city": "Liverpool"}`} className="sidebar__links">
        Liverpool
      </Link>
    </div>
  );
};

export default SideBar;
