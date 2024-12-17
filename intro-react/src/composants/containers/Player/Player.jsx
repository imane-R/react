export function Player() {
    const score = 75;
    const seuil = 50; 
    const resultat = score > seuil ? "Vainqueur" : "Perdant";
    return (
      <div>
        <h3>Résultat du Joueur</h3>
        <p>
          {resultat} - Score : {score}
        </p>
      </div>
    );
  }
  