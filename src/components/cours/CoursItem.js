import React from "react";

function CoursItem({ cours, onEdit, onDelete }) {
  return (
    <li>
      <strong>{cours.titre}</strong> — {cours.description}
      <button onClick={() => onEdit(cours)}  style={{ padding: "10px 10px" }}>✏️</button> - 
      <button onClick={() => onDelete(cours.id)}  style={{ padding: "10px 10px" }}>🗑️</button>
    </li>
  );
}

export default CoursItem;