import React from "react";

const Calculator = () => {
  return (
    <form className="calculator" autoComplete="off">
      <div className="input-container ">
        <div className="label-container">
          <label htmlFor="bill" className="label-bill">
            Bill
          </label>
          <label htmlFor="bill" className="error-label ">
            Can't be zero
          </label>
        </div>
        <input
          type="number"
          name="bill"
          className="input-bill input"
          placeholder="0"
        />
      </div>
      <p className="label-btn">Select tip %</p>

      <div className="tip-btn-container">
        <button className="tip-btn btn">5%</button>
        <button className="tip-btn btn">10%</button>
        <button className="tip-btn btn">15%</button>
        <button className="tip-btn btn">25%</button>
        <button className="tip-btn btn">50%</button>
        <input
          type="number"
          className="btn input-custom"
          placeholder="Custom"
          step={0.01}
        />
      </div>
      <div className="input-container ">
        <div className="label-container">
          <label htmlFor="numberPpl">Number of people</label>
          <label htmlFor="bill" className="error-label ">
            Can't be zero
          </label>
        </div>
        <input
          type="text"
          name="numberPpl"
          className="input-numberPpl input"
          placeholder="0"
        />
      </div>
    </form>
  );
};

export default Calculator;
