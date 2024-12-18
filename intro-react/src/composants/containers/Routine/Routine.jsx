import Bouton from "../../ui/Bouton/Bouton";

export function Routine() {
  const handleClick = (action) => {
    alert(`Vous avez choisi : ${action}`);
  };

  return (
    <div>
      <Bouton couleur="blue" gereClique={() => handleClick("Manger")}>
        Manger
      </Bouton>
      <Bouton couleur="green" gereClique={() => handleClick("Dormir")}>
        Dormir
      </Bouton>
      <Bouton couleur="yellow" gereClique={() => handleClick("Étudier")}>
        Étudier
      </Bouton>
    </div>
  );
}
