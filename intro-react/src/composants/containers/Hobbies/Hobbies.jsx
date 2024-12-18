import PropTypes from "prop-types";

export function Hobbies({ hobbies }) {
  
  return (
    <ul className="mt-4">
    {hobbies.map((hobby) => (
      <li
        key={hobby.id}
        className="p-2 my-1 border border-gray-300 rounded-md text-gray-700"
      >
        {hobby.nom}
      </li>
    ))}
  </ul>
  );
}

