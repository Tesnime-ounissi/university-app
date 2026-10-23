import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import studentImage from "./assets/tessa.jpeg";
import student from "./assets/zeinouba.png";
import Image from "./assets/meryouma.png";

const etudiants = [
  {
    prenom: "Tesnime",
    nom: "Ounissi",
    email: "ounissi.tesnime2@gmail.com",
    telephone: "99547121",
    filiere: "Génie logiciel et système d'information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2D",
    ville: "Nabeul",
    image: studentImage,
  },
  {
    prenom: "Zeyneb",
    nom: "Ben cheikh",
    email: "zaynebbencheikh98@gmail.com",
    telephone: "95020064",
    filiere: "Génie logiciel t système d'information",
    anneeEtude: "2ème année",
    groupe: "GLSID",
    ville: "Mahdia",
    image: student,
  },
  {
    prenom: "Meriem",
    nom: "Rhouma",
    email: "rhmmariem@gmail.com",
    telephone: "40133061",
    filiere: "Génie logiciel et système d'information",
    anneeEtude: "2ème année",
    groupe: "GLSID",
    ville: "Mahdia",
    image: Image,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="container">
        {etudiants.map((etudiant) => (
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
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;