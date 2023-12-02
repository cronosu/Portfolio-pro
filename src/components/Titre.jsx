function Titre(props) {
  return (
    <div className="titre">
      <div className="trait"></div>
      <h2 id={props.id}>{props.titre}</h2>
      <div className="trait"></div>
    </div>

  )
}

export default Titre
