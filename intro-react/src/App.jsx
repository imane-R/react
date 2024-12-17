import { Header } from "./composants/containers/Header/Header";
import { Footer } from "./composants/containers/Footer/Footer";
import { User } from "./composants/containers/User/User";
import { Player } from "./composants/containers/Player/Player";

function App() {
  return (
    <div>
      <Header />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
