import React, { useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
    },
  };
  // eslint-disable-next-line no-unused-vars
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (e) => {
    e.preventDefault();
    console.log(fields);
  };
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  return (
    <div className="add-property">
      <p>Add Properties</p>
      <form onSubmit={handleAddProperty}>
        <input
          id="title"
          name="title"
          value={fields.title}
          onChange={handleFieldChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
