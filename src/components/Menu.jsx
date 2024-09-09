import React from "react";
import Card from "./Card";
import { nanoid } from "nanoid";
import Title from "./Title";
import Categories from "./Categories";

const Menu = ({ menuItems, categories, filterMenu, isActive }) => {
  return (
    <section id="menu" className="container">
      <Title text="our menu" />
      <Categories
        categories={categories}
        filterMenu={filterMenu}
        isActive={isActive}
      />
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
