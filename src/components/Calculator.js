import React, { useRef, useState } from "react";
import { useGlobalContext } from "./context";
import Btn from "./Btn";

const Calculator = () => {
  const {
    bill,
    noPpl,
    setBill,
    setNoPpl,
    handleSubmit,
    custom,
    setCustom,
    handleHighlight,
  } = useGlobalContext();
  const billComp = useRef(null);
  const noPplComp = useRef(null);
  // const btnContainer = document.querySelector(".tip-btn-container");

  return (
    <form
      className="calculator"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        if (!bill) {
          const tempCont = billComp.current;
          tempCont.classList.add("error");
        }
        if (!noPpl) {
          const tempCont = noPplComp.current;
          tempCont.classList.add("error");
        }
      }}
    >
      <div className="input-container " ref={billComp}>
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
          value={bill}
          onChange={(e) => {
            const tempCont = billComp.current;
            tempCont.classList.remove("error");
            setBill(e.currentTarget.value);
          }}
        />
      </div>
      <p className="label-btn">Select tip %</p>

      <div className="tip-btn-container" onClick={handleHighlight}>
        <Btn text="5" handleSubmit={handleSubmit} />
        <Btn text="10" handleSubmit={handleSubmit} />
        <Btn text="15" handleSubmit={handleSubmit} />
        <Btn text="25" handleSubmit={handleSubmit} />
        <Btn text="50" handleSubmit={handleSubmit} />

        <input
          type="number"
          className="btn input-custom"
          placeholder="Custom"
          value={custom}
          onChange={(e) => {
            const text = e.currentTarget.value;
            setCustom(e.currentTarget.value);
            handleSubmit(text);
          }}

          // onKeyDown={(e) => {
          //   e.preventDefault();
          //   const text = e.currentTarget.innerText;
          //   console.log(text);
          // }}
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   const text = e.currentTarget.innerText;
          //   console.log(text);
          // }}
        />
      </div>
      <div className="input-container " ref={noPplComp}>
        <div className="label-container">
          <label htmlFor="numberPpl">Number of people</label>
          <label htmlFor="bill" className="error-label ">
            Can't be zero
          </label>
        </div>
        <input
          type="number"
          name="numberPpl"
          className="input-numberPpl input"
          placeholder="0"
          value={noPpl}
          onChange={(e) => {
            const tempCont = noPplComp.current;
            tempCont.classList.remove("error");
            setNoPpl(e.currentTarget.value);
          }}
        />
      </div>
    </form>
  );
};

export default Calculator;
