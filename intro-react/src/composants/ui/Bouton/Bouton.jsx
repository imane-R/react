export default function Bouton({ couleur }) {
  return (
    <button
      className="rounded"
      style={{
        backgroundColor: couleur ? couleur : "black",
        color: "white",
      }}
    >
      valider
    </button>
  );
}
