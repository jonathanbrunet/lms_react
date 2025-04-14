<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
require_once '../config/database.php';

$sql = "SELECT * FROM cours ORDER BY date_creation DESC";
$stmt = $pdo->query($sql);
$cours = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($cours);
?>
