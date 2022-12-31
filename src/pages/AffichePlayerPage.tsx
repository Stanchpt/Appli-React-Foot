import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ErrorApi from "../components/atoms/error-API";
import AffichePlayer from "../components/molecules/affichePlayer";

function AfficheCompetPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [player, setCompet] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/players")
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
  console.log(player)
  if(player.length != 0)
  {
      return (   
          //Remplissage du composant afficheMatch avec les données récupèrées via l'api
          <Container>
          <div className ="container">
            <div className="AfficheCompet">
            <table className="table table-bordered table-striped">
              <thead>
                  <tr>
                    <td>id</td>
                    <td>Nom</td>
                    <td>Prenom</td>
                    <td>Age</td>
                    <td>Club</td>
                    <td>Equipe Nationale</td>
                    <td colSpan={2} id="bgcolor"></td>
                  </tr>
                </thead>
                <tr>
                  <td colSpan={8} id="lien-ajout">
                    <div className="btn_aj_player">
                      <Link to={"/AjoutPlayer"}> + Ajout un nouveau player </Link> 
                    </div>
                  </td>  
                </tr> 
                <tbody>
                  {player.map((item) => (
                    // <AfficheMatch key={item.id} {...item} />
                    <AffichePlayer 
                      key={item.id}
                      id= {item.id}
                      nom={item.nom}
                      prenom={item.prenom}
                      age={item.age}
                      club={item.club}
                      equipe_nationale={item.equipe_nationale}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      );
  }
  else {
    return (
      <div className="container">
      <ErrorApi />
      </div>
    );
  }
};

export default AfficheCompetPage;

const Container = styled.div`
.btn_aj_player{
  text-align:center;
  padding :15px;
}
.btn_aj_player a{
  border-bottom : solid 2px black;
}
a{
  text-decoration :none;
  font-size : 18px;
  color: white;
}
#lien-ajout{
  background-color : #6d071a;
}
#bgcolor{
  background-color : black;
}
`;