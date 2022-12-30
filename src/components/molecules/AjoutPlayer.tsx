import axios from "axios";
import React, {useState } from "react";
import styled from "styled-components";
import SelectTeam from "../atoms/select-team";

function AjoutPlayer() {
    const url= "http://localhost:3000/players/"

    const [nom, SetNom] = useState('')
    const [prenom, SetPrenom] = useState('')
    const [age, setAge] = useState('')
    const [club, setClub] = useState('')
    const [equipe_nationale, setEqNat] = useState('')


    const handleSubmit = async(e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        console.log(nom,prenom,age, club, equipe_nationale)
        try{
            const resp = await axios.post(url, {nom : nom, prenom:prenom,
            age:age, club: club, equipe_nationale : equipe_nationale});
            console.log(resp.data);
            console.log("Votre joueur a été ajouté");
            alert("Votre joueur a été ajouté");
            window.location.reload();
        }catch(error){
            console.log("La requête n'a pas été effectué");
            alert(error);
        }
    }

    return (   
        //Remplissage du composant afficheMatch avec les données récupèrées via l'api
        <div className ="container">
          <div className="AjoutPlayer">
            <Container>
                <div className='form_player'>
                    <form className="Form" onSubmit={handleSubmit}>
                        <u><h5>Formulaire d'Ajout d'un nouveau joueur : </h5></u>
                        <div className="mb-3 mt-3">
                            <label htmlFor="nom" className="form-label">Entrer le nom du joueur :</label>
                            <input type="text" className="form-control" id="nom" placeholder="Entrer le nom du joueur :" 
                            name="nom" value ={nom} onChange={(e)=>SetNom(e.target.value)} required/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="prenom" className="form-label">Enter le prenom du joueur :</label>
                            <input type="text" className="form-control" id="prenom" placeholder="Enter le prenom du joueur :" 
                            name="prenom" value ={prenom} onChange={(e)=>SetPrenom(e.target.value)} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="age" className="form-label">Entrer l'age du joueur :</label>
                            <input type="number" className="form-control" id="age" placeholder="Entrer l'age du joueur :" name="age" 
                            value ={age} onChange={(e)=>setAge(e.target.value)} required/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="club" className="form-label">Entrer le club du joueur :</label>
                                <div className="Select-team">
                                    <select className="form-select" value ={club} onChange={(e)=>setClub(e.target.value)} required>
                                        <SelectTeam  url = "http://localhost:3000/Club/" />
                                    </select>
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="age" className="form-label">Entrer l'équipe nationale du joueur :</label>
                            <div className="Select-team">
                                <select className="form-select" value ={equipe_nationale} onChange={(e)=>setEqNat(e.target.value)} required>
                                    <SelectTeam url = "http://localhost:3000/Equipe_nationale/"/>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Container>
          </div>
        </div>
      );
};

export default AjoutPlayer;

const Container = styled.div`
h5{
    text-align: center;
}
`;