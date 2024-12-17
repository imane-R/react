import { FirstName } from "../FirstName/FirstName";
import { LastName } from "../LastName/LastName";

export function FullName() {
  return (
    <div>
      <h3>Nom complet :</h3>
      <FirstName />
      <LastName />
    </div>
  );
}
