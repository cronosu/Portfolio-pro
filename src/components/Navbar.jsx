import NavButton from "./NavButton";
import React from "react"

function Navbar() {

  return (
    <nav>
      <div className="container-icone-reseau">
        <a target="_blank" href="https://drive.google.com/file/d/1sy3exjkVA7heO8x7VEKDJYQwdE377SVP/view?usp=sharing">
          <img alt="icone-cv" className="icone-reseau icone-cv" src="./approuve.png"></img>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/sylvain-stoclet/">
          <img alt="icone-linkedin" className="icone-reseau" src="./linkedin.png"></img>
        </a>
        <a target="_blank" href="https://github.com/cronosu">
          <img alt="icone-github" className="icone-reseau" src="./github.png"></img>
        </a>
      </div>

      <ul>
        <li>
          <NavButton
            label="A propos"
            id="#presentation"
            content="A propos"
          />
        </li>
        <li>
          <NavButton
            label="Mes projets"
            id="#projets"
            content="Mes projets"
          />
        </li>
        <li>
          <NavButton
            label="Me contacter"
            content="Me contacter"
            id="#formulaire"
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
