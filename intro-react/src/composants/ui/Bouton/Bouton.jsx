export default function Bouton({ couleur }) {
  return (
    <button
      style={{
        backgroundColor: couleur ? couleur : "black",
        color: "white",
      }}
    >
      valider
    </button>
  );
}
