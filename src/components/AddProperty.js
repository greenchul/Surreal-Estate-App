import React, { useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      city: "Manchester",
    },
  };
  // eslint-disable-next-line no-unused-vars
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (e) => {
    e.preventDefault();
  };
  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  return (
    <div className="add-property">
      <p>Add Properties</p>
      <form onSubmit={handleAddProperty} className="add-property__form">
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="House for sale"
            className="add-property__form__field"
          />
        </label>

        <label htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
            className="add-property__form__field"
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          Bedrooms
          <input
            type="number"
            id="bedrooms"
            placeholder="4"
            min="0"
            max="20"
            name="bedrooms"
            // value={fields.bedrooms}
            onChange={handleFieldChange}
            className="add-property__form__field"
          />
        </label>

        <label htmlFor="bathrooms">
          Bathroom
          <input
            type="number"
            id="bathrooms"
            min="0"
            max="15"
            name="bathrooms"
            // value={fields.bathrooms}
            onChange={handleFieldChange}
            className="add-property__form__field"
            placeholder="1"
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            value={fields.price}
            min="0"
            onChange={handleFieldChange}
            className="add-property__form__field"
          />
        </label>

        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
            className="add-property__form__field"
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="hello@email.com"
            onChange={handleFieldChange}
            className="add-property__form__field"
          />
        </label>
        <div className="add-property__form__button">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
