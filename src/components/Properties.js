import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import getProperties from "../requests/getProperties";
import "../styles/Properties.css";
import SideBar from "./SideBar";

const Properties = () => {
  const [listOfProperties, setListOfProperties] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    getProperties(setListOfProperties);
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing/${search}`)
      .then((data) => {
        console.log(data.data);
        setListOfProperties(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);
  return (
    <div className="properties">
      <SideBar />
      <div className="properties__container">
        {listOfProperties.map((property) => {
          return (
            <div className="property">
              <PropertyCard
                key={property._id}
                title={property.title}
                type={property.type}
                bathrooms={parseInt(property.bathrooms, 10)}
                bedrooms={parseInt(property.bedrooms, 10)}
                price={parseInt(property.price, 10)}
                city={property.city}
                email={property.email}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Properties;
