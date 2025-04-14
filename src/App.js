import React, { useEffect, useState } from "react";
import axios from "axios";
import CoursForm from "./components/cours/CoursForm";
import CoursList from "./components/cours/CoursList";

const API_URL = "http://127.0.0.1/lms_react/api/cours/";

function App() {
  const [cours, setCours] = useState([]);
  const [editCours, setEditCours] = useState(null);

  const fetchCours = async () => {
    const res = await axios.get(API_URL + "get.php");
    setCours(res.data);
  };

  const handleCreateOrUpdate = async (data) => {
    if (editCours) {
      await axios.put(API_URL + "update.php", { ...data, id: editCours.id });
    } else {
      await axios.post(API_URL + "create.php", data);
    }
    setEditCours(null);
    fetchCours();
  };

  const handleDelete = async (id) => {
    await axios.delete(API_URL + "delete.php", { data: { id } });
    fetchCours();
  };

  const handleEdit = (cours) => {
    setEditCours(cours);
  };

  useEffect(() => {
    fetchCours();
  }, []);

  return (
    <div style={{ padding: 40, maxWidth: 600, margin: "auto" }}>
      <h1>Listes des cours 📚</h1>
      <div style={{ marginBottom: 30 }}>
        <CoursForm onSubmit={handleCreateOrUpdate} cours={editCours} />
        <CoursList cours={cours} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;