import axios from "axios";
import React, { useRef, useState } from "react";
import styled from "styled-components";

function AjoutMatch() {
    const url= "http://localhost:3000/matchs/"

    const [adv1, SetAdv1] = useState('')
    const [adv2, SetAdv2] = useState('')
    const [competition, SetCompetition] = useState('')
    const [stade_competition, SetStdCompet] = useState('')
    const [date, SetDate] = useState('')
    const [heure, SetHeure] = useState('')
    const [img_match, SetImgMatch]= useState('')

    const handleSubmit = async(e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        console.log(adv1, adv2, competition, stade_competition, date, heure, img_match)
        try{
            const resp = await axios.post(url, {Adv1 : adv1, Adv2:adv2,
            competition:competition, stade_competition:stade_competition,
            date:date, heure: heure, img_match:img_match});
            console.log(resp.data);
            console.log("Votre match a été ajouté");
            alert("Votre match a été ajouté");
            window.location.reload();
        }catch(error){
            console.log("La requête n'a pas été effectué");
            alert(error);
            window.location.reload();
        }
    }

    return (   
        //Remplissage du composant afficheMatch avec les données récupèrées via l'api
        <div className ="container">
          <div className="AjoutMatch">
            <Container>
                <div className='form_match'>
                    <form className="Form" onSubmit={handleSubmit}>
                        <u><h5>Formulaire d'Ajout d'un nouveau Match de foot : </h5></u>
                        <div className="mb-3 mt-3">
                            <label htmlFor="adv1" className="form-label">Adversaire 1 :</label>
                            <input type="text" className="form-control" id="adv1" placeholder="Enter l'Adversaire 1" 
                            name="adv1" value ={adv1} onChange={(e)=>SetAdv1(e.target.value)} required/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="Adv2" className="form-label">Adversaire 2 :</label>
                            <input type="text" className="form-control" id="Adv2" placeholder="Enter l'Adversaire 2" 
                            name="Adv2" value ={adv2} onChange={(e)=>SetAdv2(e.target.value)} required/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="competition" className="form-label">Enter la competition :</label>
                            {/* <input type="text" className="form-control" id="stade_competition" placeholder="Enter la region de la competition" name="stade_competition"/> */}
                            <select className="form-select mt-3" value ={competition} onChange={(e)=>SetCompetition(e.target.value)} required>
                                <option selected>--Choisissez votre competition--</option>
                                <option value="Coupe_du_monde">Coupe du monde</option>
                                <option value="Euro">Euro</option>
                                <option value="Copa America">Copa America</option>
                                <option value="CAN">Coupe d'Afrique des Nations</option>
                                <option value="Ligue des Champions">Ligue des Champions</option>
                                <option value="Europa League">Europa League</option>
                                <option value="Europa Conference League">Europa Conference League</option>
                                <option value="Ligue 1">Ligue 1</option>
                                <option value="Ligue 2">Ligue 2</option>
                                <option value="Liga BBVA">Liga BBVA</option>
                                <option value="Bundesliga">Bundesliga</option>
                                <option value="Premier League">Premier League</option>
                                <option value="Serie A">Serie A</option>
                            </select>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="stade_competition" className="form-label">Enter le stade de la competition :</label>
                            {/* <input type="text" className="form-control" id="stade_competition" placeholder="Enter la region de la competition" name="stade_competition"/> */}
                            <select className="form-select mt-3" value ={stade_competition} onChange={(e)=>SetStdCompet(e.target.value)} required>
                                <option selected>--Choisissez un stade competition--</option>
                                <option value="Match de Poule">Match de Poule</option>
                                <option value="8ème de Finale">8ème de Finale</option>
                                <option value="Quart de Finale">Quart de Finale</option>
                                <option value="Demi Finale">Demi Finale</option>
                                <option value="Finale">Finale</option>
                                <option value="Eliminatoire">Eliminatoire</option>
                                <option value="Match de Championnat">Match de Championnat</option>
                            </select>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="Date" className="form-label">Entrer la date du match :</label>
                            <input type="date" className="form-control" id="Date" placeholder="date du match, ex: 10/08/2022 ou 08/10/2022" 
                            name="Date" value ={date} onChange={(e)=>SetDate(e.target.value)} required/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="heure" className="form-label">Entrer l'heure du match :</label>
                            <input type="number" className="form-control" id="Date" placeholder="heure du match, ex : 16 = 16h à l'affichage" 
                            name="heure" value ={heure} onChange={(e)=>SetHeure(e.target.value)}/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="url_image_match" className="form-label">Enter l'url de la photo du match :</label>
                            <input type="text" className="form-control" id="url_image_match" placeholder="ex:https://www.stakecheia.com/wp-content/uploads/2022/11/Copa-do-Mundo-1.jpg" 
                            name="url_image_match" value ={img_match} onChange={(e)=>SetImgMatch(e.target.value)}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Container>
          </div>
        </div>
      );
};

export default AjoutMatch;

const Container = styled.div`
h5{
    text-align: center;
}
`;