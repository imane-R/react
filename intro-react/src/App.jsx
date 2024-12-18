import { Header } from "./composants/containers/Header/Header";
import { Footer } from "./composants/containers/Footer/Footer";
import { User } from "./composants/containers/User/User";
import { Player } from "./composants/containers/Player/Player";
import Bouton from "./composants/ui/Bouton/Bouton";
import { Routine } from "./composants/containers/Routine/Routine";
import Menu from "./composants/containers/Menu/Menu";

function App() {
  const userData = {
    prenom: "Imane",
    nom: "Benamar",
    age: 29,
    hobbies: ["Thai Box", "Danse"],
  };
  function ajoute() {
    alert("ajouter");
  }
  function supprime() {
    alert("supprimer");
  }
  return (
    <div>
      <Header />
      <Bouton couleur={"green"} gereClique={ajoute}>
        <p>Ajouter</p>
      </Bouton>
      <Bouton couleur={"red"} gereClique={supprime}>
        <p>Supprimer</p>
      </Bouton>
      <User
        prenom={userData.prenom}
        nom={userData.nom}
        age={userData.age}
        hobbies={userData.hobbies}
      />
      <Routine />
      <Player />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
