import Projet from "../components/Projet"
import Titre from "../components/Titre"
import work from "../../work.json"
import { createContext, useState,useContext } from "react"
import React from "react";
import Modal from "../components/Modal"

export const ProjectInfos =createContext(work);

function Projets() {
  const [nbrWork, setNbrWork] = useState(3);

  const handleClick = () => {
    setNbrWork(nbrWork === 3 ? 50 : 3);
  };

  const btnText = nbrWork === 3 ? 'Afficher plus' : 'Afficher moins';

  return (
    <ProjectInfos.Provider  value={work}>
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
              images={projet.images}
              href={projet.href}
              description={projet.description}
              descriptionDetail={projet.descriptionDetail}
              tech={projet.tech}
              aPropos={projet.aPropos}

            />
          );
        }
        return null; 
      })}

      <p className="plus" onClick={handleClick}>{btnText}</p>
    </div>
  </ProjectInfos.Provider>
  )
}

export default Projets
