import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "../styles/SideBar.css";

const SideBar = () => {
  const [query, setQuery] = useState();
  const history = useHistory();
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    console.log("clicked", query);
    history.push(newQueryString);
  };
  return (
    <div className="sidebar">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search </button>
      </form>
      <p>Filter by City</p>
      <Link
        to={buildQueryString("query", { city: "Manchester" })}
        className="sidebar__links"
      >
        Manchester
      </Link>
      <Link
        to={buildQueryString("query", { city: "Leeds" })}
        className="sidebar__links"
      >
        Leeds
      </Link>
      <Link
        to={buildQueryString("query", { city: "Sheffield" })}
        className="sidebar__links"
      >
        Sheffield
      </Link>
      <Link
        to={buildQueryString("query", { city: "Liverpool" })}
        className="sidebar__links"
      >
        Liverpool
      </Link>
      <p>Sort by price</p>
      <Link to={buildQueryString("sort", { price: -1 })}>Descending</Link>
      <Link to={buildQueryString("sort", { price: 1 })}>Ascending</Link>
    </div>
  );
};

export default SideBar;
