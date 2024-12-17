export function Hobbies() {
  const passions = ["Danse", "Lecture", "Escalade"];

  return (
    <div>
      <h3>Passions :</h3>
      <ul>
        {passions.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
