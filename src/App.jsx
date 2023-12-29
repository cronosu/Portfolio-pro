import React from "react"
import Navbar from "./components/Navbar"
import Text from "./components/Text"
import Video from "./components/Video"
import Apropos from "./components/APropos"
import Projets from "./page/Projets"
import Dispo from "./components/Dispo"
import Formulaire from "./components/Formulaire"
import MyTech from "./page/MyTech"
import MonParcour from "./components/MonParcour"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Video />
      <Navbar />
      <div className="cadre">
        <Text />
        <Dispo />
        <Apropos />
      </div>
      < MyTech />
      <MonParcour />
      <Projets />
      <Formulaire />
      <Footer />
    </>
  )
}

export default App
