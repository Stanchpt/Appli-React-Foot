import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AfficheMatch from "../components/molecules/afficheMatch";

function AfficheMatchPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [matchs, setMatchs] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/matchs")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMatchs(result);
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
          <div className="btn_aj_match">
            <Link to={"/AjoutMatch"}> + Ajout un nouveau match</Link> 
          </div> 
        <div className="AfficheMatch">
            {matchs.map((item) => (
              // <AfficheMatch key={item.id} {...item} />
              <AfficheMatch
                key={item.id}
                adv1={item.Adv1}
                adv2={item.Adv2}
                competition={item.competition}
                stade_competition={item.stade_competition}
                heure={item.heure} 
                datematch={item.date}
                img_match = {item.img_match}/>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default AfficheMatchPage;

const Container = styled.div`
.btn_aj_match{
  text-align:center;
  padding :15px;
}
.btn_aj_match a{
  border-bottom : solid 2px black;
}
a{
  text-decoration :none;
  font-size : 18px;
}
`;