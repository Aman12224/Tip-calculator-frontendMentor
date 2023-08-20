import React from "react";

const Display = () => {
  return (
    <div className="display">
      <div className="amount-container">
        <p className="title">
          Tip Amount
          <br />
          <span>/ person</span>
        </p>
        <h1 className="total">$9.99</h1>
      </div>
      <div className="amount-container">
        <p className="title">
          Total
          <br />
          <span>/ person</span>
        </p>
        <h1 className="total">$9.99</h1>
      </div>
      <button className="submit-btn btn">RESET</button>
    </div>
  );
};

export default Display;
