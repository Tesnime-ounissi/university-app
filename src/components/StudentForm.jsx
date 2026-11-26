import { useState } from "react";
import "./StudentForm.css";

const FILIERES = ["GLSI", "DSI", "RSI"];

function StudentForm({
  onAjouterEtudiant,
  etudiantAModifier,
  onModifierEtudiant,
  onAnnuler,
}) {
  // Si on modifie un étudiant, on part de ses valeurs, sinon on part de champs vides
  const initial = etudiantAModifier || {};

  // 1. Un state par champ
  const [nom, setNom] = useState(initial.nom || "");
  const [prenom, setPrenom] = useState(initial.prenom || "");
  const [email, setEmail] = useState(initial.email || "");
  const [telephone, setTelephone] = useState(initial.telephone || "");
  const [filiere, setFiliere] = useState(initial.filiere || "");
  const [anneeEtude, setAnneeEtude] = useState(initial.anneeEtude || "");
  const [groupe, setGroupe] = useState(initial.groupe || "");
  const [ville, setVille] = useState(initial.ville || "");
  const [image, setImage] = useState(initial.image || "");

  // 2. Soumission du formulaire
  function handleSubmit(e) {
    e.preventDefault(); // empêche le rechargement de la page

    const donnees = {
      nom: nom,
      prenom: prenom,
      email: email,
      telephone: telephone,
      filiere: filiere,
      anneeEtude: anneeEtude,
      groupe: groupe,
      ville: ville,
      image: image,
    };

    if (etudiantAModifier) {
      // Mode modification : on garde l'identifiant de l'étudiant
      const etudiantModifie = { ...donnees, id: etudiantAModifier.id };
      console.log("Étudiant modifié :", etudiantModifie);
      onModifierEtudiant(etudiantModifie);
    } else {
      // Mode ajout
      console.log("Nouvel étudiant ajouté :", donnees);
      onAjouterEtudiant(donnees);

      // vide le formulaire après l'ajout
      setNom("");
      setPrenom("");
      setEmail("");
      setTelephone("");
      setFiliere("");
      setAnneeEtude("");
      setGroupe("");
      setVille("");
      setImage("");
      e.target.reset(); // vide aussi le champ image
    }
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>{etudiantAModifier ? "Modifier un étudiant" : "Ajouter un étudiant"}</h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Téléphone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          name="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
          required
        >
          <option value="">Choisir une filière</option>
          {FILIERES.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
          {/* Permet d'afficher une filière existante qui n'est pas dans la liste */}
          {filiere && !FILIERES.includes(filiere) && (
            <option value={filiere}>{filiere}</option>
          )}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="anneeEtude">Année d'étude :</label>
        <input
          type="text"
          id="anneeEtude"
          name="anneeEtude"
          placeholder="Ex : 2ème année"
          value={anneeEtude}
          onChange={(e) => setAnneeEtude(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text"
          id="groupe"
          name="groupe"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          name="ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image :</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => {
            const fichier = e.target.files[0]; // récupère l'image choisie
            if (fichier) {
              setImage(URL.createObjectURL(fichier)); // URL temporaire stockée dans le state
            }
          }}
        />
        {/* Aperçu de l'image actuelle ou choisie */}
        {image && (
          <img
            src={image}
            alt="Aperçu"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "50%",
              margin: "10px auto 0",
            }}
          />
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button type="submit" className="btn-submit">
          {etudiantAModifier ? "Enregistrer" : "Ajouter"}
        </button>

        {etudiantAModifier && (
          <button type="button" className="btn-submit" onClick={onAnnuler}>
            Annuler
          </button>
        )}
      </div>
    </form>
  );
}

export default StudentForm;
