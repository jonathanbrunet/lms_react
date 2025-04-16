import React from "react";
import CategoriesItem from "./CategoriesItem";

function CategoriesList({ categories, onEdit, onDelete }) {
  return (
    <ul>
 {categories.length === 0 && <li>Aucune catégories pour le moment.</li>}
      {categories.map((c) => (
        <CategoriesItem key={c.id} categories={c} onEdit={onEdit} onDelete={onDelete} />
      ))}  </ul>
  );
}

export default CategoriesList;