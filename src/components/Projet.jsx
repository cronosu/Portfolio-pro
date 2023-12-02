import { useEffect, useRef } from "react"

function Projet(props) {
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

  return (
    <div ref={projet} className="projet" >
      <a href={props.href}> <img className="img-projet" alt={props.alt} ref={projetImg} src={props.src} /> </a>
      <div className="projet-container">
        <h2 className='title' >Nom du projet : {props.title}</h2>
        <div className="projet-container-icone">

          {props.tech && props.tech.includes("react") && (
            <img className="icone ico-react" src="../../src/assets/icons8-react-a-javascript-library-for-building-user-interfaces-96.png" alt="React Icon" />
          )}
          {props.tech && props.tech.includes("sass") && (
            <img className="icone ico-sass" src="../../src/assets/icons8-toupet-96.png" alt="Sass Icon" />
          )}
          {props.tech && props.tech.includes("nodejs") && (
            <img className="icone ico-nodejs" src="../../src/assets/icon-nodejs.png" alt="Nodejs Icon" />
          )}
          {props.tech && props.tech.includes("api") && (
            <img className="icone ico-api" src="../../src/assets/icon-api.png" alt="Api Icon" />
          )}
          {props.tech && props.tech.includes("mongodb") && (
            <img className="icone ico-mongo" src="../../src/assets/icon-mongo.png" alt="MongoDB Icon" />
          )}
          {props.tech && props.tech.includes("express") && (
            <img className="icone ico-express" src="../../src/assets/icon-express.png" alt="Express Icon" />
          )}


        </div>



      </div>
      <p>{props.description}</p>
   
    </div>

  )
}

export default Projet