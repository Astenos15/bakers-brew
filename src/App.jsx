import React, { useState } from "react";
import Hero from "./components/Hero";
import heroImg from "./assets/img/hero.webp";
import logo from "./assets/img/bakers-brew.svg";
import { navLinks, menu } from "./data";
import Features from "./components/Features";
import Menu from "./components/Menu";

const allCategories = [...new Set(menu.map((item) => item.category))];

const initialMenu = menu.filter((item) => item.category === "cookies");

const App = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(initialMenu);
  const [isActive, setIsActive] = useState("cookies");

  const filterMenu = (category) => {
    const newMenu = menu.filter((item) => item.category === category);
    setMenuItems(newMenu);
    setIsActive(category);
  };
  return (
    <>
      <header style={{ position: "relative" }}>
        <Hero heroImg={heroImg} />
      </header>
      <main>
        <Features menu={menu} />
        <Menu
          menuItems={menuItems}
          categories={categories}
          filterMenu={filterMenu}
          isActive={isActive}
        />
      </main>
    </>
  );
};

export default App;
