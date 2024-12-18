import { FullName } from "../FullName/FullName";
import { Hobbies } from "../Hobbies/Hobbies";
import { useState } from "react";

export function User(props) {
  const [hobbies, setHobbies] = useState(props.hobbies); 
  const [newHobby, setNewHobby] = useState(""); 

  const addHobby = () => {
    if (newHobby.trim() !== "") {
      const newHobbyItem = { id: Date.now(), nom: newHobby };
      setHobbies([...hobbies, newHobbyItem]);
      setNewHobby(""); 
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Profil Utilisateur
      </h2>
      <FullName prenom={props.prenom} nom={props.nom} age={props.age} />
      <div style={{ marginTop: "1em" }}>
        <input
          type="text"
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
          placeholder="Ajoutez un hobby"
          style={{
            padding: "5px",
            marginRight: "0.5em",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={addHobby}
          style={{
            padding: "5px 10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Ajouter
        </button>
      </div>
      {/* Liste des hobbies */}
      <Hobbies hobbies={hobbies} />
    </div>
  );
}
