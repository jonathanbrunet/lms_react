<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
require_once '../config/database.php';

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->titre) && !empty($data->description)) {
    $sql = "INSERT INTO cours (titre, description) VALUES (?, ?)";
    $stmt = $pdo->prepare($sql);
    if ($stmt->execute([$data->titre, $data->description])) {
        echo json_encode(["message" => "Cours ajouté."]);
    } else {
        echo json_encode(["message" => "Erreur lors de l'ajout."]);
    }
} else {
    echo json_encode(["message" => "Données incomplètes."]);
}
?>
