import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
  return (
    <Container>
      <div className="container-fluid p-5 text-white text-center" id="header-site">
        <img src="/football-8873.png" alt="logo-Site" />
        <h1>Bienvenue sur mon application</h1>
        <p>Elle montre tout les matchs de foot se déroulant dans le monde</p> 
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
          <Link to={"/competition"}>Competition</Link>
          </li>
          <li>
          <Link to={"/match"}>Match</Link>
          </li>
          <li>
            <Link to={"/team"}>Equipes</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  border-bottom: 1px solid white;
  text-align: center;
  transition: all 0.2s ease;
  background-color :black;
  margin-bottom : 15px;
  & #header-site{
    margin-bottom:10px;
    background-color : #6d071a;
  }
  & img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: white;
    margin-bottom : 10px;
  }
  & ul {
    padding: 0;
    list-style-type: none;
  }

  & li {
    display: inline-block;
    padding: 4px 12px;
    background-color : #6d071a;
    border: 1px solid black;
    border-radius: 3px;
    margin: 0 12px;
  }
  & a{
    text-decoration :none;
    color : white !important;
  }
`;
