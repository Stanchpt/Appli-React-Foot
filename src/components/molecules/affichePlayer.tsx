
interface AffichePlayerProps {
  id:number;
  nom: string;
  prenom: string;
  age : number;
  equipe : string;
}

const AffichePlayer = ({id,nom, prenom, age, equipe}: AffichePlayerProps) => {
    return(
    <tr>
        <td>{id}</td>
        <td>{nom}</td>
        <td>{prenom}</td>
        <td>{age}</td>
        <td>{equipe}</td>
        <td><a className="btn btn-success">Update</a></td>
        <td><a className="btn btn-danger">Delete</a></td>
    </tr>
    )
}

export default AffichePlayer;