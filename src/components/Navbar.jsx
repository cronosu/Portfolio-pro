import NavButton from "./NavButton";
import React from "react"

function Navbar() {

  return (
    <nav>
      <div className="container-icone-reseau">
        <a target="_blank" href="https://www.linkedin.com/in/sylvain-stoclet/">
          <img className="icone-reseau" src="./linkedin.png"></img>
        </a>
        <a target="_blank" href="https://github.com/cronosu">
          <img className="icone-reseau" src="./github.png"></img>
        </a>
      </div>
      
      <ul>


        <li><NavButton
          id="#presentation"
          content="A propos" /></li>
        <li><NavButton
          id="#projets"
          content="Mes projets" /></li>
        <li><NavButton content="Me contacter"
          id="#formulaire"
        /></li>
      </ul>
    </nav>
  )
}

export default Navbar;
