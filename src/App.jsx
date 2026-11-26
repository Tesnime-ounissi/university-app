import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import StudentForm from "./components/StudentForm.jsx";
import Footer from "./components/Footer.jsx";
import tesnimeImage from "./assets/tessa.jpeg";
import zeinebImage from "./assets/zeinouba.jpeg";
import meryemImage from "./assets/meryouma.jpeg";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "Tesnime",
      nom: "Ounissi",
      email: "ounissi.tesnime2@gmail.com",
      telephone: "99547121",
      filiere: "Génie logiciel et système d'information",
      anneeEtude: "2ème année",
      groupe: "GLSI D2",
      ville: "Nabeul",
      image: tesnimeImage,
    },
    {
      id: 2,
      prenom: "Zeineb",
      nom: "Ben Cheikh",
      email: "zeineb.bencheikh@gmail.com",
      telephone: "99887766",
      filiere: "Génie logiciel et système d'information",
      anneeEtude: "2ème année",
      groupe: "GLSI D1",
      ville: "Mahdia",
      image: zeinebImage,
    },
    {
      id: 3,
      prenom: "Meryem",
      nom: "Rhouma",
      email: "meryem.rhouma@gmail.com",
      telephone: "99112233",
      filiere: "Génie logiciel et système d'information",
      anneeEtude: "2ème année",
      groupe: "GLSI D2",
      ville: "Mahdia",
      image: meryemImage,
    },
  ]);

  const [filtre, setFiltre] = useState("");

  // Étudiant en cours de modification (null = on est en mode ajout)
  const [etudiantAModifier, setEtudiantAModifier] = useState(null);

  // Ajouter un étudiant (reçoit les données du formulaire)
  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(),
    };

    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
  }

  // Supprimer un étudiant
  function supprimerEtudiant(email) {
    setEtudiants(etudiants.filter((etudiant) => etudiant.email !== email));

    // si on supprime l'étudiant en cours de modification, on annule la modification
    if (etudiantAModifier && etudiantAModifier.email === email) {
      setEtudiantAModifier(null);
    }
  }

  // Clic sur "Modifier" dans une carte : on charge l'étudiant dans le formulaire
  function commencerModification(valeur) {
    const etudiant = etudiants.find(
      (e) => e.email === valeur || e.id === valeur
    );

    if (etudiant) {
      setEtudiantAModifier(etudiant);
      window.scrollTo({ top: 0, behavior: "smooth" }); // remonte vers le formulaire
    }
  }

  // Enregistrer les modifications faites dans le formulaire
  function modifierEtudiant(etudiantModifie) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.map((etudiant) =>
        etudiant.id === etudiantModifie.id ? etudiantModifie : etudiant
      )
    );

    setEtudiantAModifier(null); // retour en mode ajout
  }

  // Annuler la modification
  function annulerModification() {
    setEtudiantAModifier(null);
  }

  // Filtrer par filière
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Navbar />

      {/* key : le formulaire est recréé quand on change d'étudiant à modifier */}
      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
        onAjouterEtudiant={ajouterEtudiant}
        etudiantAModifier={etudiantAModifier}
        onModifierEtudiant={modifierEtudiant}
        onAnnuler={annulerModification}
      />

      <div className="actions">
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
            key={etudiant.id}
            id={etudiant.id}
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
            onModifier={commencerModification}
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
