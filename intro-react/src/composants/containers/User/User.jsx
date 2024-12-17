import { FullName } from "../FullName/FullName";
import { Hobbies } from "../Hobbies/Hobbies";

export function User() {
  return (
    <div>
      <h2>Profil Utilisateur</h2>
      <FullName />
      <Hobbies />
    </div>
  );
}
