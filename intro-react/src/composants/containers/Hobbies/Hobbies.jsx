export function Hobbies(props) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-700 mb-2">Hobbies :</h3>
        <ul className="list-disc pl-5">
          {props.hobbies.map((hobby, index) => (
            <li key={index} className="text-blue-500">{hobby}</li>
          ))}
        </ul>
      </div>
    );
}
