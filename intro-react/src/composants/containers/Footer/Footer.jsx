import Bouton from "../../ui/Bouton/Bouton";

export function Footer() {
  function contact() {
    alert("contact");
  }
  return (
    <footer>
      <h3>Merci de votre visite</h3>
      <p> Mon application React</p>
      <Bouton couleur="blue" gereClique={contact}>
        <p>Contactez-nous</p>
      </Bouton>
    </footer>
  );
}
