import React from "react"
import Navbar from "./components/Navbar"
import Text from "./components/Text"
import Video from "./components/Video"
import Apropos from "./components/APropos"
import Projets from "./page/Projets"
import Dispo from "./components/Dispo"
import Formulaire from "./components/Formulaire"

function App() {
  return (
    <>
     <Video/>
      <Navbar />
      <div className="cadre">
        <Text /> 
        <Dispo/>
        <div className="containerAPropos">
        <Apropos/>
     
        </div>
      </div>

      <Projets/>
      <Formulaire/>
    </>
  )
}

export default App
