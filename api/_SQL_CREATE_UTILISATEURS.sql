CREATE TABLE utilisateurs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  mot_de_passe VARCHAR(255)
);

-- Exemple de création d’un utilisateur avec mot de passe chiffré :
-- INSERT INTO utilisateurs (nom, email, mot_de_passe)
-- VALUES ('Admin', 'admin@example.com', '<hashé avec password_hash()>');
