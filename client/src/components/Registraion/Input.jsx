import React from "react";

const Input = ({ handleChange, label, type, errors, values }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control"
        id="name"
        name={label}
        placeholder={label}
        value={values[label]}
        onChange={handleChange}
      />
      {errors[label] && (
        <p style={{ color: "white", fontSize: 15, padding: 0, margin: 0 }}>
          {errors[label]}
        </p>
      )}
    </div>
  );
};

export default Input;
