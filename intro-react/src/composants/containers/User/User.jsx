import { FullName } from "../FullName/FullName";
import { Hobbies } from "../Hobbies/Hobbies";

export function User(props) {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Profil Utilisateur
      </h2>
      <FullName prenom={props.prenom} nom={props.nom} age={props.age} />
      <Hobbies hobbies={props.hobbies} />
    </div>
  );
}
