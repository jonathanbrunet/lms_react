import React from "react";

function CategoriesItem({ categories, onEdit, onDelete }) {
  return (
    <li>
      <strong>{categories.nom} </strong>
      <button onClick={() => onEdit(categories)}  style={{ padding: "10px 10px" }}>✏️</button> - 
      <button onClick={() => onDelete(categories.id)}  style={{ padding: "10px 10px" }}>🗑️</button>
    </li>
  );
}

export default CategoriesItem;