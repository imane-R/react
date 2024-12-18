export default function Bouton({ couleur,children, gereClique }) {
  return (
    <button
    onClick={gereClique}
      className="rounded"
      style={{
        backgroundColor: couleur ? couleur : "black",
        color: "white",
      }}
    >
      {children}
    </button>
  );
}
