import { useState } from "react";

const BtnAction = ({ text, filterMenu, isActive }) => {
  return (
    <button
      className={
        text === isActive ? "btn-action btn-action--active" : "btn-action"
      }
      onClick={() => filterMenu(text)}
    >
      {text}
    </button>
  );
};

export default BtnAction;
