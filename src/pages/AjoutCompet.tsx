import { render } from "@testing-library/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import styled from "styled-components";
function AjoutCompet() {
    const url= "http://localhost:3000/competition"

    const [nom, SetNom] = useState('')
    const [Annee, SetAnnee] = useState('')
    const [nb_equipe, SetNbEquipe] = useState('')
    const [region, SetRegion] = useState('')
    const [url_info, SetUrlInfo] = useState('')
    const [url_image, SetUrlImage] = useState('')

    const handleSubmit = async(e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        console.log(nom, Annee, nb_equipe, region, url_info, url_image)
    }


    return (   
        //Remplissage du composant afficheMatch avec les données récupèrées via l'api
        <div className ="container">
          <div className="AjoutCompet">
            <Container>
                <div className='form_compet'>
                    <form className="Form" onSubmit={handleSubmit}>
                        <u><h5>Formulaire d'Ajout : </h5></u>
                        <div className="mb-3 mt-3">
                            <label htmlFor="nom_compet" className="form-label">Nom de la competition :</label>
                            <input type="text" className="form-control" id="nom_compet" placeholder="Enter le nom de la competition" 
                            name="nom_compet" value ={nom} onChange={(e)=>SetNom(e.target.value)}/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="annee_compet" className="form-label">Année de la competition :</label>
                            <input type="number" className="form-control" id="annee_compet" placeholder="Enter l'année de la competition" 
                            name="annee_compet" value ={Annee} onChange={(e)=>SetAnnee(e.target.value)}/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="nb_equipe" className="form-label">Enter le nombre d'equipe :</label>
                            <input type="number" className="form-control" id="nb_equipe" placeholder="Enter le nombre d'equipe" 
                            name="nb_equipe" value ={nb_equipe} onChange={(e)=>SetNbEquipe(e.target.value)}/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="region_compet" className="form-label">Enter la region de la competition :</label>
                            {/* <input type="text" className="form-control" id="region_compet" placeholder="Enter la region de la competition" name="region_compet"/> */}
                            <select className="form-select mt-3" value ={region} onChange={(e)=>SetRegion(e.target.value)} >
                                <option selected>--Choisissez une région--</option>
                                <option value="World">World</option>
                                <option value="Europe">Europe</option>
                                <option value="Asie">Asie</option>
                                <option value="Afrique">Afrique</option>
                                <option value="Amérique du Nord">Amérique du Nord</option>
                                <option value="Amérique du Sud">Amérique du Sud</option>
                                <option value="Océanie">Océanie</option>
                            </select>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="url_info_compet" className="form-label">Enter l'url d'info de la competition :</label>
                            <input type="text" className="form-control" id="url_info_compet" placeholder="ex: https://fr.wikipedia.org/wiki/Coupe_du_monde_de_football_2022" 
                            name="url_info_compet" value ={url_info} onChange={(e)=>SetUrlInfo(e.target.value)}/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="url_image_compet" className="form-label">Enter l'url de la photo de la competition :</label>
                            <input type="text" className="form-control" id="url_image_compet" placeholder="ex: https://www.topmercato.com/wp-content/uploads/2021/03/coupe-du-monde-2022-mondial-ilustration-qatar-1.jpg" 
                            name="url_image_compet" value ={url_image} onChange={(e)=>SetUrlImage(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Container>
          </div>
        </div>
      );
};

export default AjoutCompet;

const Container = styled.div`
h5{
    text-align: center;
}
`;