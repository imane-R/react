import { FirstName } from "../FirstName/FirstName";
import { LastName } from "../LastName/LastName";

export function FullName(props) {
  return (
    <div className="bg-gray100 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold text-gray-700 mb-2">Nom complet :</h3>
      <FirstName prenom={props.prenom}/>
      <LastName nom={props.nom}/>
      <p className="text-gray-600 mt-2">Âge : {props.age}</p>
    </div>
  );
}

