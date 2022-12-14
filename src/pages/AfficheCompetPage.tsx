import React, { useEffect, useState } from "react";
import AfficheCompet from "../components/molecules/afficheCompet";

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
    <div className ="container">
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
  );
};

export default AfficheCompetPage;