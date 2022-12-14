import React from "react";
import { Route, Routes } from "react-router-dom";
import AfficheCompetPage from "../../pages/AfficheCompetPage";
import AfficheMatchPage from "../../pages/AfficheMatchPage";
import HomePage from "../../pages/HomePage";

const Content = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage/>} />
      <Route path="competition" element={<AfficheCompetPage/>} />
      <Route path="match" element={<AfficheMatchPage />} />
      <Route path="team" element={<div>Les Equipes</div>} />
    </Routes>
  );
};

export default Content;
