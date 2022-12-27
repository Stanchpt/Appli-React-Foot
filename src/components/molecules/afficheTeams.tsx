import React from "react";
import styled from "styled-components";

interface AfficheTeamsProps {
    nom_team: string;
    surnom: string;
    Pays : string;
    continent : string;
    id_fifa: string;
    logo_team:string;
  }
  
  const AfficheTeams = ({nom_team, surnom, Pays, continent, id_fifa, logo_team}: AfficheTeamsProps) => {
    return (
        //affichage des équipes
        <Container>
            <div className="container">
                <div className="container__profile">
                    <img
                    src={logo_team}
                    alt={surnom}
                    />
                    <div className="container__profile__text">
                    <h2>{nom_team} - {id_fifa}</h2>
                    <p><b>{surnom}</b></p>
                    <h3><i>Quelques infos sur l'équipe :</i></h3>
                    <p> Equipe d'<b>{continent}</b></p>
                    <p> Son pays d'origine est <b>{Pays}</b></p>
                    </div>
                </div>
            </div>    
        </Container>
    );  
  };

export default AfficheTeams

const Container = styled.div`
$bright-color: #fff;
@mixin bottom {
 position: absolute;
 right: 0;
 left: 0;
}
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
 background-color: #80afcd;
 font-family: Arial, Helvetica, sans-serif;
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 100vh;
 line-height: 1.4;
}

.container {
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 position: relative;
 box-shadow: 0 0 50px rgba(0, 0, 0, 0.315);
 margin-bottom: 5%;
 .container__info {
  @include bottom;
  bottom: 20%;
  display: flex;
  align-items: flex-end;
  padding: 15px 30px;
  color: $bright-color;
  span {
   margin-right: 20px;
  }
  i {
   margin-right: 10px;
  }
 }
 .container__profile {
  background-color: #e4f2fd;
  display: flex;
  align-items: center;
  padding: 20px;
  @include bottom();
  bottom: 0;
  img {
   width: 60px;
   height: 60px;
   border-radius: 50%;
   object-position: center;
   object-fit: cover;
   margin-right: 10px;
  }
  h2 {
   color: #334454;
   font-size: 1.2rem;
   text-transform : uppercase;
  }
  h3 {
    color: #334454;
    font-size: 1.0rem;
    margin-top :2px;
    margin-bottom : 5px;
   }
  p {
   color: #a1b2bc;
   font-size: 0.8rem;
   margin-left: 5px;
  }
  p b {
   font-style: italic;
  }
 }
}
`;