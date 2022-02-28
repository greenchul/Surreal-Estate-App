import React from "react";
import propTypes from "prop-types";
import "../styles/PropertyCard.css";
import { FaBath, FaBed, FaBuilding, FaPoundSign } from "react-icons/fa";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
  userID,
  id,
  onSaveProperty,
}) => {
  return (
    <div className="property-card">
      <p className="property-card__title">{title}</p>
      <p className="property-card__type-city">
        <FaBuilding /> {type} - {city}
      </p>
      <p className="property-card__bathrooms">
        <FaBath /> {bathrooms}
      </p>
      <p className="property-card__bedrooms">
        <FaBed /> {bedrooms}
      </p>
      <p className="property-card__price">
        <FaPoundSign /> {price}
      </p>
      <div>
        <a
          className="property-card__email-link"
          href={`mailto:${email}?subject=${title}`}
        >
          Email
        </a>
      </div>
      {userID && (
        <div>
          <button type="button" onClick={() => onSaveProperty(id)}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  bathrooms: propTypes.number.isRequired,
  bedrooms: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  city: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  userID: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onSaveProperty: propTypes.func.isRequired,
};
