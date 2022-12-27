import axios from "axios";
import React, {useState } from "react";
import styled from "styled-components";

function AjoutTeam() {
    const url= "http://localhost:3000/teams/"

    const [nom, SetNom] = useState('')
    const [surnom, SetSurnom] = useState('')
    const [pays, SetPays] = useState('')
    const [continent, SetContinent] = useState('')
    const [idfifa, SetIdfifa] = useState('')
    const [logoteam, SetLogoTeam] = useState('')

    const handleSubmit = async(e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        console.log(nom,surnom,pays,continent, idfifa, logoteam)
        try{
            const resp = await axios.post(url, {nom : nom, Surnom:surnom,
            Pays:pays, Continent:continent,
            id_fifa:idfifa, logo_team:logoteam});
            console.log(resp.data);
            console.log("Votre Team a été ajouté");
            alert("Votre Team a été ajouté");
        }catch(error){
            console.log("La requête n'a pas été effectué");
            alert(error);
        }
    }

    return (   
        //Remplissage du composant afficheMatch avec les données récupèrées via l'api
        <div className ="container">
          <div className="AjoutMatch">
            <Container>
                <div className='form_match'>
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
                            <label htmlFor="continent" className="form-label">Entrer le continent ou se situe l'equipe :</label>
                            <input type="text" className="form-control" id="pays" placeholder="Entrer le continent ou se situe l'équipe" name="continent" 
                            value ={continent} onChange={(e)=>SetContinent(e.target.value)} required/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="idfifa" className="form-label">Entrer l'identifiant FIFA de l'equipe: (Max caractère : 4)</label>
                            <input type="text" className="form-control" id="id_team" placeholder="Entrer l'identifiant FIFA de l'équipe ex: FRANCE = FRA" 
                            name="idfifa" maxLength={4}  value ={idfifa} onChange={(e)=>SetIdfifa(e.target.value)} required/>
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

export default AjoutTeam;

const Container = styled.div`
h5{
    text-align: center;
}
`;