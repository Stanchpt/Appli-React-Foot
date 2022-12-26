import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AfficheCompet from "../components/molecules/afficheCompet";
import styled from "styled-components";

function AfficheCompetPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [compet, setCompet] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/competition")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCompet(result);
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
        <div className="btn_aj_compet">
          <Link to={"/AjoutCompet"}> + Ajout une nouvelle competition</Link> 
        </div>   
        <div className="AfficheCompet">
            {compet.map((item) => (
              // <AfficheMatch key={item.id} {...item} />
              <AfficheCompet 
                key={item.id}
                url_image={item.url_image}
                url_info={item.url_info}
                nom={item.nom}
                annee={item.Annee}
                nb_equipe={item.nb_equipe}
                region = {item.region}/>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default AfficheCompetPage;

const Container = styled.div`
.btn_aj_compet{
  text-align:center;
  padding :15px;
}
.btn_aj_compet a{
  border-bottom : solid 2px black;
}
a{
  text-decoration :none;
  font-size : 18px;
}
`;