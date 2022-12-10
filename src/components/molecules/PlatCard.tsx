import React from "react";
import styled from "styled-components";

interface PlatCardProps {
  name: string;
  price: string;
  imgUrl: string;
  maFonctionClick: () => void;
}

const PlatCard = ({ name, price, imgUrl, maFonctionClick }: PlatCardProps) => {
  return (
    <Container>
      <img src={imgUrl} alt={name} />
      <div>
        <p>{name}</p>
        <div>
          <button onClick={maFonctionClick}>+</button>
          <span>{price} €</span>
        </div>
      </div>
    </Container>
  );
};

export default PlatCard;

const Container = styled.div`
  border: 1px solid grey;
  border-radius: 6px;
  width: 196px;
  display: inline-block;

  & > img {
    width: 100%;
    height: 200px;
  }

  & > div > p {
    font-weight: bold;
    text-align: center;
  }

  & > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px 12px 12px;
  }
`;
