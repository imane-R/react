import { useState } from "react";
import Bouton from "../../ui/Bouton/Bouton";

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="p-4 flex flex-col items-center">
      <Bouton gereClique={toggleMenu} couleur={isVisible ? "red" : "green"}>
        {isVisible ? "Hide" : "Show"}
      </Bouton>
      {isVisible && (
        <div className="bg-gray-200 p-4 rounded shadow-md mt-4 w-64">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Menu Secret</h3>
          <ul className="list-disc pl-4 text-gray-700">
            <li>Faire du sport 💪🏼</li>
            <li>ménage🧹😢 </li>
          </ul>
        </div>
      )}
    </div>
  );
}
