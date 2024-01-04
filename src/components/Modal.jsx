import React from 'react';
import { useState } from "react"

function Modal(props) {
  const [Onglet, setOnglet] = useState(1);
  const [imgModal, setImgModal] = useState('images-modal');

  const openCity = (numOnglet) => {
    setOnglet(numOnglet);
  }
  const modalImg = (e) => {
    e.target.parentNode.classList.toggle('images-modal-visible');
    
  // setImgModal(prevModal => prevModal === 'images-modal' ? 'images-modal-visible' : 'images-modal');
  };

  return (
    <div  onClick={props.onClick} className="w3-modal close-open" id="id01">
      <div className="w3-modal-content w3-card-4 w3-animate-zoom">
        <header className="w3-container w3-blue">
          <span
            onClick={props.onClick}
            className="close-x close-open"
          >&times;</span>
          <h2>{props.title}</h2>
        </header>

        <div className="w3-bar w3-border-bottom">
          <button
            className={`tablink w3-bar-item w3-button ${Onglet === 1 ? 'w3-red' : 'w3-grey'}`}
            onClick={() => openCity(1)}
          >Description</button>
          <button
            className={`tablink w3-bar-item w3-button ${Onglet === 2 ? 'w3-red' : 'w3-grey'}`}
            onClick={() => openCity(2)}
          >Tech utilisé</button>
          <button
            className={`tablink w3-bar-item w3-button ${Onglet === 3 ? 'w3-red' : 'w3-grey'}`}
            onClick={() => openCity(3)}
          >A propos</button>
          <button
            className={`tablink w3-bar-item w3-button ${Onglet === 4 ? 'w3-red' : 'w3-grey'}`}
            onClick={() => openCity(4)}
          >Image</button>
          <button
            className={`tablink w3-bar-item w3-button ${Onglet === 5 ? 'w3-red' : 'w3-grey'}`}
            onClick={() => openCity(5)}
          >Defis</button>
        </div>

        {Onglet === 1 && (
          <div className="w3-container city onglet ">

            <p>{props.descriptionDetail}</p>
          </div>
        )}

        {Onglet === 2 && (
          <div className="w3-container city onglet ">
            <div className="projet-container-icone">

              {props.tech && props.tech.includes("react") && (
                <img className="icone ico-react" src="/icons8-react-a-javascript-library-for-building-user-interfaces-96.png" alt="React Icon" />
              )}
              {props.tech && props.tech.includes("sass") && (
                <img className="icone ico-sass" src="/icons8-toupet-96.png" alt="Sass Icon" />
              )}
              {props.tech && props.tech.includes("nodejs") && (
                <img className="icone ico-nodejs" src="/icon-nodejs.png" alt="Nodejs Icon" />
              )}
              {props.tech && props.tech.includes("api") && (
                <img className="icone ico-api" src="/icon-api.png" alt="Api Icon" />
              )}
              {props.tech && props.tech.includes("mongodb") && (
                <img className="icone ico-mongo" src="/icon-mongo.png" alt="MongoDB Icon" />
              )}
              {props.tech && props.tech.includes("express") && (
                <img className="icone ico-express" src="/icon-express.png" alt="Express Icon" />
              )}
              {props.tech && props.tech.includes("vite") && (
                <img className="icone ico-vite" src="https://github.com/marwin1991/profile-technology-icons/assets/62091613/b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35" alt="Vite Icon" />
              )}
              {props.tech && props.tech.includes("figma") && (
                <img className="icone ico-figma" src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma Icon" />
              )}
              {props.tech && props.tech.includes("javascript") && (
                <img className="icone ico-js" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="Js Icon" />
              )}

            </div>
            <p>{props.techUse}</p>
          </div>
        )}

        {Onglet === 3 && (
          <div className="w3-container city onglet ">

            <p>{props.aPropos}</p><br />
          </div>
        )}

        {Onglet === 4 && (
          <div className="w3-container city">
            <div className="images">
              {props.img.map((e, index) => (
                <div className="images-container" key={`image_${index}`}>
                  <img onClick={modalImg} src={e} alt={`Image ${index+1}`} />

                  <div onClick={modalImg} className={imgModal}>
                    <img src={e} alt={`Image ${index+1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        )}
          {Onglet === 5 && (
          <div className="w3-container city onglet ">

            <p>{props.defis}</p><br />
          </div>
        )}

        <div className="light-grey">

        </div>
      </div>
    </div>
  );
}


export default Modal;
