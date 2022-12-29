import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface AffichePlayerProps {
  id:number;
  nom: string;
  prenom: string;
  age : number;
  club: string;
  equipe_nationale : string;
}



const AffichePlayer = ({id,nom, prenom, age, club ,equipe_nationale}: AffichePlayerProps) => {

    const handleDelete = (id :number) =>{
      console.log(id);
      const url = `http://localhost:3000/players/${id}`;
  
      try{
        const resp = axios.delete(url);
        console.log("Votre joueur a été supprimé");
        alert("Votre joueur a été supprimé");
        window.location.reload();
      }catch(error){
          console.log("La requête n'a pas été effectué");
          alert(error);
          window.location.reload();
      }

    }

    return(
        <tr>
            <td>{id}</td>
            <td>{nom}</td>
            <td>{prenom}</td>
            <td>{age}</td>
            <td>{club}</td>
            <td>{equipe_nationale}</td>
            <td><Link to={`/Updateplayer/${id}`} className="btn btn-success">Edit</Link></td>
            <td><button className="btn btn-danger" onClick={()=>handleDelete(id)}>Delete</button></td>
         
        </tr>
    )
}

export default AffichePlayer;