import React, { useContext, useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [bill, setBill] = useState("");
  const [custom, setCustom] = useState("");
  const [noPpl, setNoPpl] = useState("");
  const [display, setDisplay] = useState({ tipAmount: "", total: "" });

  const handleSubmit = (tip) => {
    if (bill && noPpl) {
      const totalTip = (tip / 100) * bill;

      const totalBill = parseFloat(bill) + totalTip;

      let tipAmountPer = totalTip / noPpl;
      let totalPer = totalBill / noPpl;

      setDisplay({
        tipAmount: tipAmountPer.toFixed(2),
        total: totalPer.toFixed(2),
      });
    }
  };
  const handleReset = () => {
    const btns = document.querySelectorAll(".tip-btn");
    btns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    setBill("");
    setNoPpl("");
    setCustom("");
    setDisplay({ tipAmount: "", total: "" });
  };
  const handleHighlight = (e) => {
    const btns = document.querySelectorAll(".tip-btn");
    btns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    if (e.target.classList.contains("tip-btn")) {
      e.target.classList.add("selected");
    }
  };
  return (
    <AppContext.Provider
      value={{
        bill,
        custom,
        setCustom,
        noPpl,
        setBill,

        setNoPpl,
        display,
        handleSubmit,
        handleReset,
        handleHighlight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
