import React from "react"
import { useEffect, useRef } from "react"

function Card(props) {


  const tech = useRef();

  useEffect(() => {
    const options = {
      rootMargin: "-15% 0px",
      threshold: 0
    }
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        tech.current.classList.add("visible");
        observer.unobserve(tech.current)
      }
    }, options)


    observer.observe(tech.current);

  }, [])

  return (
    <div ref={tech} className="card">
      <img
        className="card-ico"
        alt={props.alt}
        src={props.src} />
      <h1>{props.titre}</h1>
    </div>
  )
}

export default Card
