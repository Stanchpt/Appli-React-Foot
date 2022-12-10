import React from "react";
import { Route, Routes } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";
import MenuPage from "../../pages/MenuPage";

const Content = () => {
  const { incrementCount } = useGlobalContext();
  return (
    <Routes>
      <Route path="" element={<MenuPage incrementCount={incrementCount} />} />
      <Route path="panier" element={<div>Mon panier</div>} />
    </Routes>
  );
};

export default Content;
