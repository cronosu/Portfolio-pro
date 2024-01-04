import React from "react";
function Titre({id,titre}) {
  return (
    <div className="titre">
      <div className="trait"></div>
      <h2 id={id}>{titre}</h2>
      <div className="trait"></div>
    </div>

  )
}

export default Titre 
