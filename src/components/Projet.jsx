import React, { useState } from "react";
import { useEffect, useRef } from "react"
import Modal from "./Modal";

function Projet(props) {
  const [plus, setPlus] = useState(false)
  const [modalOpen, setmodalOpen] = useState(false)
 
  const projetImg = useRef(null);
  const projet = useRef(null);
  
  useEffect(() => {
    const options = {
      rootMargin: "-20% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting ) {
        projetImg.current.classList.add("active");
        projet.current.classList.add("active");
        observer.unobserve(projetImg.current)
      }
    }, options)
    observer.observe(projetImg.current);
  }, [])

  const openProjet = (event) => {
    if (event.target.classList.contains("close-open")) {
      setmodalOpen(!modalOpen) 
    }
  }

  return (
    <div ref={projet} className="projet" >
      {modalOpen ? (
        <Modal 
        onClick={openProjet}
        title={props.title}
        img={props.images}
        descriptionDetail={props.descriptionDetail}
        tech={props.tech}
        techUse={props.techUse}
        aPropos={props.aPropos}
        />
      ) : (
        null
      )}

      <a target="_blank" href={props.href}> <img className="img-projet" alt={props.alt} ref={projetImg} src={props.src} /> </a>
      <div className="projet-container">
        <h2 className='title' >Nom du projet : {props.title}</h2>
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



      </div>
      <div className="container-descrition">
        <p className="container-descrition-description">{props.description}</p>
        {plus === true ? (
          <div
            className="savoir-plus">
      
          </div>
        )
          :
          (null)}
      </div>
      <div onClick={openProjet} className="btn-savoir-plus close-open">En savoir plus</div>

    </div>

  )
}

export default Projet
