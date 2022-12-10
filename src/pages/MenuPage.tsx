import React from "react";
import styled from "styled-components";
import PlatCard from "../components/molecules/PlatCard";

const plats = [
  {
    name: "Risotto blanc",
    price: "100",
    imgUrl:
      "https://assets.bonappetit.com/photos/5c803ed5eda4a341526b6077/1:1/w_2560%2Cc_limit/risotto-5.jpg",
  },
  {
    name: "Risotto gris",
    price: "50",
    imgUrl:
      "https://assets.bonappetit.com/photos/5c803ed5eda4a341526b6077/1:1/w_2560%2Cc_limit/risotto-5.jpg",
  },
  {
    name: "Risotto rouge",
    price: "20",
    imgUrl:
      "https://assets.bonappetit.com/photos/5c803ed5eda4a341526b6077/1:1/w_2560%2Cc_limit/risotto-5.jpg",
  },
  {
    name: "Risotto noir",
    price: "500",
    imgUrl:
      "https://assets.bonappetit.com/photos/5c803ed5eda4a341526b6077/1:1/w_2560%2Cc_limit/risotto-5.jpg",
  },
];

interface MenuPageProps {
  incrementCount: () => void;
}

const MenuPage = ({ incrementCount }: MenuPageProps) => {
  return (
    <PlatsContainer>
      {plats.map((item) => (
        <PlatCard maFonctionClick={incrementCount} key={item.name} {...item} />
      ))}
    </PlatsContainer>
  );
};

export default MenuPage;

const PlatsContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
