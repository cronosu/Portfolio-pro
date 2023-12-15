import Projet from "../components/Projet"
import Titre from "../components/Titre"
import work from "../../work.json"
import { useState } from "react"
import React from "react";


function Projets() {
  const [nbrWork, setNbrWork] = useState(3);

  const handleClick = () => {
    setNbrWork(nbrWork === 3 ? 50 : 3);
  };

  const btnText = nbrWork === 3 ? 'Afficher plus' : 'Afficher moins';

  return (
    <div className="projets">
      <Titre
        titre="Projets Sélectionné"
        id="projets"

      />
      {work.map((projet, index) => {
        if (index < nbrWork) {
          return (
            <Projet
              key={index}
              title={projet.titre}
              alt={projet.alt}
              src={projet.image}
              href={projet.href}
              description={projet.description}
              tech={projet.tech}
            />
          );
        }
        return null; 
      })}

      <p className="plus" onClick={handleClick}>{btnText}</p>

    </div>

  )
}

export default Projets
