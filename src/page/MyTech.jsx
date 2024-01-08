import { useEffect, useRef } from "react";
import Card from "../components/Card"
import Titre from "../components/Titre"
import React from "react";

function Apropos() {

  return (


    <div  className="container-card-titre" >
      <Titre 
        titre="Tech Utilisés"
        id="Tech"
      />
      <div className="card-container">
        <Card
          alt="Logo JavaScript"
          titre="JavaScript"
          src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
        />
        <Card
          alt="Logo React"
          titre="React"
          src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
        />
        <Card
          alt="Logo TypeScript"
          titre="TypeScript"
          src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
        />
        <Card
          alt="Logo NodeJs"
          titre="NodeJs"
          src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
        />
        <Card
          alt="Logo Express"
          titre="Express"
          src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
        />
        <Card
          alt="Logo Sass"
          titre="Sass"
          src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png"
        />
        <Card
          alt="Logo MongoDB"
          titre="MongoDB"
          src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
        />
         <Card
          alt="Logo Git"
          titre="Git"
          src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
        />
           <Card
          alt="Logo GitHub"
          titre="GitHub"
          src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
        />
         <Card
          alt="Logo Figma"
          titre="Figma"
          src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png"
        />
            <Card
          alt="Logo Vite"
          titre="Vite"
          src="https://github.com/marwin1991/profile-technology-icons/assets/62091613/b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35"
        />
        
        </div>
    </div>


  )
}

export default Apropos
