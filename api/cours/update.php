<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
require_once '../config/database.php';

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id) && !empty($data->titre) && !empty($data->description)) {
    $sql = "UPDATE cours SET titre = ?, description = ? WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    if ($stmt->execute([$data->titre, $data->description, $data->id])) {
        echo json_encode(["message" => "Cours mis à jour"]);
    } else {
        echo json_encode(["message" => "Erreur lors de la mise à jour"]);
    }
} else {
    echo json_encode(["message" => "Données incomplètes"]);
}
?>
