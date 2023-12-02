import NavButton from "./NavButton";

function Navbar() {

  return (
    <nav>
      <ul>
        <li><NavButton 
        id="#root"
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
