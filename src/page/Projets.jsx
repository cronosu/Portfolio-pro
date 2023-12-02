import Projet from "../components/Projet"
import Titre from "../components/Titre"



function Projets() {


  return (
    <div className="projets">
      <Titre
        titre="Projets Sélectionné"
        id="projets"

      />
      <Projet
        title="Kasa"
        alt="Projet Kasa"
        src="/Kasa-min.webp"
        href="https://inspiring-duckanoo-eb1bd9.netlify.app/"
        description="Site web de location d'appartement "
        tech={['react', 'sass']}
      />
      <Projet
        title="Mon Vieux Grimoire"
        alt="Projet Mon Vieux Grimoire"
        src="/Grimoire-min.webp"
        href="https://github.com/cronosu/projet7"
        description="Site web de notation de livres"
        tech={['react', 'express', 'mongodb', 'nodejs', 'api']}
      />
      <Projet
        title="Sopphie Bluel"
        alt="Projet Sopphie Bluel"
        src="/Sophie-min.webp"
        href="https://cronosu.github.io/projet-3_site-de-Sophie-Bluel/"
        description="Site web d'une architecte d'intérieur'"
        tech={['api']}
      />
      <p>Afficher plus</p>

    </div>

  )
}

export default Projets
