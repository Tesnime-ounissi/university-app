import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import studentImage from "./assets/tessa.jpeg";
import student from "./assets/zeinouba.jpeg";
import Image from "./assets/meryouma.jpeg";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Tesnime",
      nom: "Ounissi",
      email: "ounissi.tesnime2@gmail.com",
      telephone: "99547121",
      filiere: "Génie logiciel et système d'information",
      anneeEtude: "2ème année",
      groupe: "GLSI D2",
      ville: "Nabeul",
      image: studentImage,
    },
    {
      prenom: "Zeineb",
      nom: "Ben Cheikh",
      email: "zeineb.bencheikh@gmail.com",
      telephone: "99887766",
      filiere: "Génie logiciel et système d'information",
      anneeEtude: "2ème année",
      groupe: "GLSI D1",
      ville: "Mahdia",
      image: student,
    },
    {
      prenom: "Meryem",
      nom: "Rhouma",
      email: "meryem.rhouma@gmail.com",
      telephone: "99112233",
      filiere: "Génie logiciel et système d'information",
      anneeEtude: "2ème année",
      groupe: "GLSI D2",
      ville: "Mahdia",
      image:Image,
    },
  ]);

  const [filtre, setFiltre] = useState("");

  // Ajouter un étudiant
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      prenom: "Yassine",
      nom: "Ben Salem",
      email: `yassine.bensalem${Date.now()}@gmail.com`,
      telephone: "+216 44 444 444",
      filiere: "Génie logiciel et système d'information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sfax",
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  // Supprimer un étudiant
  function supprimerEtudiant(email) {
    setEtudiants(etudiants.filter((etudiant) => etudiant.email !== email));
  }

  // Modifier le prénom d'un étudiant
  function modifierPrenom(email) {
    const nouveauPrenom = prompt("Nouveau prénom :");
    if (nouveauPrenom) {
      setEtudiants(
        etudiants.map((etudiant) =>
          etudiant.email === email
            ? { ...etudiant, prenom: nouveauPrenom }
            : etudiant
        )
      );
    }
  }

  // Filtrer par filière
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Navbar />

      <div className="actions">
        <button className="btn-ajout" onClick={ajouterEtudiant}>
          + Ajouter un étudiant
        </button>
        <input
          className="recherche"
          type="text"
          placeholder="Filtrer par filière..."
          value={filtre}
          onChange={(event) => setFiltre(event.target.value)}
        />
      </div>

      <div className="container">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierPrenom}
          />
        ))}

        {etudiantsFiltres.length === 0 && (
          <p className="vide">Aucun étudiant trouvé.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;