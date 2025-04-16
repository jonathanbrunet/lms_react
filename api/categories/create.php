<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
require_once '../config/database.php';

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->nom)) {
    $sql = "INSERT INTO categories (nom) VALUES (?)";
    $stmt = $pdo->prepare($sql);
    if ($stmt->execute([$data->nom ])) {
        echo json_encode(["message" => "Catégorie ajouté."]);
    } else {
        echo json_encode(["message" => "Erreur lors de l'ajout."]);
    }
} else {
    echo json_encode(["message" => "Données incomplètes."]);
}
?>
