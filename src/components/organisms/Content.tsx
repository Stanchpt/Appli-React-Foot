import React from "react";
import { Route, Routes } from "react-router-dom";
import AfficheCompetPage from "../../pages/AfficheCompetPage";
import AfficheMatchPage from "../../pages/AfficheMatchPage";
import AffichePlayerPage from "../../pages/AffichePlayerPage";
import AfficheTeamPage from "../../pages/AfficheTeamPage";
import AjoutCompet from "../../pages/AjoutCompet";
import AjoutMatch from "../../pages/AjoutMatch";
import AjoutPlayer from "../../pages/AjoutPlayer";
import AjoutClub from "../../pages/AjoutClub";
import AjoutEquipe_nationale from "../../pages/AjoutEquipe_nationale";
import HomePage from "../../pages/HomePage";
import PlayerEditPage from "../../pages/updatePlayerPage";

const Content = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage/>} />
      <Route path="competition" element={<AfficheCompetPage/>} />
      <Route path="match" element={<AfficheMatchPage />} />
      <Route path="team" element={<AfficheTeamPage/>} />
      <Route path="player" element={<AffichePlayerPage/>} />
      <Route path="AjoutMatch" element={<AjoutMatch/>}/>
      <Route path="AjoutCompet" element={<AjoutCompet/>}/>
      <Route path="AjoutPlayer" element={<AjoutPlayer/>}/>
      <Route path="AjoutClub" element={<AjoutClub/>}/>
      <Route path="AjoutNationale" element={<AjoutEquipe_nationale/>}/>
      <Route path="/Updateplayer/:id" element={<PlayerEditPage/>}/>
    </Routes>
  );
};

export default Content;
