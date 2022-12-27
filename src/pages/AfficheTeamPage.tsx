import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AfficheTeams from "../components/molecules/afficheTeams";

function AfficheTeamPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/teams")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTeams(result);
          //Permet de voir si la fonction Fetch a bien récupèré les données de l'api
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (   
    //Remplissage du composant afficheMatch avec les données récupèrées via l'api
    <Container>
      <div className ="container">
          <div className="btn_aj_teams">
            <Link to={"/AjoutTeam"}> + Ajout d'une nouvelle Equipe</Link> 
          </div> 
        <div className="AfficheMatch">
            {
            teams.map((item) => (
              <AfficheTeams
                  key={item.id}
                  nom_team={item.nom}
                  surnom={item.Surnom}
                  Pays={item.Pays}
                  continent={item.Continent}
                  id_fifa={item.id_fifa}
                  logo_team={item.logo_team} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default AfficheTeamPage;

const Container = styled.div`
.btn_aj_teams{
  text-align:center;
  padding :15px;
}
.btn_aj_teams a{
  border-bottom : solid 2px black;
}
a{
  text-decoration :none;
  font-size : 18px;
}
`;