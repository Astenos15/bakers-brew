import React from "react";

const BtnLink = ({ text, className }) => {
  return (
    <a className={className} href="#menu">
      {text}
    </a>
  );
};

export default BtnLink;
