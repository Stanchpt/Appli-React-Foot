import axios from "axios";
import React, {useState } from "react";
import styled from "styled-components";

function AjoutClub() {
    const url= "http://localhost:3000/Club/"

    const [nom, SetNom] = useState('')
    const [surnom, SetSurnom] = useState('')
    const [pays, SetPays] = useState('')
    const [championnat, SetChampionnat] = useState('')
    const [continent, SetContinent] = useState('')
    const [logoteam, SetLogoTeam] = useState('')

    const handleSubmit = async(e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        console.log(nom,surnom,pays,championnat,continent,logoteam)
        try{
            const resp = await axios.post(url, {nom : nom, Surnom:surnom,
            Pays:pays,Championnat : championnat, Continent:continent, logo_team:logoteam});
            console.log(resp.data);
            console.log("Votre Team a été ajouté");
            alert("Votre Team a été ajouté");
            window.location.reload();
        }catch(error){
            console.log("La requête n'a pas été effectué");
            alert(error);
            window.location.reload();
        }
    }

    return (   
        <div className ="container">
          <div className="AjoutTeam">
            <Container>
                <div className='form_team'>
                    <form className="Form" onSubmit={handleSubmit}>
                        <u><h5>Formulaire d'Ajout d'une nouvelle Equipe de foot : </h5></u>
                        <div className="mb-3 mt-3">
                            <label htmlFor="nom" className="form-label">le nom de l'equipe :</label>
                            <input type="text" className="form-control" id="nom" placeholder="Enter le nom de l'équipe" 
                            name="nom" value ={nom} onChange={(e)=>SetNom(e.target.value)} required/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="Surnom" className="form-label">le surnom de l'equipe :</label>
                            <input type="text" className="form-control" id="Surnom" placeholder="Enter le surnom de l'équipe" 
                            name="Surnom" value ={surnom} onChange={(e)=>SetSurnom(e.target.value)} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="pays" className="form-label">le pays de l'equipe:</label>
                            <input type="text" className="form-control" id="pays" placeholder="Enter le pays de l'équipe" name="pays" 
                            value ={pays} onChange={(e)=>SetPays(e.target.value)} required/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="championnat" className="form-label">Entrer le championnat dans lequel elle evolue :</label>
                            <select className="form-select mt-3" value ={championnat} onChange={(e)=>SetChampionnat(e.target.value)} >
                                <option selected>--Choisissez un championnat--</option>
                                <option value="Ligue 1">Ligue 1</option>
                                <option value="Premier League">Premier League</option>
                                <option value="Liga BBVA">Liga BBVA</option>
                                <option value="Seria A">Serie A</option>
                            </select>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="continent" className="form-label">Entrer le continent dans lequel evolue l'équipe :</label>
                            <select className="form-select mt-3" value ={continent} onChange={(e)=>SetContinent(e.target.value)}>
                                <option selected>--Choisissez une région--</option>
                                <option value="Europe">Europe</option>
                                <option value="Asie">Asie</option>
                                <option value="Afrique">Afrique</option>
                                <option value="Amérique du Nord">Amérique du Nord</option>
                                <option value="Amérique du Sud">Amérique du Sud</option>
                                <option value="Océanie">Océanie</option>
                            </select>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="logo-team" className="form-label">Enter l'url du logo de la team :</label>
                            <input type="text" className="form-control" id="url_image_match" placeholder="ex: https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_%C3%89quipe_France_Football_2018.svg/1358px-Logo_%C3%89quipe_France_Football_2018.svg.png" 
                            name="logo-team" value ={logoteam} onChange={(e)=>SetLogoTeam(e.target.value)}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Container>
          </div>
        </div>
      );
};

export default AjoutClub;

const Container = styled.div`
h5{
    text-align: center;
}
`;