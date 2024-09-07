import React from "react";
import Card from "./Card";
import { nanoid } from "nanoid";

const Menu = ({ menuItems }) => {
  return (
    <section id="menu" className="container">
      <div className="grid-4-cols">
        {menuItems.map((item) => {
          const id = nanoid();
          return <Card key={id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Menu;
