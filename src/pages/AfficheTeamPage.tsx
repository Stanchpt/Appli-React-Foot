import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AfficheTeams from "../components/molecules/afficheTeams";

function AfficheTeamPage() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [club, setClub] = useState<any[]>([]);
  const [equipe_nationale, setEquipeNat]= useState<any[]>([]); 

  //GET Club
  useEffect(() => {
  fetch("http://localhost:3000/club")
      .then(res => res.json())
      .then(
      (result) => {
          setIsLoaded(true);
          setClub(result);
          //Permet de voir si la fonction Fetch a bien récupèré les données de l'api
          console.log(result);
      },
      (error) => {
          setIsLoaded(true);
          setError(error);
      }
      )
  }, [])

  //GET Equipe Nationale 
  useEffect(() => {
    fetch("http://localhost:3000/Equipe_nationale")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setEquipeNat(result);
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
      <div className="container">
        <h2><span className="badge bg-secondary">Voici les équipes de foot :</span></h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Explication
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  &Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit, harum nisi excepturi quas labore tenetur cupiditate reiciendis, sint voluptates voluptatem veniam quo dignissimos doloribus! Saepe quidem dolores quod necessitatibus.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Mes clubs
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <div className ="container">
                    <div className="btn_aj_club">
                      <Link to={"/AjoutClub"}> + Ajout d'un nouveau club</Link> 
                    </div> 
                    <div className="AfficheClub">
                      {
                      club.map((item) => (
                        <AfficheTeams
                            key={item.id}
                            nom_team={item.nom}
                            surnom={item.Surnom}
                            Pays={item.Pays}
                            continent={item.Continent}
                            id_fifa={item.Championnat}
                            logo_team={item.logo_team} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Mes équipes nationales
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <div className ="container">
                    <div className="btn_aj_club">
                      <Link to={"/AjoutNationale"}> + Ajout d'une nouvelle équipe nationale</Link> 
                    </div> 
                    <div className="AfficheNationale">
                      {
                      equipe_nationale.map((item) => (
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
                </div>
              </div>
            </div>
        </div>
      </div>
    </Container>
  );
};

export default AfficheTeamPage;

const Container = styled.div`
.btn_aj_club{
  text-align:center;
  padding :15px;
}
.btn_aj_club a{
  border-bottom : solid 2px black;
}
a{
  text-decoration :none;
  font-size : 18px;
}
`;