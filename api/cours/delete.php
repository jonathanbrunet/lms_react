<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
require_once '../config/database.php';

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id)) {
    $sql = "DELETE FROM cours WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    if ($stmt->execute([$data->id])) {
        echo json_encode(["message" => "Cours supprimé"]);
    } else {
        echo json_encode(["message" => "Erreur lors de la suppression"]);
    }
} else {
    echo json_encode(["message" => "ID manquant"]);
}
?>
