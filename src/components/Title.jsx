import React from "react";

const Title = ({ text }) => {
  return (
    <div className="title ">
      <h2 className="heading-secondary mb-sm">{text}</h2>
      <div className="title__underline">&nbsp;</div>
    </div>
  );
};

export default Title;
