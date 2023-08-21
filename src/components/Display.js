import React from "react";
import { useGlobalContext } from "./context";

const Display = () => {
  const { display, handleReset } = useGlobalContext();
  const { tipAmount, total } = display;
  return (
    <div className="display">
      <div className="amount-container">
        <p className="title">
          Tip Amount
          <br />
          <span>/ person</span>
        </p>
        <h1 className="total">${tipAmount ? tipAmount : "0.00"}</h1>
      </div>
      <div className="amount-container">
        <p className="title">
          Total
          <br />
          <span>/ person</span>
        </p>
        <h1 className="total">${total ? total : "0.00"}</h1>
      </div>
      <button className="submit-btn btn" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default Display;
