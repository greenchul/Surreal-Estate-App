import React from "react";
import propTypes from "prop-types";
import "../styles/Alert.css";

// eslint-disable-next-line no-unused-vars
const Alert = ({ message, success }) => {
  return <p className={`alert ${success ? "success" : "error"}`}>{message}</p>;
};

export default Alert;

Alert.propTypes = {
  message: propTypes.string.isRequired,
  success: propTypes.bool.isRequired,
};
