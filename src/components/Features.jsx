import React from "react";
import { nanoid } from "nanoid";

const Features = ({ menu }) => {
  const items = menu.filter((item) => item.category === "cookies");
  return (
    <div className="features">
      {items.map((item) => {
        const id = nanoid();
        return (
          <p className="text" key={id}>
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default Features;
