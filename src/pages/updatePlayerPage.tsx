import axios from 'axios';
import react, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import styled from 'styled-components';


function PlayerEditPage(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { id }= useParams();
    const [playeredit, setPlayeredit] = useState<any[]>([]);
    const [nom, SetNom] = useState('');
    const [prenom, SetPrenom] = useState('');
    const [age, SetAge] = useState('');
    const [club, SetClub] = useState('');
    const [equipe_nationale, SetEqNat] = useState('');

    const url = `http://localhost:3000/players/${id}`;

    //Select player by id
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setPlayeredit(result);
            //Permet de voir si la fonction Fetch a bien récupèré les données de l'api
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    // console.log(playeredit);

    //Put player by id
    const handleEdit = async(e: { preventDefault: () => void; }) =>{
      e.preventDefault();
        console.log(nom,prenom, age, club, equipe_nationale)
        try{
            const resp = await axios.put(url, {nom : nom, prenom:prenom,
            age:age, club:club, equipe_nationale : equipe_nationale});
            console.log(resp.data);
            console.log("Votre joueur a été modifié");
            alert("Votre joueur a été modifié");
            window.location.reload();
        }catch(error){
            console.log("La requête n'a pas été effectué");
            alert(error);
            window.location.reload();
        }

    }

    return(
        <div className="AfficheCompet">
            {playeredit.map((item) => (
                <Container>
                <div className='container'>
                    <h2><span className="badge bg-secondary">Modifier un joueur</span></h2>
                    <form  className="Form" onSubmit={handleEdit}>
                        <div className="row col-md-12 mt-2 mb-3">
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label className="form-label">Nom</label>
                                    <input type="text" name='nom' className='form-control p-2'
                                    placeholder={item.nom}
                                    onChange={(e)=>SetNom(e.target.value)}required
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label className="form-label">Prénom</label>
                                    <input type="text" name='prenom' className='form-control p-2'
                                    placeholder={item.prenom}
                                    onChange={(e)=>SetPrenom(e.target.value)}required/>
                                </div>
                            </div>
                        </div>
                        <div className="row col-md-12 mt-2 mb-3">
                            <div className="form-group">
                                <label className="form-label">Age</label>
                                <input type="text" name='age' className='form-control p-2'
                                placeholder={item.age}
                                onChange={(e)=>SetAge(e.target.value)}required/>
                            </div>
                        </div>
                        <div className="row col-md-12 mt-2 mb-5">
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label className="form-label">Club</label>
                                    <input type="text" name='club' className='form-control p-2'
                                    placeholder={item.club}
                                    onChange={(e)=>SetClub(e.target.value)}required/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label className="form-label">Equipe Nationale</label>
                                    <input type="text" name='equipe_nationale' className='form-control p-2'
                                    placeholder={item.equipe_nationale}
                                    onChange={(e)=>SetEqNat(e.target.value)}required/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" id="btn-update">Submit</button>
                    </form>
                </div>
            </Container>
            ))}
        </div>
    );
}

export default PlayerEditPage;

const Container = styled.div`
#btn-update{
    display: block;
    margin :auto;
}
`;