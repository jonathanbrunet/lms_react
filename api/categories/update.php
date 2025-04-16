<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
require_once '../config/database.php';

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id) && !empty($data->nom) ) {
    $sql = "UPDATE categories SET nom = ? WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    if ($stmt->execute([$data->nom, $data->id])) {
        echo json_encode(["message" => "Catégories mis à jour"]);
    } else {
        echo json_encode(["message" => "Erreur lors de la mise à jour"]);
    }
} else {
    echo json_encode(["message" => "Données incomplètes"]);
}
?>
