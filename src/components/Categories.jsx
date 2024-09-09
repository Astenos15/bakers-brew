import React, { useState } from "react";
import { nanoid } from "nanoid";
import BtnAction from "./buttons/BtnAction";

const Categories = ({ categories, filterMenu, isActive }) => {
  return (
    <div className="categories mb-md">
      {categories.map((item) => {
        const id = nanoid();
        return (
          <BtnAction
            key={id}
            text={item}
            filterMenu={filterMenu}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default Categories;
