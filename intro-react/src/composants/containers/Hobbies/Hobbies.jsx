export function Hobbies() {
    const passions = [
      {
        id: "RRGRB",
        nom: "Danse",
      },
      {
        id: "fdfggf",
        nom: "Box",
      },
      {
        id: "fdfgtr",
        nom: "Escalade",
      },
    ];
  
    return (
      <div>
        <h3>Passions :</h3>
        <ul>
          {passions.map((hobby) => (
            <li
              key={hobby.id} // Correction ici
              style={{
                padding: "10px",
                border: "1px solid white",
                margin: "4px",
              }}
            >
              {hobby.nom}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  