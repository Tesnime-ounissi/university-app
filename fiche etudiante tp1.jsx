
import  './App.css'
import Image from "./assets/tessa.jpeg";
const etudiant = {
  nom: "Ounissi",
  prenom: "Tesnime",
  telephone: "99547121",
  mail: "ounissi.tesnime2@gmail.com",
  filiere: "Génie logiciel et système d'information",
  annee: "2ème année",
  groupe: "GLSI 2D",
  ville: "Nabeul",
  image: Image,
};

function App() {
  return (
    <div className="page">
      <div className="card">
        <img src={etudiant.image} alt="profil" className="photo" />
        <h1>Fiche étudiant</h1>

        <p><strong>Nom & Prénom :</strong> {etudiant.nom} {etudiant.prenom}</p>
        <p><strong>Email :</strong> {etudiant.mail}</p>
        <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
        <p><strong>Filière :</strong> {etudiant.filiere}</p>
        <p><strong>Année d'étude :</strong> {etudiant.annee}</p>
        <p><strong>Groupe :</strong> {etudiant.groupe}</p>
        <p><strong>Ville :</strong> {etudiant.ville}</p>

        <a href={`mailto:${etudiant.mail}`} className="btn">
          Contacter
        </a>
      </div>
    </div>
  );
}

export default App;