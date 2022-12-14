import styled from "styled-components";

interface AffichematchProps {
  adv1: string;
  adv2: string;
  competition : string;
  stade_competition : string;
  datematch: string;
  heure : number;
}

const AfficheMatch = ({adv1, adv2,competition, stade_competition, datematch, heure }: AffichematchProps) => {
  return (
    <Container>
      <div className="container justify-content-center">
      <p className="card-text">{competition}</p>
      <p className="card-text">{stade_competition}</p>
        <div className="card">
          <img src="https://www.stakecheia.com/wp-content/uploads/2022/11/Copa-do-Mundo-1.jpg" className="card-img-top" alt="Img-Default"/>
          <div className="card-body">
            <h5 className="card-title">{adv1} - {adv2}</h5>
            <div className="date-heure">
            <p className="card-text">{datematch} <br></br><p id="heure">{heure}h</p></p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AfficheMatch;

const Container = styled.div`
  width: 50%;
  display: inline-block;
  align-items : center;

  .card-body{
    width: 100% !important;
    padding : 0 !important
  }

  .card-title{
    background-color: #6d071a;
    padding : 10px 0px 10px 0;
    color : white;
  }

  & > img {
    width: 100%;
    height: 200px;
  }
  
  h5 {
    text-align: center;
  }

  p{
    text-align : center; 
    font-size : 25px;
  }

  #heure{
    font-size : 30px;
    font-weight : bold;
    color : #6d071a;
  }

  & > div > p {
    font-weight: bold;
    text-align: center;
    font-size : 15px;
  }

  & > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0 12px 12px 12px;
  }
`;
