import React from "react";

const Button = ({ buttonName, onClick }) => {
  return (
    <div className="form-group">
      <button type="submit" className="btn" onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
