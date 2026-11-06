import { useState } from "react";
import "./StudentCard.css";

const photoParDefaut =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
      <rect width='100' height='100' fill='#d9d9d9'/>
      <circle cx='50' cy='38' r='18' fill='#fff'/>
      <ellipse cx='50' cy='90' rx='32' ry='28' fill='#fff'/>
    </svg>`
  );

function StudentCard(props) {
  // au départ, les coordonnées sont masquées
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  const ville = props.ville || "Non renseignée";
  const image = props.image || photoParDefaut;

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="card">
      <img src={image} alt="Photo de l'étudiant" className="photo" />
      <h1 className="titre">Fiche étudiant</h1>

      <p><strong>ID :</strong> {props.id}</p>
      <p><strong>Nom & Prénom :</strong> {props.nom} {props.prenom}</p>

      {coordonneesVisibles && (
        <>
          <p><strong>Email :</strong> {props.email}</p>
          <p><strong>Téléphone :</strong> {props.telephone}</p>
        </>
      )}

      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {ville}</p>

      <div className="boutons">
        <button className="btn" onClick={basculerCoordonnees}>
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>

        <a href={`mailto:${props.email}`} className="btn">
          Contacter
        </a>

        <button className="btn" onClick={() => props.onModifier(props.email)}>
          Modifier
        </button>

        <button
          className="btn btn-danger"
          onClick={() => props.onSupprimer(props.email)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;