import React, { useEffect, useState } from "react";

function CategoriesForm({ onSubmit, categories }) {
  const [nom, setNom] = useState("");

  useEffect(() => {
    if (categories) {
      setNom(categories.nom);
    } else {
      setNom("");
    }
  }, [categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom) return;
    onSubmit({ nom });
    setNom("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nom de la catégorie"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: 8,
          marginBottom: 10,
        }}
      />
      <br />
      <button type="submit" style={{ padding: "10px 20px" }}>
        {categories ? "Modifier" : "Ajouter"} la catégorie</button>
    </form>
  );
}

export default CategoriesForm;