import React, { useEffect, useState } from "react";
import axios from "axios";

// composants cours 
import CoursForm from "./components/cours/CoursForm";
import CoursList from "./components/cours/CoursList";

// composants categories
import CategoriesForm from "./components/categories/CategoriesForm";
import CategoriesList from "./components/categories/CategoriesList";

//api cours 
const API_URL = "http://127.0.0.1/lms_react/api/cours/";

//api categories 
const API_categories = "http://127.0.0.1/lms_react/api/categories/";

function App() {

  //******************Début des fonctions pour les cours***************** */  

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

    //******************Fin des fonctions pour les cours***************** */  

      //******************Début des fonctions pour les catégories ***************** */  


    const [categories, setCategories] = useState([]);
    const [editCategories, setEditCategories] = useState(null);
  
    const fetchCategories = async () => {
      const res = await axios.get(API_categories + "get.php");
      setCategories(res.data);
    };
  
    const CategoriesCreateOrUpdate = async (data) => {
      if (editCategories) {
        await axios.put(API_categories + "update.php", { ...data, id: editCategories.id });
      } else {
        await axios.post(API_categories + "create.php", data);
      }
      setEditCategories(null);
      fetchCategories();
    };
  
    const CategoriesDelete = async (id) => {
      await axios.delete(API_categories + "delete.php", { data: { id } });
      fetchCategories();
    };
  
    const CategoriesEdit = (categories) => {
      setEditCategories(categories);
    };
  
    useEffect(() => {
      fetchCategories();
    }, []);
  
    //******************Fin des fonctions pour les catégories ***************** */  

  return (
    <div style={{ padding: 40, maxWidth: 600, margin: "auto" }}>
      <h1>Listes des cours 📚</h1>
      <div style={{ marginBottom: 30 }}>
        <CoursForm onSubmit={handleCreateOrUpdate} cours={editCours} />
        <CoursList cours={cours} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <hr></hr>
      <h1>Listes des catégories </h1>
      <div style={{ marginBottom: 30 }}>
        <CategoriesForm onSubmit={CategoriesCreateOrUpdate} categories={editCategories} />
        <CategoriesList categories={categories} onEdit={CategoriesEdit} onDelete={CategoriesDelete} />
      </div>
    </div>
   

  );
}

export default App;