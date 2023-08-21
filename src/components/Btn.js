import React, { useRef, useState } from "react";

const Btn = ({ text, handleSubmit }) => {
  const btnRef = useRef(null);
  //   const [isSelected, setIsSelected] = useState(false);
  //   const handleSelect = () => {
  //     if (isSelected) {
  //       const tempbtn = btnRef.current;
  //       tempbtn.classList.add("selected");
  //     }
  //   };
  return (
    <button
      className="tip-btn btn"
      ref={btnRef}
      onClick={(e) => {
        // setIsSelected(true);
        const text = e.currentTarget.innerText.replace("%", "");
        handleSubmit(text);
        // handleSelect();
      }}
    >
      {text}%
    </button>
  );
};

export default Btn;
