import { Header } from "./composants/containers/Header/Header";
import { Footer } from "./composants/containers/Footer/Footer";
import { User } from "./composants/containers/User/User";
import { Player } from "./composants/containers/Player/Player";

function App() {
  const userData = {
    prenom: "Imane",
    nom: "Benamar",
    age: 29,
    hobbies: ["Thai Box", "Danse"],
  };
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <User
          prenom={userData.prenom}
          nom={userData.nom}
          age={userData.age}
          hobbies={userData.hobbies}
        />
      </div>
      <Player />
      <Footer />
    </div>
  );
}

export default App;
