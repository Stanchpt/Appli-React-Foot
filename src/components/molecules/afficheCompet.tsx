import { Link } from "react-router-dom";
import styled from "styled-components";

interface AfficheCompetProps {
    url_image :string;
    url_info :string;
    nom :string;
    annee :number;
    nb_equipe : number;
    region : string; //les regions disponibles [Europe, Afrique, Oceanie, Asie, Amerique du Nord, Amerique du Sud, World]
}

const AfficheCompet = ({url_image, url_info, nom, annee, nb_equipe, region }: AfficheCompetProps) => {
  return (
    <Container>
      <div className="container justify-content-center">
      <div className="card" >
        <img src={url_image} className="card-img-top" alt="image_compet"/>
        <div className="card-body">
            <h5 className="card-title">{nom} - {annee}</h5>
            <p className="card-text">Cette compétition est composée de {nb_equipe} equipes et se déroule en {region}</p>
            <a href={url_info} className="btn btn-primary">Plus d'infos</a>
        </div>
        </div>
      </div>
    </Container>
  );
};

export default AfficheCompet;

const Container = styled.div`
width: 50%;
height : 600px;
display: inline-block;
align-items : center;

.card-img-top{
    height : 300px;
}
img{
    object-fit: cover;
}

button{
  margin-left : 5px;
}
a{
  text-decoration :none;
  color : white !important;
}
`;
