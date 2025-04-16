<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
require_once '../config/database.php';

$id = $_GET['id'] ?? null;
if ($id) {
    $sql = "SELECT * FROM categories WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$id]);
    $categories = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($categories);
} else {
    echo json_encode(["message" => "ID manquant"]);
}
?>
