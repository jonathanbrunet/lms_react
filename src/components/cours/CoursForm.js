import React, { useEffect, useState } from "react";

function CoursForm({ onSubmit, cours }) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (cours) {
      setTitre(cours.titre);
      setDescription(cours.description);
    } else {
      setTitre("");
      setDescription("");
    }
  }, [cours]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titre || !description) return;
    onSubmit({ titre, description });
    setTitre("");
    setDescription("");
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
      <button type="submit" style={{ padding: "10px 20px" }}>
        {cours ? "Modifier" : "Ajouter"} le cours</button>
    </form>
  );
}

export default CoursForm;