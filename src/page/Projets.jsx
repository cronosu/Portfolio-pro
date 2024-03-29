import Projet from "../components/Projet"
import Titre from "../components/Titre"

//fetch work !
import { useState, useEffect } from "react"
import React from "react";

function Projets() {
  const [nbrWork, setNbrWork] = useState(3);
  const [Work, setWork] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const response = await fetch('/work.json', {
          headers: {
            'Accept-Encoding': 'gzip, compress, br',
          },
        });

        if (!response.ok) {
          throw new Error('La requête a échoué');
        }
        const data = await response.json();
        setWork(data)
      
      } catch (error) {
        console.error('Une erreur s\'est produite :', error.message);
      }
    };
  
    fetchData();
  }, []);
  


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
        {Work !== null && Work.map((projet, index) => {
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
                techUse={projet.techUse}
                aPropos={projet.aPropos}
                defis={projet.defis}
              />
            );
          }
          return null;
        })}

        <p className="plus " onClick={handleClick}>{btnText}</p>
      </div>

  )
}

export default Projets
