import React, { useEffect, useState } from "react";
import axios from "axios";

const API_categories = "http://127.0.0.1/lms_react/api/categories/";

function CoursForm({ onSubmit, cours }) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [categorieId, setCategorieId] = useState("");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Chargement des catégories
    axios.get(API_categories + "get.php")
      .then(res => {
        const data = res.data.categories || res.data;
        setCategories(data);
      })
      .catch(err => {
        console.error("Erreur lors du chargement des catégories", err);
        setCategories([]);
      });
  }, []);

  useEffect(() => {
    if (cours) {
      setTitre(cours.titre);
      setDescription(cours.description);
      setCategorieId(cours.categorie_id || ""); // si éditable
    } else {
      setTitre("");
      setDescription("");
      setCategorieId("");
    }
  }, [cours]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titre || !description || !categorieId) return;
    onSubmit({ titre, description, categorie_id: categorieId });
    setTitre("");
    setDescription("");
    setCategorieId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: 8,
          marginBottom: 10,
        }}
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: 8,
          height: 100,
          marginBottom: 10,
        }}
      />
      <br />
      <label htmlFor="categorie">Catégorie :</label>
      <select
        id="categorie"
        value={categorieId}
        onChange={(e) => setCategorieId(e.target.value)}
        style={{ display: "block", width: "100%", padding: 8, marginBottom: 10 }}
      >
        <option value="">-- Sélectionner une catégorie --</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.nom}
          </option>
        ))}
      </select>
      <br />
      <button type="submit" style={{ padding: "10px 20px" }}>
        {cours ? "Modifier" : "Ajouter"} le cours</button>
    </form>
  );
}

export default CoursForm;