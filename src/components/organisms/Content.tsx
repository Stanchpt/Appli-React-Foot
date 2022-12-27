import React from "react";
import { Route, Routes } from "react-router-dom";
import AfficheCompetPage from "../../pages/AfficheCompetPage";
import AfficheMatchPage from "../../pages/AfficheMatchPage";
import AjoutCompet from "../../pages/AjoutCompet";
import AjoutMatch from "../../pages/AjoutMatch";
import HomePage from "../../pages/HomePage";

const Content = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage/>} />
      <Route path="competition" element={<AfficheCompetPage/>} />
      <Route path="match" element={<AfficheMatchPage />} />
      <Route path="team" element={<div>Les Equipes</div>} />
      <Route path="AjoutMatch" element={<AjoutMatch/>}/>
      <Route path="AjoutCompet" element={<AjoutCompet/>}/>
      <Route path="AjoutPlayer" element={<div>Ajout Player</div>}/>
      <Route path="AjoutTeam" element={<div>Ajout Team</div>}/>
      <Route path="ViewPlayerTeam" element={<div>Les joueurs de la team</div>}/>
    </Routes>
  );
};

export default Content;
