import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import getProperties from "../requests/getProperties";
import "../styles/Properties.css";

const Properties = () => {
  const [listOfProperties, setListOfProperties] = useState([]);
  useEffect(() => {
    getProperties(setListOfProperties);
  }, []);
  return (
    <div className="properties">
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
  );
};

export default Properties;
