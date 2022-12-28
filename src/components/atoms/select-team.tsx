import React, { useEffect, useState } from "react";

interface SelectTeamProps{
  url:string ;
}

const SelectTeam = ({url}: SelectTeamProps) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState<any[]>([]);

    console.log({url});
  
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItem(result);
            //Permet de voir si la fonction Fetch a bien récupèré les données de l'api
            console.log(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    return (   
      <>
      <option selected>--Choisissez une équipe--</option>
      { 
        item.map((item) => (
          <option value={item.nom}>{item.nom}</option>
        ))
      }
      </>
    );
  };

  export default SelectTeam;