import React from "react";

const Button = ({ buttonName }) => {
  return (
    <div className="form-group">
      <button type="submit" className="btn">
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
