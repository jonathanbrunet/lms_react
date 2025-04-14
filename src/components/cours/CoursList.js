import React from "react";
import CoursItem from "./CoursItem";

function CoursList({ cours, onEdit, onDelete }) {
  return (
    <ul>
      {cours.length === 0 && <li>Aucun cours pour le moment.</li>}
      {cours.map((c) => (
        <CoursItem key={c.id} cours={c} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default CoursList;