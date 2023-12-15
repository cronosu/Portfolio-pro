import React, { Children, useState } from "react";
import { useEffect, useRef } from "react"

function Projet(props) {
  const [plus, setPlus] = useState(false)
  const projetImg = useRef();
  const projet = useRef();


  useEffect(() => {
    const options = {
      rootMargin: "-20% 0px",
      threshold: 0
    }
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        projetImg.current.classList.add("active");
        projet.current.classList.add("active");
        observer.unobserve(projetImg.current)
      }
    }, options)


    observer.observe(projetImg.current);

  }, [])



  const openProjet = (e) => {
    setPlus(true)
    e.target.parentNode.style.height = "700px";
    e.target.parentNode.querySelector('img').style.top = "20px";


    if (plus === true) {
      setPlus(false)
      e.target.parentNode.style.height = "180px";
      e.target.parentNode.querySelector('img').style.top = "-20px"
    }
  }


  return (
    <div ref={projet} className="projet" >
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


        </div>



      </div>
      <div className="container-descrition">
        <p>{props.description}</p>
        {plus === true ? (
          <div 
          className="savoir-plus">
   "Children"
          </div>
        )
          :
          (null)}
      </div>
      <div onClick={openProjet} className="btn-savoir-plus">En savoir plus</div>

    </div>

  )
}

export default Projet
