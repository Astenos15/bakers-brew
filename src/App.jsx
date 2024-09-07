import React, { useState } from "react";
import Hero from "./components/Hero";
import heroImg from "./assets/img/hero.webp";
import logo from "./assets/img/bakers-brew.svg";
import { navLinks, menu } from "./data";
import Features from "./components/Features";
import Menu from "./components/Menu";

const allCategories = [...new Set(menu.map((item) => item.category))];

const App = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <>
      <header style={{ position: "relative" }}>
        <Hero heroImg={heroImg} />
      </header>
      <main>
        <Features menu={menu} />
        <Menu menuItems={menuItems} />
      </main>
    </>
  );
};

export default App;
